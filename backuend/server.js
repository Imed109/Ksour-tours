require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import the cors module
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3000; // Set a default port if PORT is not defined in .env

app.use(cookieParser());
app.use(cors()); // Use cors middleware

const userRoutes = require('./users/user.routes');
const formulaireRoutes = require ('./formulaires/formulaire.routes')
const airlineRoutes = require ('./airlines/airlines.routes')
const omraRoutes = require ('./omra/omra.routes')
const ferriesRoutes = require("./ferries/ferries.routes");
const hotelsRoutes = require("./hotels/hotels.routes");
const adminRoutes = require ('./admin/admin.routes')


app.use(express.json());
app.use('/user', userRoutes);
app.use('/formulaire', formulaireRoutes);
app.use('/airline',airlineRoutes);
app.use('/omra',omraRoutes);
app.use("/ferries", ferriesRoutes);
app.use("/hotels", hotelsRoutes);
app.use('/admin',adminRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
