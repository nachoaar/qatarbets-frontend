import React from "react";
import DateTimeDisplay from './DateTimeDisplay';


export const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter flex gap-x-2 text-white uppercase text-xl font-titulo">
            <DateTimeDisplay value={days} type={'Dias'} isDanger={days <= 3} />
            <DateTimeDisplay value={hours} type={'Horas'} isDanger={false} />
            <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} />
            <DateTimeDisplay value={seconds} type={'Segundos'} isDanger={false} />
        </div>
    );
};