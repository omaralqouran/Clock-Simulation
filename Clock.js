/**  @author Al-Qouran, Omar (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary clock simulator|| created:10/18/2016
 *   @todo/**
 */
"use strict";
const PROMPT = require('readline-sync')

let hours, minutes, seconds;

for(hours = 0; hours < 24; hours++){
    for(minutes = 0; minutes < 60; minutes++){
        for(seconds = 0; seconds < 60; seconds++){
            if(seconds < 60){
                if(minutes < 60){
                    if(hours < 10, minutes < 10,seconds < 10 ){
                        console.log(`0${hours}:0${minutes}:0${seconds}`);
                    }
                    else if(hours > 10, minutes < 10, seconds < 10) {
                        console.log(`${hours}:0${minutes}:0${seconds}`);
                    }
                    else if(hours < 10, minutes > 10, seconds < 10){
                        console.log(`0${hours}:${minutes}:0${seconds}`);
                    }
                    else if(hours < 10, minutes < 10, seconds > 10){
                        console.log(`0${hours}:0${minutes}:${seconds}`);
                    }
                    else if(hours > 10, minutes < 10, seconds > 10){
                        console.log(`${hours}:0${minutes}:${seconds}`);
                    }
                    else if(hours > 10, minutes > 10, seconds > 10){
                        console.log(`${hours}:${minutes}:${seconds}`);
                    }
                }

            }
        }
    }
}
