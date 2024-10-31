const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#header-navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    navigation.classList.toggle("open");
})