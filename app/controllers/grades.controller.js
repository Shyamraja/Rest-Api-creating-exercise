var grades = {
    student1: {

        name:"Shyam Vetwal",
        Address:"Kajannintie 30 90120 Oulu",
        Class:"Java",
        Grade: 4
    },
    student2: {
        name:"Suman Pandey",
        Address:"Hanhitie 17 90150 Oulu",
        Class:"Android Application",
        Grade: 5
    }
}
exports.create = function(req, res) {
    var newgrade = req.body;
    grades["grade" + newGrade.id] = newGrade;
    console.log("--->After Post, grades:\n" + JSON.stringify(grades, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newgrade, null, 4));
    };
    

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(grades, null, 4));
res.end("All Grades: \n" + JSON.stringify(grades, null, 4));  
};



exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedGrade = req.body; 
if(grades["grade" + id] != null){
// update data
grades["grade" + id] = updatedgradee;

console.log("--->Update Successfully, grades: \n" + JSON.stringify(grades, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedGrade, null, 4));
}else{
res.end("Don't Exist Grade:\n:" + JSON.stringify(updatedGrade, null, 4));
}
};

