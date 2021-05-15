
<script type="text/javascript"><!--
function fullScreen1(theURL) {
window.open(theURL, '', 'fullscreen=yes,scrollbars=auto,menubar=no,toolbar=no,location=no,status=no');
}
//--></script>

<a href="#" onClick="fullScreen1('http://htmlweb.ru/java/example/full_screen.php');return false;">
    Вариант 1: Открыть новое окно на весь экран (Open Full Screen Window)</a>
<br /><br />

<script type="text/javascript"><!--
function fullScreen2(theURL) {
window.open(theURL, '','height='+screen.height+',width='+screen.width+',screenX=0,screenY=0,left=0,top=0,resizable=no');
}
//--></script>

<a href="#" onClick="fullScreen2('http://htmlweb.ru/java/example/full_screen.php');return false;">
    Вариант 2: Открыть новое окно на весь экран (Open Full Screen Window)</a>
<br /><br />


<script type="text/javascript"><!--
//Ищем правильный метод
function fullscreen3(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

//псевдокласс
//:-webkit-full-screen {  background: pink;}

//fullscreen3(document.documentElement); //вся страница
//fullscreen3(document.getElementById("videoElement")); //какой-то определенный элемент
//--></script>

<a href="#" onClick="fullscreen3(document.documentElement);return false;">
    Вариант 3: Html5 Fullscreen API</a>
