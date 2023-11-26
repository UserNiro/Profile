$(document).ready(function(){
    AOS.init();
    // 커서 커스텀
    // const Cursor = $(".cursor")

    // const moveCursor = (e) => {
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;

    //     Cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0);`
    // }
    
    // $(window).mousemove(moveCursor);

    // 스크롤 버튼

    $(window).scroll(function(){
        var webTop = $(document).scrollTop();
        console.log(webTop);
    })
    // let sec2Top = $('sec-2').offset().top

    $('.left-li').click(function(){
        $('body,html').animate({scrollTop:0}, 500);
    })

    $('.center-li').click(function(){
        $('body,html').animate({scrollTop:800}, 500)
    })

    $('.right-li').click(function(){
        $('body,html').animate({scrollTop:2627}, 500)
    })

    // header 탭메뉴 호버 이벤트
    $(".header .right-box .left-li").mouseenter(function(){
        $(".header .right-box .left-li").addClass("active")
        $(".header .right-box .about").addClass("active")
    })
    $(".header .right-box .left-li").mouseleave(function(){
        $(".header .right-box .left-li").removeClass("active")
        $(".header .right-box .about").removeClass("active")
    })

    $(".header .right-box .center-li").mouseenter(function(){
        $(".header .right-box .center-li").addClass("active")
        $(".header .right-box .website").addClass("active")
    })
    $(".header .right-box .center-li").mouseleave(function(){
        $(".header .right-box .center-li").removeClass("active")
        $(".header .right-box .website").removeClass("active")
    })

    $(".header .right-box .right-li").mouseenter(function(){
        $(".header .right-box .right-li").addClass("active")
        $(".header .right-box .contact").addClass("active")
    })
    $(".header .right-box .right-li").mouseleave(function(){
        $(".header .right-box .right-li").removeClass("active")
        $(".header .right-box .contact").removeClass("active")
    })
    // contact 마우스 호버 이벤트
    $(".hoverbox1").mouseenter(function(){
        $(".hoverbox1").addClass("active")
        $(".icon1").addClass("active")
    })
    $(".hoverbox1").mouseleave(function(){
        $(".hoverbox1").removeClass("active")
        $(".icon1").removeClass("active")
    })

    $(".hoverbox2").mouseenter(function(){
        $(".hoverbox2").addClass("active")
        $(".icon2").addClass("active")
    })
    $(".hoverbox2").mouseleave(function(){
        $(".hoverbox2").removeClass("active")
        $(".icon2").removeClass("active")
    })
    
    $(".hoverbox3").mouseenter(function(){
        $(".hoverbox3").addClass("active")
        $(".icon3").addClass("active")
    })
    $(".hoverbox3").mouseleave(function(){
        $(".hoverbox3").removeClass("active")
        $(".icon3").removeClass("active")
    })
    
})