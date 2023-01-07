import $ from 'jquery'
let n = localStorage.getItem('n') || 10
let $number = $('.content');
$number.text(n);
let number = parseInt(n);
$('.addition').click(() => {
    number += 1;
    $number.text(number);
    localStorage.setItem('n',number);
})
$('.subtraction').click(() => {
    number -= 1;
    $number.text(number);
    localStorage.setItem('n',number)
})
$('.multiplication').click(() => {
    number *= 2;
    $number.text(number);
    localStorage.setItem('n',number)
})
$('.division').click(() => {
    number /= 2;
    $number.text(number);
    localStorage.setItem('n',number)
})