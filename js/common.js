$(function(){
    // 페이지 타이틀 변경
    var webTitle    
    if($('.sub_tit h4').length > 0){
        webTitle = $('.sub_tit h4').text()      
        document.title = '빙그레 - '+webTitle;
    }
    else if($('.main_tit_wr .main_tit h3').length > 0){
        if($('#product.detail .sec01 .txt_box .tit').length > 0){
            webTitle = $('#product.detail .sec01 .txt_box .tit').text()
            document.title = '빙그레 - '+webTitle;
        }else{
            webTitle = $('.main_tit_wr .main_tit h3').text()
            document.title = '빙그레 - '+webTitle;
        }
    }

    // 나이스스크롤
    if($('select').length>0){
        $('select').niceSelect();
    }
    

    // 외부영역 클릭 시 팝업 및 슬라이드 오픈 닫기
    $(document).mouseup(function (e){
        var LayerPopup = $(".virtual"); // 가상
        if(LayerPopup.has(e.target).length === 0){
            $('.lang ul').slideUp()
            // $('.select_box').find('ul').slideUp()
            $('.footer_sec03 .f_sec03_box01 .flag_store ul').slideUp()
        }
    });
    // 언어
    $('.lang').click(function(){
        if($(this).find('ul').css('display')=='block'){
            $(this).find('ul').slideUp()
        }else{
            $(this).find('ul').slideDown()
        }
    })
     // 셀렉트박스
    //  $('.select_box').click(function(){
    //     if($(this).find('ul').css('display')=='block'){
    //         $(this).find('ul').slideUp()
    //     }else{
    //         $(this).find('ul').slideDown()
    //     }
        
    // })
      // 패밀리사이트
      $('.footer_sec03 .f_sec03_box01 .flag_store').click(function(){
        if($(this).find('ul').css('display')=='block'){
            $(this).find('ul').slideUp()
        }else{
            $(this).find('ul').slideDown()
        }
      })
      
     
      function historyBack() {
    	        
        /* 히스토리 목록 개수 확인 */
        var historyCount = history.length;
        alert("히스토리 개수 : " + historyCount);
        
        
        /* id 값 체크 및 로직 분기 처리 실시 */
        if(historyCount > 1 ){
         
            window.history.back(historyCount);
        }
        else {
          
            window.history.back();
            //window.history.go(-1);
        }
        
    };  	    	 

  
})