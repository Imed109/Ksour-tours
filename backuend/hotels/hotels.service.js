const Hotel = require("./hotels.model");

const getAll = async () => {
  try {
    const hotels = await Hotel.find({});
    return hotels;
  } catch (error) {
    throw new Error(error.message);
  }
};

const add = async (name, image, description,prix,localisation) => {
  try {
    const newHotel = new Hotel({ name, image, description,prix,localisation });
    await newHotel.save();
    return newHotel;
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeByName = async (name) => {
  try {
    await Hotel.findOneAndDelete({ name });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAll,
  add,
  removeByName,
};
