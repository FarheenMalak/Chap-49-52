// Question 1: Signup Form - Show form data on submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    document.getElementById("formData").innerHTML = formData;
}

// Question 2: Read More feature - Toggle item details
function toggleDetails(itemId) {
    const details = document.getElementById(itemId);
    details.style.display = (details.style.display === "none" || details.style.display === "") ? "block" : "none";
}

// Question 3: Student Table - Add, Edit, Delete functionality
let students = [];

function addStudent(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const studentAge = document.getElementById("studentAge").value;

    const student = {
        name: studentName,
        age: studentAge
    };

    students.push(student);
    displayStudents();
    document.getElementById("studentForm").reset();
}

function displayStudents() {
    const studentTableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    studentTableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = studentTableBody.insertRow();
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>
                <button onclick="editStudentForm(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudentForm(index) {
    const student = students[index];
    document.getElementById("editStudentName").value = student.name;
    document.getElementById("editStudentAge").value = student.age;

    document.getElementById("editForm").style.display = "block";
    document.getElementById("editStudentForm").onsubmit = (event) => {
        editStudent(event, index);
    };
}

function editStudent(event, index) {
    event.preventDefault();

    const updatedName = document.getElementById("editStudentName").value;
    const updatedAge = document.getElementById("editStudentAge").value;

    students[index] = {
        name: updatedName,
        age: updatedAge
    };

    displayStudents();
    document.getElementById("editForm").style.display = "none";
}
