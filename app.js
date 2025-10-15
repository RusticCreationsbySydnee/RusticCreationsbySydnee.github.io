const solos = [
    'resources/images/solo.jpg',
    'resources/images/solo2.jpg',
    'resources/images/solo3.jpg',
    'resources/images/solo4.jpg',
    'resources/images/solo5.jpg',
    'resources/images/solo6.jpg',
];

const seniors = [
    'resources/images/senior.jpg',
    'resources/images/senior2.jpg',
    'resources/images/senior3.jpg',
    'resources/images/senior4.jpg',
    'resources/images/senior5.jpg',
    'resources/images/senior6.jpg',
    'resources/images/senior7.jpg',
    'resources/images/senior8.jpg',
];

/*reusable image generator?*/
const imageContainer = document.getElementById('image-container');
imageContainer.style.display = 'none';

function imageGenerator(arr){

    imageContainer.innerHTML = '';

    //loop through the images in the array
    for (let i = 0; i < arr.length; i++) {
        //create new image element
        const imgElement = document.createElement('img');

        // set the src attribute of the image using the  images in the array
        imgElement.src = arr[i];

        //Append the image element to the container
        imageContainer.appendChild(imgElement);
    }
}

/* solo shoots */
const soloCategory = document.getElementById('Solos');

soloCategory.addEventListener('click', () => {
    
    if (imageContainer.style.display === 'none' ) {
        imageContainer.style.display = 'flex';
        imageGenerator(solos);
    }
    else {
        imageContainer.style.display = 'none';
    }
});

/* Senior shoots*/

const seniorCategory = document.getElementById('Seniors');

seniorCategory.addEventListener('click', () => {

    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'flex';
        imageGenerator(seniors)
    }
    else {
        imageContainer.style.display = 'none';
    }

})


