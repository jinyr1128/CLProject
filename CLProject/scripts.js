const members = [
    {
        image: "scr/img/ex1.jpg",
        website: "https://www.jowon2.com",
        bigText: "Team:HTML5",
        smallText: "팀소개내용을 블랄라라라ㅏ라라라라라라라라라라라라"
    },
    {
        image: "scr/img/ex1.jpg",
        website: "https://www.jowon2.com",
        bigText: "윤인석",
        smallText: "조원 개인소개 멘트 기깔나게 왕다다다다다다"
    },
    {
        image: "scr/img/ex1.jpg",
        website: "https://www.jowon2.com",
        bigText: "진유록",
        smallText: "조원 개인소개 멘트 기깔나게 왕다다다다다다"
    },
    {
        image: "scr/img/ex1.jpg",
        website: "https://www.jowon2.com",
        bigText: "권준혁",
        smallText: "조원 개인소개 멘트 기깔나게 왕다다다다다다"
    },
    {
        image: "scr/img/ex1.jpg",
        website: "https://www.jowon2.com",
        bigText: "장지원",
        smallText: "조원 개인소개 멘트 기깔나게 왕다다다다다다"
    }
];

let currentImageIndex = 0;

function updateImage() {
    const member = members[currentImageIndex];
    const imgElement = document.getElementById("member-image");
    const linkElement = document.getElementById("image-link");
    const descriptionElement = document.getElementById("image-description");
    imgElement.src = member.image;
    linkElement.href = member.website;
    descriptionElement.textContent = member.name;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % members.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + members.length) % members.length;
    updateImage();
}

document.addEventListener("DOMContentLoaded", updateImage);
function updateImage() {
    const member = members[currentImageIndex];
    
    document.getElementById("member-image").src = member.image;
    document.getElementById("image-link").href = member.website;
    document.getElementById("image-description").textContent = member.name;

    document.querySelector(".big-text").textContent = member.bigText;
    document.querySelector(".small-text").textContent = member.smallText;
}
