module.exports = function(app) {
 
    var courses = require('../controllers/courses.controller.js');
 
    // Create a new Course
    app.post('/api/courses', courses.create);
 
    // Retrieve all course
    app.get('/api/courses', courses.findAll);
 
    // Retrieve a course by Id
    app.get('/api/courses/:id', courses.findOne);
 
    // Update a course with Id
    app.put('/api/courses/:id', courses.update);
 
    // Delete a course with Id
    app.delete('/api/courses/:id',courses.delete);
}