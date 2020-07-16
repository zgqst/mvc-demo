import $ from 'jquery';
import './app1.css';


let num = localStorage.getItem('n') || 100;
$('.result').text(num)
$('button').eq(0).click(function ()
{
    let content = +$('.result').text();
    content += 2;
    $('.result').text(content)
    localStorage.setItem('n', content);

})
$('button').eq(1).click(function ()
{
    let content = +$('.result').text();
    content -= 2;
    $('.result').text(content)
    localStorage.setItem('n', content);

})
$('button').eq(2).click(function ()
{
    let content = +$('.result').text();
    content *= 2;
    $('.result').text(content)
    localStorage.setItem('n', content);

})
$('button').eq(3).click(function ()
{
    let content = +$('.result').text();
    content /= 2;
    $('.result').text(content)
    localStorage.setItem('n', content);

})
$('button').eq(4).click(function ()
{
    $('.result').text('100')
    let content = +$('.result').text();
    localStorage.setItem('n', content);

})
