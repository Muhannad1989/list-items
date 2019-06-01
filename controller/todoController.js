const bodyParser = require('body-parser');

// this is a middle ware we gonna pass it to post request below
const urlencodedParser = bodyParser.urlencoded({ extended: false });
let data = [{ item: 'hi' }, { item: 'hello' }, { item: 'hoe are you' }, { item: 'thanks' }];

module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', { todos: data });
  });

  // add new item to todoList
  app.post('/todo', urlencodedParser, function(req, res) {
    res.render('todo', { todos: data });
    // push data to above array to render it later on the page
    data.push(req.body);
    // send data back to the frontend which is inside success ajax
    res.json(data);
  });

  // delete a specific item from todoList
  app.delete('/todo/:item', function(req, res) {
    // delete any item inside the main array when it match to this url ('item:')
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item; // params means => :item
    });
    // res.render('todo', { todo: data });
    res.json(data);
    // res.render('todo', { todos: data });
  });
};
