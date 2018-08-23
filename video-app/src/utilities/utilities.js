'use strict'

function leftpad(number){
   
    const pad='00';
    return pad.substring(0,pad.length-number.length)+number;
}

function formatterTime(sec){

    const minutes=parseInt(sec / 60,10);
    const seconds=parseInt(sec % 60, 10);

    return `${leftpad(minutes.toString())}:${leftpad(seconds.toString())}`
}

export default formatterTime;