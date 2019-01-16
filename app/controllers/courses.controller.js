var courses = {
    course1: {

        name:"Java",
        Description:"Front end in Java",
        Id: 1
    },
    course2: {
        name:"Hybrid Application",
        Description:"Android and Hybrid Application",
        Id: 2
    },
    course3: {
        name:"AngularJS",
        Description:"Depth course about angularjs",
         Id: 3
    },
    course4: {
        Name:"Backend",
        Description:"Backend development full course",
        Id: 4  
            
    }
}

exports.create = function(req, res) {
var newcourse = req.body;
courses["course" + newCourse.id] = newCourse;
console.log("--->After Post, courses:\n" + JSON.stringify(courses, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newcourse, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(courses, null, 4));
res.end("All Courses: \n" + JSON.stringify(courses, null, 4));  
};

exports.findOne = function(req, res) {
var course = courses["courses" + req.params.id];
console.log("--->Find courses: \n" + JSON.stringify(course, null, 4));
res.end( "Find a Course:\n" + JSON.stringify(course, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedCourse = req.body; 
if(courses["course" + id] != null){
// update data
courses["course" + id] = updatedCourse;

console.log("--->Update Successfully, courses: \n" + JSON.stringify(courses, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedCourse, null, 4));
}else{
res.end("Don't Exist Course:\n:" + JSON.stringify(updatedCourse, null, 4));
}
};

exports.delete = function(req, res) {
var deleteCourse = courses["course" + req.params.id];
delete courses["course" + req.params.id];
console.log("--->After deletion, course list:\n" + JSON.stringify(courses, null, 4) );
res.end( "Deleted course: \n" + JSON.stringify(deleteCourse, null, 4));
};