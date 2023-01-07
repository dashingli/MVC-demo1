import $ from 'jquery'
const $square = $('.square')
$square.removeClass('square-move')
$square.click((e)=>{
    let array = Array.from(e.target.classList);
    if(array.indexOf('square-move') === -1){
        $square.addClass('square-move')
        $square.removeClass('square-back')
    }else{
        $square.removeClass('square-move')
        $square.addClass('square-back')
    }
})