'use strict';
function getZero(n){
    if(n>=1&&n<10){
        return `0${n}`;
    }
    else{
        return n;
    }
}

function timer(){
    const deadline = '2022-05-09';
    
    
    
    function getTimeRemaning (endtime){
        const timerBlock = document.querySelector('.timer');
        const t=Date.parse(endtime)-Date.parse(new Date())-(3*3600000);
        let d= Math.floor(t/86400000),
            h=Math.floor((t/3600000-d*24)),
            m=Math.floor(t/60000-h*60-d*24*60),
            s=Math.floor(t/1000-m*60-h*3600-d*86400);
            
            if(s==59) {
                
                timerBlock.style.marginTop ='52px';
                setTimeout(()=>{
                    timerBlock.style.marginTop ='68px';
                }, 60);
                setTimeout(()=>{
                    timerBlock.style.marginTop ='60px';
                }, 20);
 
            } 
            return {
                total:t,
                days:d,
                hours:h,
                minutes:m,
                sec:s
            };
            
    }
    function setClock(endtime){
        const timer = document.querySelector('.timer'),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval=setInterval(updateClock,1000);  
               updateClock();    
    
        function updateClock(){
            const t=getTimeRemaning(endtime);
            days.innerHTML=getZero(t.days);
            hours.innerHTML=getZero(t.hours);
            minutes.innerHTML=t.minutes;
            seconds.innerHTML=t.sec;
            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }
        
    }
    
 setClock(deadline);
 console.log('timer test');


}

export default timer;
export{getZero};
//Проверка