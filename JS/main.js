// Get The Variable .

let myPic = document.getElementById("planet-image");
let myMars = document.getElementById("mars");
let myTitan = document.getElementById("titan");
let myEuropa = document.getElementById("europa");
let myMoon = document.getElementById("moon");
let myName = document.getElementById("planet-name");
let planetInfo = document.getElementById("planet-info");
let mySpeed =document.getElementById("speed");
let myDays =document.getElementById("days");
let one =document.getElementById("one");
let two =document.getElementById("two");
let three =document.getElementById("three");
let tecImge =document.getElementById("tec-img");
let tecName = document.getElementById("tech-name");
let tecInfo = document.getElementById("info");
let child = document.getElementsByClassName("child");
let aClass = document.getElementsByClassName("a");

let marsInfo = `Don’t forget to pack your hiking boots. 
You’ll need them to tackle Olympus Mons, the tallest planetary
mountain in our solar system. It’s two and a half times the size of Everest!`;

let moonInfo = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and
come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;

let europaInfo = `The smallest of the four Galilean moons orbiting Jupiter, Europa is
a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
curling, hockey, or simple relaxation in your snug wintery cabin.`;

let titanInfo = `The only moon known to have a dense atmosphere other
than Earth, Titan is a home away from home (just a few hundred degrees colder!). As 
a bonus, you get striking views of the Rings of Saturn.`;


// Change Planet Image .

function changeImg(path) {
    myPic.src = path;
};

function changeName(ele) {
    myName.textContent = ele;
};

function speed(ele) {
    mySpeed.textContent = ele;
};

function days(ele) {
    myDays.textContent = ele;
};

function info(element) {
    planetInfo.textContent =element;
};
// Add Class Active To Make Speacial Eeffects .
$(document).on("click",".one li a ", function () {
    for(let i=0; i < child.length ; i++) {
        child[i].classList.remove("active-one");
    };
    $(this).addClass("active-one");
    
});

//Change Bachground And Color

$(document).on("click",".two li a", function () {
    for(let i=0; i < aClass.length ; i++) {
        aClass[i].classList.remove("active-two");
    };
    $(this).addClass("active-two");
});


//Change Techno Imge

one.addEventListener("click",function() {
    tecImge.src = "../assets/technology/image-launch-vehicle-portrait.jpg";
});
two.addEventListener("click",function() {
    tecImge.src = "../assets/technology/image-spaceport-portrait.jpg";
});
three.addEventListener("click",function() {
    tecImge.src = "../assets/technology/image-space-capsule-portrait.jpg";
});

//Change Technology Name

one.addEventListener("click", function(){
    tecName.textContent = "LAUNCH VEHICLE";
})
two.addEventListener("click",function() {
    tecName.textContent = "SPACEPORT";
});
three.addEventListener("click",function() {
    tecName.textContent = "SPACE CAPSULE";
});
// Change Technology Info 
one.addEventListener("click",function(){
    tecInfo.textContent= `A launch vehicle or carrier rocket is a rocket-propelled vehicle 
    used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. 
    Our WEB-X carrier rocket is the most powerful in operation. Standing 
    150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
});
two.addEventListener("click",function(){
    tecInfo.textContent = `A spaceport or cosmodrome is a site for launching 
    (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft.
    Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
});
three.addEventListener("click",function(){
    tecInfo.textContent =`A space capsule is an often-crewed spacecraft that uses 
    a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. 
    Our capsule is where you'll spend your time during the flight. It includes 
    a space gym, cinema, and plenty of other activities to keep you entertained.`;
});




