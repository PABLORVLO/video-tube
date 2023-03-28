import { youtubeVideo } from "./data.js";

const videos = JSON.parse(sessionStorage.getItem("videos")) || youtubeVideo;


// agregar el contenido del video
const videoPlayerInfo = (contenedor, video) => {
  const figure = document.createElement("figure");
  figure.classList.add("main__figure");
  figure.innerHTML = `<iframe frameborder="0" allow="autoplay" class="card__video" src=${video.link} alt=${video.name}></iframe>`;
  contenedor.appendChild(figure);

  // informacion
  const list = document.createElement("ul");
  list.classList.add("main__list");
  for (const [key, value] of Object.entries(video.seenIn)) {
    const item = document.createElement("li");
    item.textContent = `${key}: ${value}`;
    list.appendChild(item);
  }
  contenedor.appendChild(list);
};

document.addEventListener("DOMContentLoaded", () => {
  // Capturar la información uardada en el sessionStorage
  const idVideoStg = JSON.parse(sessionStorage.getItem("idVideo")) || 0;
  const idVideo = Number(idVideoStg);
  console.log(idVideo);
  const video = videos.find((vid) => vid.id === idVideo);
  console.log(video);
  const title = document.getElementById("title");
  title.textContent = video.name;
  const infoVideoContainer = document.getElementById("information");
  videoPlayerInfo(infoVideoContainer, video);
});
