const Airline = require("./airlines.model");

const getAllAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find({});
    res.json(airlines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAirlineById = async (req, res) => {
  try {
    const airlineId = req.params.id;
    const airline = await Airline.findById(airlineId);
    if (!airline) {
      return res.status(404).json({ message: 'Airline not found' });
    }
    res.json(airline);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addAirline = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newAirline = new Airline({ name, image });
    await newAirline.save();
    res.status(201).json(newAirline);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeAirline = async (req, res) => {
    try {
      const companyName = req.params.companyName;
      await Airline.findOneAndDelete({ name: companyName }); // Assuming 'name' is the field to match
      res.status(200).json({ message: `Airline removed` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Other controller methods for updating airlines, modifying data, etc.

module.exports = {
  getAllAirlines,
  getAirlineById,
  addAirline,
  removeAirline,
  // Other exported controller methods
};
