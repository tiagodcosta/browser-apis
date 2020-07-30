// First you should enable the support for the Sensor APIs
// https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs

// On Chrome, go to
// 1) about:flags
// 2) Enable Generic Sensor Extra Classes


// 1) Give permission to ambient-light-sensor
navigator.permissions.query({name:'ambient-light-sensor'}).then(function(result) {
  if (result.state === 'granted') {
    console.log("on")
  } else if (result.state === 'prompt') {
    console.log("off")
  }
});


// 2) Detect light
if('AmbientLightSensor' in window) {
  const sensor = new AmbientLightSensor();

  sensor.onreading = () => {
    console.log('Current light level =>', sensor.illuminance);
  }

  sensor.start();
}