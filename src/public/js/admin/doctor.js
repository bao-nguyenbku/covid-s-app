$(document).ready(function () {
    $('.update-doctor-btn').click(function () {
        const id = $(this).data('doctor-id');
        $.ajax({
            type: 'get',
            url: '/admin/doctor/' + id,
            dataType: 'json',
            success: function (res) {
                console.log(res);
                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor').attr('action', `/admin/doctor/${res.data.id}/edit`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:first-child .form-group input').val(`${res.data.name}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(2) .form-group input').val(`${res.data.phone_number}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(3) .form-group input').val(`${res.data.major}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(4) .form-group input').val(`${res.data.work_hospital}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(5) .form-group input').val(`${res.data.experience}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(6) .form-group input').val(`${res.data.support_zone}`);

                $('#exampleModal-2 .modal-dialog .modal-body #edit-doctor .row .col-md-6:nth-child(7) .form-group textarea').val(`${res.data.descriptions}`);

                $('#image-preview-2').attr('src', `/upload/doctor/${res.data.image}`);
            }
        });
    });
});
function imagePreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("image-preview") || document.getElementById("image-preview-2");
        preview.src = src;
        preview.style.display = "block";
    }
}