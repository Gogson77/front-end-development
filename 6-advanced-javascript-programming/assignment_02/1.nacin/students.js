// Student class definition
class Student {
  constructor(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }
}

// Function to fetch and process student data
async function fetchStudentData() {
  try {
    const response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
    const data = await response.text();
    const students = parseStudentData(data);
    displayStudents(students);
  } catch (error) {
    console.error('Error fetching student data:', error);
  }
}

// Function to parse student data
function parseStudentData(data) {
  const lines = data.split('\n').filter(line => line.trim() !== '');
  const students = [];

  for (let i = 0; i < lines.length; i += 4) {
    const student = new Student(lines[i], lines[i + 1], lines[i + 2], lines[i + 3]);
    students.push(student);
  }

  return students;
}

// Function to display students on the webpage
function displayStudents(students) {
  const container = document.getElementById('student-container');

  students.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${student.name}`;

    const addressElement = document.createElement('p');
    addressElement.textContent = `Address: ${student.address}`;

    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Phone: ${student.phone}`;

    const courseElement = document.createElement('p');
    courseElement.textContent = `Course: ${student.course}`;
    
    const spaceElement = document.createElement('hr');

    studentDiv.appendChild(nameElement);
    studentDiv.appendChild(addressElement);
    studentDiv.appendChild(phoneElement);
    studentDiv.appendChild(courseElement);
    studentDiv.appendChild(spaceElement);

    container.appendChild(studentDiv);
  });
}

// Fetch and display student data on page load
window.onload = fetchStudentData;