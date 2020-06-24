let projects = document.querySelectorAll(".project-card");



projects.forEach((project) => {
    project.onclick = () => {
        if (project.hasAttribute("clicked")) {
            project.removeAttribute("clicked");
            project.lastElementChild.style.opacity = "0";
        } else {
            project.setAttribute("clicked", "");
            project.lastElementChild.style.opacity = "0.9";
        }
    }

    project.onmouseover = () => {
        if (!project.hasAttribute("clicked")) {
            project.lastElementChild.style.opacity = "0.9";
        }
    }

    project.onmouseout = () => {
        if (!project.hasAttribute("clicked")) {
            project.lastElementChild.style.opacity = "0";
        }
    }
});