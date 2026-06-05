class Login {

    constructor(username, password) {

        this.username = username;
        this.password = password;
    }

    display() {

        alert(
            "Username: " + this.username +
            "\nPassword: " + this.password
        );
    }
}

function showLogin() {

    let user1 = new Login("Brinda", "1234");

    user1.display();
}
function showPassword(){

    var x = document.getElementById("Password");

    if(x.type === "password"){
        x.type = "text";
    }

    else{
        x.type = "password";
    }
}
function saveUsername() {

    var Username = document.getElementById("Username").value;

    localStorage.setItem("Username", Username);
}
function showCourses() {

    let studentType =
        document.getElementById("studentType").value;

    let course =
        document.getElementById("Course");

    // clear old options
    course.innerHTML =
        '<option value="">Select Course</option>';



    // SCHOOL COURSES
    if (studentType === "School") {

        let SchoolCourses = [

            "IT Foundation Course",

            "C / C++ Coding Course",

            "Web Development Course",

            "Gen AI Basics Course",

            "Tech Explorer Internship",

            "Digital Helper Internship",

            "Coding Challenge",

            "Web Creator"
        ];


        SchoolCourses.forEach(function(item) {

            let option =
                document.createElement("option");

            option.text = item;

            option.value = item;

            course.add(option);

        });

    }



    // COLLEGE COURSES
    else if (studentType === "College") {

        let CollegeCourses = [

            "Java / Python Full Stack",

            "Data Science / Analytics",

            "DevOps / AI & ML",

            "IoT / Digital Marketing",

            "MERN / MEAN Full Stack",

            "C/C++ Embedded",

            "UI/UX Web Design",

            "Java/Python Internship",

            "Cloud / DevOps Internship",

            "Digital Marketing / AI Internship"
        ];


        CollegeCourses.forEach(function(item) {

            let option =
                document.createElement("option");

            option.text = item;

            option.value = item;

            course.add(option);

        });

    }

}
document.getElementById("internshipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loadingScreen = document.getElementById("loadingScreen");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    loadingScreen.style.display = "flex";
    progressBar.style.width = "0%";
    progressText.textContent = "0%";

    const duration = 5000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(function() {
        elapsed += interval;
        const progress = Math.min(100, Math.round((elapsed / duration) * 100));

        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(timer);
            window.location.href = "success.html";
        }
    }, interval);
});