const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected");
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;

    console.log(JSON.stringify(connection.readyState));
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
