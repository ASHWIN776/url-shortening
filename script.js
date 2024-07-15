// const urlForm = document.querySelector("#url_form");

// console.log(urlForm);

const URL = document.querySelector("input");




const button = document.querySelector(".submit");

button.addEventListener("click", function(event){

    // event.preventDefault();

    // const form = event.target;
    // const url = form["url"].value;

    // console.log(url);

    const url = URL.value;

    fetch(`https://cleanuri.com/api/v1/shorten/${url}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
});
