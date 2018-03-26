$(document).ready(function(){
  $("#formOne").submit(function(event) {

var list = ["items1", "items2", "items3", "items4"]

console.log(list);
    list.forEach(function(lists) {
          var userInput = $("input#" + lists).val().toUpperCase();

          $("." + lists).text(userInput);

    function mylist(userInput){
      userInput.sort();
    }

      });

    event.preventDefault();
    console.log(items1, items2, items3, items4);
    $("#grocerylist").show();
    $("#formOne").hide();
});
});
