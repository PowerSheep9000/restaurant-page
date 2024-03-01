function menuLoad() {
    const contentContainer = document.getElementById("content");
    
    while (contentContainer.firstElementChild) {
        contentContainer.firstElementChild.remove();
    }

    const menuBox = document.createElement("div");
    menuBox.classList.add("menuBox");

    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("menuHeader");
    menuHeader.textContent = "Mains";
    menuBox.appendChild(menuHeader);

    const menuContent = document.createElement("div");
    menuContent.classList.add("menuContent");
    const menuList = document.createElement("ul");
    menuContent.appendChild(menuList);
    for (let i = 1; i <= 3; i++) {
        const menu = document.createElement("li");
        menu.textContent = "Menu" + i;
        menuList.appendChild(menu);
    }
    menuBox.appendChild(menuContent);

    contentContainer.appendChild(menuBox);
}

export { menuLoad };