const Ferry = require("./ferries.model");

const getAllFerries = async (req, res) => {
  try {
    const ferries = await Ferry.find({});
    res.json(ferries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addFerry = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const newFerry = new Ferry({ name, image, description });
    await newFerry.save();
    res.status(201).json(newFerry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeFerry = async (req, res) => {
    try {
      const name = req.params.name;
      await Ferry.findOneAndDelete({ name }); // Assuming 'name' is the field to match
      res.status(200).json({ message: `Ferry removed` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const removeAllFerries = async (req, res) => {
    try {
      await Ferry.deleteMany({});
      res.status(200).json({ message: "All ferries removed" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
module.exports = {
  getAllFerries,
  addFerry,
  removeFerry,
  removeAllFerries,
};
