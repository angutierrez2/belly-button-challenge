var width = 500,
   height = 500;

   const datapoints = [
    { name: 'OTU 1167', score: 163 }, 
    { name: 'OTU 2859', score: 126 }, 
    { name: 'OTU 482', score: 113 },
    { name: 'OTU 2264', score: 78 },
    { name: 'OTU 41', score: 71 },
    { name: 'OTU 1189', score: 51 },
    { name: 'OTU 352', score: 50 },
    { name: 'OTU 189', score: 47 },
    { name: 'OTU 2318', score: 40 },
    { name: 'OTU 1977', score: 40 },
    { name: 'OTU 3450', score: 37 },
    { name: 'OTU 874', score: 36 },
    { name: 'OTU 1959', score: 30 },
    { name: 'OTU 2191', score: 28 },
    { name: 'OTU 1950', score: 25 },
    { name: 'OTU 2077', score: 23 },
    { name: 'OTU 2275', score: 22 },
    { name: 'OTU 944', score: 19 },
    { name: 'OTU 2184', score: 19 },
    { name: 'OTU 2244', score: 14 },
    { name: 'OTU 2024', score: 13 },
    { name: 'OTU 2419', score: 13 },
    { name: 'OTU 2811', score: 13 },
    { name: 'OTU 165', score: 12 },
    { name: 'OTU 2782', score: 12 },
    { name: 'OTU 2247', score: 11 },
    { name: 'OTU 2011', score: 11 },
    { name: 'OTU 2396', score: 11 },
    { name: 'OTU 830', score: 10 },
    { name: 'OTU 2964', score: 10 },
    { name: 'OTU 1795', score: 10 },
    { name: 'OTU 2722', score: 8 },
    { name: 'OTU 307', score: 7 },
    { name: 'OTU 2178', score: 7 },
    { name: 'OTU 2908', score: 7 },
    { name: 'OTU 1193', score: 6 },
    { name: 'OTU 2167', score: 5 },
    { name: 'OTU 1208', score: 5 },
    { name: 'OTU 2039', score: 5 },
    { name: 'OTU 1274', score: 4 },
    { name: 'OTU 2739', score: 4 },
    { name: 'OTU 2737', score: 4 },
    { name: 'OTU 1314', score: 3 },
    { name: 'OTU 1962', score: 3 },
    { name: 'OTU 2186', score: 3 },
    { name: 'OTU 2335', score: 3 },
    { name: 'OTU 2936', score: 3 },
    { name: 'OTU 907', score: 3 },
    { name: 'OTU 833', score: 3 },
    { name: 'OTU 2483', score: 2 },
    { name: 'OTU 2475', score: 2 },
    { name: 'OTU 2491', score: 2 },
    { name: 'OTU 2291', score: 2 },
    { name: 'OTU 159', score: 2 },
    { name: 'OTU 2571', score: 2 },
    { name: 'OTU 2350', score: 2 },
    { name: 'OTU 2342', score: 2 },
    { name: 'OTU 2546', score: 2 },
    { name: 'OTU 725', score: 2 },
    { name: 'OTU 170', score: 2 },
    { name: 'OTU 1505', score: 2 },
    { name: 'OTU 513', score: 2 },
    { name: 'OTU 259', score: 2 },
    { name: 'OTU 1169', score: 2 },
    { name: 'OTU 258', score: 2 },
    { name: 'OTU 1232', score: 2 },
    { name: 'OTU 1497', score: 2 },
    { name: 'OTU 1498', score: 2 },
    { name: 'OTU 2475', score: 2 },
    { name: 'OTU 1503', score: 2 },
    { name: 'OTU 412', score: 2 },
    { name: 'OTU 2235', score: 2 },
    { name: 'OTU 1960', score: 2 },
    { name: 'OTU 1968', score: 2 },
    { name: 'OTU 121', score: 2 },
    { name: 'OTU 2065', score: 2 },
    { name: 'OTU 340', score: 2 },
    { name: 'OTU 2110', score: 2 },
    { name: 'OTU 2188', score: 2 },
    { name: 'OTU 357', score: 2 },
    { name: 'OTU 342', score: 2 }
   ];

  var svg = d3.select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")
    .attr("fill", "lightblue")
    .selectAll("circle")
    .data(datapoints.sort((a, b) => d3.descending(a.score, b.score)))
    .join("circle")
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.score))
      .attr('height', d => y(0) - y(d.score))
      .attr('width', x.bandwidth())
  
  function xAxis(g){
    g.attr('transform', 'translate(0, ${0, height - margin.bottom})')
    .call(d3.axisBottom(x).tickFormat(i => data[i].name))
    .attr('font-size', '12px')

  }

  function yAxis(g){
    g.attr('transform', 'translate(${margin.left}, 0)')
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr('font-size', '20px')
  }

svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();