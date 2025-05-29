/**
 * 2-4-6 Problem - JavaScript Implementation
 * Validates ascending order of three numbers and displays the result
 */

/**
 * Validates the three input numbers
 */
function validateNumbers() {
    // Get input values
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);
    
    // Check if input values are valid
    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        displayResult('すべての欄に数値を入力してください', 'failure');
        return;
    }
    
    // validation: value1 < value2 < value3
    const isValid = value1 < value2 && value2 < value3;
    
    // Create message
    let message;
    let messageClass;
    
    if (isValid) {
        message = `${value1}, ${value2}, ${value3} はルールを満たす`;
        messageClass = 'success';
    } else {
        message = `${value1}, ${value2}, ${value3} はルールを満たさない`;
        messageClass = 'failure';
    }
    
    // Display the result
    displayResult(message, messageClass);
}

/**
 * Displays a result message on the screen
 * @param {string} message - Message to display
 * @param {string} className - CSS class name (success/failure)
 */
function displayResult(message, className) {
    const resultsDiv = document.getElementById('results');
    
    // Remove explanation text on first execution
    if (resultsDiv.children.length === 1 && resultsDiv.children[0].tagName === 'P') {
        resultsDiv.innerHTML = '';
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `result-message ${className}`;
    messageDiv.textContent = message;
    
    // Add to results area
    resultsDiv.appendChild(messageDiv);
    
    // Scroll to bottom of results area
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
}

/**
 * Initialization process
 * Executed after page loading is complete
 */
function initialize() {
    // Enable execution with Enter key
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            validateNumbers();
        }
    });
    
    // Handle input field focus
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.select(); // Select all input text
        });
    });
}

// Execute initialization process after page loading is complete
document.addEventListener('DOMContentLoaded', initialize);

// Prevent right-click context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Prevent developer tools shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
        e.preventDefault();
        return false;
    }
});
