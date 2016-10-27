
for(var line = '#'; line.length < 8; += '#'){
  console.log(line)


//My FizzBuzz solution is quite different to the one
//in the exercise, but it's how I solved the same question
//in codeacademy so I think it's okay.

for(var counter = 1; counter < 101; counter ++){
  if(counter % 5 === 0 && counter % 3 === 0){
    console.log("FizzBuzz");
  }
  else{
    if(counter % 3 === 0){
      console.log("Fizz");
    }
    if(counter % 5 === 0){
      console.log("Buzz");
    }
    if(counter % 5 !== 0 && counter % 3 !== 0){
      console.log(counter)
    }
  }
}

//the third exercise was too difficult for me haha.
//I had no clue how to make it.
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
//After looking at the answer I can break down whats going on,
//but still it's confusing
