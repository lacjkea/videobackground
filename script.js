const largeDevice = window.matchMedia("(min-width: 576px)").matches;

// https://stackoverflow.com/questions/28605591/prevent-html5-videos-from-downloading-the-files-on-mobile-videojs
if (largeDevice) {
  //video sources
  const sources = document.querySelectorAll("video#videoBG source");
  // reference for the video object the sources is contained inside
  const myVideo = document.querySelector("video#videoBG");

  for (var i = 0; i < sources.length; i++) {
    sources[i].setAttribute("src", sources[i].getAttribute("data-src"));
  }

  myVideo.load();
}

// document.querySelector("video").controls = true;
