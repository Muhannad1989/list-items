const bodyParser = require('body-parser');
// this is a middle ware we gonna pass it to post request below
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const data = [{ item: 'hi' }, { item: 'hello' }, { item: 'hoe are you' }, { item: 'thanks' }];

module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', { todos: data });
  });

  app.post('/todo', urlencodedParser, function(req, res) {
    res.render('todo', { todos: data });
    // push data to above array to render it later on the page
    data.push(req.body);
    // send data back to the front end which is into success ajax
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res) {
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    // res.render('todo', { todo: data });
    res.json(data);
  });
};
