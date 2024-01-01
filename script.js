//Latest Meals
var imageArray1 = [
    { url: 'images/Latest Meals/1.jpg', content: 'Lam Pilaf(Plov)', link: 'page1.html' },
    { url: 'images/Latest Meals/2.jpg', content: 'Strawberries Romanoff', link: 'page2.html' },
    { url: 'images/Latest Meals/3.jpg', content: 'Potato Salad (Olivier Salad)', link: 'page3.html' },
    { url: 'images/Latest Meals/4.jpg', content: 'Blini Pancakes', link: 'page4.html' },
    { url: 'images/Latest Meals/5.jpg', content: 'Fish Soup (Ukha)', link: 'page5.html' },
    { url: 'images/Latest Meals/6.jpg', content: 'Beetroot Soup (Borscht)', link: 'page6.html' },
    { url: 'images/Latest Meals/7.jpg', content: 'Cabbage Soup (Shchi)', link: 'page7.html' },
    { url: 'images/Latest Meals/8.jpg', content: 'Bread omelette', link: 'page8.html' }
];

// Popular Ingredients
var imageArray2 = [
    { url: 'images/Popular Ingredients/img1.png', content: 'Chicken', link: 'page21.html' },
    { url: 'images/Popular Ingredients/img2.png', content: 'Salmon', link: 'page22.html' },
    { url: 'images/Popular Ingredients/img3.png', content: 'Beef', link: 'page23.html' },
    { url: 'images/Popular Ingredients/img4.png', content: 'Pork', link: 'page24.html' },
];

// Random Meal
var imageArray3 = [
    { url: 'images/Random Meals/img1.jpg', content: 'Vegan Lasagna', link: 'page31.html' },
    { url: 'images/Random Meals/img2.jpg', content: 'BBQ Pork Sloppy Joes', link: 'page32.html' },
    { url: 'images/Random Meals/img3.jpg', content: 'Tuna Nicoise', link: 'page33.html' },
    { url: 'images/Random Meals/img4.jpg', content: 'Rigatoni with fennel sausage sauce', link: 'page34.html' },
    { url: 'images/Random Meals/img5.jpg', content: 'Clam chowder', link: 'page35.html' },
    { url: 'images/Random Meals/img6.jpg', content: 'Fennel Dauphinoise', link: 'page36.html' },
    { url: 'images/Random Meals/img7.jpg', content: 'Eton Mess', link: 'page37.html' },
    { url: 'images/Random Meals/img8.jpg', content: 'Tunisian Orange Cake', link: 'page38.html' },
];

// Random Ingredients
var imageArray4 = [
    { url: 'images/Random Ingredients/img1.png', content: 'Fideo', link: 'page41.html' },
    { url: 'images/Random Ingredients/img2.png', content: 'Mint', link: 'page42.html' },
    { url: 'images/Random Ingredients/img3.png', content: 'Sea Salt', link: 'page43.html' },
    { url: 'images/Random Ingredients/img4.png', content: 'Lentils', link: 'page44.html' },
];

