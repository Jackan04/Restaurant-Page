function renderAboutPage(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const pageTitle = document.createElement("h1");
    
    pageTitle.textContent = "About Odin's Restaurant";
    

    content.appendChild(pageTitle);
    
    
}

export {renderAboutPage}