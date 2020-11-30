const src = document.getElementById("project-template").innerHTML;

const template = Handlebars.compile(src);
const compiledHtml = template({
    projects: [
        {
            date: "August 2020",
            title: "Seat Booker",
            context: "WCEC",
            img: "./pics/project/clip-seatbooker.JPG",
            description: "Seat-reservation system created to help my church's COVID-19 reopening effort.",
            tech: ["Django"],
            website: "http://seatbooker.herokuapp.com/"
        },
        {
            date: "July 2020",
            title: "Deep Sea Race",
            context: "HackItShipIt Hackathon",
            img: "./pics/project/clip-deep-sea-race.JPG",
            description: "App introducing some ocean creatures and simulating of how fast the animals would move in a race.",
            tech: ["Java"],
            src: "https://github.com/gujiguj/Deep-Sea-Race"
        },
        {
            date: "June 2020",
            title: "Productivity Sticky Space",
            context: "Same Home Different Hacks Hackathon",
            img: "./pics/project/clip-board.JPG",
            description: "Simple bulletin-board app with moveable sticky notes.",
            tech: ["HTML", "CSS", "Javascript"],
            website: "https://gujiguj.github.io/productivity-sticky-space/",
            src: "https://github.com/gujiguj/productivity-sticky-space"
        },
        {
            date: "June 2020",
            title: "Mini-Instagram",
            context: "PennApps Development Team Challenge",
            img: "./pics/project/clip-mini-instagram.JPG",
            description: "Photo-sharing web application based off of Instagram. Users can upload images with captions and like and comment on their own and other users' photos.",
            tech: ["Django"],
            src: "https://github.com/audrey-yang/pennapps-dev-challenge"
        },
        {
            date: "December 2019",
            title: "Gravity",
            context: "Programming Languages & Techniques Project",
            img: "./pics/project/clip-gravity.JPG",
            description: "Game based off of Quizlet's Gravity – players upload vocabulary and input the definition for every item before time runs out.",
            tech: ["Java"],
            src: "https://github.com/audrey-yang/cis120-final-project"
        }
    ]
});

const display = document.getElementById('projects-container')
display.innerHTML = compiledHtml;