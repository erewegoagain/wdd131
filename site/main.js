
// Select the dropdown triggers and dropdowns
const csharpTrigger = document.getElementById("csharp-trigger");
const pythonTrigger = document.getElementById("python-trigger");
const csharpDropdown = document.getElementById("csharp-dropdown");
const pythonDropdown = document.getElementById("python-dropdown");

// Add click event listeners to the images
csharpTrigger.addEventListener("click", () => toggleDropdown(csharpDropdown));
pythonTrigger.addEventListener("click", () => toggleDropdown(pythonDropdown));


document.getElementById("csharp-trigger").addEventListener("click", function() {
    const dropdown = document.getElementById("csharp-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.getElementById("python-trigger").addEventListener("click", function() {
    const dropdown = document.getElementById("python-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

function toggleDropdown(dropdown) {
    const currentDisplay = window.getComputedStyle(dropdown).display;
    console.log("Computed display:", currentDisplay); // Debugging
    dropdown.style.display = currentDisplay === "block" ? "block" : "none";
}


