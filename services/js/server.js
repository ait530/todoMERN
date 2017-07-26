import express from 'express'
import path from 'path'
import mongoose from 'mongoose';

var app = express();
mongoose.connect('mongodb://localhost/todos');

//schema/model  
let todoModel = mongoose.model('todo', {
    todo: String,
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }

})

var logError = (error) => {
    if (error)
        throw error; 
}


/*
  Here is where we're going put most of the serve logic
*/
var server = () => {
    // We do this can send our html and js static files to the browser through the server
    app.use(express.static('client/public'))

    // .get, callback with method
    app.get('/get/all', (request, response) => {
        todoModel.find((error, todos) => {
            logError(error);
            response.send(todos);

        })
    
    })

    // 3000 is the port number, this could be any number from  0 to 9999
    app.listen(3000, () => {
        console.log('App listening on port 3000!')
    })
}

export default server;