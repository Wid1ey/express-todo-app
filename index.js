const path = require('path');
const express = require('express');
const notes = [
    {id: 1, text: "Finish project"},
    {id: 2, text: "Buy groceries"},
    {id: 3, text: "Read book"},
    {id: 4, text: "Do stretches"},
    {id: 5, text: "Attend meeting"}];

const todos = new Map();
notes.forEach((note) => {todos.set(note.id, note);});

exports.getTodos = function() {
    return Array.from(todos.values());
};

const app = express();

app.use(express.json());

app.get('/', function(req, resp) {
    resp.render(getTodos());
});

app.listen('on', path.join(__dirname, 'intex.js'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});