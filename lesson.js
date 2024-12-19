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