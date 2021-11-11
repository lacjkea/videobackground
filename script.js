const smallDevice = window.matchMedia("(max-width: 576px)").matches;
if (smallDevice) {
  document.querySelector("#videoBG").remove();
  const img = document.createElement("img");
  img.src = "poster.webp";
  img.alt = "";
  document.querySelector("body").appendChild(img);
}
