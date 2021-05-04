function buttonClick() {
    //getValue();
    // 個数の処理
    var elements = document.getElementsByName('quantity');
    for (var a = "", i = elements.length; i--;){
        if(elements[i].checked){
            var a = elements[i].value;
            if(a == "0"){
                var wordcount = document.getElementById('count').value;
                for(i = 0; i < wordcount; i++){
                    getValue();
                }
            }else{
                for(i = 0; i < a; i++){
                    getValue();
                }
            }
            break;
        }
    }
    // 上記条件を満たしたパスワードを生成
    // 生成したパスワードを画面に表示
}

function getValue(){
    // 文字の処理 -> 英字（大文字）、英字（小文字）、数字、記号のどれにチェックがついているのかを知る
    /*
    var checks = document.getElementsByName("moji");
    var str = '';
    for (i = 0; i < 4; i++){
        if(checks[i].checked === true){
            str += checks[i].value + "";
        }
    }*/
    // 文字数の処理
    var alements = document.getElementsByName('wordCount');
    for (var b = "", i = alements.length; i--;){
        if(alements[i].checked){
            var b = alements[i].value;
            if(b == 0){
                const c = document.getElementById("mojiSu").value;
                //パスワード作成
                for(var d = 0; d < c; d++){
                    var checks = document.getElementsByName("moji");
                    var str = '';
                    for (i = 0; i < 4; i++){
                        if(checks[i].checked === true){
                            str += checks[i].value + "";
                        }
                    }
                    password += str.charAt(Math.floor(Math.random() * str.length));
                }
            }else{
                //パスワード作成
                for(var d = 0; d < Number(b); d++){
                    var checks = document.getElementsByName("moji");
                    var str = '';
                    for(i = 0; i < 4; i++){
                        if(checks[i].checked === true){
                            str += checks[i].value + "";
                            
                        }
                        password += str.charAt(Math.floor(Math.random() * str.length));
                    }
                }   
            }
            document.getElementById("password").innerHTML = password;
            break;
        }
    }
}

//strからランダムに取り出す
/*password += str.charAt(Math.floor(Math.random() * String.length));
console.log(password);*/

// 文字数の処理
/*function mojiSu(){
    var alements = document.getElementsByName('wordCount');
    for (var b = "", i = alements.length; i--;){
        if(alements[i].checked){
            var b = alements[i].value;
            if(b == 0){
                const c = document.getElementById("mojiSu").value;
                
            }else{
                
            }
            break;
        }
    } 
}*/

function textCount(){
    var a = document.getElementById('count').value;
     //console.log('textCount a', a);
    return a;
} 
function mojiCount(){
    const b = document.getElementById('moji').value;
}





//3個表示させる時、3個パスワードが連結して表示されてしまう。
//[object HTMLParagraphElement] という文字列が最初に表示されてしまう
