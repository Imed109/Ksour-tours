const express = require('express');
const router = express.Router();
const formulaireController = require('./formulaire.controller');

// Routes for Formulaire
router.get('/', formulaireController.getAllFormulaires);
router.get('/:id', formulaireController.getFormulaireById);
router.post('/', formulaireController.createFormulaire);
router.put('/:id', formulaireController.updateFormulaireById);
router.delete('/:id', formulaireController.deleteFormulaireById);

module.exports = router;
