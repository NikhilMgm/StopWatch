let [seconds, minutes, hours]=[0,0,0];
let time= document.getElementById("display");
let counter= null;

function watch(){
	seconds+=1;
	if(seconds==60){
		seconds=0;
		minutes++;
		if(minutes==60){
			minutes=0;
			hours++;
		}
	}
	let hrs= hours<10 ? "0"+hours: hours;
	let min=minutes<10 ? "0"+minutes:minutes;
	let sec= seconds<10 ? "0"+seconds:seconds;

	time.innerHTML= hrs+":"+min+":"+sec;
}


function startTimer(){
	counter= setInterval(watch, 1000);
}

function stopTimer(){
	clearInterval(counter);
}

function resetTimer(){
	clearInterval(counter);

	[seconds,minutes,hours]=[0,0,0];
	time.innerHTML="00:00:00";
}




