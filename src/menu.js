function renderMenuPage(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuHeader = document.createElement("h1")
    const menuItem = document.createElement("div");
    const itemTitle = document.createElement("h2");
    const itemDesc = document.createElement("p");
    
    menuHeader.textContent = "Our Menu"
    itemTitle.textContent = "Hamburger";
    itemDesc.textContent = "Ground beef, bacon, brioche bread, tomatoes, chillimayo with sweet potato fries. ";

    
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDesc);
    
    content.appendChild(menuHeader)
    content.appendChild(menuItem);
}

export {renderMenuPage}