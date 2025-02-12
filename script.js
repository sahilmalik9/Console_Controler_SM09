// Function to change the background color of the page
function changeBackgroundColor() {
    var color = document.getElementById('bg-color').value;
    document.body.style.backgroundColor = color;
}

// Function to change the text size dynamically
function changeTextSize() {
    var textSize = document.getElementById('text-size').value;
    document.body.style.fontSize = textSize + "px";
    document.getElementById('text-size-value').textContent = textSize + "px";
}

// Function to change the font family
function changeFontFamily() {
    var fontFamily = document.getElementById('font-family').value;
    document.body.style.fontFamily = fontFamily;
}

// Function to reset all settings to default values
function resetPage() {
    document.getElementById('bg-color').value = "#ffffff"; // Default background color
    document.getElementById('text-size').value = 16; // Default text size
    document.getElementById('text-size-value').textContent = "16px"; // Reset text size value
    document.getElementById('font-family').value = "Arial, sans-serif"; // Default font family
    document.body.style.backgroundColor = "#ffffff"; // Reset background color
    document.body.style.fontSize = "16px"; // Reset font size
    document.body.style.fontFamily = "Arial, sans-serif"; // Reset font family
}

// Function to toggle between Light Mode and Dark Mode
function toggleTheme() {
    var body = document.body;
    var container = document.querySelector('.container');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        container.classList.remove('light-mode');
        body.classList.add('dark-mode');
        container.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        container.classList.remove('dark-mode');
        body.classList.add('light-mode');
        container.classList.add('light-mode');
    }
}

// Set default to Light Mode on page load
document.body.classList.add('light-mode');
document.querySelector('.container').classList.add('light-mode');