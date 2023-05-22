let loader = $('.loader');
$('#order-submit').click(function () {
    let product = $('#order-choice');
    let name = $('#order-name');
    let phone = $('#order-tPhone');
    let order = $('#order');
    let thanks =$('#thanks');
    let hasError = false;
    loader.css('display', 'flex');
    product.css('border-color', '#821328FF');
    name.css('border-color', '#821328FF');
    phone.css('border-color', '#821328FF');
    $('.error-input').hide();

    if (!product.val()) {
        product.next().show();
        product.css('border-color', 'red');
        hasError = true;
        loader.hide();

    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
        loader.hide();

    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
        loader.hide();

    }
    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                // console.log(msg)
                if (msg.success) {
                    order.hide();
                    thanks.css('display', 'flex');

                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');

                }

            });
    }


})