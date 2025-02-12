const clickBtn = document.getElementById("clickBtn");
const btnCount = document.getElementById("btnCount");
const resetBtn = document.getElementById("resetBtn");

// Event listeners //
clickBtn.addEventListener( "click" , clickCounter )
resetBtn.addEventListener( "click" , resetClickCount )

// Variables //
let clickCount = 0


// Functions //

// The clickCounter() function increments our clickCount variable by 1, 
// then calls our updateClickCount() function.
function clickCounter() {
    clickCount++
    updateClickCount()
}

// The resetClickCount() function sets our clickCount variable to 0,
// then calls our updateClickCount() function. 
function resetClickCount() {
    clickCount = 0
    updateClickCount()
}

// The updateClickCount() function sets our HTML element's text
// to the same value as our clickCount variable.
function updateClickCount() {
    btnCount.innerHTML = clickCount
}
