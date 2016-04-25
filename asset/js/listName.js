/*ECMS6 TO ECMS5*/
  var listName = (function(_) {
    var $listNameWrap;
    function init() {
      _cacheDOM();
      _bindEvent();
    }
    function _cacheDOM() {
      $listNameWrap = $('#listNameWrap');
    }
    function _bindEvent() {
      $listNameWrap.on('click.setList', '#btn-setList', handleSetList);
      $listNameWrap.on('keypress.setList', '#listName', _handlePressEnter);
    }
    function _handlePressEnter(e) {
      if (e.which == 13) {
        handleSetList();
      }
    }
    console.log("HelloWorld");
    function handleSetList() {
      console.log("HelloWorld");
      var listName = $listNameWrap.find('#listName').val();
      if (listName) {
        $.ajax({
          url: (BASE_URL + "lists"),
          type: 'post',
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify({listName: listName}),
          xhrFields: {withCredentials: true},
          crossDomain: true,
          success: function(data) {
            todoList.render(data.tasks);
            if (!data.tasks.length) {
              alert('Has any task yet.\n Just add one.');
            }
          },
          error: function(jqXHR) {
            console.dir(jqXHR);
          }
        });
      }
    }
    return {
      init: init,
      handleSetList: handleSetList
    };
  })();
