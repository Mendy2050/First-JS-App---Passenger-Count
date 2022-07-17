// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment() {
    // Change this to use the plus equal technique you've learned
    // count = count + 1
    count += 1
    countEl.textContent = count
}




function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
        // saveEl.innerText = saveEl.innerText + countStr
    saveEl.textContent += countStr

    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    // console.log(count)
    countEl.textContent = 0
    coun
    count = 0
}