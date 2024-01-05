const hotelsService = require("./hotels.service");

const getAllHotels = async (req, res) => {
  try {
    const hotels = await hotelsService.getAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addHotel = async (req, res) => {
  const { name, image, description,prix, localisation } = req.body;
  try {
    const newHotel = await hotelsService.add(name, image, description, prix ,localisation);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeHotelByName = async (req, res) => {
  const name = req.params.name;
  try {
    await hotelsService.removeByName(name);
    res.status(200).json({ message: `Hotel '${name}' removed` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHotels,
  addHotel,
  removeHotelByName,
};
