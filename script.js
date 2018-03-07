document.addEventListener("DOMContentLoaded", function(e) {
  // var div = document.createElement('div');
  // div.innerHTML = "Hello World!";
  // document.body.appendChild(div);

  //Use chaining method
  var section = d3.select("body").style("color", "black").style("background-color", "orange");

  section.append("div")
  .html("First!");

  section.append("div")
  .html("Second.");
  // section.style("color", "white");
  // section.style("background-color", "black");
  var div = section.append("div");
  div.html("Hello, world!");
});
