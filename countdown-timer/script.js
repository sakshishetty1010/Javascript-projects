const daysel = document.querySelector('#days');
const hoursel = document.querySelector('#hours');
const minutesel = document.querySelector('#minutes');
const secondsel = document.querySelector('#seconds');


const newYear  ='1 Jan 2022';

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalseconds = (newYearDate-currentDate)/1000;
   const days = Math.floor(totalseconds /3600/24);
   const hours = Math.floor(totalseconds/3600)%24;
   const minutes = (Math.floor(totalseconds/60)%60);
   const seconds  = Math.floor(totalseconds%60);


   daysel.innerHTML=formatTime(days);
   hoursel.innerHTML=formatTime(hours);
   minutesel.innerHTML=formatTime(minutes);
   secondsel.innerHTML=formatTime(seconds);

}

function formatTime(time){
    return time>10?time:`0${time}`
}
//intial call
countdown();

setInterval(countdown,1000);

