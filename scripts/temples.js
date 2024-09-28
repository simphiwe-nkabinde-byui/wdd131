const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#header-navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
})