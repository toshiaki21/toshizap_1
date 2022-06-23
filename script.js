$(function(){
    // console.log('test');

    $('button').on('click',function(){

        $.ajax({
            url: 'https://yesno.wtf/api', //アクセスするURL
            type: 'get',    //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType:'json',     //data type script・xmlDocument・jsonなど
            // data:parameter,           //アクセスするときに必要なデータを記載      
          })
          .done(function(response) { 
              console.log(response);
            
             //通信成功時の処理
             //成功したとき実行したいスクリプトを記載
          })
          .fail(function(xhr) {  
             //通信失敗時の処理
             //失敗したときに実行したいスクリプトを記載
          })
          .always(function(xhr, msg) { 
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
       });   


    // ボタンのカッコ
    })


//↓大外のカッコ
})



// modal
$('.modal-btn').on('click',function(){
    $('.modal-container').addClass('on');
    })
    $('.close-btn-wrap').on('click',function(){
      $('.modal-container').removeClass('on');
    })