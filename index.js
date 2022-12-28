let inputString = 'abcadeecfb';
let s = new Set();

for(let input of inputString) {
    s.add(input);
}

// console.log([...s].join(''));

let countAplhabet = new Map();
for(let input of inputString) {
    countAplhabet.set(input, 0);
}

for( let i = 0 ;i < inputString.length ;i++)
  {
    for(let i = 0; i<inputString.length - 1;i++) {
      
    }
  }

  var globalVar = "xyz";

        (function outerFunc(outerArg) {
            var outerVar = 'a';
            
            (function innerFunc(innerArg) {
            var innerVar = 'b';
            
            console.log(
                "outerArg = " + outerArg + "\n" +
                "innerArg = " + innerArg + "\n" +
                "outerVar = " + outerVar + "\n" +
                "innerVar = " + innerVar + "\n" +
                "globalVar = " + globalVar);
            
            })(456);
        })(123);