const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://nikhilamethi1234:abcdefg@gofood.3rexl3o.mongodb.net/fooodc?retryWrites=true&w=majority';

module.exports = async function () {
  try {
    const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    
    if (!connection) {
      throw new Error('MongoDB connection not established.');
    }

    const db = connection.connection.db; // Access the database instance

    const foodCollection = db.collection('sample');
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = db.collection('foodcategary');
    const Catdata = await categoryCollection.find({}).toArray();

    return { data, Catdata };
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // Rethrow the error for handling at a higher level if needed.
  }
};
