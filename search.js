// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the search button and search input field
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-bar');
  
  // Add an event listener for the search button
  searchButton.addEventListener('click', function() {
     // Get the search query entered by the user
     const query = searchInput.value.trim();
     
     // Check if the search input is not empty
     if (query !== '') {
        // Redirect the user to a specific URL based on the search query
        // Here, we'll use `https://www.youtube.com/results?search_query=<query>`
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
     }
  });

  // Optional: Allow pressing Enter to trigger the search as well
  searchInput.addEventListener('keypress', function(event) {
     if (event.key === 'Enter') {
        searchButton.click();
     }
  });
});
