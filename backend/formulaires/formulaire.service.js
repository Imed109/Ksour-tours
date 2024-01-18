const Formulaire = require('./formulaire.model');

const getAll = async () => {
  try {
    const formulaires = await Formulaire.find({});
    return formulaires;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const formulaire = await Formulaire.findById(id);
    return formulaire;
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const newFormulaire = new Formulaire(data);
    const savedFormulaire = await newFormulaire.save();
    return savedFormulaire;
  } catch (error) {
    throw error;
  }
};

const updateById = async (id, newData) => {
  try {
    const updatedFormulaire = await Formulaire.findByIdAndUpdate(id, newData, { new: true });
    return updatedFormulaire;
  } catch (error) {
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const deletedFormulaire = await Formulaire.findByIdAndDelete(id);
    return deletedFormulaire;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};

