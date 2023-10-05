import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

  let pageLoader = new PageLoader();
  pageLoader.loadPage();

});



function PageLoader() {

}

PageLoader.prototype.loadPage = function() {
  let container = document.getElementById("container");
  let template = document.getElementById("contentTemplate");
  let makeTemplate = new MakeTemplate();

  let id = parseUrl();
  
  DataLoader(id).then(data => {
    makeTemplate.templateSection(data, template, container);
  });
  
}

function MakeTemplate() {
}


MakeTemplate.prototype.templateSection = function(data, template, target) {
    let userData = JSON.parse(data);
    console.log(userData['personality']);
    let bindTemplate = Handlebars.compile(template.innerText);
    let resultHtml = bindTemplate(userData);
    target.innerHTML = resultHtml;
    console.log(userData);
    let bci = document.querySelector(".title-section");
    bci.style.backgroundImage = `url(./images/${userData['bannerImg']})`;
    
  
}


function parseUrl() {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  let id = Number(urlParams.get('id'));
  return id;
}

async function DataLoader(id) {


// Firebase 구성 정보 설정
  const firebaseConfig = {
      apiKey: "AIzaSyDisPu5jtwYI7BYD9VQq8SqFivBL6KzscM",
      authDomain: "hahaha-cb64c.firebaseapp.com",
      projectId: "hahaha-cb64c",
      storageBucket: "hahaha-cb64c.appspot.com",
      messagingSenderId: "204852029874",
      appId: "1:204852029874:web:84cc90a1f11b7ee8a21cab",
      measurementId: "G-7HSGB3EC08"
  };


  // Firebase 인스턴스 초기화
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const q = query(collection(db, "users"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  let row;
  querySnapshot.forEach((doc) => {
    row = JSON.stringify(doc.data());
    
  });
  return row;
}





  // let data = {
  //   "name": "진유록",
  //   "imageUrl": "./images/profile.jpg",
  //   "advantage": "끈기",
  //   "personality": "좋음",
  //   "mbtiImageUrl": "./images/MBTI.png",
  //   "hobbyImageUrl": ["./icons/movie.png", "./icons/hobby.png", "./icons/psgame.png", "./icons/listening.png"],
  //   "titleImageUrl": "./images/sea.jpg",
  //   "favoriteImageUrl": ["./images/bike.jpg", "./images/sea.jpg", "./images/pet.png", "./images/lego.jpg", "./images/metamong.jpeg"]
  // };
 