// Browse Country
var imageArray5 = [
    { url: 'images/Brower Country/img1.png',  link: 'page51.html' },
    { url: 'images/Brower Country/img2.png', link: 'page52.html' },
    { url: 'images/Brower Country/img3.png',link: 'page53.html' },
    { url: 'images/Brower Country/img4.png',link: 'page54.html' },
    { url: 'images/Brower Country/img5.png',  link: 'page55.html' },
    { url: 'images/Brower Country/img6.png', link: 'page56.html' },
    { url: 'images/Brower Country/img7.png',link: 'page57.html' },
    { url: 'images/Brower Country/img8.png',link: 'page58.html' },
    { url: 'images/Brower Country/img9.png',  link: 'page59.html' },
    { url: 'images/Brower Country/img10.png', link: 'page60.html' },
    { url: 'images/Brower Country/img11.png',link: 'page61.html' },
    { url: 'images/Brower Country/img12.png',link: 'page62.html' },
    { url: 'images/Brower Country/img13.png',  link: 'page63.html' },
    { url: 'images/Brower Country/img14.png', link: 'page64.html' },
    { url: 'images/Brower Country/img15.png',link: 'page65.html' },
    { url: 'images/Brower Country/img16.png',link: 'page66.html' },
    { url: 'images/Brower Country/img17.png',  link: 'page67.html' },
    { url: 'images/Brower Country/img18.png', link: 'page68.html' },
    { url: 'images/Brower Country/img19.png',link: 'page69.html' },
    { url: 'images/Brower Country/img20.png',link: 'page70.html' },
    { url: 'images/Brower Country/img21.png',  link: 'page71.html' },
    { url: 'images/Brower Country/img22.png', link: 'page72.html' },
    { url: 'images/Brower Country/img23.png',link: 'page73.html' },
    { url: 'images/Brower Country/img24.png',link: 'page74.html' },
    { url: 'images/Brower Country/img25.png',  link: 'page75.html' },
    { url: 'images/Brower Country/img26.png', link: 'page76.html' },
    { url: 'images/Brower Country/img27.png',link: 'page77.html' },
    { url: 'images/Brower Country/img28.png',link: 'page78.html' },
    { url: 'images/Brower Country/img29.png',  link: 'page79.html' },
    { url: 'images/Brower Country/img30.png', link: 'page80.html' },
    { url: 'images/Brower Country/img31.png',link: 'page81.html' },
    { url: 'images/Brower Country/img32.png',link: 'page82.html' },
    { url: 'images/Brower Country/img33.png',  link: 'page83.html' },

];







//todispaly images on Latest Meals
displayImage('imageContainer1', imageArray1);

//todispaly images on Popular Ingredients
displayImage('imageContainer2', imageArray2);

//todispaly images on Popular Ingredients
displayImage('imageContainer3', imageArray3);

//todispaly images on Random Ingredients
displayImage('imageContainer4', imageArray4);

//todispaly images on Browse Country
displayCountryImage('imageContainer5', imageArray5);

//todispaly images on Browse Country on portal
displayImage('imageContainer6', imageArray6);

// to display all images
function displayImage(imageContainer, imageArray) {
    var container = document.getElementById(imageContainer);

    // Function to handle mouse enter event
    function handleMouseEnter() {
        this.querySelector('.content small').style.color = '#905619';
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
        this.querySelector('.content small').style.color = '#6d3414';
    }

    // Loop through the imageArray and create HTML elements
    for (var i = 0; i < imageArray.length; i++) {
        var colDiv = document.createElement('div');
        colDiv.className = 'col';

        // Create an anchor element
        var link = document.createElement('a');
        link.href = imageArray[i].link; // Set the link URL

        // Set styles for the anchor element to remove underline
        link.style.textDecoration = 'none';

        // Create an image element
        var img = document.createElement('img');
        img.src = imageArray[i].url;
        img.width = 250.98;
        img.height = 250.98;
        img.alt = '';

        // Append the image to the link
        link.appendChild(img);

        // Create a div for the small element (content) and append it to the link
        var contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        // Create a small element for the content text
        var small = document.createElement('small');
        small.textContent = imageArray[i].content;

        // Set the initial text color for the small element
        small.style.color = '#905619';

        // Append the small element to the content div
        contentDiv.appendChild(small);
        link.appendChild(contentDiv);

        // Add event listeners for mouse enter and leave
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);

        // Append the link to the colDiv
        colDiv.appendChild(link);

        // Append the colDiv to the container
        container.appendChild(colDiv);
    }
}


