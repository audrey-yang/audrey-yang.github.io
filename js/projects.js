const src = document.getElementById("project-template").innerHTML;

const template = Handlebars.compile(src);
const compiledHtml = template({
    projects: [
        {
            date: "August 2020",
            title: "Seat Booker",
            img: "./pics/project/clip-seatbooker.JPG",
            description: "To help my church's COVID-19 reopening effort, I created this app, which allows users to reserve seats and tracks weekly attendance.",
            tech: "Django, Python, HTML, CSS, Javscript",
            website: "http://seatbooker.herokuapp.com/"
        },
        {
            date: "July 2020",
            title: "Deep Sea Race",
            context: "HackItShipIt Hackathon",
            img: "./pics/project/clip-deep-sea-race.JPG",
            description: "I collaborated with my friend Lucy to make this app. It introduces the user to some ocean creatures and simulates of how fast the animals would move in a race.",
            tech: "Java",
            src: "https://github.com/gujiguj/Deep-Sea-Race"
        },
        {
            date: "June 2020",
            title: "Productivity Sticky Space",
            context: "Same Home Different Hacks Hackathon",
            img: "./pics/project/clip-board.JPG",
            description: "I collaborated with my friend Lucy to create a bulletin-board app with moveable sticky notes.",
            tech: "HTML, CSS, Javascript",
            website: "https://gujiguj.github.io/productivity-sticky-space/",
            src: "https://github.com/gujiguj/productivity-sticky-space"
        },
        {
            date: "June 2020",
            title: "Mini-Instagram",
            context: "PennApps Development Team Challenge",
            img: "./pics/project/clip-mini-instagram.JPG",
            description: "I created a photo-sharing web application on which, users can upload images with captions and like and comment on their own and other users' photos.",
            tech: "Django, Python, HTML, CSS",
            src: "https://github.com/audrey-yang/pennapps-dev-challenge"
        },
        {
            date: "December 2019",
            title: "Gravity",
            context: "CIS 120: Programming Languages and Techniques",
            img: "./pics/project/clip-gravity.JPG",
            description: "This game is based off of Quizlet's Gravity. I used Java's Swing Library to create an app where players upload vocabulary and input the definition for every item before time runs out.",
            tech: "Java",
            src: "https://github.com/audrey-yang/cis120-final-project"
        }
    ]
});

const display = document.getElementById('projects-container')
display.innerHTML = compiledHtml;