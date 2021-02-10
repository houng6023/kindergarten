var ww = $(window).width()
console.log(ww)

if( ww >= 769 ) { 
    $('#nav .depth1 > li').hover(
    function(){
        $(this).addClass('on')
    },
    function(){
        $(this).removeClass('on')
    })

} else { 
    $('#nav .depth1 > li').on('click',function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })
}






$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})
$('.article:nth-child(1) .playstop').on('click', function () {
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        // 바로 위 .slick('slickPause')는 정해진거니깐 바꾸면 안돼!
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})

$('#header .open').on('click', function () {
    $(this).next().css({
        display: 'block'
    })
    $(this).css({
        display: 'none'
    })
    $(this).next().next().css({
        display: 'block' 
    })
})
$('#header .close').on('click', function () {
    $(this).prev().css({
        display: 'none'
    })
    $(this).css({
        display: 'none'
    })
    $(this).prev().prev().css({
        display: 'block'
    })
})

// $('#nav .depth1 > li').on('mouseover', function(){
//     $(this).addClass('on')

// })
// $('#nav .depth1 > li').on('mouseout', function(){
//     $(this).removeClass('on')

// })

// $('#nav .depth1 > li').hover(
// function(){
//     $(this).addClass('on')
// },
// function(){
//     $(this).removeClass('on')
// })


//네이브 고정하기
$(window).on('scroll', function(){
    var cst = $(window).scrollTop()
    if(cst>=10 && !$('#header').hasClass('on')  ){
        $('#header').addClass('on')
    }else if (cst<10 && $('#header').hasClass('on')){
        $('#header').removeClass('on')
    }
})