$(function(){
    var agent = navigator.userAgent.toLowerCase();

    if( navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (agent.indexOf("msie") != -1)) {
       // console.log("Internet Explorer 브라우저입니다.");
        $('.img_ani').removeClass('top_bottom')
        $('.img_ani').removeClass('img_ani')
    }
    
    
    //헤더
    if($('.news_header').length <= 0){

        var conHeight = []
        var headerHeight = $('.header').height()
        $('.header .gnb01 .depth02').each(function(index){
            conHeight[index] = $(this).innerHeight()     
        })
        
        $('.gnb01').on({
            mouseover:function(){
                $('.header').addClass('on')
                // console.log(headerHeight)
                    // console.log(Math.max(...conHeight))
                $('.header.on').height(headerHeight+Math.max(...conHeight))
            },
            mouseleave:function(){            
                // $('.header').removeClass('on')
            }
        })
        $('.header').on({      
            mouseleave:function(){            
                $('.header').removeClass('on')
                $('.header').height(headerHeight)
            }
        })
    }

    // 햄버거 메뉴
    $('.hamberger').click(function(){       
        if($('.hamberger_menu').hasClass('on')){            
            $('.hamberger_menu').removeClass('on')           
            $('html,body').removeClass('fixed')
            $(this).removeClass('checked')
            
            if($(window).width()<1024){
                depth01_menu.find('.depth02').slideUp()
            }else{
                $('.header_sec02').show()
            }
        }else{            
            $('.header').height(headerHeight)
            $('.header').removeClass('on')
            $(this).addClass('checked')
            $('html,body').addClass('fixed')
            $('.hamberger_menu').addClass('on')
            if($(window).width()<1024){
                
            }else{
                $('.header_sec02').hide()

            }
        }
        
    })
    $('.hm_close, .hamberger_menu .black_bg').click(function(){
        $('.hamberger_menu').removeClass('on')
        depth01_menu.find('.depth02').slideUp()
        $('html,body').removeClass('fixed')
        $('.hamberger').removeClass('checked')
    })

    var depth01_menu = $('.hamberger_menu .hm_sec02 .depth01 > li')
    
        depth01_menu.on({
            click:function(){     
                if($(window).width()<1024){       
                    if($(this).find('.depth02').css('display')=='block'){
                        depth01_menu.find('.depth02').slideUp()
                        depth01_menu.removeClass('on')
                    }else{
                        depth01_menu.find('.depth02').slideUp()
                        depth01_menu.removeClass('on')
                        $(this).find('.depth02').slideDown()
                        $(this).addClass('on')
                    }
                }
            },
        })
    
    $(window).resize(function(){
        if($(window).width()<1024){       
            
        }else{  
            depth01_menu.find('.depth02').show()
        }
    })

    var slideContainer01 = $('.sec02_slider01_list');
    slideContainer01.each(function(){
        slideContainer01.slick({
            infinite : false, 
            slidesToShow : 6,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow: $('.sec02_slider01 .sec02_arrow.prev'),
			nextArrow: $('.sec02_slider01 .sec02_arrow.next'),
            dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : false,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            draggable : false, 
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 5,
                  }
                },
                {
                    breakpoint: 1200,
                    settings: {
                      
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        infinite : false,
                        arrows : false,
                        dots : true, 
                        autoplay : false,
                        rows:2,
                        slidesPerRow: 1,
                        slidesToShow:3,
                        slidesToScroll:3,
                    }
                },
            ]
        });
        slideContainer01.find('li').on({
            mouseover:function(){
                $(this).addClass('on')
            },
            mouseleave:function() {
                $(this).removeClass('on')
            }
        })
      
        
    })
    $(window).load(function(){
        if($(window).width() < 769){
            $('.section02 .sec02_slider01_list li').removeClass('top_bottom')
            $('.section02 .sec02_slider01_list li').removeClass('img_ani')
            $('.section02 .sec02_slider02_list li').removeClass('top_bottom')
            $('.section02 .sec02_slider02_list li').removeClass('img_ani')
        }
    })
    
    var slideContainer02 = $('.sec02_slider02_list');
    slideContainer02.each(function(){
        slideContainer02.slick({
            infinite : false, 
            slidesToShow : 6,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow: $('.sec02_slider02 .sec02_arrow.prev'),
			nextArrow: $('.sec02_slider02 .sec02_arrow.next'),
            dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : false,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            draggable : false, 
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                      slidesToShow: 5,
                    }
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                    breakpoint: 769,
                    settings: {
                        infinite : false,
                        arrows : false,
                        dots : true, 
                        autoplay : false,
                        rows:2,
                        slidesPerRow: 1,
                        slidesToShow:3,
                        slidesToScroll:3,
                    }
                },
            ]
        });
  
        if(!$('.content_wrapper').hasClass('product')){
            slideContainer02.find('li').on({
                mouseover:function(){
                    $(this).addClass('on')
                },
                mouseleave:function() {
                    $(this).removeClass('on')
                }
            })
        }
    })
    $(window).on("scroll", function(){
        var sct = $(window).scrollTop();
        //헤더 픽스
        $(".header").each(function(){
            if(sct > 0){
                $('.header').addClass('fixed')
            } else {
                $('.header').removeClass('fixed')
            }
        })
        
        // 이미지 애니메이션
        $(".top_bottom").each(function(){
            var otop = $(this).offset().top;
            var wtop = $(window).scrollTop() + $(window).height();

            if ( wtop > otop)
            {
                $(this).addClass("img_aniload");
            } else {
                $(this).removeClass("img_aniload");				
            }
        });
        
        
        if(sct < 300){
            $('.aside_btn').not('.shop').addClass('down');
            $('.aside_btn').not('.shop').removeClass('top');
            
            
        } else {
            $('.aside_btn').not('.shop').removeClass('down');
            $('.aside_btn').not('.shop').addClass('top');			
        }
    });

    // aside 영역
    $('.btn.to_top').click(function(){
		$('html,body').animate({ scrollTop: 0}, 1000);	
		
	})
	$('.btn.to_down').click(function(){
		$('html,body').animate({ scrollTop: ($('html').height())-($(window).height())}, 1000);	
		
	})	

    // 챗봇
    $('.quick_btn').click(function(){
        
        $.ajax({
	     	url :'/chat/getCate',
	       	type : 'get',
	       	success: function(data){
				$('.chat_box.main').empty();
			
			/*	data.data.forEach(e => 
					$('.chat_box.main').append('<button type="button" class="bing_cate" onclick="contScrollDown()" data-idx="'+e.IDX+'" data-view="'
					+e.VIEW_TYPE+'" data-link="'+e.LINK+'">'+e.NM+'</button>')
				);*/
				data.data.forEach(function(e) {
 						
						if (e.VIEW_TYPE == "N_coment" && e.LINK != "" && e.cnt == 0){
							$('.chat_box.main').append('<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							// +e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'">'+e.NM+'</button>')
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'" data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+' >'+ '</button>')
						} else {
                            $('.chat_box.main').append('<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'"  data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+'</button>')
						}
					
				});
				
	       }
	    });
    })
    
    $(document).on('click', '.bing_cate', function() {
		var idx = $(this).data('idx');
		var nm = $(this).text();
		var view = $(this).data('view');
		var link = $(this).data('link');
		var cnt = $(this).data('cnt');
		var guide_text = $(this).data('guide_text');
		
		if (view == 'N_coment' && cnt ==0){
			$.ajax({
				url :'/chat/insStat',
		       	type : 'post',
		       	data : {idx:idx},
		       	success: function(data){
					   
			   }
			})
			if ( link != null && link != ''){	  
				window.open(link, "_blank");
			}
			return;
		}
		
		$('#target').append('<div class="chat_box bing_user bing_user_'+ idx +'"> <p class="chat_ans"> '+nm+' </p> </div>');
		
		//1차 분류 안내문구 있을 시
		if (guide_text != '' && guide_text != null){
			$('#target').append('<div class="chat_wr"><div class="chat_box"> <div class="chat_box main">'
			+ ' <div class="chat_box bing_ad"><p class="chat_ans">'+guide_text+'</div></div></div></div>');
		}
		
		$.ajax({
			url :'/chat/getCateDetailList?idx='+idx,
	       	type : 'get',
	       	success: function(data){
				var list = data.data;

				//var html = '<div class="chat_wr"><div class="bing_chat_top"><div class="bing_chat_title flex_center"><div><span class="bing_chat_icon"><img src="/img/icon/chat_icon.png">';
				var html = '';
				if (list.length > 1){
					html = '<div class="chat_wr"><div class="chat_box"> <div class="chat_box main">';
					
					list.forEach(function(e) {
						
						if (e.VIEW_TYPE == "N_coment" && e.LINK != "" && e.cnt == 0){
							html += '<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'" data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+' >'+'</button>';
						} else {
                            html += '<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'" data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+'</button>';
							// +e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'">'+e.NM+'</button>';
						}

					});
					html += '</div></div></div>';
					$('#target').append(html);
	
				}else if (list.length ==1 && list[0].PAR == idx) {
					html = '<div class="chat_wr"><div class="chat_box"> <div class="chat_box main">';
					
					list.forEach(function(e) {
						//html += '<button type="button" class="bing_cate" onclick="contScrollDown()" data-idx="'+e.IDX+'" data-view="'
						//+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'">'+e.NM+'</button>';
						
						if (e.VIEW_TYPE == "N_coment" && e.LINK != "" && e.cnt == 0){
							html += '<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'" data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+' >'+'</button>';
							// +e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'">'+e.NM+'</button>';
						} else {
                            html += '<button type="button" class="bing_cate" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'" data-view="'
							+e.VIEW_TYPE+'" data-link="'+e.LINK+'" data-cnt="'+e.cnt+'" data-guide_text="'+e.GUIDE_TEXT+'">'+e.NM+'</button>';
						}
						
					});
					html += '</div></div></div>';
					$('#target').append(html);
				} 
				else if (list.length ==1) {console.log(1);
					 list = list[0]		
					 html += '<div class="chat_wr">'
					 html += 
                     //  '</span></div>'+
                     '<div class="bing_chat_top bing_chat_top_'+idx+'">'+
                     '<div class="bing_chat_title flex_center">'+
                     '<div>'+
                     '<span class="bing_chat_icon">'+
                     '<img src="/img/icon/chat_icon.png">'+
                     '</span>'+
                     '</div>'+
                     '<h4 class="font_bingbold">빙그레</h4>'+
                     '</div>'+
                     '</div>'
                     
                     //  '</div></div>'+
                     + '<div class="chat_box bing_ad"><p class="chat_ans">'+list.CONTENT+'</div>';
                     
                     if( list.ATTACH_FILE != "" && list.ATTACH_FILE != null || list.LINK != "" && list.LINK != null){
                         
                         if(list.ATTACH_FILE == null || list.ATTACH_FILE == ""){
                             // html += '<div class="chat_box bing_ad img_cont">';   
                            } else{
                                html += '<div class="chat_box bing_ad img_cont"><div class="imgbox">'
                                + '<img src="'+list.ATTACH_FILE+'" alt=""></div>';   
                            }                            
                        }
                        if (list.LINK != "" && list.LINK != null ){
                            html +='<a href="'+list.LINK+'" class="link_btn" target="_blank">바로가기</a></div></div>';
                        }   
                        
                        
                    html += '</div>'
                        
                    $('#target').append(html);
                    html = '<div class="chat_wr"><div class="chat_box"> <div class="chat_box main">';
					
					if (data.list != null){
						data.list.forEach(function(e) {
							html += '<button type="button" class="" onclick="contScrollDown('+e.IDX+')" data-idx="'+e.IDX+'">'+e.NM+'</button>'; 					
						});
						html += '</div></div></div>';
						$('#target').append(html);
					} else{
	                     html = '<div class="chat_wr chat_box"><div class="chat_box bing_ad"><p class="chat_ans">다른 문의가 있으시면 언제든지 말씀해 주세요.</p></div><div class="chat_box">' 
                    	+ '<button type="button" class="bing_cate2"><a href="/center/service_email">1:1 문의하기</a></button></div></div>';
	                   	$('#target').append(html);
                   	}
				} else {
					 html = '<div class="chat_wr chat_box"><div class="chat_box bing_ad"><p class="chat_ans">다른 문의가 있으시면 언제든지 말씀해 주세요.</p></div><div class="chat_box">' 
                    + '<button type="button" class="bing_cate2"><a href="/center/service_email">1:1 문의하기</a></button></div></div>';
                   	$('#target').append(html);
				}
				
			}
		})

	});


    // 토글
    $('#bing_chat .toggle_tit').click(function(){
        $('#bing_chat .dim_box').addClass('act')
    })
    $('#bing_chat .toggle_cont .button').click(function(){
        $('#bing_chat .toggle_cont').hide();
        $('#bing_chat .toggle_it').removeClass('act')
        $('#bing_chat .dim_box').removeClass('act')
        
      /*  $.ajax({
			url :'/chat/getStat',
		    type : 'get',
		    success: function(data){
			
			}
		})
		*/
    })

    // 즐거운 빙그레 뉴스
    
      var masonryOptions = {
        // options
        itemSelector: '.grid-item',
        columnWidth: '.sec03_news_list li',
        gutter: 30,
        horizontalOrder: true,
      }
      $('.sec03_news_list').masonry(masonryOptions);
      $(window).resize(function() {
        if($(window).width() < 769){
            $('.sec03_news_list').masonry('destroy');
            
        }else{
            $('.sec03_news_list').masonry(masonryOptions);
        }
      });

  

    $('.sec03_news_list li').on({
        mouseover:function(){
            $(this).addClass('on')
        },
        mouseleave:function() {
            $(this).removeClass('on')
        }
    })


    // 자주 묻는 질문
    $('.qna_list li').on({
        mouseover:function(){
            $(this).addClass('on')
        },
        mouseleave:function() {
            $(this).removeClass('on')
        }
    })

  
})
function bing_close_btn(){
    $('#bing_chat').removeClass('chat_on');
    $('.chat_box.main').empty();
    $('.bing_user').remove();
    //$('.chat_box').not(':eq(0)').remove();
    $('.chat_wr').not(':eq(0)').remove();
}

function targetRefresh(){
    console.log('move top')
    // $('#chat_hidden01').focus()
    $('#chat_hidden01').get(0).scrollIntoView({block:"end",behavior:'smooth'})
   
    $('.bing_user').remove();
    //$('.chat_box').not(':eq(0)').remove();
    $('.chat_wr').not(':eq(0)').remove();
}

function contScrollDown(num){    
    var target = 'bing_user_'+num
    setTimeout(function(){
        // $('.'+target).scrollIntoView({block:"end", behavior:'smooth'})
        $('.'+target).last().get(0).scrollIntoView({block:"start", behavior:'smooth'})
    }, 300)
}

$(document).mouseup(function (e){
        var LayerPopup = $("#bing_chat");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("chat_on");
        }
        $('.quick_btn').click(function(){
            if(!LayerPopup.hasClass('chat_on')){
                LayerPopup.addClass("chat_on");
            }else{
				bing_close_btn();
                LayerPopup.removeClass("chat_on");
            }
        })
    });
