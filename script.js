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
          $('modal-container').hide('.no');
          $('modal-container').hide('.maybe');

        } else if(result == 'no'){
          $('.modal-container').addClass('on');
          $('modal-container').hide('.yes');
          $('modal-container').hide('.maybe');
        } else {
          $('.modal-container').addClass('on');
          $('modal-container').hide('.yes');
          $('modal-container').hide('.no');
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



