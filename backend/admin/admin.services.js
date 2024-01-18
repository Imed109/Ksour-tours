const Admin = require('./admin.model'); 

const getAll = async () => {         // Get all Admins
    try {
        const admins = await Admin.find({});
        return admins;
    } catch (error) {
        throw error;
    }
};

const getById = async (id) => {  // Get Admin
    try {
        console.log('hhhhhhhhhhhhhhhhhh',req.params.id);
        const admin = await Admin.findById(id);
        return admin;
    } catch (error) {
        throw error;
    }
};

const updateById = async (id, newData) => {   // Update Admin by ID
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, newData, { new: true });
        return updatedAdmin;
    } catch (error) {
        throw error;
    }
};

const deleteById = async (id) => {  // Delete Admin by ID
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        return deletedAdmin;
    } catch (error) {
        throw error;
    }
};

const register = async (data) => {
    try {
        const newAdmin = new Admin(data);
        const savedAdmin = await newAdmin.save();
        const token = savedAdmin.generateToken();
        return { admin: savedAdmin, token };
    } catch (error) {
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            throw new Error("Invalid email");
        }  
        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        const token = admin.generateToken();
        return { admin, token };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    register,
    login,
    getAll,
    getById,
    updateById,
    deleteById
};
