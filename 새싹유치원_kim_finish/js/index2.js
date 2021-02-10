
$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{ //슬릭 슬라이더 화살표 없애는거! 원하는 사이즈에서 부터
        breakpoint:769, //원하는 사이즈보다 1더 크게 잡기
        settings: {
            arrows:false
        }
    }]
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


//네이브 고정하기
$(window).on('scroll', function(){
    var cst = $(window).scrollTop()
    if(cst>=10 && !$('#header').hasClass('on')  ){
        $('#header').addClass('on')
    }else if (cst<10 && $('#header').hasClass('on')){
        $('#header').removeClass('on')
    }
})

//  창이 작아졌을때 햄버거 버튼을 누르면 엑스가 되고 엑스를 누르면 햄버거가되는
$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
    $(this).next().addClass('on')
})
$('#header .close').on('click',function(){
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().find('.depth1 > li').removeClass('on') // 햄버거 네이브에서 뎁스2를 클릭해고 엑스버튼을 누른뒤 다시 열어보면 뎁스2가 열려있음 그래서 그것을 리셋하기위해!
})

/////////// 여기서 부터 ////////////
// resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

// 함수선언   모르겠으면 복붙해서 쓰기 위 deviceSize 의 값만 원하는 값으로 바꿔서 
function scrollox(status) {
    $('html').css({
        overflowY:status
    })
    var htmlwidth = $('html').width()
    return htmlwidth
}
var swh = scrollox('hidden')
var sws = scrollox('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize1 = deviceSize1 - swd;
    deviceSize2 = deviceSize2 - swd;
}


var ww;
// 함수선언 여기서는 this사용 금지 this를 지목하면 그건 윈도우로 먹힌다는데..?
function init(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('pc') ) {    //고정
        $('html').addClass('pc').removeClass('mobile tablet')   //고정   
        $('html').scrollTop(0) // 사이즈가 달라지는 최초이면 스크롤이 위로 자동올라감
       
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {    //고정
        $('html').addClass('tablet').removeClass('pc mobile')   //고정
        $('html').scrollTop(0) // 사이즈가 달라지는 최초이면 스크롤이 위로 자동올라감
        $('.depth1 > li').removeClass('on') // 햄버거네이브를 열어놓고 사이즈변경우 다시 그 사이즈에서 뎁스2가 그대로 열려있으니 리셋할때!
        
    } else if ( ww<=deviceSize2  && !$('html').hasClass('mobile') ) {    //사이즈가 두개일때 고정
        $('html').addClass('mobile').removeClass('pc tablet')   //사이즈가 두개일때 고정
        $('html').scrollTop(0) // 사이즈가 달라지는 최초이면 스크롤이 위로 자동올라감
        $('#nav').removeClass('on') 
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
        
    }
}

// 함수호출 
init()

$(window).on('resize', function(){
    init()
})
/////////////////////// 여기까지 ////////////////////////

//클릭 호버
$('.depth1 > li').hover(
    function(){
        if($('html').hasClass('pc') || $('html').hasClass('tablet')) {
            $(this).addClass('on')
        }
    },
    function(){
        if($('html').hasClass('pc') || $('html').hasClass('tablet')) {
            $(this).removeClass('on')
        }
    }
)

$('.depth1 > li').on('click',function(e){
    if($('html').hasClass('mobile')){
        e.preventDefault() 
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})
$('.depth2 > li').on('click',function(e){
    e.stopPropagation()

})
