const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
});*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a94852576533d6c5fa28133'}).then((todo) => {

});

Todo.findByIdAndRemove('5a94852576533d6c5fa28133').then((todo) => {
    console.log(todo)
});