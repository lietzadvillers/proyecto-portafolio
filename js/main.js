const link = document.querySelector(".link");
const linkImg = document.querySelector(".link-img");

link.addEventListener("mouseover", displayImage);

function displayImage() {
  linkImg.toggleAttribute("hidden");
}
