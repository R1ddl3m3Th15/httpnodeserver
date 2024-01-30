const express = require("express");
const app = express();
const port = 3000;
const dataRoutes = require("./routes/dataRoutes");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use(dataRoutes);

// Start the server using HTTP
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
