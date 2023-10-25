document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".questions");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            toggleAnswer(answer);
        });
    });
});

function toggleAnswer(answer) {
    if (answer.style.display === "none" || answer.style.display === "") {
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (answer) {
            answer.style.display = "none";
        });
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}
//burger menu
function showSidebar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
}
function hideSideBar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
}