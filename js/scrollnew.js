var scrollcon=document.getElementById("srollbox");
        var con1=document.getElementById("con1");
        var con2=document.getElementById("con2");
        con2.innerHTML=con1.innerHTML;
        function ScrollUp(){
            if(scrollcon.scrollTop>=con1.offsetHeight){
                scrollcon.scrollTop=0;
            }else {
                scrollcon.scrollTop++;
            }
        }
        var time=50;
        var scrollTime=setInterval("ScrollUp()",time);
        scrollcon.onmouseover=function (){
            clearInterval(scrollTime);
        }
        scrollcon.onmouseout=function (){
            scrollTime=setInterval("ScrollUp()",time);
        }