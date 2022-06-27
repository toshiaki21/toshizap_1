$(function () {
  // console.log('test');
// modal
// $('.top-btn').on('click',function(){
//   $('.modal-container').addClass('on');
//   })
//   $('.close-btn-wrap').on('click',function(){
//     $('.modal-container').removeClass('on');
//   })


  $('.top-btn').on('click', function () {

    $.ajax({
      url: 'https://yesno.wtf/api', //アクセスするURL
      type: 'get',    //post or get
      cache: false,        //cacheを使うか使わないかを設定
      dataType: 'json',     //data type script・xmlDocument・jsonなど
      // data:parameter,           //アクセスするときに必要なデータを記載      
    })
      .done(function (response) {
        console.log(response);

        // 条件分岐
        console.log(response.answer);

        let result = response.answer
        console.log(result);

        if (result == 'yes') {
          $('.modal-container').addClass('on');
          $('.hako_yes').show('.yes');
        }
         else if(result == 'no'){
          $('.modal-container').addClass('on');
          $('.hako_no').show('.no');
        } else {
          $('.modal-container').addClass('on');
          $('.hako_maybe').show('.maybe');
        }

        // 閉じるボタン
        $('.close-btn-wrap').on('click', function () {
          $('.modal-container').removeClass('on');
        })


        //通信成功時の処理
        //成功したとき実行したいスクリプトを記載
      })
      .fail(function (xhr) {
        //通信失敗時の処理
        //失敗したときに実行したいスクリプトを記載
      })
      .always(function (xhr, msg) {
        //通信完了時の処理
        //結果に関わらず実行したいスクリプトを記載
      });


    // ボタンのカッコ
  })



  //↓大外のカッコ
})


// スライダーーーーーーーー

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper(...);


// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });


//  // import Swiper bundle with all modules installed
//  import Swiper from 'swiper/bundle';

//  // import styles bundle
//  import 'swiper/css/bundle';

//  // init Swiper:
//  const swiper = new Swiper(...);



const swiper = new Swiper('.swiper', {
 // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


