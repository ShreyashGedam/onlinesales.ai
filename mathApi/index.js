const { default: axios } = require("axios");

// We are having the string of operations as the input in the input array and "end" string which lets us know to end of the string as stated in the problem statement.
const input = [
  "2 * 4 * 4",
  "5 / (7 - 5)",
  "sqrt(5^2 - 4^2)",
  "sqrt(-3^2 - 4^2)",
  "end",
];

// We are looping through the input array till we encounter "end" and pushing in the exp array
var exp = [];
var i = 0;
while (input[i] !== "end") {
  exp.push(input[i++]);
}

// We will be using "api.mathjs.org" for our mathematical operation. 
// Converting it to required formata as stated in the math.org documentaion
const expression = {
  expr: exp,
  precision: 2,
};

// Making the axios post request to get the calculated result
const data = axios.post("http://api.mathjs.org/v4/", expression);
data
  .then((res) => {
    console.log(res.data.result);
  })
  .catch((err) => {
    console.log(err);
  });
