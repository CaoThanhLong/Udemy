$(document).ready(function () {
  $("a.test").on("mouseover", function (e) {
    $(this).next("div").toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
