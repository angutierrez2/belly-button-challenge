<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Bellybutton Biodiversity</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-md-12 p-5 text-center bg-light">
        <h1>Belly Button Biodiversity Dashboard</h1>
        <p>Use the interactive charts below to explore the dataset</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="card card-body bg-light">
          <h6>Test Subject ID No.:</h6>
          <select id="selDataset" onchange="optionChanged(this.value)"></select>
        </div>
        <div class="card card-primary">
          <div class="card-header">
            <h4 class="card-title">Demographic Info</h4>
            <h6 class="card-body">id: 940</h6>
            <h6 class="card-body">ethnicity: Caucasian</h6>
            <h6 class="card-body">gender: F</h6>
            <h6 class="card-body">age: 24</h6>
            <h6 class="card-body">location: Beaufort/NC</h6>
            <h6 class="card-body">bbtype: I</h6>
            <h6 class="card-body">wfreq: 2</h6>
          </div>
          <div id="sample-metadata" class="card-body"></div>
        </div>
      </div>
      <div class="col-md-5">
        <div id="d3-container"/>
        <script src="bar.js"></script>
        <style>.rectangle:hover{opacity: 0.66;}</style>
      </div>
    </div>
      <div class="row">
        <div class="col-md-12">
          <div class= "bubble">
          <script src="./static/js/bubble.js"></script>
          </div>
        </div>
      </div>
    </div>

  <script src="./static/js/app.js"></script>
  <script src="./static/js/bonus.js"></script>

</body>
</html>