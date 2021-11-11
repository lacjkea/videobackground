const smallDevice = window.matchMedia("(max-width: 576px)").matches;
if (smallDevice) {
  document.querySelector("#videoBG").remove();
  const img = document.createElement("img");
  img.src = "2.png";
  img.alt = "";
  document.querySelector("header").appendChild(img);
}
