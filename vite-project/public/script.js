var projects = [
    {
        name: 'Senior Project: Hanover College EAP app',
        description: 'Developed a web app for Emergency Action Plans at Hanover College.',
        technologies: ['NextJS','React','Bootstrap','VS Code']
    },
    {
        name: 'Web Development: Personal Portfolio',
        description: 'Built a personal portfolio website to showcase skills and projects.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
];

var isElementAdded = false;


function showContactInformation() {
    var contactInfo = "Email: colefinley66@gmail.com\nPhone: (540) 748-2655";
    alert(contactInfo);
}

function showProjects() {
    if (!isElementAdded) {

        var showProjectsButton = document.getElementById('showProjectsButton');
        if (showProjectsButton) {
            showProjectsButton.style.display = 'none';
        }

        // Create a new container for projects
        var projectsContainer = document.createElement('div');
        projectsContainer.id = 'projectsContainer';
        projectsContainer.innerHTML = '<h2>Projects Information</h2>';
        
        // Append the new container under the "Projects" section
        var projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.appendChild(projectsContainer);
        }

        displayProjects(projectsContainer);

        isElementAdded = true;
    }
}

function displayProjects(container) {
    projects.forEach(function(project) {
        var projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<strong>${project.name}</strong><br>
                                <em>${project.description}</em><br>
                                Technologies: ${project.technologies.join(', ')}`;
        container.appendChild(projectDiv);
    });
}

window.onload = function() {
    setTimeout(function() {
        alert('Welcome to Cole Finley\'s Portfolio!');
    }, 3000);

    var contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', showContactInformation);
    }

    var hoverElement = document.getElementById('hoverElement');
    if (hoverElement) {
        hoverElement.addEventListener('mouseover', handleMouseOverElement);
    }
};
