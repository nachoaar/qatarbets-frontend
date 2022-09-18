import React from 'react'
import { CountdownTimer } from "./CountDownTimer";

export const Countdown = () => {

    const FOCUS_TIME = new Date(2022, 10, 20, 11);
    const NOW_IN_MS = new Date().getTime();
    const TIME = FOCUS_TIME - NOW_IN_MS
    const FIRSTMATCH_DAYS_IN_MS = TIME;

    const dateTimeAfterWorldCupDays = NOW_IN_MS + FIRSTMATCH_DAYS_IN_MS;

    return (
        <div className="bg-rojosec sm:bg-morado w-full sm:flex items-center justify-between px-9 py-4">
            <div className="flex items-center gap-x-4 ml-5 h-6 my-3 justify-center">
                <div className="bg-amarillo w-1 h-1 rotate-45"></div>
                <div className="bg-amarillo w-2 h-2 rotate-45"></div>
                <div className="bg-amarillo w-3 h-3 rotate-45"></div>
                <div className="bg-amarillo w-4 h-4 rotate-45"></div>
            </div>
            <div className="font-titulo text-white text-mikeWhite text-3xl text-center">
                CUENTA REGRESIVA PARTIDO INAUGURAL
            </div>
            <div className="px-4 ">
                <CountdownTimer targetDate={dateTimeAfterWorldCupDays} />
            </div>
            <div className="flex items-center gap-x-4 mr-5 h-6 my-3 justify-center">
                <div className="bg-amarillo w-4 h-4 rotate-45"></div>
                <div className="bg-amarillo w-3 h-3 rotate-45"></div>
                <div className="bg-amarillo w-2 h-2 rotate-45"></div>
                <div className="bg-amarillo w-1 h-1 rotate-45"></div>
            </div>
        </div>
    )
}
