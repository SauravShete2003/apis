import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    moblie : {
        type : Number,
        required : true
    },
    
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;