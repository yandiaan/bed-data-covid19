$(document).ready(function () {
  $("#Save").click(function () {
    $.ajax({
      url: "https://api.dazelpro.com/",
      type: "GET",
      dataType: "json",
      success: function (data, textStatus, xhr) {
        console.log(data);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log("Error in Operation");
      },
    });
  });
});
