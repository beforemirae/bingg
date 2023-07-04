$(function(){
    // sub menu 활성화
    if($(".tit_wr").length > 0){
        $(this).find('.tab_wr .tab_cont').each(function(){
            if($(this).text() == $('.sub_tit > h4').text() ){
                $(this).find('.tab_wr .tab_cont').removeClass('act');
                $(this).addClass('act');
            }
        })
        // 모바일 대응
        if($('.tab_wr .tab_list > .act').length > 0){
            var x = $('.tab_wr .tab_list > .act').offset().left - 100;
            $(".tab_wr").scrollLeft(x);		
        }
    }

    if($('.en .tab_wr .tab_list > .act').length > 0){
        var en_x = $('.en .tab_wr .tab_list > .act').offset().left - 100;
        console.log("en_x =", en_x)
        $(".en .tab_wr").scrollLeft(en_x);		
    }
    
    // sub nav 2depth
    if($(".brec_wr .brec.n3").length > 0){
      var dep2_txt = $('.tab_cont.act').text()
    //   console.log(dep2_txt)
      $(".brec_wr .brec.n3").text(dep2_txt)
      
    }
    // 투자정보 nav depth
    // if($(".brec_wr .brec.n4").length > 0){
    //   var dep3_txt = $('.tab_cont.on').text()
    //   console.log(dep3_txt)
    //   $(".brec_wr .brec.n4").text(dep3_txt)
    // } 
    // if ($(".invest_announce_list .brec_wr .brec.n4").length > 0 
    //  || $(".ir_list_view_wr .brec_wr .brec.n4").length > 0 
    //  || $(".invest_announce_list_view_wr .brec_wr .brec.n4").length > 0
    //  || $(".supply_page .brec_wr .brec.n4").length > 0
    //  || $(".inquiry_page .brec_wr .brec.n4").length > 0
    //  || $("#system .brec_wr .brec.n4").length > 0
    //  || $("#eco .brec_wr .brec.n4").length > 0
    //  || $("#value .brec_wr .brec.n4").length > 0
    //  || $("#global .brec_wr .brec.n4").length > 0
    //  || $("#contribution .brec_wr .brec.n4").length > 0
    //  || $("#esg_reports .brec_wr .brec.n4").length > 0) {
    //     $(".brec_wr .brec.n4").addClass("dis-no")
    // }

    // tab
    if($('#ethics .cont_wr .tab_wr').length > 0){
        var tabList = $('.cont_wr .tab_list .tab_cont');
        var tabCont = $('.cont_wr .tab_cont_wr .tab_cont_it');
        // tabList.eq(0).addClass('act');
        tabList.click(function(){
            var idx = $(this).index();
            tabList.removeClass('act'); $(this).addClass('act');
            tabCont.removeClass('show'); tabCont.eq(idx).addClass('show');
        })
        
    }
    if($('#global .cont_wr .tab_wr').length > 0){
        var tabList = $('.cont_wr .tab_list .tab_cont');
        var tabCont = $('.cont_wr .tab_cont_wr .tab_cont_it');
        // tabList.eq(0).addClass('act');
        tabList.click(function(){
            var idx = $(this).index();
            tabList.removeClass('on'); $(this).addClass('on');
            tabCont.removeClass('show'); tabCont.eq(idx).addClass('show');
        })
        
    }

    if($('.history_fix').length > 0){
        if( $(window).width() > 767){
            /*히스토리 텍스트 박스 이동시 문구 변경*/
                $(window).scroll(function(){
                    var sct = $(window).scrollTop();
                    var fixB = $('.history_fix');
                    var txtB = $('.history_fix .txt_box > div');
                    var yearB = $('.history_fix .year_box > div');
                    var contBosb = $(window).height() - $(".history_box").offset().top + $(".history_box").outerHeight()
                    
                    $(".biz_box").each(function(){
                            var ost = $(this).offset().top - 380;
                            // console.log(ost)
                            // console.log(sct)
                            if (sct > ost){
                                var idx = $(this).index();
                                txtB.addClass('hide').eq(idx).removeClass('hide')
                                yearB.removeClass('on').eq(idx).addClass('on')
                                fixB.addClass('fixed').removeClass("abs")
                            }
                        });
            /* //히스토리 텍스트 박스 이동시 문구 변경*/
                /* 히스토리 텍스트 박스 픽스*/
                    if (sct < 618){
                        fixB.removeClass('fixed')
                    } else if (sct > contBosb) {
                        fixB.removeClass('fixed').addClass("abs")
                        if ($(window).width() < 767){
                            fixB.addClass('fixed').removeClass("abs")
                        }
                    }
                });    
                /* // 히스토리 텍스트 박스 픽스*/
            /* 버튼 클릭시 위치 이동 */
                $('.history_fix .year_box > div').click(function(){
                    var btn_idx = $(this).index();
                    var target = $('.biz_box').eq(btn_idx).offset().top;
                    
                    $('html, body').stop(). animate({scrollTop : target - 199}, 680)
                })
            /* // 버튼 클릭시 위치 이동 */
        };
    
    }
   
    //ir 자료실 
    $('.ir_page .select_year').click(function(){
        $(this).toggleClass('on')
    })

    // 제품 소개
    $('#product .sec03 .slick-slide > div').click(function(){
        $(this).find('.btn_wr').trigger('click');
    })

    // 토글
    // $('.toggle_it').eq(0).addClass('act').find('.toggle_cont').show();
    $('.toggle_tit').click(function(){
        var $this = $(this);
        if(!$this.closest('.toggle_it').hasClass('act')){
            $('.toggle_it').removeClass('act');
            $this.closest('.toggle_it').addClass('act');
            $('.toggle_cont').slideUp();
            $this.siblings('.toggle_cont').slideToggle();
        }else {
            $('.toggle_it').removeClass('act');
            $('.toggle_cont').slideUp();
        }
    })

    // 제품 리스트 슬라이드
    if($(".product_list_slide").length > 0){
        $('.product_list_slide').each(function(){
            $('.product_list_slide').not('.slick-initialized').slick({
                infinite : false,
                slidesToShow : 10,
                slidesToScroll : 1, 
                autoplay : false,
                swipeToSlide: true,
                draggable : true, 
                responsive: [
                    {
                    breakpoint: 1401,
                    settings: {
                        arrows : true,
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        arrows : true,
                        slidesToShow: 4,
                        }
                    }
                ]
            })
        });
    };

        $('.qna_list_slide').each(function(){
            $('.qna_list_slide').not('.slick-initialized').slick({
                infinite : false,
                slidesToShow : 10,
                slidesToScroll : 1, 
                autoplay : false,
                arrows : true,
                swipeToSlide: true,
                draggable : true,
                // initialSlide : 1,
                responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        arrows : true,
                        slidesToShow: 5,
                        // initialSlide : 6,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        arrows : true,
                        slidesToShow: 3,
                        // initialSlide : 10,
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        arrows : true,
                        slidesToShow: 2,
                        // initialSlide : 10,
                    }
                }
                    
                ]
            })
        });

        var slideContainer01 = $('.n1 .contri_detail_slide');    
        slideContainer01.slick({
            infinite : true, 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow: $('.n1 .magazine_slide_arrow.prev'),
            nextArrow: $('.n1 .magazine_slide_arrow.next'),
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : false,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            draggable : true, 
            
        });
        var slideContainer02 = $('.n3 .contri_detail_slide');    
        slideContainer02.slick({
            infinite : true, 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow: $('.n3 .magazine_slide_arrow.prev'),
            nextArrow: $('.n3 .magazine_slide_arrow.next'),
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : false,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            draggable : true, 
            
        });
        var slideContainer03 = $('.n4 .contri_detail_slide');    
        slideContainer03.slick({
            infinite : true, 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow: $('.n4 .magazine_slide_arrow.prev'),
            nextArrow: $('.n4 .magazine_slide_arrow.next'),
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : false,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            draggable : true, 
            
        });








    // var href = window.location.search; //
    // var svalue = "";
    // curr_url = href.split("?");
    // var listIt = $(".product_list_slide.qna_list_slide .list_it a span");
    // for (var i = 0; i < curr_url.length; i++)
    // {
    //     temp = curr_url[i].split("=");
    //     if ([temp[0]] == 'search_name') {
    //         svalue = decodeURI(temp[2]);
    //         // svalue = temp[1];
    //     }
    // }
    // for (var l = 0; l < listIt.length; l++)
    // {
    //     var txt = $(listIt).eq(l).text()
    //     var target = $(".product_list_slide.qna_list_slide .list_it a .active")
    //     var _txtIdx = target.closest('.slick-slide').index();
    //     var preUrl = svalue.split("&")
    //     var preUrlType02 = svalue.split("=")
        
    //     console.log(target)
    //     console.log('_txtIdx ' + _txtIdx)
    //     if(txt == preUrl[0] ||txt == preUrlType02[0] ){
    //         var _this = $(listIt),
    //         _thisIdx = _this.index();
    //         console.log(_this)
    //         $('.product_list_slide.qna_list_slide').slick('slickGoTo', _thisIdx - 1);
    //     }

        
    // }



    // 제품 상세 슬라이드
    // if($(".product_slide").length > 0){
    //     $('.product_slide').slick({
    //         infinite : false,
    //         slidesToShow : 1,
    //         slidesToScroll : 1,
    //         speed : 500,
    //         arrows : false,
    //         autoplay : true,
    //         autoplaySpeed : 4000,
    //         dots: false,
    //         customPaging : function(slider, i) {
    //             var slidernav = $(slider.$slides[i]).index()+1;
    //             return '<a>'+slidernav+'</a>';
    //         },
    //     });
    //     $('.slick-dots').appendTo($('.pagination'));
    //     $('.slick-dots').before($('.product_slide .slick-prev'));
    //     $('.slick-dots').after($('.product_slide .slick-next'));
    // }

    // if($(".report_box_sec01").length > 0){
        
    //     $('.cyber_form_wrap').hide() // 사이버신고, 신고처리결과 hide
    //     $('.cyber_form_wrap').eq(0).show() // 사이버신고 show

    //     $('.form_box').hide() // 실명제보, 익명제보 hide
    //     $('.form_box').eq(0).show() // 실명제보 show

    //     // 사이버신고 vs 처리결과
    //     $('.report_box_sec01 li').click(function(){

    //         $('.report_box_sec01 li').removeClass('on')
    //         var i = $(this).index()
    //         $(this).addClass('on')
                                    
    //         $('.cyber_form_wrap').hide() // 사이버신고, 신고처리결과 hide
    //         $('.cyber_form_wrap').eq(i).show()  // 사이버신고, 신고처리결과 중 해당 show
    //          // 사이버신고, 신고처리결과 중 해당 show 후 첫번째 form_box 만 노출
    //         $('.cyber_form_wrap').eq(i).find('.form_box').hide()
    //         $('.cyber_form_wrap').eq(i).find('.form_box').first().show()

    //         $('.cyber_form_wrap').find('.tab_list li').removeClass('on')
    //         $('.cyber_form_wrap').find('.tab_list li:first').addClass('on')
    //     })
    // }
    
    // if($(".cyber_form_wrap").length > 0){
      
    //     $('.cyber_form_wrap .tab_list li').click(function(e){
    //         e.preventDefault();
    //         $('.cyber_form_wrap .tab_list li').removeClass('on')
    //         $(this).addClass('on')
    //         var i = $(this).index()
    //         console.log(i)
    //         $('.form_list>li.name_line').hide()
    //         $('.form_list>li.name_line').eq(i).css('display','flex')
           
    //     })
    // }
    if ($(".ceo_page").length > 0) {
        if ($(window).width() > 768) {
            /*ceo 이미지 스크롤 시 이동*/
            $(window).scroll(function () {
                var sct = $(window).scrollTop();
                var ptB = $('.ceo_page');
                var txtB = $('.ceo_page .txt_box');
                // var target = txtB.height() + $(window).height() + txtB.offset().top;
                var target = $("#container").outerHeight(true) - $(window).height();

                $('.ceo_page .txt_box').each(function () {
                    var ost = $(this).offset().top - 150;
                    var top;
                    if ($(window).width() > 1440) {
                        top = sct - 600
                    } else {
                        top = sct - 500
                    }

                    if (sct < ost) {
                        // $('.ceo_page .img_box').stop().animate({'top': 0 }, 400)
                        // ptB.removeClass('end')
                    } else if (sct > ost && sct < target) {
                        // ptB.removeClass('end')
                        // $('.ceo_page .img_box').stop().animate({'top': top + 'px'}, 400)
                    } else if (sct > target) {
                        // ptB.addClass('end')
                        // $('.ceo_page .img_box').stop().animate({'top': 'auto'}, 400)
                    }
                });

            });
        }
    }

    // 개인정보처리방침
    if ($(".privacy_wrap").length > 0) {
        
        $('.privacy_wrap .tab_table li a, .privacy_add_section .box_wrap.n2 a').click(function () {
            
            var headerHeight = $('.header').innerHeight();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - headerHeight
            }, 300);
            return false;

        })
    }

    if ($(".popup_wrap").length > 0) {
        // $(".popup_wrap.product_list .popup_container .img_box .close_btn").click(function(){
        //     $(this).parents('.img_box').hide()
        // })
        $(".popup_wrap .popup_bg").click(function(){
            $(this).parents('.popup_wrap').hide()
        })
    }
  

    if ($(".popup_wrap").length > 0) {
       

    var layer = $('.popup_wrap .pop_up_box');
	var btnDayClose = $('.popup_container .close_day_btn');
	var btnClose = $('.popup_container .close_btn');
    var idx 
   
    layer.each(function(){     
        if($(this).index() > 2){            
            $(this).remove() // 팝업 갯수 제한
        }
        var index = $(this).attr('data-index')
        cook = 'layerCookie'+index
        // console.log('layerCookie'+index, $.cookie('layerCookie'+index))
        if($.cookie('layerCookie'+index) == index){
            // layer.show()
            $('#popup_'+index).hide()
            $('#popup_'+index).addClass('hide')
            $('#popup_'+index).removeClass('show')
       
        }else{
            // layer.hide()
            $('#popup_'+index).show()
        }
        
    })	
	btnDayClose.on("click", function(){		
        idx = $(this).parents('.pop_up_box').attr('data-index')
        $(this).parents('.pop_up_box').fadeOut('fast');
        $(this).parents('.pop_up_box').addClass('hide')
        $(this).parents('.pop_up_box').removeClass('show')
		$.cookie('layerCookie'+idx, idx);	
        if($('.pop_up_box.show').length < 1 ){
            $('.popup_wrap').hide()
        }
	})
	btnClose.on("click", function(){	
        $(this).parents('.pop_up_box').addClass('hide')
        $(this).parents('.pop_up_box').removeClass('show')
        $(this).parents('.pop_up_box').fadeOut('fast');
        // $('.popup_wrap').fadeOut('fast');
        if($('.pop_up_box.show').length < 1 ){
            $('.popup_wrap').hide()
        }
		
	})
    // alert($('.pop_up_box.hide').length)

    if($('.pop_up_box.show').length != 0 ){
        // alert('test')
        $('.popup_wrap').show()
    }else{
        // console.log("$('.pop_up_box').length",$('.pop_up_box').length, "$('.pop_up_box.hide').length",$('.pop_up_box.hide').length)
    }
    if($('.pop_up_box.show').length === 1 ){
        $('.pop_up_box.show').addClass("pos_c")
    }
//

    }
    // 익스 확인
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        // if($(".content_wrapper").hasClass("only_ms")){
        //     alert("인터넷 익스플로러 브라우저입니다..!!!!!")
        // }
    }

  
})