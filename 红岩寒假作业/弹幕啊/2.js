var zz=document.querySelector('.zz');
	var zzzz=document.querySelector('.zzzz');
	var sen=document.querySelector('.sen');
	var yanse=document.querySelector('.yanse')
	var changes=yanse.getElementsByTagName('div')
	var g=document.querySelector('.squre').style.backgroundColor
	for(i=0;i<changes.length;i++)
	{
		changes[i].onclick=function(){
			zhuanhuan(this)
		}
	}
	var xinxi;
	var i;
	sen.onclick=send;
	function zhuanhuan(a){
		g=a.style.backgroundColor
	}
	zzzz.onkeydown=function(a){
		if (a.keyCode===13) {
			send()
		}
	}
	function send(xinxi){
		xinxi=zzzz.value;
		creat(xinxi)
		zzzz.value=''
	}
	function creat(a){
		var span=document.createElement('span')
		span.innerHTML=a;
		zz.appendChild(span);
		span.style.left = zz.offsetWidth+'px'
		span.style.top=Math.random()*zz.offsetHeight*0.7+'px'
		span.style.color=g
		yundong(span)
		
		}
	function yundong(a)
	{
		var time=setInterval(function(){
			a.style.left=a.offsetLeft-1+'px'
			if(a.offsetLeft+a.offsetWidth<=0)
			{
				clearInterval(time);
				zz.removeChild(a);
			}
		},30)
	}