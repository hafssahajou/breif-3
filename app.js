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
const humberger = document.querySelector(".humberger");
const navmenu = document.querySelector(".menu1");

humberger.addEventListener("click",()=>{
    humberger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".menu1 li").forEach(n=> n.addEventListener("click",()=>{
     humberger.classList.remove("active");
     navmenu.classList.remove("active");
}));
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.right-contact');
    form.addEventListener('submit', function(event) {
        var fullName = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        var email = document.getElementById('email').value;
       
        var fullNameRegex = /^[A-Za-z\s']{3,}$/;
        var messageRegex = /^[A-Za-z\s']{3,}$/;
        var subjectRegex = /^[A-Za-z\s']{3,}$/;
        var emailRegex = /^\S+@\S+.\S+$/;

        if (!fullNameRegex.test(fullName)) {
            alert("Please enter a valid full name (minimum 3 characters).");
            event.preventDefault();
            return;

        }
        if (!messageRegex.test(message)) {
            alert("Please enter a valid full name (minimum 3 characters).");
            event.preventDefault();
            return;

        }
        if (!subjectRegex.test(subject)) {
            alert("Please enter a valid full name (minimum 3 characters).");
            event.preventDefault();
            return;

        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

    });

});
