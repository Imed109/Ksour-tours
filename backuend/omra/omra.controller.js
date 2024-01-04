const Omra = require("./omra.model");

const getAllOmra = async (req, res) => {
  try {
    const omra = await Omra.find({});
    res.json(omra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addOmra = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const newOmra = new Omra({ title, description, price, image });
    await newOmra.save();
    res.status(201).json(newOmra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeOmra = async (req, res) => {
  try {
    const title = req.params.title;
    await Omra.findOneAndDelete({ title }); // Assuming 'title' is the field to match
    res.status(200).json({ message: `Omra removed` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOmra,
  addOmra,
  removeOmra,
};
