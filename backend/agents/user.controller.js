const {getAll, getById,updateById, deleteById, register,login,}
 = require('./user.service'); 


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await getAll();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};



const getUserById = async (req, res) => {
    try {
        const User = await getById(req.params.id);
        if (!User) {
            return res.status(404)
            .json({ message: 'User not found' });
        }
        res.json(User);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};


const updateUserById = async (req, res) => {
    try {
        const updatedUser = await updateById(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};

    
const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await deleteById(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};


    const userRegister = async (req, res) => {
        try {
          const { user, token } = await register(req.body);
          res.json({ user, token });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      
      const userLogin = async (req, res) => {
        try {
          const { email, password } = req.body;
          const { user, token } = await login(email, password);
          res.json({ user, token });
        } catch (error) {
          res.status(401).json({ error: error.message });
        }
      };

module.exports = { getAllUsers,getUserById
             ,updateUserById,deleteUserById,userRegister,userLogin
};
