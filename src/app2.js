import $ from 'jquery';
import './app2.css';
$('.tab-bar').on('click', '.tab', function ()
{
    $(this).addClass('highlight')
    $(this).siblings().removeClass('highlight')
    let index = $(this).index()
    $('#app2').children('.content').eq(index).addClass('active').siblings().removeClass('active')
})
$('.tab').eq(0).trigger('click')
