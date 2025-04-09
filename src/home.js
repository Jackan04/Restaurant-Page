import heroImage from "./heroImage.jpg";

// DOM Elements
const content = document.querySelector("#content");

function createElements(){
    const heroHeader = document.createElement("h1");
    heroHeader.setAttribute("id", "hero-header");
    
    const subTitle = document.createElement("h3");
    subTitle.textContent = "Bring your tastebuds on an adventure!"
    
    const welcomeContainer = document.createElement("div");
    welcomeContainer.setAttribute("id", "welcome-container");

    const welcomeText = document.createElement("p");
    welcomeText.setAttribute("id", "welcome-text");
    welcomeText.textContent = "Welcome to Odin's Restaurant!, where every meal is a celebration of fresh ingredients and rich flavors. Our cozy atmosphere, attentive service, and diverse menu, featuring everything from mouth-watering appetizers to hearty mains, promise a delightful dining experience. Whether you're here for a casual meal or a special occasion, we're committed to providing you with top-quality food and an unforgettable time. Visit us today and indulge in culinary excellence!"

    const image = document.createElement("img");
    image.src = heroImage;

    welcomeContainer.appendChild(heroHeader)
    welcomeContainer.appendChild(subTitle)
    welcomeContainer.appendChild(welcomeText)
    welcomeContainer.appendChild(image)

    return welcomeContainer
}

function renderHomePage(){
    const elements = createElements();
    content.appendChild(elements)

}

export {renderHomePage, createElements };