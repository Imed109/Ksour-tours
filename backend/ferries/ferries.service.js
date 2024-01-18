const Ferry = require("./ferries.model");

const getAll = async () => {
  try {
    const ferries = await Ferry.find({});
    return ferries;
  } catch (error) {
    throw new Error(error.message);
  }
};

const add = async (name, image, description) => {
  try {
    const newFerry = new Ferry({ name, image, description });
    await newFerry.save();
    return newFerry;
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeByName = async (name) => {
    try {
      await Ferry.findOneAndDelete({ name });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const removeAll = async () => {
    try {
      await Ferry.deleteMany({});
      console.log("All ferries removed successfully.");
    } catch (error) {
      throw new Error(error.message);
    }
  };

module.exports = {
  getAll,
  add,
  removeByName,
  removeAll,
};
