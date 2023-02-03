var data = [{
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    domain: {column: 0},
    name: 'GHG Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  },{
    values: [27, 11, 25, 8, 1, 3, 25],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    text: '827 Tons ofrubbish',
    textposition: 'inside',
    domain: {column: 1},
    name: 'ofrubbish Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  }];
  
  var layout = {
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
      },
    annotations: [
      {
        font: {
          size: 16
        },
        showarrow: false,
        text: '100% <br> Crafted with <br>Passion',
        x: 0.15,
        y: 0.5
      },
      {
        font: {
          size: 15
        },
        showarrow: false,
        text: '827 <br>Tons ofrubbish',
        x: 0.85,
        y: 0.5
      }
    ],
    height: 600,
    width: 800,
    
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };
  
  Plotly.newPlot('myDiv', data, layout);
  