$(function(){
    $('.copy_btn').click(function(){
        $('textarea').select();
        document.execCommand('copy');
        Swal.fire({
            title: '주소가 복사되었습니다!',
            padding: '3em',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })
    });
});
