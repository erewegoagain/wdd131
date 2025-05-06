// Select the dropdown element
const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    // Get the current value of the select element
    const theme = themeSelector.value;

    // Select the body element
    const body = document.body;

    // Select the logo image
    const logo = document.querySelector('footer img');

    if (theme === 'dark') {
        // Add the dark class to the body
        body.classList.add('dark');
        // Change the logo source to the white logo
        logo.src = 'byui-logo_white.png';
    } else {
        // Remove the dark class from the body
        body.classList.remove('dark');
        // Change the logo source to the blue logo
        logo.src = 'byui-logo_blue.webp';
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);