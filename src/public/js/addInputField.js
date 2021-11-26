$(document).ready(function() {
    var addButton = $('#add-input-btn');
    $(addButton).click(function(e) {
        e.preventDefault();
        $('#form-support').append('<div class="form-support-container"><div class="form-1"><label for="tb-1">Tên sản phẩm</label><input type="text" class="tb-1" name="itemName[]"></div><div class="form-2"><label for="tb-2">Số lượng</label><input type="text" class="tb-2" name="quantity[]"></div><div class="form-3"><label for="tb-3">Ghi chú</label><input type="text" class="tb-3" name="note[]"> </div></div>');
    });
})