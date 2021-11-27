$(document).ready(function () {
    $('#save-profile-btn').click(function () {
        $.ajax({
            type: 'post',
            url: '/profile',
            data: $('#edit-profile-2').serialize(),
            success: function (res) {
                if (res.code == 200) {
                    $('#edit-profile-1').submit();
                }
            }
        });
    });
    /**
     * DELETE A ADDRESS OF USER FROM LIST
     */
    $('.delete-address-btn').click(function () {
        const address = $(this).data('address');
        $.ajax({
            type: 'post',
            url: '/profile/delete-address',
            data: { address: address },
            success: function (res) {
                if (res.status == 200) { // OK
                    $('#list-address-user li').each(function (i) {
                        let address2 = $(this).text().replace("Xóa", "");
                        const address3 = address2.replace(/(\r\n|\n|\r)/gm, "", "").trim();
                        if (address3 == address) {
                            $(this).remove();
                        }
                    });
                }
            }
        });
    });
});