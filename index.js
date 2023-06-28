console.log('Temperature Converters');



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

function cToK(celsius) 
{
  var cTemp = celsius;
  var cTokelvin = cTemp + 273;
  var message = cTemp+'\xB0C is ' + cTokelvin + ' \xB0K.';
    console.log(message);
}

function kToC(kelvin) 
{
  var kTemp = kelvin;
  var kToCel = kTemp-273;
  var message = kTemp+'\xB0K is ' + kToCel + '\xB0C.';
    console.log(message);
}

function fToK(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToK = ((fTemp - 32) * 5 / 9)+273;
  var message = fTemp+'\xB0F is ' + fToK + '\xB0K.';
    console.log(message);
} 

function kToF(kelvin) 
{
  var kTemp = kelvin;
  var kToF = (kTemp-273) * 9 / 5 + 32;
  var message = kTemp+'\xB0K is ' + kToF + '\xB0C.';
    console.log(message);
}


cToF(30);
fToC(23);
cToK(10);
kToC(45);
fToK(32);
kToF(273);


