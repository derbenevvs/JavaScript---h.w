let blokText = document.querySelector(".bloc");
let blocP = document.createElement("p");
blocP.classList.add(".bloc-p");
blokText.insertAdjacentElement("afterbegin", blocP);



function clikTransformation() {

    let textNew = document.getElementById("text").innerText.replace(/\s'/g, ' "');
    let text = textNew.replace(/'\s/g, '" ');
    return blocP.innerText = text;
};

