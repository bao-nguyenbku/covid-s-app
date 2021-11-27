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
$(document).ready(function(){
    var addr = $("#dtr-filter-list-re").attr('name').split(',');
    addr = addr[addr.length-2];
    addr = addr.slice(1);
    if(addr == null) return;
    $("#dtr-filter-list-re").val(addr).change();
    filterDT(addr);
})
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

function fixtext(x){
    return x.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
    .replace(/đ/g, "d").replace(/Đ/g, "D").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/Ỳ|Ý|Y|Ỷ|Ỹ/g,"Y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ.+/g,"o").replace(/Ò|Ó|Ọ|Ỏ|Ỡ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ.+/g,"O")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e").replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ.+/g, "E")
    .replace(/ì|í|ị|ỉ|ĩ/g,"i").replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I");
}
// Sắp xếp tên theo thứ tự a - z
function asc_sort1(a, b) {
    a = $(a).children(".dtr-block-title").attr('id').split(' ');
    a = fixtext(a[a.length - 1]);
    b = $(b).children(".dtr-block-title").attr('id').split(' ');
    b = fixtext(b[b.length - 1]);
    return (a > b) ? 1 : -1;
}
// Sắp xếp tên theo thứ tự z - a
function desc_sort1(a, b) {
    a = $(a).children(".dtr-block-title").attr('id').split(' ');
    a = fixtext(a[a.length - 1]);
    b = $(b).children(".dtr-block-title").attr('id').split(' ');
    b = fixtext(b[b.length - 1]);
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
