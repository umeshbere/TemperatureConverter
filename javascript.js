let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");
celsiusInput.addEventListener("input", function () {
  let celsius = parseFloat(celsiusInput.value);
  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;
  fahrenheitInput.value = fahrenheit.toFixed(3);
  kelvinInput.value = kelvin.toFixed(3);
});

fahrenheitInput.addEventListener("input", function () {
  let fahrenheit = parseFloat(fahrenheitInput.value);
  let celsius = (fahrenheit - 32) * (5 / 9);
  let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
  celsiusInput.value = celsius.toFixed(3);
  kelvinInput.value = kelvin.toFixed(3);
});

kelvinInput.addEventListener("input", function () {
  let kelvin = parseFloat(kelvinInput.value);
  let celsius = kelvin - 273.15;
  let fahrenheit = (kelvin + 273.15) * (9 / 5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(3);
  celsiusInput.value = celsius.toFixed(3);
});
