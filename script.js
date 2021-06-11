window.addEventListener('DOMContentLoaded', function(){

  // ＃リンクのスムーズスクロール
  
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 1000; // ミリ秒で記述
  let href= $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
  
  // ページトップへ
  $(function() {
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
  pagetop.fadeIn();
  } else {
  pagetop.fadeOut();
  }
  });
  $('a[href^="#"]').click(function(){
  var time = 1000;
  var href= $(this).attr("href");
  var target = $(href == "#" ? 'html' : href);
  var distance = target.offset().top;
  $("html, body").animate({scrollTop:distance}, time, "swing");
  return false;
  });
  });
  
  // リンククリック時
  $(function() {
  $('.sp-menu a').on('click', function(event) {
  $('.btn').trigger('click');
  });
  });

  // タイトルのフェードイン
// $(function(){
//   $(window).scroll(function (){
//   $('').each(function(){
//   var elemPos = $(this).offset().top;
//   var scroll = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   if (scroll > elemPos - windowHeight + 60){
//   $(this).addClass('scroll');
//   }
//   });
//   });
//   });

  // タイトルのフェードイン処理
  jQuery(window).scroll(function (){
    jQuery(".fade").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
        //jQuery(this).removeClass("fadein");
      }
    });
   });
});