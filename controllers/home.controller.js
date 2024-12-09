const homeFunction = (req, res) => {
  res.send("hello from home controller");
};
const homeFunction2 = (req, res) => {
  res.send("hello from home controller function 2");
};

module.exports = { homeFunction, homeFunction2 };
