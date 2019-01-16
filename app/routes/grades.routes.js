module.exports = function(app) {
 
    var courses = require('../controllers/grades.controller.js');
 
   // Create a new Course
   app.post('/api/courses', courses.create);
 
 
    // Retrieve all grade
    app.get('/api/grades', grades.findAll);
 
  
    // Update a course with Id
    app.put('/api/courses/:id', courses.update);
 
   
}