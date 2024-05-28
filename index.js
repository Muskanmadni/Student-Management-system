let Collectionofstudent = [] = [
    {
        studentName: "alisha",
        studentID: 4567
    },
    {
        studentName: "Ali",
        studentID: 3355,
    },
    {
        studentName: "sonia",
        studentID: 2080,
    },
];
let filterbystudentID = Collectionofstudent
    .filter((student) => student.studentID == 3355);
let filterbystudentName = Collectionofstudent
    .filter((student) => student.studentName.includes("Ali"));
Collectionofstudent[0].studentName.includes;
for (let index = 0; index < 5; index++) {
    console.log(Collectionofstudent[index]);
}
;
import inquirer from "inquirer";
let optionAns = await inquirer.prompt([
    {
        name: "option",
        type: "list",
        choices: ["update", "Edit", "delete"]
    }
]);
if (optionAns.option === "update") {
    let dataupdate = await inquirer.prompt([
        {
            name: "Data",
            type: "input",
            message: "please add data",
        }
    ]);
    Collectionofstudent = optionAns.option;
    console.log("your data updated");
}
else if (optionAns.option === "Edit") {
    let Editdata = await inquirer.prompt([
        {
            name: "Edit",
            type: "editor",
        }
    ]);
    Collectionofstudent = optionAns.option;
    console.log("your data Edited ");
}
else if (optionAns.option === "delete") {
    let deleteData = await inquirer.prompt([
        {
            name: "delete",
            type: "list",
            message: "please select data for delete ",
            choices: ["Ali", "Sonia", "alisha"]
        }
    ]);
    Collectionofstudent >= optionAns.option;
    console.log("your data is deleted ");
}
