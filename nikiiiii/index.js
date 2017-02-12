// JavaScript Document
/*onload = function() {
   window.confirm( "削除してもよろしいですか？" )
  draw();
};*/

window.onload = function()
{
	// window.confirm( "削除してもよろしいですか？" )
	//draw();
	
};

function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('canvas');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
 
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');


    var srcs = ['./img/99_ベース.png'];
	
var element = document.getElementById("sw_15");var isChecked = element.checked;if(isChecked){srcs.push('./img/15_背景.png');}
var element = document.getElementById("sw_14");var isChecked = element.checked;if(isChecked){srcs.push('./img/14_マント.png');}
var element = document.getElementById("sw_13");var isChecked = element.checked;if(isChecked){srcs.push('./img/13_素体.png');}
var element = document.getElementById("sw_12");var isChecked = element.checked;if(isChecked){srcs.push('./img/12_靴下.png');}
var element = document.getElementById("sw_11");var isChecked = element.checked;if(isChecked){srcs.push('./img/11_靴.png');}
var element = document.getElementById("sw_10");var isChecked = element.checked;if(isChecked){srcs.push('./img/10_スパッツ.png');}
var element = document.getElementById("sw_9");var isChecked = element.checked;if(isChecked){srcs.push('./img/09_ズボン.png');}
var element = document.getElementById("sw_8");var isChecked = element.checked;if(isChecked){srcs.push('./img/08_腕輪.png');}
var element = document.getElementById("sw_7");var isChecked = element.checked;if(isChecked){srcs.push('./img/07_服.png');}
var element = document.getElementById("sw_6");var isChecked = element.checked;if(isChecked){srcs.push('./img/06_前掛け.png');}
var element = document.getElementById("sw_5");var isChecked = element.checked;if(isChecked){srcs.push('./img/05_ネックレス.png');}
var element = document.getElementById("sw_4");var isChecked = element.checked;if(isChecked){srcs.push('./img/04_クマ.png');}
var element = document.getElementById("sw_3");var isChecked = element.checked;if(isChecked){srcs.push('./img/03_顔1.png');}
var element = document.getElementById("sw_2");var isChecked = element.checked;if(isChecked){srcs.push('./img/02_髪1.png');}
var element = document.getElementById("sw_1");var isChecked = element.checked;if(isChecked){srcs.push('./img/01_帽子1.png');}












//ロード？
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
                    x += 0;
                    y += 0;
                }
            }
            loadedCount++;
        }, false);
    }
  
}