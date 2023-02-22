const path = require("path");
const stream = require("stream");
const { google } = require("googleapis");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendGridMail = require("@sendgrid/mail");
const crypto = require("crypto");
const dotenv = require("dotenv");

const Post = require("../model/Posts");
const Admin = require("../model/Admin");
const Subscriber = require("../model/Subscriber");

dotenv.config();

const KEYFILEPATH = path.join(__dirname + "/../credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

sendGridMail.setApiKey(process.env.SENDGRID_KEY);

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const uploadFile = async function (fileObject) {
  try {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);

    const { data } = await google.drive({ auth, version: "v3" }).files.create({
      media: {
        mimeType: fileObject.mimeType,
        body: bufferStream,
      },
      requestBody: {
        parents: ["1pH5D4CiP8nnCv92RQbSPQNeQtjqM8Seq"],
        name: fileObject.originalname.split(".")[0],
      },
      fields: "name, id, mimeType",
    });

    const imageURL = `https://drive.google.com/uc?export=view&id=${data.id}`;

    return imageURL;
  } catch (err) {
    throw new Error({ message: "Image not found" });
  }
};

exports.postAdminLogin = async function (req, res) {
  const { email, password } = req.body;

  try {
    const reqUser = await Admin.findOne({ email });

    if (!reqUser) {
      return res.status(404).json("Incorrect admin email");
    }

    const passwordMatched = await bcrypt.compare(password, reqUser.password);

    if (!passwordMatched) {
      return res.status(403).json("Incorrect password");
    }

    const accessToken = jwt.sign(
      {
        isAdmin: reqUser.isAdmin,
        adminEmail: reqUser.email,
        adminName: reqUser.adminName,
      },
      process.env.JWT_KEY,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      accessToken,
      isAdmin: reqUser.isAdmin,
    });
  } catch (err) {
    return res.status(404).json("Could not authenticate at the moment");
  }
};

exports.postNewBlog = async function (req, res) {
  const { body, file } = req;
  const { postTitle, postBrief, postDetails, postCategory, readTime } =
    body.formData;

  try {
    const imageURL = await uploadFile(file);
    const newPost = new Post({
      postTitle,
      postBrief,
      postDetails,
      postCategory,
      readTime,
      postImageURL: imageURL,
    });

    const post = await newPost.save();

    const subscribers = (await Subscriber.find()).map(
      (subscriber) => subscriber.email
    );
    sendGridMail
      .send({
        to: subscribers,
        from: process.env.FROM_EMAIL,
        subject: "New Post Alert",
        html: `
        <p>Hello there</p>
        <p>A new post has just been published. Check it out <a href='http://localhost:3000/post/${post._id.toString()}'> here </a> </p>
      `,
      })
      .catch((err) => console.log(err));

    return res.status(201).json("New blog post created.");
  } catch (err) {
    return res.status(404).json("Could not create post. Something went wrong");
  }
};

exports.editBlog = async function (req, res) {
  const { body, file } = req;
  const { postTitle, postBrief, postDetails, postCategory, readTime } =
    body.formData;

  try {
    const reqPost = await Post.findById(req.params.id);
    const imageUrl = await uploadFile(file);

    reqPost.postTitle = postTitle;
    reqPost.postBrief = postBrief;
    reqPost.postDetails = postDetails;
    reqPost.postCategory = postCategory;
    reqPost.readTime = readTime;
    reqPost.postImageURL = imageUrl;

    await reqPost.save();

    res.status(202).json("Post has been updated!");
  } catch (err) {
    return res.status(404).json("Something wen wrong. Could not update post.");
  }
};

exports.deleteBlog = async function (req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(204).json("Blog post deleted successfully");
  } catch (err) {
    res.status(404).json("Could not connect to the database at the moment");
  }
};

exports.postChangePassword = async function (req, res) {
  const { email } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res
      .status(404)
      .json("Email entered does not match with the admin email");
  }

  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }

    const token = buffer.toString("hex");
    admin.passwordResetToken = token;
    admin.resetTokenExpiration = Date.now() + 36000000;

    const mail = {
      to: admin.email,
      from: process.env.FROM_EMAIL,
      subject: "Email for password change ",
      html: `
        <p>You requested for password change. </p>
        <p>Click on this <a href='http://localhost:3000/admin/reset-password?reset=${token}'> link </a> to reset password. </p>
      `,
    };

    admin
      .save()
      .then((result) => sendGridMail.send(mail))
      .catch((err) => console.log(err));
  });

  res.status(200).json("Password change link sent to your email.");
};

exports.postResetPassword = async function (req, res) {
  const admin = await Admin.findOne({ passwordResetToken: req.query.token });

  if (!admin) {
    return res.status(403).json("You are not allowed to change password");
  }

  // Check if the token is expired or not
  if (admin.resetTokenExpiration < Date.now()) {
    return res
      .status(403)
      .json("Token has expired. Retry setting new password");
  }

  const newHashedPassword = await bcrypt.hash(req.body.newPassword, 12);

  admin.password = newHashedPassword;

  await admin.save();

  res.status(200).send("Password updated");
};
