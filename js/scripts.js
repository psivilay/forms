$(document).ready(function() {
  $("#insert-name form").submit(function(event) {
    var user1Input = $("input#user1").val();

    $(".user1").text(user1Input);

    $("#letter").show();

    alert(user1Input.toUpperCase());

    event.preventDefault();
  });
});
