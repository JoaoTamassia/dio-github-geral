const BASE_URL = 'https://picsum.photos/200/300';
const imageBtn = document.getElementById('change-image');
const image = document.getElementById('image');

const getImage = async () => {
    try {
    const data = await fetch(BASE_URL);

    return data.url;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    image.src = await getImage();
}

imageBtn.addEventListener('click', loadImg);

loadImg();