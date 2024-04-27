var btn = document.getElementById("btn");
var light = document.getElementById("light");

function toggleBtn() {
    btn.classList.toggle("active");
    light.classList.toggle("on");
}

// Array of image sources
const images = [
   
    "images/id2.jpg",
    "images/id3.jpg",
    "images/id4.jpg",
    "images/tr11.webp",
    "images/tr22.jpg",
    "images/tr33.jpeg",
 

];

// Get carousel indicators and inner elements
const carouselIndicators = document.getElementById("carouselIndicators");
const carouselInner = document.getElementById("carouselInner");

// Dynamically create carousel items and indicators
for (let i = 0; i < images.length; i++) {
    // Create carousel indicator
    const indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-slide-to", i);
    if (i === 0) {
        indicator.classList.add("active");
    }
    carouselIndicators.appendChild(indicator);

    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
        carouselItem.classList.add("active");
    }
    const img = document.createElement("img");
    img.classList.add("d-block", "w-100", "carousel-img"); // Add a custom class for styling
    img.src = images[i];
    img.alt = "Slide " + (i + 1);
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
}

//style
function showCategory(category) {
    const images = {
      "All": ["images/hang2.jpg","images/floortall2.jpg", "images/floor3.png","images/tall1.jpg", "images/hang3.jpg", "images/hanging1.jpg","images/la1.jpg", "images/la2.jpg", "images/la3.jpg","images/la4.jpg","images/la5.jpg"],
      "Hanging Lamps": ["images/hang2.jpg", "images/hang3.jpg", "images/hanging1.jpg"],
      "Floor Lamps": ["images/floortall2.jpg", "images/floor3.png","images/tall1.jpg"],
      "Table Lamps": ["images/la1.jpg", "images/la2.jpg", "images/la3.jpg","images/la4.jpg","images/la5.jpg"]
    };

    const imageGallery = document.getElementById("imageGallery");
    imageGallery.innerHTML = "";

    images[category].forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      img.alt="lamps"
      img.classList.add("img-thumbnail","lamps", "col-md-3", "mb-3" );
      imageGallery.appendChild(img);

      setTimeout(() => {
        img.classList.add("show");
      }, 100); // Add a slight delay for smooth transition
    
    });
    

  }
  
  // Show all images by default
  showCategory('All');



  //trendy 
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltay;
scrollContainer.style.scrollBehavior = "auto";
}) ;

nextBtn.addEventListener("click", ()=>{
scrollContainer.style.scrollBehavior = "smooth"; scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=> {
scrollContainer.style.scrollBehavior = "smooth"; scrollContainer.scrollLeft -= 900;
});
