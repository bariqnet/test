$(document).ready(function () {
    $('#form-login input[name=username]').focus();
    $('#login-button').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.html('<i class="fa fa-refresh fa-pulse fa-fw"></i>').attr('disabled', true);
        var formdata = $('#form-login').serialize();
        $.ajax({
            type: 'POST',
            url: '/login',
            data: formdata,
            success: function (data) {
                $this.html('<i class="fa fa-check"></i>');
                $('.invalid-feedback').hide();
                setTimeout(function () {
                    var last_url = sessionStorage.getItem("last_url");
                    if (last_url) {
                        window.location.replace(last_url);
                    } else {
                        window.location.replace("/dashboard?welcome");

                    }
                }, 1000);
            },
            error: function () {
                setTimeout(function () {
                    $('.invalid-feedback').fadeIn();
                    $this.html('Giriş Yap').attr("disabled", false);
                }, 1000)
            }
        });
    });
});