const { getAll, getById, updateById, deleteById, register, login } = require('./admin.services');

const getAllAdmins = async (req, res) => {
    try {
        const allAdmins = await getAll();
        res.json(allAdmins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        console.log('req.params.id',req.params.id);
        const admin = await getById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAdminById = async (req, res) => {
    try {
        const updatedAdmin = await updateById(req.params.id, req.body);
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAdminById = async (req, res) => {
    try {
        const deletedAdmin = await deleteById(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(deletedAdmin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const adminRegister = async (req, res) => {
    try {
        const { admin, token } = await register(req.body);
        res.json({ admin, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { admin, token } = await login(email, password);
        res.json({ admin, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = {
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
    adminRegister,
    adminLogin
};
