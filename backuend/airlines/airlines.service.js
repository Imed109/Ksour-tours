const Airline = require("./airlines.model");

const getAll = async () => {
  try {
    const airlines = await Airline.find({});
    return airlines;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getById = async (id) => {
  try {
    const airline = await Airline.findById(id);
    return airline;
  } catch (error) {
    throw new Error(error.message);
  }
};

const add = async (name, image) => {
  try {
    const newAirline = new Airline({ name, image });
    await newAirline.save();
    return newAirline;
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeByName = async (companyName) => {
  try {
    await Airline.findOneAndDelete({ name: companyName });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  removeByName,
  // Other service methods as needed
};
