// ※基本設定
//データのパス
var filePath = "*";
//読み込みCSV
var fileSource = "screen_shot_url.csv";

//今日の日付情報取得
var now    = new Date();
var nYear  = now.getFullYear();
var nMonth = now.getMonth();
var nDate  = now.getDate();

//キーワードの数だけ処理を繰り返す
var rowcnt = 3; //読み込み開始行

//無限ループ用のフラグ
var loopflg = true;

//--------------------------------------------------------------------------------
//' ブラウザの偽装、他のブラウザが推奨だったりする場合の奥の手
//' Wii ⇒ Opera/9.30 (Nintendo Wii; U; ; 2047-7; ja)
//' NDS ⇒ Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [ja]
//' PSP ⇒ Mozilla/4.0 (PSP PlayStation Portable); 2.00)
//' PS2 ⇒ Mozilla/4.0 (PS2; PlayStation BB Navigator 1.0) NetFront/3.0
//' PS3 ⇒ Mozilla/5.0 (PLAYSTATION 3; 1.00)
//' Android 4.1.1 ⇒ Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19
//' Android 4.4.4 ⇒ Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Safari/537.36
//' Android 5.1.0 ⇒ Mozilla/5.0 (Linux; Android 5.1; Nexus 5 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36
//' Android 5.1.0 ⇒ Mozilla/5.0 (Linux; Android 5.1; Nexus 7 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Safari/537.36
//' iPhone iOS8.3 ⇒ Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4
//' iPad iOS8.3 ⇒ Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4
//' iPod iOS8.3 ⇒ Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4
//' Safari [Mac] ⇒ Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17
//' FireFox[Win] ⇒ Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0
//' FireFox[Mac] ⇒ Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:37.0) Gecko/20100101 Firefox/37.0
//' FireFox[Linux] ⇒Mozilla/5.0 (X11; Linux x86_64; rv:37.0) Gecko/20100101 Firefox/37.0
//' Chrome [Win] ⇒ Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36
//' Chrome (Metoro) ⇒ Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36
//' IE11 ⇒ Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
//' IE11(Metoro) ⇒ Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko
//' Spartan ⇒ Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0
//' Lynx ⇒ Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.0.16
//' Yahoo Bot ⇒ Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
//' au ⇒ KDDI-TS25 UP.Browser/6.0.8.3 (GUI) MMP/1.1
//' docomo ⇒ DoCoMo/2.0 F901iC(c100;TB;W28H15)
//--------------------------------------------------------------------------------


// 読み込みCSVを1行ずつ読む
while (loopflg == true) {
     //---------------------CSV読み込み部分---------------------------------------
     //■動画名と動画URLを取得
     var macro;
         macro =  "CODE:";
         macro +=  "VERSION BUILD=8810214 RECORDER=FX\n";
         //デバック用ポップアップを出すか(Yes/No)
         macro +=  "SET !EXTRACT_TEST_POPUP No\n";
         //EXTRACTをNULLに
         macro +=  "SET !EXTRACT NULL\n";
         //CSVデータ読み込み
         macro +=  "SET !DATASOURCE " + fileSource + "\n";
         //データ[rowcnt]行目読み込み
         macro +=  "SET !DATASOURCE_LINE " + rowcnt + "\n";
         //読み込んだ行から1列目を抽出
         macro +=  "ADD !EXTRACT {{!COL1}}\n";
         //読み込んだ行から2列目を抽出
         macro +=  "ADD !EXTRACT {{!COL2}}\n";
         //読み込んだ行から3列目を抽出
         macro +=  "ADD !EXTRACT {{!COL3}}\n";
         //読み込んだ行から4列目を抽出
         macro +=  "ADD !EXTRACT {{!COL4}}\n";
         //読み込んだ行から5列目を抽出
         macro +=  "ADD !EXTRACT {{!COL5}}\n";
         //実行
         iimPlay(macro);
         //読み込んだ値を取得:EXTRACTが2つのときは(1)１つ目、(2)２つ目、と指定する
     var Keyword         = iimGetLastExtract(1);
     var SearchURL       = iimGetLastExtract(2);
     var SearchOption    = iimGetLastExtract(3);
     var SearchQuery     = iimGetLastExtract(4);
     var SearchSiteCode  = iimGetLastExtract(5);
    
     //---------------------------------------------------------------------------
     //---------------------------------------------------------------------------
        if ( Keyword.length < 0 ){
         //csvデータが終わったら、取得完了
         break;
        }
     //---------------------------------------------------------------------------
     //---------------------------------------------------------------------------
     //■検索実行
     var macro;
         //iMacrosのコード開始記述
         macro =  "CODE:";
         //iMacrosのビルドバージョンとブラウザ(FX:FireFox/CH:Chrome)
         macro +=  "VERSION BUILD=8810214 RECORDER=FX\n";
         //エラーを無視するかどうか(Yes/No)
         macro +=  "SET !ERRORIGNORE YES\n";
         //EXTRACTをNULLに
         macro +=  "SET !EXTRACT NULL\n";
         //デバックポップアップ ON/OFF
         macro +=  "SET !EXTRACT_TEST_POPUP No\n";
         //スクリーンの幅指定
         macro +=  "SIZE X=800 Y=600 \n";
         //マウスの写り込みがしないように、0,0にカーソルを移動します
         macro +=  "DS CMD=CLICK X=0 Y=0 \n";
         //ブラウザのバージョン変更などで、SIZEコマンドが利かないとき
         macro +=  "URL GOTO=javascript:window.resizeTo(800,600); \n";
         //サイトに移動(リファラ対策)
         macro +=  "URL GOTO = " + SearchURL +"\n";
         macro +=  "WAIT SECONDS = 2 \n";
         //サイトに移動
         macro +=  "URL GOTO = " + SearchURL + SearchQuery + Keyword + SearchOption + "\n";
         macro +=  "WAIT SECONDS = 2 \n";
         //スクリーンショットを取得
         macro += "SAVEAS TYPE=PNG FOLDER=* FILE=" + rowcnt + "_" + SearchSiteCode + "_" + Keyword + "\n";
         //待機５秒 : 過負荷ダメ!! ゼッタイ!!
         macro +=  "WAIT SECONDS = 5 \n";
         //実行
         iimPlay(macro);
     //---------------------------------------------------------------------------
     rowcnt++; // 読み込みCSVの次の行へ
}
