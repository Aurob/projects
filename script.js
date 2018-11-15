function left(day){
    console.log('left');
    document.getElementById('info').innerHTML= new Date();
    fetch('https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2017-'+day+'-01&cloud_score=True&api_key=DEMO_KEY')
        .then(function(response) {
        return response.json();
    }).then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}
function right(day){
    console.log('right');
  const userAction = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2017-'+day+'-01&cloud_score=True&api_key=DEMO_KEY');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
  }
  document.getElementById('info').innerHTML= new Date();
}
