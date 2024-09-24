var headerButtons = document.getElementsByClassName('header-cell');
var allItems = document.getElementById("all-items");

for (let i = 0; i < headerButtons.length; i++) {
  headerButtons[i].onclick = function () {
    openTab(parseInt(this.id.substr(this.id.length - 1)));
  }
}

function openTab(no) {

  document.querySelectorAll('.header-cell').forEach(item => {
    item.classList.add("inactive-header-cell");
  });

  document.getElementById("tab" + no).classList.remove("inactive-header-cell");

  switch (no) {
    case 1:
      allItems.style.marginLeft = "0%";
      window.location.hash = '#all-items';
      break;
    case 2:
      allItems.style.marginLeft = "-100%";
      window.location.hash = '#pending-items';
      break;
    case 3:
      allItems.style.marginLeft = "-200%";
      window.location.hash = '#active-items';
      break;
  }
}

window.addEventListener("hashchange", function (e) {
  examineHash();
});

examineHash();

function examineHash() {
  switch (window.location.hash) {
    case '#all-items':
    case "":
      openTab(1);
      break;
    case "2":
      openTab(2);
      break;
    case "3":
      openTab(3);
      break;
  }
}