
<script type="text/javascript"><!--
function fullScreen1(theURL) {
window.open(theURL, '', 'fullscreen=yes,scrollbars=auto,menubar=no,toolbar=no,location=no,status=no');
}
//--></script>

<a href="#" onClick="fullScreen1('http://htmlweb.ru/java/example/full_screen.php');return false;">
    ������� 1: ������� ����� ���� �� ���� ����� (Open Full Screen Window)</a>
<br /><br />

<script type="text/javascript"><!--
function fullScreen2(theURL) {
window.open(theURL, '','height='+screen.height+',width='+screen.width+',screenX=0,screenY=0,left=0,top=0,resizable=no');
}
//--></script>

<a href="#" onClick="fullScreen2('http://htmlweb.ru/java/example/full_screen.php');return false;">
    ������� 2: ������� ����� ���� �� ���� ����� (Open Full Screen Window)</a>
<br /><br />


<script type="text/javascript"><!--
//���� ���������� �����
function fullscreen3(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

//�����������
//:-webkit-full-screen {  background: pink;}

//fullscreen3(document.documentElement); //��� ��������
//fullscreen3(document.getElementById("videoElement")); //�����-�� ������������ �������
//--></script>

<a href="#" onClick="fullscreen3(document.documentElement);return false;">
    ������� 3: Html5 Fullscreen API</a>
