const {
    getAll,
    getById,
    updateById,
    deleteById,
    create, // New function for creating a new formulaire
  } = require('./formulaire.service');
  
  const getAllFormulaires = async (req, res) => {
    try {
      const allFormulaires = await getAll();
      res.json(allFormulaires);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getFormulaireById = async (req, res) => {
    try {
      const formulaire = await getById(req.params.id);
      if (!formulaire) {
        return res.status(404).json({ message: 'Formulaire not found' });
      }
      res.json(formulaire);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createFormulaire = async (req, res) => {
    try {
      const newFormulaire = await create(req.body);
      res.status(201).json(newFormulaire);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateFormulaireById = async (req, res) => {
    try {
      const updatedFormulaire = await updateById(req.params.id, req.body);
      if (!updatedFormulaire) {
        return res.status(404).json({ message: 'Formulaire not found' });
      }
      res.json(updatedFormulaire);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteFormulaireById = async (req, res) => {
    try {
      const deletedFormulaire = await deleteById(req.params.id);
      if (!deletedFormulaire) {
        return res.status(404).json({ message: 'Formulaire not found' });
      }
      res.json(deletedFormulaire);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllFormulaires,
    getFormulaireById,
    createFormulaire,
    updateFormulaireById,
    deleteFormulaireById,
  };
  