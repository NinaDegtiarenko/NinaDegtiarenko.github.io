$(document).ready(function () {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(200);

  var svgHeight = '140';
  var svgWidth = '254';
  var barPadding = '1';

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  }

  var svg = createSvg('.equalizer-small', svgHeight, svgWidth);

  // Create our initial D3 chart.
  svg.selectAll('rect')
     .data(frequencyData)
     .enter()
     .append('rect')
     .attr('x', function (d, i) {
       console.log(frequencyData.length);
        return i * (svgWidth / 60);

     })
     .attr('width', 2);

  var gradient = svg.append("defs").append("linearGradient")
    .attr("id", "mygrad")//id of the gradient
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

    gradient.append("stop")
    .attr("offset", "20%")
    .style("stop-color", "#dddddd")
    .style("stop-opacity", 1);



    gradient.append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#f0f0f0")
    .style("stop-opacity", 1);

  // Continuously loop and update chart with frequency data.
  function renderChart() {
     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.
     svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
           return svgHeight - d/2;
        })
        .attr('height', function(d) {
           return d/2;
        })
        .attr('fill', 'url(#mygrad)');
  } 

  // Run the loop
  renderChart();

});
