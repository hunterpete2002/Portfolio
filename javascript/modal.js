
function modalFunc(array){
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modalContent")
    var header = document.getElementById("modalHeader") 
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    
    header.innerHTML = array[0]
    let i = 1;

    while (i < array.length) {
        console.log(array[i]);
        const newElement = document.createElement("li");
        newElement.innerText = array[i];
        content.appendChild(newElement);

        i++;
    }
    console.log("Done")
}