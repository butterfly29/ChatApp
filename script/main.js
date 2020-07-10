const {
    parseWithoutProcessing
} = require("handlebars");

window.onload = function () {

    $('.dropdown').click(function () {
        $(this).siblings(".submenu").toggleClass('hide');
    });
}
document.addEventListener("DOMContentLoaded", () => {
    //creating a new username
    if (document.querySelector("#formDisplay")) {
        document.querySelector("#formDisplay").onsubmit = () => {
            //Create new AJAX request
            let request = new XMLHttpRequest();

            //Assign value to submit
            let name = document.querySelector('#name').value;
            let data = new FormData();
            data.append('name', name);

            //Open request and send
            request.open("POST", "/name");

            request.send(data)
            //response
            request.onload = () => {
                let data = JSON.parse(request.responseText);
                if (data.success) {
                    document.querySelector("#form").style.dysplay = "none";
                    let h = document.createElement("h3");
                    h.innerHTML = "Welcome," + data.name + "!";
                    document.querySelector("#user-data").dataset.username = data.name;
                    document.querySelector("#DisplayName").append(h);
                    document.querySelector("#channelContainer").style.display = " ";
                } else {
                    document.querySelector("#DisplayName").innerHTML = "Unfortunately there was an error.. Please try again";
                }
            }
            return false;
        }
    }

});