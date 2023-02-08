const Subscriber = require("../model/Subscriber");

exports.subscribeToNewsletter = async function (req, res) {
  const { email } = req.body;

  const userExists = await Subscriber.findOne({ email });

  if (userExists) {
    return res
      .status(403)
      .json("This email address has already been subscribed.");
  }

  const newUser = new Subscriber(req.body);

  newUser.save().catch((err) => console.log(err));

  return res.status(201).send("You have been subscribed.");
};
