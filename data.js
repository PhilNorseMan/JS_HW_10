var requestURL = 'https://randomuser.me/api/';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var userData = request.response;
    console.log(userData);


    const userDataDiv = document.querySelector('.userData');

    const userPhoto = document.createElement('img');
    userPhoto.classList.add('user_photo');
    userPhoto.setAttribute('alt', 'user photo');
    userPhoto.src = userData.results[0].picture.large;

    const userName = document.createElement('div');
    userName.classList.add('user_name');

    const firstName = document.createElement('h2');
    firstName.classList.add('first_name');
    firstName.textContent = userData.results[0].name.first;

    const lastName = document.createElement('h3');
    lastName.classList.add('last_name');
    lastName.textContent = userData.results[0].name.last;

    const country = document.createElement('p');
    country.classList.add('country');
    country.textContent = userData.results[0].location.country;

    userDataDiv.appendChild(userPhoto);
    userDataDiv.appendChild(userName);
    userName.appendChild(firstName);
    userName.appendChild(lastName);
    userDataDiv.appendChild(country);

};