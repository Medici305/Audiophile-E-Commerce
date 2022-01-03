// Variables
const closeBtn = document.getElementById("closebtn");
const openBtn = document.getElementById("openbtn");

// Functions
const openSidebar = () => {
  document.getElementsByTagName("nav")[0].style.right = "0";
  [...document.getElementById("newProduct").children].forEach((item) => {
    item.style.zIndex = 0;
  });
};

const closeSidebar = () => {
  document.getElementsByTagName("nav")[0].style.right = "-25rem";
  setTimeout(() => {
    [...document.getElementById("newProduct").children].forEach((item) => {
      item.style.zIndex = 2;
    });
  }, 1000);
};

// Event Handlers
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
