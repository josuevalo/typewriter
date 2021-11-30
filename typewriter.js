//const sentence = "hello there from lighthouse labs";
const typewriter = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
    delay = delay + 50;
  }
 
    setTimeout(() => {
      console.log("");
    },delay)

};

typewriter("hello there from lighthouse labs");

// print the char here
