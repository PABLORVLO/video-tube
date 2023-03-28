import { youtubeVideo } from "./data.js";

const videos = JSON.parse(sessionStorage.getItem("videos")) || youtubeVideo;
const containerCards = document.querySelector(".main_cards");

const printVideos = (container, videoList) => {
    container.innerHTML = videoList.map((video) => {
        return `
            <article class="cards">
                <figure class="cards__figure">
                    <img class="cards__image" 
                        data-card='cards'
                        name=${video.id}
                        src=${video.thumbnail} 
                        alt=${video.name}>
                </figure>
                <div class="flex-div">
                    <h3 class="" data-card='cards' name=${video.id}>${video.name}</h3>
                    <p class="" name=${video.id}>${video.views}</p>
                </div>            
            </article>
        `;
    }).join("");
};

document.addEventListener("DOMContentLoaded", () => {
    printVideos(containerCards, videos);
});

document.addEventListener("click", (event) => {
    const dataCardAttribute = event.target.getAttribute("data-card");
    if (dataCardAttribute === "cards") {
        const id = event.target.getAttribute("name");
        sessionStorage.setItem("idVideo", JSON.stringify(id));
        window.location.href = "../template/details.html";
    }
});

const categories = [...new Set(videos.map((video) => video.seenIn.category))];
categories.unshift("all");

categories.forEach((category) => {
    const filterButton = document.getElementsByName(category)[0];
  
    filterButton.addEventListener("click", () => {
        const filterVideos = category === "all"
            ? videos
            : videos.filter((video) => video.seenIn.category === category);
        printVideos(containerCards, filterVideos);
    });
});

