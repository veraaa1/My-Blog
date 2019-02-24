$(window).scroll(function () { 
    if(window.scrollY <30){
        console.log(window.scrollY);
        $('header').css('boxShadow','0 40px 100px rgba(0,0,0,0)')
    }else{
        
        $('header').css('boxShadow','0 40px 100px rgba(0,0,0,.2)')
    }
    
    
});
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
    $('.right .learn-ul').css('marginTop',-245*(writeInd-1))
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
    window.addEventListener("load", function () {
        d("reveal")
       }), $(".element").typed({
        strings: ["I'm Web Developer", "I'm Web Designer"],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1e3,
        loop: !0
       })
       $(".col-md-12 .headline>.elements").typed({
        strings: ["WHAT I CAN", "WHAT I CAN"],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1e3,
        loop: !0
       })
})
