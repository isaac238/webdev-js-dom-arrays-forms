(function(){
    let pricePounds;
    let exchangeRate = 0.87;
    let priceEuros;
    let form = document.getElementById('myForm');
    let result = document.getElementById('msg');

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    pricePounds = parseFloat(document.getElementById('pounds').value);
    priceEuros = parseFloat(document.getElementById('euros').value);
    if (isNaN(pricePounds) && isNaN(priceEuros)) {
        result.style.display = "block";
        result.innerHTML = "Enter a number";
        result.setAttribute('class', 'error');
    } else {
        if (pricePounds == 0) {
            result.style.display = "block";
            result.innerHTML = "You must enter more than zero."
            result.setAttribute('class', 'error');
        } else {

            if (!isNaN(pricePounds) && isNaN(priceEuros)) {
                console.log("pp has");
                priceEuros = pricePounds * exchangeRate;
                result.style.display = "block";
                priceEuros = priceEuros.toFixed(2);
                document.getElementById('euros').value = "You will get €"+priceEuros;
                result.removeAttribute('class');
            }
            if (!isNaN(priceEuros) && isNaN(pricePounds)) {
                console.log("pe has");
                pricePounds = priceEuros / exchangeRate;
                result.style.display = "block";
                pricePounds = pricePounds.toFixed(2);
                document.getElementById('pounds').value = "You will get £"+pricePounds;
                result.removeAttribute('class');
            }
        }
    }
    });

    document.getElementById('pounds').addEventListener('focus', emptyInputs)
    document.getElementById('euros').addEventListener('focus', emptyInputs)

    function emptyInputs() {
         document.getElementById('pounds').value = '';
         document.getElementById('euros').value = '';
         result.innerHTML = '';
         result.removeAttribute('class');
    }
}) ();