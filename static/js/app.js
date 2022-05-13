var arr = [
    ["answer 1", "Melissa Viviane Jefferson"], 
    ["answer 2", "Nimrod"],
    ["answer 3", "Keith Moon"],
    ["answer 4", "Freddy Mercury"],
    ["answer 5", "1750"],
    ["answer 6", "Mr. Morale & The Big Steppers"],
    ["answer 7", "Jon Batiste"],
    ["answer 8", "Daft Punk"],
    ["answer 9", "Dolly Parton"],
    ["answer 10", "Diana Ross"],
]

let answers = document.querySelector('#user-answers')

answers.addEventListener('submit', function(e) {
    e.preventDefault();
    for (let index = 0; index < arr.length; index++) {
        var a = (e.target.userInput[index].value)
        console.log(a)
        if (a == arr[index][1]) {
            console.log('correct');
            e.target.userInput[index].style.backgroundColor = "lightgreen";
        }
        else {
            console.log('incorrect')
            e.target.userInput[index].style.backgroundColor = "lightpink";
        }
    }
    
})
