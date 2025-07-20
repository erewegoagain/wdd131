import lessons  from "./tutorials.mjs";

// Access C# lessons
const csharpLessons = lessons.csharp;

// Access Python lessons
const pythonLessons = lessons.python;


function lessonTemplate(lesson) {
    return `
        <div class="lesson">
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <p>${lesson.lesson}</p>
            ${lesson.picture1 ? `<img src="${lesson.picture1}" alt="Lesson Image 1" class="lesson-image">` : ''}
            <p>${lesson.lesson2}</p>
            ${lesson.picture2 ? `<img src="${lesson.picture2}" alt="Lesson Image 2" class="lesson-image">` : ''}
            <p>${lesson.postlesson}</p>
        </div>
    `;
}

function renderLesson(language, lessonNumber) {
    const languageLessons = lessons[language];

    if (!languageLessons) {
        document.getElementById("lesson-content").innerHTML = "<p>Invalid language specified.</p>";
        return;
    }

    const lesson = languageLessons.find(l => l.lessonNumber === parseInt(lessonNumber));

    if (lesson) {
        const lessonHTML = lessonTemplate(lesson);
        document.getElementById("lesson-content").innerHTML = lessonHTML;
    } else {
        document.getElementById("lesson-content").innerHTML = "<p>Lesson not found.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const language = params.get("language");
    const lessonNumber = params.get("lesson");

    if (language && lessonNumber) {
        renderLesson(language, lessonNumber);
    } else {
        document.getElementById("lesson-content").innerHTML = "<p>Invalid lesson or language.</p>";
    }
});