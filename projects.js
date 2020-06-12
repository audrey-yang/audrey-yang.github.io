const src = document.getElementById("project-template").innerHTML;

const template = Handlebars.compile(src);
const compiledHtml = template({
    projects: [
        {
            date: "June 2020",
            title: "Personal Website",
            src: "./pics/clip-website.png",
            description: "This very website! I created it using HTML, CSS, and JavaScript, and it is hosted using GitHub Pages."
        },
        {
            date: "June 2020",
            title: "Mini-Instagram",
            src: "./pics/clip-mini-instagram.png",
            description: "As part of a technical challenge for the PennApps Development Team, I created a photo-sharing web application using Django. On the site, users can upload images with captions and like and comment on their own and other users' photos."
        },
        {
            date: "December 2019",
            title: "Gravity",
            src: "./pics/clip-gravity.png",
            description: "This game, based off of Quizlet's Gravity, was my final project for CIS 120 (Programming Languages and Techniques). I used Java's Swing Library to create an interactive application where players upload a list of vocabulary and definitions and input the definition for every item before time runs out."
        },
        {
            date: "July 2018",
            title: "UD Language Learning & Bilingualism Lab Website",
            src: "./pics/clip-llblab.png",
            description: "As a part of my internship at the LLB Lab, I created the lab website using Wix."
        },
    ]
});

const display = document.getElementById('projects-container')
display.innerHTML = compiledHtml;