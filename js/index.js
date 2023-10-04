// DOM elements and variables
var cardContainer = $("#card-container"); // Card container element
var searchResult = []; // Array to store search results

// API URL for fetching superhero data
const ApiUrl = "https://www.superheroapi.com/api.php/891370368026086"; 

// Function to update the card container with superhero details
function updateCardContainer(name) {
    cardContainer.html(""); // Clear the card container
    searchResult = []; // Clear the search result array

    // Fetch superhero data from the API based on the provided name
    $.get(`${ApiUrl}/search/${name}`, function (data) {
        let searchResult = data.results; // Store search results in the local variable

        // Loop through each superhero in the search results
        for (let course of searchResult) {
            // Append superhero details as cards to the card container
            cardContainer.append(`
                <div class="card">
                    <div class="card-details">
                        <div><img src="${course.image.url}" alt="${course.name}"></div>
                        <div><a href="details.html?id=${course.id}">${course.name}</a></div>
                        <button onclick="addToFav(${course.id})">Add to Favorites</button>
                    </div>
                </div>
            `);
        }
    });
}

// Listen for input changes in the search bar
$("#searchbar").on("input", function () {
    var name = $(this).val(); // Get the value of the search bar
    updateCardContainer(name); // Update the card container with new search results
});

// Initial update when the page loads (you may want to customize this)
updateCardContainer("");
