const src = document.getElementById("project-template").innerHTML;

const template = Handlebars.compile(src);
const compiledHtml = template({
    projects: [
        {
            date: "June 2020",
            title: "Productivity Sticky Space",
            img: "./pics/project/clip-board.png",
            description: "For the Same Home Different Hacks Hackathon, I collaborated with my friend Lucy (https://github.com/gujiguj) to create a bulletin-board app with moveable sticky notes. We used HTML, CSS, and Javascript and hosted the website on GitHub Pages",
            website: "https://gujiguj.github.io/productivity-sticky-space/",
            src: "https://github.com/gujiguj/productivity-sticky-space"
        },
        {
            date: "June 2020",
            title: "Personal Website",
            img: "./pics/project/clip-website.png",
            description: "This very website! I created it using HTML, CSS, and JavaScript, and it is hosted using GitHub Pages.",
            src: "https://github.com/audrey-yang/audrey-yang.github.io"
        },
        {
            date: "June 2020",
            title: "Mini-Instagram",
            img: "./pics/project/clip-mini-instagram.png",
            description: "As part of a technical challenge for the PennApps Development Team, I created a photo-sharing web application using Django. On the site, users can upload images with captions and like and comment on their own and other users' photos.",
            src: "https://github.com/audrey-yang/pennapps-dev-challenge"
        },
        {
            date: "December 2019",
            title: "Gravity",
            img: "./pics/project/clip-gravity.png",
            description: "This game, based off of Quizlet's Gravity, was my final project for CIS 120 (Programming Languages and Techniques). I used Java's Swing Library to create an interactive application where players upload a list of vocabulary and definitions and input the definition for every item before time runs out.",
            src: "https://github.com/audrey-yang/cis120-final-project"
        },
        {
            date: "July 2018",
            title: "UD Language Learning & Bilingualism Lab Website",
            img: "./pics/project/clip-llblab.png",
            description: "As a part of my internship at the LLB Lab, I created the lab website using Wix.",
            website: "https://udllblab.wixsite.com/home"
        },
    ]
});

const display = document.getElementById('projects-container')
display.innerHTML = compiledHtml;