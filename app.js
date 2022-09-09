// $(document).ready(function () {
// // $( セレクタ ).メソッド ( パラメータ );
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(document).ready(function () {
//   // jQueryプログラムの内容
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// //1つのCSSを記述する場合
// $('セレクタ').css('background-color','#0000FF');

// 今回のように複数のプロパティを指定するとき
// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',

//   :
//   :

//   'プロパティn': '値n'
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});


