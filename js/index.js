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

// Elements
const logo = document.getElementById("logo-img");
const navLink = document.querySelectorAll("header nav a")
const dia = document.querySelector(".cta-text h1")
const button = document.querySelector(".cta-text button")
const ctaElementImg = document.querySelector("#cta-img")
const topH4 = document.querySelectorAll(".main-content .top-content div h4") 
const topP = document.querySelectorAll(".main-content .top-content .text-content p")
const middleElementImg = document.getElementById("middle-img")








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
topH4[1].innerText = siteContent["main-content"]["product-h4"]

// Add p Text in Main Content
topP[0].innerText = siteContent["main-content"]["features-content"]
topP[1].innerText = siteContent["main-content"]["product-content"]

// Add Middle img
middleElementImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


/*
 oh shit! it shares terminals too

yeahh and im trying to install a browser plugin
that terminal shit is really cool though. i also really like that we don't have to stop and wait for the oteer person to finsish typing
same

all right dude, im gonna sync to github and head to work, fuck the job gonna set up the environment in the office LOL
be back online in a couple hours, like 2yep yep
lmao, aight, see ya soon dude peace
*/
