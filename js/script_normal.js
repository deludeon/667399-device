(function() {
  // Переменный pop-up формы обратной связи
  var writeusOpen = document.querySelector(".js-open-popup");
  var writeusPopup = document.querySelector(".write-us-popup");
  var writeusClose = writeusPopup.querySelector(".cross-button");

  var form = writeusPopup.querySelector("form");
  var name = writeusPopup.querySelector("input[name=name]");
  var message = writeusPopup.querySelector("textarea");

  // Переменные pop-up карты
  var mapOpen = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".map-google");
  var mapClose = mapPopup.querySelector(".cross-button");

  // Код для формы обратной связи
  writeusOpen.addEventListener("click", function(event) {
    event.preventDefault();
    writeusPopup.classList.add("modal-content-show");
  });

  writeusClose.addEventListener("click", function(event) {
    event.preventDefault();
    writeusPopup.classList.remove("modal-content-show");
    writeusPopup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!name.value || !message.value) {
      event.preventDefault();
      writeusPopup.classList.remove("modal-error");
      writeusPopup.offsetWidth;
      writeusPopup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (writeusPopup.classList.contains("modal-content-show")) {
        writeusPopup.classList.remove("modal-content-show");
      }
    }
  });

  // Код для карты
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });
})();
