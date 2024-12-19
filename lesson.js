// document.getElementById("count").innerHTML='asdasd';

let count = 0

console.log(count)

// console.log(myAge)

myAge = 22

console.log(myAge)

let math = 5 + 7

// 5*7
// 5/7
// 5-7

console.log(math)

let firstBatch = 5
let secondBatch = 12
let total = firstBatch + secondBatch

console.log(total)

humanDogRatio = 7

myDogAge = myAge * humanDogRatio

console.log(myDogAge)

count = 3

count = 1

console.log(count)

// count + 1

count = count + 1
console.log(count)
count = count + 2
console.log(count)
count = count - 5
console.log(count)
count = count * 10
console.log(count)

bonusPoints = 50

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)

function countDown(){
    console.log(5,"🏎️")
    console.log(4,"🏎️")
    console.log(3,"🏎️")
    console.log(2,"🏎️")
    console.log(1,"🏎️")
}

// Setting up the race 🏎️🏎️🏎️
countDown()
// console.log(5,"🏎️")
// console.log(4,"🏎️")
// console.log(3,"🏎️")
// console.log(2,"🏎️")
// console.log(1,"🏎️")

// GO! 🏁

// Players are running the race
// Race is finished

// Get ready for a rew race
countDown()
// console.log(5,"🏎️")
// console.log(4,"🏎️")
// console.log(3,"🏎️")
// console.log(2,"🏎️")
// console.log(1,"🏎️")

function iLog42(){
    console.log(42)
}

iLog42()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime(){
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}
// Blocked Scope // console.log(totalTime)

logLapTime()

function logLapTime2(){
    console.log(lap1 + lap2 + lap3)
}

logLapTime2()

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLapsCompleted(x){
    for(i=1;i<=3;i++){
        x++
    }
    return x; 
}
lapsCompleted = incrementLapsCompleted(lapsCompleted)
console.log(lapsCompleted)

lapsCompleted = 0

function IncrementLap(){
    lapsCompleted = lapsCompleted + 1
}

IncrementLap()
IncrementLap()
IncrementLap()

console.log(lapsCompleted)

function increment(){
    console.log("the button was clicked")
    count = parseInt(document.getElementById('count').innerHTML, 10);
    count = count + 1
    document.getElementById('count').innerHTML = count
}

let countT = 0

function Iincrement(){
    console.log("Button Clicked")
    countT += 1
    console.log(count)
}

// let countEl = document.getElementById("count")

// console.log(countEl)

let countEl = document.getElementById("count") // Pass in arguments otherwise the function will just keep running in the wild like a chef without ingredients to cook

console.log(countEl) // Pass in arguments otherwise the function will just keep running in the wild like a chef without ingredients to cook

// let count = 0

function increment() {
    count = count + 1
    countEl.innerHTML = count
}

{/* 
<div id="example">
    <p>Hello <strong>World</strong></p>
</div>

<script>
    // innerHTML includes HTML tags
    console.log(document.getElementById('example').innerHTML); 
    // Output: <p>Hello <strong>World</strong></p>

    // innerText gets only the text, ignoring the tags
    console.log(document.getElementById('example').innerText); 
    // Output: Hello World
</script> 
*/}


function save(){
    console.log('Save was clicked')
    console.log(count)
}

save()

// let username = "Vijay"
// console.log(username)

// let message = "You have three new notifications"
// console.log(message)

// console.log(message + "" + username)

let username = "Vijay"
console.log(username)

let message = "You have three new notifications"
console.log(message)

console.log(message + ", " + username + '!')

messageToUser = message + ", " + username + '!'

console.log("Hi from messageToUser", messageToUser)

name = 'Vijay'
greeting = 'Vanakam, En peru '

myGreeting = greeting + name

console.log(myGreeting)

let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints
console.log(totalPoints)

console.log(4 + 5);
console.log('4' + '5');
console.log('4' + 5);
console.log(4 + '5');

welcomeEl = document.getElementById("welcome-el");
let name = 'Vijay';
let greeting = 'Welcome back lil bro ' ;
welcomeEl.innerText = greeting + name;

welcomeEl.innerText = welcomeEl.innerText + '👋'

welcomeEl.innerText += '👋'