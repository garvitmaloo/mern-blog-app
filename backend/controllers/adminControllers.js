const path = require("path");
const stream = require("stream");
const { google } = require("googleapis");
const bcrypt = require("bcryptjs");

const Post = require("../model/Posts");
const Admin = require("../model/Admin");

const KEYFILEPATH = path.join(__dirname + "/../credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

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

    res.status(200).json("Logged in as admin");
  } catch (err) {
    return res.status(404).json("Could not authenticate at the moment");
  }
};

exports.postNewBlog = async function (req, res) {
  const { body, file } = req;
  const { postTitle, postBrief, postDetails, postCategory, readTime } = body;

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

    await newPost.save();

    return res.status(201).json("New blog post created.");
  } catch (err) {
    return res.status(404).json("Could not create post. Something went wrong");
  }
};

exports.editBlog = function (req, res) {
  console.log(req.body);
  res.status(202).json("Patch request for updating blog post");
};

exports.deleteBlog = async function (req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(410).json("Blog post deleted successfully");
  } catch (err) {
    res.status(404).json("Could not connect to the database at the moment");
  }
};

exports.postChangePassword = function (req, res) {
  res.status(200).json("Password change link sent to your email.");
};
