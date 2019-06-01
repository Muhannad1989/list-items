$(document).ready(function() {
  // once submit add new value and send it to the url per per post
  // add new item
  $('form').on('submit', function() {
    var item = $('form input');
    var todo = { item: item.val().trim() };
    /**
     * after submit we post request via ajax post to the request post
     * to send the new value
     * then adde it to the array
     */

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      // if the post success
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  // delete specific item
  $('li').on('click', function() {
    // once click on any li
    var item = $(this)
      .text()
      .replace(/ /g, '-');
    // delete request after clicking on li
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      // if the delete success
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
