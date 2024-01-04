const Omra = require("./omra.model");

const getAll = async () => {
  try {
    const omra = await Omra.find({});
    return omra;
  } catch (error) {
    throw new Error(error.message);
  }
};

const add = async (title, description, price, image) => {
  try {
    const newOmra = new Omra({ title, description, price, image });
    await newOmra.save();
    return newOmra;
  } catch (error) {
    throw new Error(error.message);
  }
};
const removeByTitle = async (title) => {
  try {
    await Omra.findOneAndDelete({ title });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAll,
  add,
  removeByTitle,
};
