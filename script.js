//hammer.js?

document.addEventListener("DOMContentLoaded", function(e) {
  var data = [4, 8, 15, 16, 23, 42];

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

  // Use Linear scale to make dependencies explicit - eliminate the magic number 10
  //D3’s scales specify a mapping from data space (domain) to display space (range)
  var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

  //data join -> define the selection to join data -> join the data to selection using selection.data -> enter selection reppresents new data (update and exit are empty) -> instatiate element by appending div to enter section -> set new bar as multiple of 10 and compute style. -> set text content of each bar
  d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) { return x(d) + "px" }).text(function(d) {return '$'+ d; });
});
