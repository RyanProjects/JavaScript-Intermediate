let popups = [];

function openMultiplePopups() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const popupWidth = 400;
  const popupHeight = 400;
  const popupGap = 20; // gap between popups in pixels
  let popupLeft = 0;
  let popupTop = 0;

  for (let i = 0; i < 10; i++) {
    const features = `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`;
    const newWindow = window.open("about:blank", "popup" + i, features);
    newWindow.document.write("<h1 style='font-size:5em;'>Mwahaha &#128520;</h1>");

    popups.push(newWindow);

    popupLeft += popupWidth + popupGap;
    if (popupLeft + popupWidth > screenWidth) {
      popupLeft = 0;
      popupTop += popupHeight + popupGap;
    }
  }
}

setTimeout(() => {
    document.addEventListener("click", () => {
      for (let i = 0; i < popups.length; i++) {
        if (!popups[i].closed) {
          if (popups[i].document.title === "test2.html") {
            popups[i].close();
          }
        }
      }
      popups = [];
    });
  }, 5000);