// to display all images
function displayCountryImage(imageContainer, imageArray) {
    var container = document.getElementById(imageContainer);

    // Function to handle mouse enter event
    function handleMouseEnter() {
        this.querySelector('.content small').style.color = '#905619';
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
        this.querySelector('.content small').style.color = '#6d3414';
    }

    // Loop through the imageArray and create HTML elements
    for (var i = 0; i < imageArray.length; i++) {
        var colDiv = document.createElement('div');
        colDiv.className = 'col';

        // Create an anchor element
        var link = document.createElement('a');
        link.href = imageArray[i].link; // Set the link URL

        // Set styles for the anchor element to remove underline
        link.style.textDecoration = 'none';

        // Create an image element
        var img = document.createElement('img');
        img.src = imageArray[i].url;
        img.width = 40;
        img.height = 40;
        img.alt = '';

        // Append the image to the link
        link.appendChild(img);

        // Create a div for the small element (content) and append it to the link
        var contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        // Create a small element for the content text
        var small = document.createElement('small');
        small.textContent = imageArray[i].content;

        // Set the initial text color for the small element
        small.style.color = '#905619';

        // Append the small element to the content div
        contentDiv.appendChild(small);
        link.appendChild(contentDiv);

        // Add event listeners for mouse enter and leave
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);

        // Append the link to the colDiv
        colDiv.appendChild(link);

        // Append the colDiv to the container
        container.appendChild(colDiv);
    }
}


//to display ABCD..........
    var linksArray = [
        { letter: 'A /', link: 'common.html' },
        { letter: 'B /', link: 'common.html' },
        { letter: 'C /', link: 'common.html' },
        { letter: 'D /', link: 'common.html' },
        { letter: 'E /', link: 'common.html' },
        { letter: 'F /', link: 'common.html' },
        { letter: 'G /', link: 'common.html' },
        { letter: 'H /', link: 'common.html' },
        { letter: 'I /', link: 'common.html' },
        { letter: 'J /', link: 'common.html' },
        { letter: 'K /', link: 'common.html' },
        { letter: 'L /', link: 'common.html' },
        { letter: 'M /', link: 'common.html' },
        { letter: 'N /', link: 'common.html' },
        { letter: 'O /', link: 'common.html' },
        { letter: 'P /', link: 'common.html' },
        { letter: 'Q /', link: 'common.html' },
        { letter: 'R /', link: 'common.html' },
        { letter: 'S /', link: 'common.html' },
        { letter: 'T /', link: 'common.html' },
        { letter: 'U /', link: 'common.html' },
        { letter: 'V /', link: 'common.html' },
        { letter: 'W /', link: 'common.html' },
        { letter: 'X /', link: 'common.html' },
        { letter: 'Y /', link: 'common.html' },
        { letter: 'Z /', link: 'common.html' },
    ];

    document.addEventListener('DOMContentLoaded', function () {
        var linksArray = [
            { letter: 'A /', link: 'common.html' },
            { letter: 'B /', link: 'common.html' },
            { letter: 'C /', link: 'common.html' },
            { letter: 'D /', link: 'common.html' },
            { letter: 'E /', link: 'common.html' },
            { letter: 'F /', link: 'common.html' },
            { letter: 'G /', link: 'common.html' },
            { letter: 'H /', link: 'common.html' },
            { letter: 'I /', link: 'common.html' },
            { letter: 'J /', link: 'common.html' },
            { letter: 'K /', link: 'common.html' },
            { letter: 'L /', link: 'common.html' },
            { letter: 'M /', link: 'common.html' },
            { letter: 'N /', link: 'common.html' },
            { letter: 'O /', link: 'common.html' },
            { letter: 'P /', link: 'common.html' },
            { letter: 'Q /', link: 'common.html' },
            { letter: 'R /', link: 'common.html' },
            { letter: 'S /', link: 'common.html' },
            { letter: 'T /', link: 'common.html' },
            { letter: 'U /', link: 'common.html' },
            { letter: 'V /', link: 'common.html' },
            { letter: 'W /', link: 'common.html' },
            { letter: 'X /', link: 'common.html' },
            { letter: 'Y /', link: 'common.html' },
            { letter: 'Z /', link: 'common.html' },
        ];
        function handleLinkClick(event) {
            event.preventDefault();
    
            // Extract the clicked letter from the link text
            var clickedLetter = event.target.textContent.trim().slice(0, -1);
    
            // Find the corresponding link object
            var clickedLink = linksArray.find(function (linkObject) {
                return linkObject.letter.trim() === clickedLetter;
            });
    
            if (clickedLink) {
                // Redirect to the corresponding file
                window.location.href = clickedLink.link;
            } else {
                console.error('Corresponding link not found.');
            }
        }
    
        // Get the alphabetLinks container
        var alphabetLinks = document.getElementById('alphabetLinks');
    
        // Add links to the container
        linksArray.forEach(function (linkObject) {
            var linkElement = document.createElement('a');
            linkElement.href = linkObject.link;
            linkElement.textContent = linkObject.letter;
    
            // Add the click event listener to the link
            linkElement.addEventListener('click', handleLinkClick);
    
            // Append the link to the alphabetLinks container
            alphabetLinks.appendChild(linkElement);
        });
    });

