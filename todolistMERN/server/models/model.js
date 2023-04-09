const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todoName : {
        type : String
    },
    checkTodo : {
        type : Boolean
    }
})

let Todo = mongoose.model('TodoSchema' , TodoSchema)

module.exports = {Todo}