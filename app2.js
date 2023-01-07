import $ from 'jquery'
$('.tab-1').addClass('bc-color');
$('.tab-2').removeClass('bc-color');
$('.tab').click((e)=>{
    if(e.target.className === 'tab-1'){
        $('.tab-1').addClass('bc-color');
        $('.tab-2').removeClass('bc-color');
        $('.matter-one').removeClass('no-display');
        $('.matter-two').addClass('no-display');
    }else if(e.target.className === 'tab-2'){
        $('.tab-2').addClass('bc-color');
        $('.tab-1').removeClass('bc-color');
        $('.matter-two').removeClass('no-display');
        $('.matter-one').addClass('no-display');
    }
})