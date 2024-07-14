const urlForm = document.querySelector("#url_form");

console.log(urlForm);

urlForm.addEventListener("submit", function(event){

    event.preventDefault();

    const form = event.target;
    const url = form["url"].value;

    console.log(url);


    fetch(`https://cleanuri.com/api/v1/shorten/${url}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.dir(data);
    })
});
