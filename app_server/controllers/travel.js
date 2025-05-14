const fs = require('fs');
const path = require('path');

exports.travel = (req, res) => {
  const filePath = path.join(__dirname, '../data/trips.json');
  console.log('Reading trips.json from:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading trips.json:', err);
      return res.status(500).send('Error reading trip data.');
    }

    try {
      const trips = JSON.parse(data);
      res.render('travel', { trips });
    } catch (parseError) {
      console.error('Error parsing trips.json:', parseError);
      res.status(500).send('Error parsing trip data.');
    }
  });
};

exports.index = (req, res) => {

  res.render('index',{});

};