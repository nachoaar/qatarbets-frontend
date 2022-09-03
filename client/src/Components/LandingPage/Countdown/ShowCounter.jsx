import React from "react";
import DateTimeDisplay from './DateTimeDisplay';


export const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter flex gap-x-2 text-white uppercase text-xl font-titulo">
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </div>
    );
};