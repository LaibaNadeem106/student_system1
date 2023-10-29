import inquirer from "inquirer";
import chalk from "chalk";
const studentList = [];
async function addStudent() {
    const answerType = await inquirer.prompt([
        {
            type: "input",
            name: "fullname",
            message: "Enter the student's full name:",
        },
        {
            type: "number",
            name: "id",
            message: "Enter the student's ID:",
        },
        {
            type: "input",
            name: "CoursesEnrolled",
            message: "Enter the courses the student is enrolled in:",
        },
        {
            type: "number",
            name: "balance",
            message: "Enter the student's balance:",
        },
    ]);
    let { fullname, id, CoursesEnrolled, balance } = answerType;
    const student = { fullname, id, CoursesEnrolled, balance };
    studentList.push(student);
    console.log(chalk.green("Student added successfully!"));
    const addMore = await inquirer.prompt([
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add another student?",
        },
    ]);
    if (addMore.addMore) {
        addStudent();
    }
    else {
        displayStudentList();
    }
}
function displayStudentList() {
    console.log(chalk.blue("List of Students:"));
    studentList.forEach((student, index) => {
        console.log(chalk.bold(`Student ${index + 1}:`));
        console.log(`Full Name: ${student.fullname}`);
        console.log(`ID: ${student.id}`);
        console.log(`Courses Enrolled: ${student.CoursesEnrolled}`);
        console.log(`Balance: ${student.balance}`);
        console.log();
    });
}
addStudent();
