var students = {
    student1: {

        name:"Shyam Vetwal",
        Address:"Kajannintie 30 90120 Oulu",
        Class:"Java",
        Id: 1
    },
    student2: {
        name:"Suman Pandey",
        Address:"Hanhitie 17 90150 Oulu",
        Class:"Android Application",
        Id: 2
    },
    student3: {
        name:"Veikko Lahm",
            Address:"Kasarmitie 10 90140 Oulu",
            Class:"AngularJS",
            Id: 3
    },
    student4: {
        Name:"Samila karjalaininn",
            Address:"Jasmintie 18 10350 Oulu",
            Class:"Backend",
            Id: 4
    }
}

exports.create = function(req, res) {
var newstudent = req.body;
students["student" + newStudent.id] = newStudent;
console.log("--->After Post, students:\n" + JSON.stringify(students, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newstudent, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(students, null, 4));
res.end("All Students: \n" + JSON.stringify(students, null, 4));  
};

exports.findOne = function(req, res) {
var student = students["student" + req.params.id];
console.log("--->Find student: \n" + JSON.stringify(student, null, 4));
res.end( "Find a Student:\n" + JSON.stringify(student, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedStudent = req.body; 
if(students["student" + id] != null){
// update data
students["student" + id] = updatedStudent;

console.log("--->Update Successfully, students: \n" + JSON.stringify(students, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedStudent, null, 4));
}else{
res.end("Don't Exist Student:\n:" + JSON.stringify(updatedStudent, null, 4));
}
};

exports.delete = function(req, res) {
var deleteStudent = students["student" + req.params.id];
delete students["student" + req.params.id];
console.log("--->After deletion, student list:\n" + JSON.stringify(students, null, 4) );
res.end( "Deleted student: \n" + JSON.stringify(deleteStudent, null, 4));
};