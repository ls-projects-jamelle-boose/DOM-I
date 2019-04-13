const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Nav Elements
const logo = document.getElementById("logo-img");
const navLink = document.querySelectorAll("header nav a")

// Call To Action Elements
const dia = document.querySelector(".cta-text h1")
const button = document.querySelector(".cta-text button")
const ctaElementImg = document.querySelector("#cta-img")

// Main Content Elements
const topH4 = document.querySelectorAll(".main-content .top-content div h4") 
const topP = document.querySelectorAll(".main-content .top-content .text-content p")

// Middle Image
const middleElementImg = document.getElementById("middle-img")

// Bottom Content Elements
const bottomH4 = document.querySelectorAll(".main-content .bottom-content div h4") 
const bottomP = document.querySelectorAll(".main-content .bottom-content .text-content p")

// Contact Elements
const h4Contact = document.querySelector(".contact h4")
const pContact = document.querySelectorAll(".contact p")

// Footer Elements
const pFooter = document.querySelector("footer p")

// Append Anchor
const appendFAQ = document.createElement("a")

// Prepend Anchor
const prependBlog = document.createElement("a")




// Add Navigation Link
navLink.forEach((link, index) => {
  link.innerHTML = siteContent["nav"][`nav-item-${index + 1}`]
})
// Update Img Src
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Insert "DOM IS AWESOME"
dia.innerHTML = siteContent["cta"]["h1"]

// Set attributes on Button
button.innerText = siteContent["cta"]["button"]

// Set CTA IMG SRC
ctaElementImg.setAttribute("src", siteContent["cta"]["img-src"])

// Add h4 Text in Main Content
topH4[0].innerText = siteContent["main-content"]["features-h4"]
topH4[1].innerText = siteContent["main-content"]["about-h4"]

// Add p Text in Main Content
topP[0].innerText = siteContent["main-content"]["features-content"]
topP[1].innerText = siteContent["main-content"]["product-content"]

// Add Middle img
middleElementImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Add h4 Text in Bottom Content
bottomH4[0].innerText = siteContent["main-content"]["services-h4"]
bottomH4[1].innerText = siteContent["main-content"]["product-h4"]
bottomH4[2].innerText = siteContent["main-content"]["vision-h4"]

// Add p Text in Bottom Content
bottomP[0].innerText = siteContent["main-content"]["services-content"]
bottomP[1].innerText = siteContent["main-content"]["product-content"]
bottomP[2].innerText = siteContent["main-content"]["vision-content"]

// Add h4 Text in Contact Section
h4Contact.innerText = siteContent["contact"]["contact-h4"]

// Add p Text in Contact Section
pContact[0].innerText = siteContent["contact"]["address"]
pContact[1].innerText = siteContent["contact"]["phone"]
pContact[2].innerText = siteContent["contact"]["email"]

// Add p Text in Footer
pFooter.innerText = siteContent["footer"]["copyright"]

// Change color of nav text to green
navLink.forEach( link => link.style.color = 'green')

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want

appendFAQ.innerText = 'FAQ'
appendFAQ.style.color = 'green'
document.querySelector("nav").appendChild(appendFAQ)


prependBlog.innerText = 'Blog'
prependBlog.style.color = 'green'
document.querySelector("nav").prepend(prependBlog)
