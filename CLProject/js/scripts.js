const members = [
    {
        image: "./images/mainpage.jpg",
        website: "teampage.html",
        bigText: "Dandelion",
        smallText: "빠르게 퍼져나가는 긍정의 씨앗"
    },
    {
        image: "./images/MainPage_1.jpg",
        website: "profile.html?id=1",
        bigText: "윤인석",
        smallText: "No pain, No gain"
    },
    {
        image: "./images/MainPage_2.jpeg",
        website: "profile.html?id=2",
        bigText: "진유록",
        smallText: "Together: It makes everything possible"
    },
    {
        image: "./images/MainPage_3.jpeg",
        website: "profile.html?id=3",
        bigText: "권준혁",
        smallText: "Just Do It"
    },
];

let currentImageIndex = 0;

function updateImage() {
    const member = members[currentImageIndex];
    document.getElementById("member-image").src = member.image;
    document.getElementById("image-link").href = member.website;
    document.querySelector(".big-text").textContent = member.bigText;
    document.querySelector(".small-text").textContent = member.smallText;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % members.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + members.length) % members.length;
    updateImage();
}

function detectLanguage() {
    const allNodes = document.querySelectorAll('body *');
    allNodes.forEach(node => {
        const text = node.textContent;
        if (/[a-zA-Z]/.test(text)) {
            node.classList.add('english-text');
        } else if (/[가-힣]/.test(text)) {
            node.classList.add('korean-text');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateImage();
    detectLanguage();
});
