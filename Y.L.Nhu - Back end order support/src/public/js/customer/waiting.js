$(document).ready(function() {
    $('.button-detail').click(function() {
        const id = $(this).data('id');
        $.ajax({
            type: 'post',
            url: '/waiting/order-details',
            data: { id: id },
            dataType: 'json',
            success: function(res) {
                console.log(res);

                // $('#order-detail').append();
            }
        });
    });
});