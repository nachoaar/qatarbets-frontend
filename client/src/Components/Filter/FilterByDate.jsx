import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";


export default function FilterByDate(){

    function handleByDate(e){

    }

    return(
        <div>
            <div>
                <select onChange={e => handleByDate(e)}>
                    <option value={'byDate'}>by Date</option>

                </select>
            </div>
        </div>
    )
}