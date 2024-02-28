// JavaScript for the discussion forum

// Toggle visibility of the header dropdown
document.querySelector('.header-dropdown-trigger').addEventListener('click', function() {
    const dropdown = document.querySelector('.header-dropdown');
    dropdown.classList.toggle('show');
});

// Handle posting comments
document.querySelectorAll('.comment-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        // Show the comment form or perform other actions
        console.log('Comment form opened');
    });
});

// You can add more event listeners and functionality as needed
// For example, handling likes, dislikes, and other interactions