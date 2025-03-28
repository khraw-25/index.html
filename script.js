// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Date/Time
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('datetime').textContent = dateTimeString;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    // Dynamic Projects
    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A fully functional e-commerce platform with product listings and shopping cart.',
            link: 'https://example.com/ecommerce'
        },
        {
            title: 'Task Manager App',
            description: 'A simple task management application to organize daily tasks and deadlines.',
            link: 'https://example.com/taskmanager'
        }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
});