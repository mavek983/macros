// ����{�ݒ�
//�f�[�^�̃p�X
var filePath = "*";
//�ǂݍ���CSV
var fileSource = "screen_shot_url.csv";

//�����̓��t���擾
var now    = new Date();
var nYear  = now.getFullYear();
var nMonth = now.getMonth();
var nDate  = now.getDate();

//�L�[���[�h�̐������������J��Ԃ�
var rowcnt = 3; //�ǂݍ��݊J�n�s

//�������[�v�p�̃t���O
var loopflg = true;

//--------------------------------------------------------------------------------
//' �u���E�U�̋U���A���̃u���E�U�������������肷��ꍇ�̉��̎�
//' Wii �� Opera/9.30 (Nintendo Wii; U; ; 2047-7; ja)
//' NDS �� Mozilla/4.0 (compatible; MSIE 6.0; Nitro) Opera 8.50 [ja]
//' PSP �� Mozilla/4.0 (PSP PlayStation Portable); 2.00)
//' PS2 �� Mozilla/4.0 (PS2; PlayStation BB Navigator 1.0) NetFront/3.0
//' PS3 �� Mozilla/5.0 (PLAYSTATION 3; 1.00)
//' Android 4.1.1 �� Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19
//' Android 4.4.4 �� Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Safari/537.36
//' Android 5.1.0 �� Mozilla/5.0 (Linux; Android 5.1; Nexus 5 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36
//' Android 5.1.0 �� Mozilla/5.0 (Linux; Android 5.1; Nexus 7 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Safari/537.36
//' iPhone iOS8.3 �� Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4
//' iPad iOS8.3 �� Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4
//' iPod iOS8.3 �� Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4
//' Safari [Mac] �� Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17
//' FireFox[Win] �� Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0
//' FireFox[Mac] �� Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:37.0) Gecko/20100101 Firefox/37.0
//' FireFox[Linux] ��Mozilla/5.0 (X11; Linux x86_64; rv:37.0) Gecko/20100101 Firefox/37.0
//' Chrome [Win] �� Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36
//' Chrome (Metoro) �� Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36
//' IE11 �� Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko
//' IE11(Metoro) �� Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko
//' Spartan �� Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0
//' Lynx �� Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.0.16
//' Yahoo Bot �� Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
//' au �� KDDI-TS25 UP.Browser/6.0.8.3 (GUI) MMP/1.1
//' docomo �� DoCoMo/2.0 F901iC(c100;TB;W28H15)
//--------------------------------------------------------------------------------


// �ǂݍ���CSV��1�s���ǂ�
while (loopflg == true) {
     //---------------------CSV�ǂݍ��ݕ���---------------------------------------
     //�����於�Ɠ���URL���擾
     var macro;
         macro =  "CODE:";
         macro +=  "VERSION BUILD=8810214 RECORDER=FX\n";
         //�f�o�b�N�p�|�b�v�A�b�v���o����(Yes/No)
         macro +=  "SET !EXTRACT_TEST_POPUP No\n";
         //EXTRACT��NULL��
         macro +=  "SET !EXTRACT NULL\n";
         //CSV�f�[�^�ǂݍ���
         macro +=  "SET !DATASOURCE " + fileSource + "\n";
         //�f�[�^[rowcnt]�s�ړǂݍ���
         macro +=  "SET !DATASOURCE_LINE " + rowcnt + "\n";
         //�ǂݍ��񂾍s����1��ڂ𒊏o
         macro +=  "ADD !EXTRACT {{!COL1}}\n";
         //�ǂݍ��񂾍s����2��ڂ𒊏o
         macro +=  "ADD !EXTRACT {{!COL2}}\n";
         //�ǂݍ��񂾍s����3��ڂ𒊏o
         macro +=  "ADD !EXTRACT {{!COL3}}\n";
         //�ǂݍ��񂾍s����4��ڂ𒊏o
         macro +=  "ADD !EXTRACT {{!COL4}}\n";
         //�ǂݍ��񂾍s����5��ڂ𒊏o
         macro +=  "ADD !EXTRACT {{!COL5}}\n";
         //���s
         iimPlay(macro);
         //�ǂݍ��񂾒l���擾:EXTRACT��2�̂Ƃ���(1)�P�ځA(2)�Q�ځA�Ǝw�肷��
     var Keyword         = iimGetLastExtract(1);
     var SearchURL       = iimGetLastExtract(2);
     var SearchOption    = iimGetLastExtract(3);
     var SearchQuery     = iimGetLastExtract(4);
     var SearchSiteCode  = iimGetLastExtract(5);
    
     //---------------------------------------------------------------------------
     //---------------------------------------------------------------------------
        if ( Keyword.length < 0 ){
         //csv�f�[�^���I�������A�擾����
         break;
        }
     //---------------------------------------------------------------------------
     //---------------------------------------------------------------------------
     //���������s
     var macro;
         //iMacros�̃R�[�h�J�n�L�q
         macro =  "CODE:";
         //iMacros�̃r���h�o�[�W�����ƃu���E�U(FX:FireFox/CH:Chrome)
         macro +=  "VERSION BUILD=8810214 RECORDER=FX\n";
         //�G���[�𖳎����邩�ǂ���(Yes/No)
         macro +=  "SET !ERRORIGNORE YES\n";
         //EXTRACT��NULL��
         macro +=  "SET !EXTRACT NULL\n";
         //�f�o�b�N�|�b�v�A�b�v ON/OFF
         macro +=  "SET !EXTRACT_TEST_POPUP No\n";
         //�X�N���[���̕��w��
         macro +=  "SIZE X=800 Y=600 \n";
         //�}�E�X�̎ʂ荞�݂����Ȃ��悤�ɁA0,0�ɃJ�[�\�����ړ����܂�
         macro +=  "DS CMD=CLICK X=0 Y=0 \n";
         //�u���E�U�̃o�[�W�����ύX�ȂǂŁASIZE�R�}���h�������Ȃ��Ƃ�
         macro +=  "URL GOTO=javascript:window.resizeTo(800,600); \n";
         //�T�C�g�Ɉړ�(���t�@���΍�)
         macro +=  "URL GOTO = " + SearchURL +"\n";
         macro +=  "WAIT SECONDS = 2 \n";
         //�T�C�g�Ɉړ�
         macro +=  "URL GOTO = " + SearchURL + SearchQuery + Keyword + SearchOption + "\n";
         macro +=  "WAIT SECONDS = 2 \n";
         //�X�N���[���V���b�g���擾
         macro += "SAVEAS TYPE=PNG FOLDER=* FILE=" + rowcnt + "_" + SearchSiteCode + "_" + Keyword + "\n";
         //�ҋ@�T�b : �ߕ��׃_��!! �[�b�^�C!!
         macro +=  "WAIT SECONDS = 5 \n";
         //���s
         iimPlay(macro);
     //---------------------------------------------------------------------------
     rowcnt++; // �ǂݍ���CSV�̎��̍s��
}
