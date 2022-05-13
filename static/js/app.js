var arr = [
    ["answer 1", "number 1"], 
    ["answer 2", "number 2"],
    ["answer 3", "number 2"],
    ["answer 4", "number 2"],
    ["answer 5", "number 2"],
    ["answer 6", "number 2"],
    ["answer 7", "number 2"],
    ["answer 8", "number 2"],
    ["answer 9", "number 2"],
    ["answer 10", "number 2"],
]

let answers = document.querySelector('#user-answers')

answers.addEventListener('submit', function(e) {
    e.preventDefault();
    for (let index = 0; index < arr.length; index++) {
        var a = (e.target.userInput[index].value)
        console.log(a)
        if (a == arr[index][1]) {
            console.log('correct');
        }
        else {
            console.log('incorrect')
        }
        
    }
})
