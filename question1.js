// var arr = [{ 1: 10 }, { 2: 30 }, { 3: 15 }, { 4: 15 }, { 5: 30 }, { 6: 0 }];
var arr = [{ Head: 35 }, { Tail: 65 }];

// We are sorting the array of objects depending upon the percentages of event occurance
var arr = arr.sort((a, b) => {
  return Object.values(a)[0] - Object.values(b)[0];
});

// Now we are creating a object which will look in like this
// obj = { Head: [0, 35], Tail: [35, 100] };
var obj = {};
var num = 0;
for (var i = 0; i < arr.length; i++) {
  var temp = [num];
  var x = Object.values(arr[i])[0];
  temp[1] = num + x;
  num = temp[1];
  var key = Object.keys(arr[i])[0];
  obj[key] = temp;
}

// Now we are taking a random number bewteen 0 to 100.
// We will then loop through our object created and check in the range where it is prenet, which will be our probability of occurance of event
var num = Math.random() * 100;
for (var i in obj) {
  if (num > obj[i][0] && num <= obj[i][1]) {
    var ans = i;
    break;
  }
}

//After trigrring the program 10 times . Head occuse aroung 3-4 times and tails occurs 6-7 times which roughly matches with the given probability.
console.log(ans);
