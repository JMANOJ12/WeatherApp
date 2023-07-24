var cityError = document.getElementById('name-error'); 

function validateCity() {
    var city = document.getElementById('city-name').value; 
    cityError.innerHTML = " ";
    if (city.length == 0 ){ 
        document.innerHTML = "City Name is Required"; 
        return false; 
    }

}