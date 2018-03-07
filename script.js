document.addEventListener("DOMContentLoaded", function(e) {
  // var div = document.createElement('div');
  // div.innerHTML = "Hello World!";
  // document.body.appendChild(div);

  var section = d3.select("body");
  var div = section.append("div");
  div.html("Hello, world!");
});
