// JavaScript Document
/*onload = function() {
   window.confirm( "削除してもよろしいですか？" )
  draw();
};*/

window.onload = function()
{
	// window.confirm( "削除してもよろしいですか？" )
	draw();
	
};

function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById("canvas");
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
 
    var context = canvas.getContext('2d');


    var srcs = ['./img/99_ベース.png'];
	
//if(document.myform.sw_15.checked){srcs.push('./img/15_背景.png');}

var element = document.getElementById("sw_15");var isChecked = element.checked;if(isChecked){srcs.push('./img/15_背景.png');}
var element = document.getElementById("sw_14");var isChecked = element.checked;if(isChecked){srcs.push('./img/14_マント.png');}
var element = document.getElementById("sw_13");var isChecked = element.checked;if(isChecked){srcs.push('./img/13_素体.png');}
var element = document.getElementById("sw_12");var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_12.value);}
var element = document.getElementById("sw_11");var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_11.value);}
var element = document.getElementById("sw_10");var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_10.value);}
var element = document.getElementById("sw_9"); var isChecked = element.checked;if(isChecked){srcs.push('./img/09_ズボン.png');}
var element = document.getElementById("sw_8"); var isChecked = element.checked;if(isChecked){srcs.push('./img/08_腕輪.png');}
var element = document.getElementById("sw_7"); var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_07.value);}
var element = document.getElementById("sw_6"); var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_06.value);}
var element = document.getElementById("sw_5"); var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_05.value);}
var element = document.getElementById("sw_4"); var isChecked = element.checked;if(isChecked){srcs.push('./img/04_クマ.png');}
var element = document.getElementById("sw_3"); var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_03.value);}
var element = document.getElementById("sw_2"); var isChecked = element.checked;if(isChecked){srcs.push('./img/02_髪1.png');}
var element = document.getElementById("sw_1"); var isChecked = element.checked;if(isChecked){srcs.push(document.fm.fig_01.value);}


//↑で設定した画像ファイルを読み込む
    var images = [];
    for (var i in srcs) {
     		
		images[i] = new Image();
        images[i].src = srcs[i];
		
    }



    var loadedCount = 1;
    for (var i in images) {
        images[i].addEventListener('load', function() {
            if (loadedCount == images.length) {
                var x = 0;
                var y = 0;
                for (var j in images) {
                    context.drawImage(images[j], x, y, 800, 1200);
                }
            }
            loadedCount++;
        }, false);
    }
  
}


function twitText() {
	var s, url;
	s = "投稿するテキスト";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}


function hoz(){
	
var canvas = document.getElementById("canvas");  //canvas要素を取得
  var data = canvas.toDataURL('image/png');


  var base64 = this.canvas.toDataURL('image/png');
    // Base64からバイナリへ変換
  var bin = atob(base64.replace(/^.*,/, ''));
  var buffer = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
  }
    // Blobを作成
  var blob = new Blob([buffer.buffer], {
      type: 'image/png'
  });


  uploadImageToImgur(blob);

	}



var uploadImageToImgur = function (blob) {
  var formData = new FormData();
  formData.append('image', blob);
   $.ajax({
    contentType: false,
    data: formData,
    headers: {
        Authorization: 'Client-ID 82425c572eb53e8',
    },
    processData: false,
    type: 'POST',
    url: 'https://api.imgur.com/3/image',
    success: function (result) {
        var id = result.data.id;
        //window.location = 'https://imgur.com/gallery/' + id;

        //return id;
        var file = 'http://i.imgur.com/' + id + '.png';

		twi(file)
     
       
    }
  });
};



function twi(file) {
    window.open('http://twitter.com/home?status=' + encodeURI(document.title) + '%20' + encodeURI(file) + '+%23' + encodeURI('ミラクル_タツ_ニキ'), '_blank');
};

