$(window).scroll(function () { 
    if(window.scrollY <30){
        console.log(window.scrollY);
        $('header').css('boxShadow','0 40px 100px rgba(0,0,0,0)')
        $('.mini-header').css('boxShadow','0 40px 100px rgba(0,0,0,0)')
    }else{
        
        $('header').css('boxShadow','0 40px 100px rgba(0,0,0,.2)')
        $('.mini-header').css('boxShadow','0 34px 109px rgba(0,0,0,.1)')
    }
    
    
});
$('.mini-header-title>a').click(function(){

    console.log($('.mini-header>ul').height());
    if($('.mini-header>ul').height()===0){
        $('.mini-header>ul').css({'height':'auto',})
    $('.mini-header').css('boxShadow','0 34px 109px rgba(0,0,0,.1)')
    $('.mini-header-title>a>svg').css('transform','rotate(360deg)')
    $('.mini-header-title>a>svg>path').css('fill','rgb(207, 74, 92)')
    
    }else{
        $('.mini-header>ul').css({'height':'0',})
    $('.mini-header').css('boxShadow','0 34px 109px rgba(0,0,0,0)')
    $('.mini-header-title>a>svg').css('transform','rotate(0deg)')
    $('.mini-header-title>a>svg>path').css('fill','#eee')
    }
    
})
var learnInd = 0
var writeInd = 0
$('.left .learn-page').click(function () {
    console.log($(this).parent().index());
    learnInd = $(this).parent().index()
    $('.left .learn-ul').css('marginTop',-245*(learnInd-1))
  })
$('.left .next').click(function () {
    if(learnInd>=2){
        learnInd = 1
    }else{
        learnInd ++
        
    }
    $('.left .learn-ul').css('marginTop',-245*(learnInd-1))
  })
  $('.left .prev').click(function () {
    console.log(learnInd);
    if(learnInd<=1){
        learnInd = 2
        
    
    }else{
        learnInd --
    }
    $('.left .learn-ul').css('marginTop',-245*(learnInd-1))
  })

  $('.right .learn-page').click(function () {
    console.log($(this).parent().index());
    writeInd = $(this).parent().index()
    $('.right .learn-ul').css('marginTop',-245*(writeInd-1))
  })
$('.right .next').click(function () {
    if(writeInd>=3){
        writeInd = 1
    }else{
        writeInd ++
        
    }
    $('.right .learn-ul').css('marginTop',-263*(writeInd-1))
  })
  $('.right .prev').click(function () {
    console.log(writeInd);
    if(writeInd<=1){
        writeInd = 3
        
    
    }else{
        writeInd --
    }
    $('.right .learn-ul').css('marginTop',-245*(writeInd-1))
  })
  $('.card-art').hover(function () {
       $(this).css({'marginTop':'-10px','boxShadow':'1px 1px 5px 3px rgba(0,0,0,0.125)'})
          
      },function () { 
        $(this).css({'marginTop':'0px','boxShadow':'1px 1px 5px 3px rgba(0,0,0,0.0)'})
       }
  );
$(document).ready(function () {
  
    $.ajax({
        type: "GET",
        url: "http://localhost:3008/comments",
        success: function (response) {
            console.log(response);
            if(response.length){
                $('.block-com').css('display','none')
                $('.have-com').css('display','block')
                $.each(response, function (indexInArray, valueOfElement) { 
                        const li = `<li>${valueOfElement.content}</li>`
                        $('.have-com ul').append(li);
                });
                  
            }else{
                $('.block-com').css('display','block')
                $('.have-com').css('display','none')
            }
        }
    });
    $('.handle-comment').click(function(){
        const content = $('#comment').val().trim()
        const ind = new Date().getTime()
        if(content){
          jQuery.ajax({
              type: "POST",
              url: "http://localhost:3008/comments",
              data:{id:ind,content:content},
              success: function (response) {
                $('.block-com').css('display','none')
                $('.have-com').css('display','block')
                  const li = `<li>${content}</li>`
                  $('.have-com ul').append(li);
                  $('#comment').val('')
              }
          });
        }else{
            alert('评论不许为空！')
        }
    })
});
$('#nav-h').change(function (e) { 
    e.preventDefault();
    location.href = `#${e.target.value}`
});
$(window).load(function(){
    var options = {  
        useEasing: false, 	 	// 使用缓和
        useGrouping: true,	// 使用分组(是否显示千位分隔符,一般为 true)
        separator: ',',		// 分隔器(千位分隔符,默认为',')
        decimal: '.',			// 十进制(小数点符号,默认为 '.')
        prefix: '',			// 字首(数字的前缀,根据需要可设为 $,¥,￥ 等)
        suffix: ''			// 后缀(数字的后缀 ,根据需要可设为 元,个,美元 等) 
  };
  new CountUp("cet-num", 0, 479, 0, 3, options).start();
  new CountUp("cet-num1", 0, 436, 0, 3, options).start();
    window.addEventListener("load", function () {
        d("reveal")
       }), $(".element").typed({
        strings: ["I'm Web Developer!", "I Love Coding..."],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1e3,
        loop: !0
       })
})
$('.art-title>ul>li>a').click(function(){
  
    
    if($(this).parent().index()==0){
        $('#art>.one').css('display','block')
        $('#art>.two').css('display','none')
        $('#art>.three').css('display','none')
    }else if($(this).parent().index()==1){
        $('#art>.one').css('display','none')
        $('#art>.two').css('display','block')
        $('#art>.three').css('display','none')
    }else{
        $('#art>.one').css('display','none')
        $('#art>.two').css('display','none')
        $('#art>.three').css('display','block')
    }

})
$('.one>.grid-art:nth-child(1)').click(function(){
    window.location.href="https://vera-ecommerce.netlify.com/"
})
$('.two>.grid-art:nth-child(1)').click(function(){
    window.location.href="http://129.204.120.66:3010/"
})
$('.two>.grid-art:nth-child(2)').click(function(){
    window.location.href="https://vera-self-driving.netlify.com/"
})
$('.two>.grid-art:nth-child(3)').click(function(){
    window.location.href="https://art-collection.netlify.com/"
})
$('.three>.grid-art:nth-child(1)').click(function(){
    window.location.href="https://veraaa1.github.io/JQ-squeezebox/squeezebox.html"})
$('.three>.grid-art:nth-child(2)').click(function(){
        window.location.href="https://vera-react-todo.netlify.com/"})
$('.three>.grid-art:nth-child(3)').click(function(){
            window.location.href="https://veraaa1.github.io/loop-function/"})
$('.learn-inner .art-title ul li:nth-child(1) h3 a').click(function(){
    $('.original').css('display','block')
    $('.api').css('display','none')
}) 
$('.learn-inner .art-title ul li:nth-child(2) h3 a').click(function(){
    $('.original').css('display','none')
    $('.api').css('display','block')
}) 
