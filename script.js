var $name;
var $cityName;
var $waterLevel = "<img src='images/waterdrop.png' alt='water'>";
function myFunction() {
    $name = document.getElementById("name").value;
    $cityName = document.getElementById("cityName").value;
    document.getElementById("userName").innerHTML = "Mayor " + $name;
    document.getElementById("userCity").innerHTML = $cityName;
    document.getElementById("waterLevel").innerHTML = $waterLevel;
    document.getElementById("map").style.filter = "blur(0px)";
    document.getElementById("login").style.display = "none";
  
    
}

/*
$test = "test";
console.log($test);
*/