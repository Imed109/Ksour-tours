const User = require('./user.model'); 

const getAll = async () => {         // Get all Users
    try {
        const Users = await User.find({});
        return Users;
    } catch (error) {
        throw error;
    }
};
const getById = async (id) => {  // Get User
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
};
const updateById = async (id, newData) => {   // Update User by ID
    try {
        const updatedUser = 
        await User.findByIdAndUpdate(id, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw error;
    }
};
const deleteById = async (id) => {  // Delete User by ID
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    } catch (error) {
        throw error;
    }
};


const register = async (data) => {
    try {
      const newUser = new User(data);
      const savedUser = await newUser.save();
      const token = savedUser.generateToken();
      return { user: savedUser, token };
    } catch (error) {
      throw error;
    }
  };
  
  const login = async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid email");
      }  
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const token = user.generateToken();
      return { user, token };
    } catch (error) {
      throw error;
    }
  };
module.exports = {
    register,login,
    getAll,
    getById,
    updateById,
    deleteById
};
