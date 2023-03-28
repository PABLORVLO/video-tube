import { youtubeVideo } from "./data.js";

const videos = JSON.parse(sessionStorage.getItem("videos")) || youtubeVideo;
const containerCards = document.querySelector(".main_cards");

const printVideos = (container, videoList) => {
  container.innerHTML = videoList.map((video) => `
    <article class="cards">
      <figure class="cards__figure">
        <img class="cards__image" data-card='cards' name=${video.id}
        src=${video.thumbnail} alt=${video.name}>
      </figure>
      <div class="flex-div">
        <figure>
          <img src=${video.img}>
        </figure>
        <h3 class="cards__name" data-card='cards' name=${video.id}>${video.name}</h3>
      </div> 
      <p class="cards__views" name=${video.id}>${video.autor}</p>
      <p class="cards__views" name=${video.id}>${video.views}</p>           
    </article>
  `).join("");
};



document.addEventListener("DOMContentLoaded", () => {
  printVideos(containerCards, videos);
});

document.addEventListener("click", (event) => {
  const dataCardAttribute = event.target.getAttribute("data-card");
  if (dataCardAttribute === "cards") {
    const id = event.target.getAttribute("name");
    sessionStorage.setItem("idVideo", JSON.stringify(id));
    window.location.href = "./template/details.html";
  }
});




