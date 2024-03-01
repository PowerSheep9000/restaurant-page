function initialLoad() {
    const contentContainer = document.getElementById("content");

    while (contentContainer.firstElementChild) {
        contentContainer.firstElementChild.remove();
    }

    const restaurantImg = document.createElement("img");
    restaurantImg.src = "../images/restaurant.jpg";
    restaurantImg.style.width = "500px";
    contentContainer.appendChild(restaurantImg);

    const heading = document.createElement("h1");
    heading.textContent = "Super fancy restaurant";
    contentContainer.appendChild(heading);

    const text = document.createElement("div");
    text.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.";
    contentContainer.appendChild(text);
}

export { initialLoad };