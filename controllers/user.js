import User from "../models/User.js";

const getSignup = async (req, res) => {
  const { name, email, city, password, moblie } = req.body;
  const user = new User({
    name,
    email,
    password,
    moblie,
    city,
  });
  try {
    const savedUser = await user.save();
    res.json({
      message: "User created successfully",
      user: savedUser,
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Error creating user",
      error: err.message,
      success: false,
    });
  }
};

const getlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
      password,
    });
    if (!user) {
      res.status(404).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    res.json({
      message: "User logged in successfully",
      user: user,
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Error logging in user",
      error: err.message,
      success: false,
    });
  }
};
const putUser = async (req, res) => {
  const { name, email, city, moblie } = req.body;
  const { id } = req.params;
  try {
    const user = await User.updateOne(
      { _id: id },
      {
        $set: {
          name,
          email,
          moblie,
          city,
        },
      }
    );
    if (!user) {
      res.status(404).json({
        message: "User not found",
        success: true,
      });
    }
    res.json({
      messagen: "User update successfully",
      user: user,
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Error updating user",
      error: err.message,
    });
  }
};

const getUser = async (req, res) => {
  const user = await User.find();
  res.json({
    message: "User found",
    user: user,
    success: true,
  });
};

const deleteUser = async (req , res)=>{
  const {id} = req.params
  const user = await User.deleteOne({_id : id})
  try{
  if(!user){
    res.status(404).json({
      message: "User not found",
      success: false,
      });
    }
    res.json({
      message: "User deleted successfully",
      success: true,
      data : null
    })
  } catch(err){
    res.json({
      message : err.message
    })
  }
}

export { getSignup, getlogin, putUser , getUser , deleteUser};
