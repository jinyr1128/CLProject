document.addEventListener("DOMContentLoaded", function () {

  let data = {
    "name": "진유록",
    "imageUrl": "./images/profile.jpg",
    "advantage": "끈기",
    "personality": "좋음",
    "mbtiImageUrl": "./images/MBTI.png",
    "hobbyImageUrl": ["./icons/movie.png", "./icons/hobby.png", "./icons/psgame.png", "./icons/listening.png"],
    "titleImageUrl" : "./images/sea.jpg",
    "favoriteImageUrl" : ["./images/bike.jpg", "./images/sea.jpg", "./images/pet.png", "./images/lego.jpg", "./images/metamong.jpeg"]
  };

  makeTemplate(data);

});

//객체지향적 리펙토링 필요.
//템플릿을 할 부분 2~3부분. 각각 객체를 생성해서 처리하는 방식으로.
//비어있는 템플릿을 가져와서 템플릿하는 로직 동일.
//data를 읽어오는 함수 에서 데이터를 전달, 각 섹셕에 해당하는 템플레이팅 함수에 넣어주기.

function makeTemplate(data) {
  let bci = document.querySelector(".title-section");
  bci.style.backgroundImage = `url(${data['titleImageUrl']})`
  let template = document.getElementById('contentTemplate').innerText;
  let imageTemplate = document.getElementById("favorite").innerText;
  let bindTemplate = Handlebars.compile(template);
  let resultHtml = bindTemplate(data);
  let profileSection = document.querySelector(".profile-section");
  profileSection.innerHTML = resultHtml;
  let bindTemplate02 = Handlebars.compile(imageTemplate);
  let imageHtml = bindTemplate02(data);
  let images = document.querySelector(".images");
  images.innerHTML = imageHtml;
}

// function MakeTemplate(data, template, target) {
//   this.data = data;
//   this.template = template;
//   this.target = target;

// }

// MakeTemplate.prototype = function() {
//   templateSection = function() {
//     let bindTemplate = Handlebars.compile(this.template.innerText);
//     target.innerHtml  = bindTemplate(this.data);
//   }

// }

// // function ParseUrl(url) {
// //   const searchParams = new URLSearchParams(window.location.search);
// // }

