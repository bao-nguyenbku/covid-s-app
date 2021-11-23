$(document).ready(function() {
    $('#save-profile-btn').click(function() {
        $.ajax({
            type: 'post',
            url: '/profile',
            data: $('#edit-profile-2').serialize(),
            success: function(res) {
                if (res.code == 200) {
                    $('#edit-profile-1').submit();
                }
            }
        });
    });
});