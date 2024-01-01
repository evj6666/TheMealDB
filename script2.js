

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