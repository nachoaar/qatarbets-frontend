import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashFixture } from '../../../redux/actions/dashboardActions/dashFixtureActions';
import { NavbarDashboard } from '../NavbarDashboard/NavbarDashboard';
import { SidebarDashboard } from '../SidebarDashboard/SidebarDashboard';
import { MatchCard } from './Cards/MatchCard';
import WeekBets from './Graphs/mostPickedInTheWeek';

export const MatchDashboard = () => {
  
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  const {filterFixtureDash} = useSelector((store) => store.dashfixture);
  const {bets} = useSelector((store) => store.dashbets);
  
  useEffect(() => {
    if (filterFixtureDash.length === 0) {
      dispatch(dashFixture());
    }
  },[dispatch, filterFixtureDash]);

  function handleInput(e){
    e.preventDefault()
    if(e.target.value.length === 10){
    setDate(e.target.value)}
}

  return (
    <div className="bg-gris w-full h-screen flex flex-row justify-between gap-5">
      <div className="bg-white h-full w-1/5">
        <SidebarDashboard />
      </div>
      <div className="flex flex-col w-full h-full divide-y divide-gristexto">
        <div className="h-auto w-full">
          <NavbarDashboard />
        </div>
        <div className="w-full h-14 flex items-center gap-2">
          <svg className="fill-gristexto transition duration-500 hover:fill-rojosec" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.938 13 4.958-4.938L12.833 7l-3.895 3.875-1.771-1.75-1.063 1.063ZM4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3h11q.625 0 1.062.438Q17 3.875 17 4.5v11q0 .625-.438 1.062Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm0-11v11-11Z"/></svg>
          <h2 className="font-titulodash font-bold text-gristexto text-lg">Partidos</h2>
        </div>
        <div className="w-full h-full flex flex-row overflow-auto divide-x divide-gristexto">
        <div className="flex flex-col w-1/2 h-full overflow-auto p-5">
            <div className="w-full h-auto flex flex-col gap-5">
              {filterFixtureDash&&filterFixtureDash.map((m) => {
                return (
                  <MatchCard
                    key={m.id}
                    id={m.id}
                    home_team={m.home_team?.name}
                    away_team={m.away_team?.name}
                    result_match={m.result_match}
                    groupId={m.groupId}
                    date={m.date}
                    city={m.city}
                    stadium_name={m.stadium_name}
                    status={m.status}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full overflow-auto">
            <div className="w-full h-auto flex flex-col gap-4 items-center justify-center pt-3">
              <h2 className="font-titulodash font-bold text-gristexto">resultado de la semana</h2>
              <div className="w-full border-b border-gristexto"></div>
                <WeekBets
                  dataa={bets}
                  date={date}
                />
                <input type="text"placeholder="ingrese una fecha"  onChange={(e) => handleInput(e)}/>
              <div className="w-full border-b border-gristexto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}