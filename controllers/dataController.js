let jsonData = {}; // This will act as our simple in-memory database

exports.getHome = (req, res) => {
  res.send("Hello World!");
};

exports.getData = (req, res) => {
  // Send the entire jsonData object as a response
  res.json(jsonData);
};

exports.postData = (req, res) => {
  const postData = req.body;

  // Update the jsonData object with the data received from the POST request
  jsonData = { ...jsonData, ...postData };

  // Send a response indicating success
  res.json({
    message: "Data received and stored successfully!",
    storedData: jsonData,
  });
};
