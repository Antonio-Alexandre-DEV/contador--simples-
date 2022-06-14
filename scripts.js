setTimeout(azul, 2000);

function azul(){

    let h = document.getElementsByTagName("h1")[0];
    h.style.color = "blue";
}

var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

    function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
 }

        function decrement(){
            currentNumber = currentNumber - 1;
            currentNumberWrapper.innerHTML = currentNumber;
        }
