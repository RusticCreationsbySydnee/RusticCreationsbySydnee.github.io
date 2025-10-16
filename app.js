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

const engagments = [
    'resources/images/engagment.jpg',
]

const weddings = [
    'resources/images/wedding.jpg',
]


/* place holder variables */
let currentCategory = null;
let currentIndex = 0;
let currentImages = [];

/* lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

/*Photo Categorys */
const soloCategory = document.getElementById('Solos');
const seniorCategory = document.getElementById('Seniors');
const engagmentCategory = document.getElementById('Engagment');
const weddingCategory = document.getElementById('Wedding');

/*reusable image generator?*/
const imageContainer = document.getElementById('image-container');
imageContainer.style.display = 'none';

function imageGenerator(arr){

    imageContainer.innerHTML = '';
    currentImages = arr; //save images for navigation

    arr.forEach((src, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.loading = 'lazy';
        imgElement.style.cursor = 'pointer';

        imgElement.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(src);
        });

        imageContainer.appendChild(imgElement);
    });
}

/* lightbox area*/
function openLightbox(src) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
})

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
})

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
})


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


/* click events */
soloCategory.addEventListener('click', () => handleCategoryClick('solo', solos));
seniorCategory.addEventListener('click', () => handleCategoryClick('senior', seniors));
engagmentCategory.addEventListener('click', () => handleCategoryClick('engagment', engagments));
weddingCategory.addEventListener('click', () => handleCategoryClick('wedding', weddings))

