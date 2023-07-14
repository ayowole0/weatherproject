const apiKey = 'cb68962ac1ca5befa31432607898e525'; // Replace with your actual API key
// const locationForm = document.getElementById('locationForm');
// const latitudeInput = document.getElementById('latitudeInput');
// const longitudeInput = document.getElementById('longitudeInput');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const conditionsElement = document.getElementById('conditions');
// const forecastListElement = document.getElementById('forecastList');

const form= document.querySelector('#locationForm')
form.addEventListener('submit',async function (e) {
   e.preventDefault();
 const lati=form.elements.latitudeInput.value;
 const longi=form.elements.longitudeInput.value;

 console.log(form.elements.latitudeInput.value);
 console.log(form.elements.longitudeInput.value);



 const res= await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${longi}&appid=${apiKey}`);
 console.log(res.data);
 const newLI=document.createElement("LI");
 newLI.append(`Temperature: ${res.data.current.temp}`);
 det.append(newLI);

 const newLI2=document.createElement("LI");

 newLI2.append(res.data.timezone);
 det.append(newLI2);
});