//search box


//Lamb Pilaf(Plov) 
var imageArray7 = [
    { url: 'images/Lamb Pilaf (Plov)/1.png', content: '50g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/2.png', content: '120g Prunes', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/3.png', content: '1tbs Lemon Juice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/4.png', content: '2tbs Butter', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/5.png', content: '1 chopped Onion', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/6.png', content: '450g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/7.png', content: '2 cloves Garlic', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/8.png', content: '600ml vegetable', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/9.png', content: '2 cups Rice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/10.png', content: 'Pinch Saffron', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/11.png', content: 'Garnish Parsley', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/1.png', content: '50g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/2.png', content: '120g Prunes', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/3.png', content: '1tbs Lemon Juice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/4.png', content: '2tbs Butter', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/5.png', content: '1 chopped Onion', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/6.png', content: '450g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/7.png', content: '2 cloves Garlic', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/8.png', content: '600ml vegetable', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/9.png', content: '2 cups Rice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/10.png', content: 'Pinch Saffron', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/11.png', content: 'Garnish Parsley', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/1.png', content: '50g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/2.png', content: '120g Prunes', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/3.png', content: '1tbs Lemon Juice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/4.png', content: '2tbs Butter', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/5.png', content: '1 chopped Onion', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/6.png', content: '450g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/7.png', content: '2 cloves Garlic', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/8.png', content: '600ml vegetable', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/9.png', content: '2 cups Rice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/10.png', content: 'Pinch Saffron', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/11.png', content: 'Garnish Parsley', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/1.png', content: '50g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/2.png', content: '120g Prunes', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/3.png', content: '1tbs Lemon Juice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/4.png', content: '2tbs Butter', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/5.png', content: '1 chopped Onion', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/6.png', content: '450g Lamb', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/7.png', content: '2 cloves Garlic', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/8.png', content: '600ml vegetable', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/9.png', content: '2 cups Rice', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/10.png', content: 'Pinch Saffron', link: '' },
    { url: 'images/Lamb Pilaf (Plov)/11.png', content: 'Garnish Parsley', link: '' },
];




// Call the displayImage function for Lamb Pilaf
displayImage('imageContainer7', imageArray7);

// Function to display images
function displayImage(imageContainer, imageArray) {
    var container = document.getElementById(imageContainer);

    // Function to handle mouse enter event
    function handleMouseEnter() {
        this.querySelector('.content small').style.color = '#905619';
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
        this.querySelector('.content small').style.color = '#6d3414';
    }

    // Loop through the imageArray and create HTML elements
    for (var i = 0; i < imageArray.length; i++) {
        var colDiv = document.createElement('div');
        colDiv.className = 'col';

        // Create an anchor element
        var link = document.createElement('a');
        link.href = imageArray[i].link; // Set the link URL

        // Set styles for the anchor element to remove underline
        link.style.textDecoration = 'none';

        // Create an image element
        var img = document.createElement('img');
        img.src = imageArray[i].url;
        img.width = 250.98;
        img.height = 250.98;
        img.alt = '';

        // Append the image to the link
        link.appendChild(img);

        // Create a div for the small element (content) and append it to the link
        var contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        // Create a small element for the content text
        var small = document.createElement('small');
        small.textContent = imageArray[i].content;

        // Set the initial text color for the small element
        small.style.color = '#905619';

        // Append the small element to the content div
        contentDiv.appendChild(small);
        link.appendChild(contentDiv);

        // Add event listeners for mouse enter and leave
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);

        // Append the link to the colDiv
        colDiv.appendChild(link);

        // Append the colDiv to the container
        container.appendChild(colDiv);
    }
}

