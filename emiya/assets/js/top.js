$(function(){
	$(".menu_btn").mouseover(function(){

		$("#wrapper").addClass("nav_open")
		$(".menu_btn").addClass('nav_open')

		$("#gloaval").show().removeClass('nav_close').addClass('nav_open')
	})


	$("#gloaval").find("ul").mouseleave(function(){
		$("#wrapper").removeClass("nav_open")
		$(".menu_btn").removeClass('nav_open')

		$("#gloaval").removeClass('nav_open').addClass("nav_close")
		setTimeout(function(){
			$("#gloaval").hide();
		},500)
	})

	$("#gloaval").find("ul").find("a").click(function(){
		$("#wrapper").removeClass("nav_open")
		$(".menu_btn").removeClass('nav_open')

		$("#gloaval").removeClass('nav_open').addClass("nav_close")
		setTimeout(function(){
			$("#gloaval").hide();
		},500)
	})




	$('a[href^="#"]').on("click", function (evt) {
		var h = $("header").height();
		$("" + $(evt.delegateTarget).attr("href")).velocity("stop").velocity("scroll", {
			duration: 500,
			offset:h*-1,
			ease:'easeInOutSine'
		});
		$(".gloval").removeClass("open_menu");
		return false;
	});

})



$(window).on('load',function(){

	// fade-in
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/5){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});
