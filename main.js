// Initialize the count as 0
// Listen for clicks on the increment GamepadButton
// Increment the count variable when the button is clicked (log it out)
// Change the count-el in the HTML to reflect the new count

function increment(){
    console.log("the button was clicked")
    count = parseInt(document.getElementById('count').innerHTML, 10);
    count = count + 1
    document.getElementById('count').innerHTML = count
}
