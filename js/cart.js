var cartIcon = document.querySelector('#cart')
    var cart = document.querySelector('.cart')
    var cartClose = document.querySelector('#close')
    
    //to open cart on click
    cartIcon.addEventListener("click", function()
    {
        cart.style.display = "block";
    })

    //to close cart on click
    cartClose.addEventListener("click", function()
    {
        cart.style.display = "none";
        car.style.behavio
    })

    // Cart working JS
    document.addEventListener('DOMContentLoaded', ready);

    
    function ready() {
        var removeCartButton = document.getElementsByClassName('cart-remove');
        for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    }
    // remove Items from cart
    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateTotal();
    }

    //Quantity Changes
    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateTotal();
    }

    //Update Total
    function updateTotal() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            var price = parseFloat(priceElement.innerText.replace("Rs", ""));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
            total = Math.round(total * 100) / 100;
        }

        document.getElementsByClassName('total-price')[0].innerText = "Rs " + total;
    }
    
    document.querySelector('.total').addEventListener('click', function() {
            alert('Your Order has been placed!');
        
    });
