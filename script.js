
var acc = document.querySelectorAll(".header");

acc.forEach((item, index) => {
  let status = item.parentElement.querySelector(".status");
  status.addEventListener("click", () => {
    status.classList.toggle("inactiveButton");
    status.classList.toggle("activeButton");

    let panel = item.parentElement.nextElementSibling;

    if (panel.style.display === "none" || !panel.style.display) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }

    removeOpenedContent(index);
  });
});

function removeOpenedContent(currentIndex) {
  acc.forEach((item2, index2) => {
    if (currentIndex !== index2) {
      let otherStatus = item2.parentElement.querySelector(".status");
      let otherPanel = item2.parentElement.nextElementSibling;

      otherStatus.classList.add("inactiveButton");
      otherStatus.classList.remove("activeButton");

      otherPanel.style.display = "none";
    }
  });
}