import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      minLength: [3, "Username should not be less than 3 characters"],
      maxLength: [30, "Username should not be greater than 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "This email has already been used"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
