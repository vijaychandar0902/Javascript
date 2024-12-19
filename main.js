// Initialize the count as 0
// Listen for clicks on the increment GamepadButton
// Increment the count variable when the button is clicked (log it out)
// Change the count-el in the HTML to reflect the new count

let count = 0

function increment(){
    count = count + 1
    countEl = document.getElementById('count')
    countEl.innerHTML= count    
}

// Create a function, save() which logs out the count when it's called

