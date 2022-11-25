import { useEffect, useState } from "react";

export default function Timer({setGameover,timer,setTimer}) {


 
        useEffect(() => {
            if(timer!=-1)
            {
            if(timer==0){setGameover(true)};
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
            }
        }, [timer]);

    if(timer!=-1)
    return timer;
    else
    return 0;
}