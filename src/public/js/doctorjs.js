function ondetail(id) {
    $.ajax({
        url: "/doctor/detail",
        method: "GET",
        data: { ID: id },
        success: function (data) {
            //$('#totalprice').text(data);
            $("#Doctorname").text(data['name']);
            $("#phone_number").text(data['phone_number']);
            // $("#email").text(data['email']);
            $("#descriptions").text(data['descriptions']);
            $("#major").text(data['major']);
            // $("#job_title").text(data['job_title']);
            $("#work_hospital").text(data['work_hospital']);
            $("#support_zone").text(data['support_zone']);
            var dtr = document.getElementById('dtr-detail-profile');
            dtr.setAttribute('style', 'display: flex;');
            // $("#content-container").attr('style', 'display: none;');
        }
    });
};

// function outDetail() {
//     var dtr = document.getElementById('dtr-detail-profile');
//     dtr.setAttribute('style', 'display: none;');
//     // $("#content-container").attr('style', 'display: block;');
// }

function filterDT(value) {
    if (value == "region") { $("#doctor-list").children().css('display', 'block'); return; }
    $("#doctor-list").children("div[name!='" + value + "']").css('display', 'none');
    $("#doctor-list").children("div[name='" + value + "']").css('display', 'block');
};


function sortDT(value) {
    if (value == 'blank') return;
    else if (value == "nameSort") {
        if ($('#dtr-sort-list :selected').text() == 'A - Z') {
            $("#doctor-list > div").sort(asc_sort1).appendTo('#doctor-list');
        }
        else {
            $("#doctor-list > div").sort(desc_sort1).appendTo('#doctor-list');
        }
    }
    else if (value == "specialSort") {
        if ($('#dtr-sort-list :selected').text() == 'A - Z') {
            $("#doctor-list > div").sort(asc_sort2).appendTo('#doctor-list');
        }
        else {
            $("#doctor-list > div").sort(desc_sort2).appendTo('#doctor-list');
        }
    }
    else {
        if ($('#dtr-sort-list :selected').text() == 'Tăng dần') {
            $("#doctor-list > div").sort(asc_sort3).appendTo('#doctor-list');
        }
        else {
            $("#doctor-list > div").sort(desc_sort3).appendTo('#doctor-list');
        }
    }
}


// Sắp xếp tên theo thứ tự a - z
function asc_sort1(a, b) {
    a = $(a).children(".dtr-block-title").attr('id').split(' ');
    a = a[a.length - 1];
    b = $(b).children(".dtr-block-title").attr('id').split(' ');
    b = b[b.length - 1];
    return (a > b) ? 1 : -1;
}
// Sắp xếp tên theo thứ tự z - a
function desc_sort1(a, b) {
    a = $(a).children(".dtr-block-title").attr('id').split(' ');
    a = a[a.length - 1];
    b = $(b).children(".dtr-block-title").attr('id').split(' ');
    b = b[b.length - 1];
    return (a > b) ? -1 : 1;
}

// Sắp xếp chuyên môn theo thứ tự a - z
function asc_sort2(a, b) {
    a = $(a).children('.dtr-block-body').children('.dtr-detail').children('span:first-child').attr('name');
    b = $(b).children('.dtr-block-body').children('.dtr-detail').children('span:first-child').attr('name');
    return (a > b) ? 1 : -1;
}
// Sắp xếp chuyên môn theo thứ tự z - a
function desc_sort2(a, b) {
    a = $(a).children('.dtr-block-body').children('.dtr-detail').children('span:first-child').attr('name');
    b = $(b).children('.dtr-block-body').children('.dtr-detail').children('span:first-child').attr('name');
    return (a > b) ? -1 : 1;
}

// Sắp xếp kinh nghiệm theo thứ tự tăng dần
function asc_sort3(a, b) {
    a = $(a).children('.dtr-block-body').children('.dtr-detail').children('span:last-child').attr('name');
    b = $(b).children('.dtr-block-body').children('.dtr-detail').children('span:last-child').attr('name');
    return (parseInt(a) > parseInt(b)) ? 1 : -1;
}
// Sắp xếp kinh nghiệm theo thứ tự z - a
function desc_sort3(a, b) {
    a = $(a).children('.dtr-block-body').children('.dtr-detail').children('span:last-child').attr('name');
    b = $(b).children('.dtr-block-body').children('.dtr-detail').children('span:last-child').attr('name');
    return (parseInt(a) > parseInt(b)) ? -1 : 1;
}

// //
// $("#search-button").change(function(){
//     var sear =$("#doctor-list").children().length, x;
//     $("#doctor-list").children().css('display','none');
//     for(var i = 0;i< sear; i++){
//         x = $("#doctor-list").children().eq(i);
//         if(x.text().toLowerCase().search(this.value.toLowerCase()) != -1) x.css('display','block');
//     }
// });
function search(value) {
    var sear = $("#doctor-list").children().length, x;
    filterDT($("#dtr-filter-list-re").val());
    for (var i = 0; i < sear; i++) {
        x = $("#doctor-list").children().eq(i);
        if (x.text().toLowerCase().search(value.toLowerCase()) == -1) x.css('display', 'none');
    }
}
