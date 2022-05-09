const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    uUsername: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    uEmail: {
        type: String,
        required: [true, "Please add an email"],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
        unique: true,
      },
    uPassword: {
        type: String,
        minlength: [8, "Password should be 8 character long"],
        required: [true, "Please add a password"],
        select: false,
      },
    uRrole: {
        type: String,
        default: "user",
      },
  },
  { timestamps: true }
);
module.exports=user = mongoose.model("user", UserSchema);
