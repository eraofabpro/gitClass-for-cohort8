const obj = {
    name: 'PETER JIMOH',
    gender: 'non-binary',
    age: '27',
    complexion: 'caramel',
}
//adding props to the object
let phone = {
    brand: "Samsung",
    model: "Galaxy S22",
    price: 350000,
};

phone.color = "Black";
console.log(phone);

let student = {
    name: "Godwin",
    regNO: "C8/001",
    course: "JavaScript",
    year: 2024,
    firends: ["john", "Jane", "Doe"]
}
console.log(student);
student.gender = "Male";
console.log(student);
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos",
};

let hisName = employee.name;
let hisRole = employee.role;

const {name, role, salary, city} = employee;