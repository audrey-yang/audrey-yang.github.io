const src = document.getElementById("project-template").innerHTML;

const template = Handlebars.compile(src);
const compiledHtml = template({
    projects: [
        {   date: "Ongoing",
            title: "PennApps Application Portal",
            context: "PennApps",
            description: "Customized system for both applicants and graders that encompassed the entire application, grading, and check-in process.",
            tech: ["django"],
            website: "https://apply.pennapps.com/"
        },
        {   date: "Fall 2021",
            title: "Thrombotic Event Phenotyping from Clinical Notes",
            context: "Independent Study",
            description: "Pipeline reading clinical notes to look for descriptions of thrombotic events.",
            tech: ["spacy", "scikit-learn"],
        },
        {   date: "Fall 2021",
            title: "Markdown Parser",
            context: "Functional Programming Final Project",
            description: "Applicative parser translating Markdown to HTML.",
            tech: ["haskell"],
            src: "https://github.com/jasminecao/markdown-parser"
        },
        {   date: "Spring 2021",
            title: "Can Twitter predict US county-level excessive alcohol consumption?",
            context: "Computational Linguistics Final Project",
            description: "ML models using language derived features from Twitter data to predict excessive alcohol consumption.",
            tech: ["pandas", "scikit-learn", "pytorch"],
            src: "https://github.com/logan-life/twitter_alcohol_use_prediction"
        },
        {   date: "Spring 2021",
            title: "Reddit Posts and Stock Prices",
            context: "Big Data Analytics Final Project",
            description: "ML models finding the correlation between Reddit posts and stock market volatility.",
            tech: ["pandas", "scikit-learn", "pytorch"],
        },
        {   date: "August 2020",
            title: "Seat Booker",
            context: "WCEC",
            description: "Seat-reservation system created to help my church's COVID-19 reopening effort.",
            tech: ["django"],
            website: "http://seatbooker.herokuapp.com/"
        },
        /*{   date: "July 2020",
            title: "Deep Sea Race",
            context: "HackItShipIt Hackathon",
            description: "App introducing some ocean creatures and simulating of how fast the animals would move in a race.",
            tech: ["Java"],
            src: "https://github.com/gujiguj/Deep-Sea-Race"
        },
        {   date: "June 2020",
            title: "Productivity Sticky Space",
            context: "Same Home Different Hacks Hackathon",
            description: "Simple bulletin-board app with moveable sticky notes.",
            tech: ["HTML", "CSS", "Javascript"],
            website: "https://gujiguj.github.io/productivity-sticky-space/",
            src: "https://github.com/gujiguj/productivity-sticky-space"
        },*/
        {   date: "June 2020",
            title: "Mini-Instagram",
            context: "PennApps Development Team Challenge",
            description: "Photo-sharing web application based off of Instagram.",
            tech: ["django"],
            src: "https://github.com/audrey-yang/pennapps-dev-challenge"
        },
        {   date: "December 2019",
            title: "Gravity",
            context: "Programming Languages & Techniques Project",
            description: "Game based off of Quizlet's Gravity – players upload vocabulary and input the definition for every item before time runs out.",
            tech: ["java"],
            src: "https://github.com/audrey-yang/cis120-final-project"
        }
    ]
});

const display = document.getElementById('projects-container')
display.innerHTML = compiledHtml;