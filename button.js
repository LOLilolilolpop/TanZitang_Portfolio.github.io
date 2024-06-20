function showDescription(index) {
    var descriptions = document.querySelectorAll('.description');
    
    descriptions.forEach(function(description, i) {
        if (i === index - 1) {
            description.classList.add('active');
        } else {
            description.classList.remove('active');
        }
    });
}

// Initialize the first description to be visible by default
// showDescription(1);