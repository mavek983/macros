//-------------------------------------------------------------------------------
// iMacros Google 画像検索 と 保存
//-------------------------------------------------------------------------------

//データのパス
var filePath = "*"

var macro = "CODE:";
macro += "VERSION BUILD=8920312 RECORDER=FX" + "\n";
macro += "TAB T=1" + "\n";
macro += "SET !ERRORIGNORE YES" + "\n";
macro += "SET !VAR1 海の写真" + "\n"
macro += "URL GOTO=https://www.google.co.jp/imghp" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:tsf ATTR=ID:lst-ib CONTENT={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnG" + "\n";
macro += "WAIT SECONDS=2" + "\n";

for (i=1;i<6;i++)
 {
 
 macro += "TAG POS=" + i + " TYPE=IMG ATTR=SRC:data:image/jpeg;base64,*" + "\n";
 macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:画像を表示" + "\n";
 macro += "WAIT SECONDS=2" + "\n";

 macro += "SET !VAR2 NULL" + "\n";
 macro += "SET !VAR2 {{!URLCURRENT}}_" + "\n";

 macro += "SAVEAS TYPE=JPEG FOLDER=* FILE=" + i + "_{{!VAR2}}" + "\n";
 macro += "BACK" + "\n";
 macro += "WAIT SECONDS=2" + "\n";
 }

iimPlay(macro);