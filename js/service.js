console.log("service.js loaded");

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

console.log("Service type:", type);

const titleEl = document.getElementById("serviceTitle");
const descEl = document.getElementById("serviceDesc");
const pointsEl = document.getElementById("servicePoints");
const galleryEl = document.getElementById("serviceGallery");

const serviceData = {
  wedding: {
    title: "Wedding Decoration",
    desc: "Elegant and royal wedding decorations tailored to your dream day.",
    points: [
      "Stage decoration",
      "Floral arrangements",
      "Lighting & draping",
      "Theme based setup"
    ],
    images: [
      "img/wedding/1.jpeg",
      "img/wedding/2.jpeg",
      "img/wedding/3.jpeg",
      "img/wedding/4.jpeg",
      
    ]
  },

  birthday: {
    title: "Birthday Party",
    desc: "Fun and colorful birthday setups for all age groups.",
    points: [
      "Balloon decoration",
      "Custom themes",
      "Cake table setup"
    ],
    images: [
      "img/services/birthday1.jpg"
    ]
  }
};

// ❗ Render content
if (!serviceData[type]) {
  titleEl.innerText = "Service Not Found";
  descEl.innerText = "";
  pointsEl.innerHTML = "";
  galleryEl.innerHTML = "";
} else {
  titleEl.innerText = serviceData[type].title;
  descEl.innerText = serviceData[type].desc;

  // Points
  pointsEl.innerHTML = "";
  serviceData[type].points.forEach(point => {
    const li = document.createElement("li");
    li.innerText = point;
    pointsEl.appendChild(li);
  });

  // Images
  galleryEl.innerHTML = "";
  serviceData[type].images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.className = "service-img";
    galleryEl.appendChild(image);
  });
}

