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

    arr.forEach(src => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.loading = 'lazy';
        imageContainer.appendChild(imgElement);
    });
}

let currentCategory = null;

/* Categorys */
const soloCategory = document.getElementById('Solos');
const seniorCategory = document.getElementById('Seniors');

/* Reusable click handler*/
function handleCategoryClick(categoryName, imageArray) {
    // if no category is open
    if (imageContainer.style.display === 'none'){
        imageContainer.style.display = 'flex';
        imageGenerator(imageArray);
        currentCategory = categoryName;
    }
    //If teh same category is clicked agian - close it 
    else if (currentCategory === categoryName){
        imageContainer.style.display = 'none';
        imageContainer.innerHTML = '';
        currentCategory = null;
    }
    //if a diffrent car is clicked - replace images
    else {
        imageGenerator(imageArray);
        currentCategory = categoryName;
    }
}

//click events 
soloCategory.addEventListener('click', () => handleCategoryClick('solo', solos));
seniorCategory.addEventListener('click', () => handleCategoryClick('senior', seniors));

