import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getAllBets } from '../../../redux/actions/dashboardActions/betActions';
import BetResultGraph from '../../DashboardAdmin/graficas/betGraphics';
import DayliBetsGraphic from '../../DashboardAdmin/graficas/dayliBets';
import WeaklyBetsGraphic from '../../DashboardAdmin/graficas/weaklyBetGraphic';

import { NavbarDashboard } from '../NavbarDashboard/NavbarDashboard';
import { SidebarDashboard } from '../SidebarDashboard/SidebarDashboard';
import { BetCard } from './Cards/BetCard';

export const BetDashboard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBets());
  },[dispatch]);

  const {bets} = useSelector((store) => store.Dashbets);

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
          <h2 className="font-titulodash font-bold text-gristexto text-lg">Apuestas</h2>
        </div>
        <div className="w-full h-full flex flex-row overflow-auto divide-x divide-gristexto">
          <div className="flex flex-col w-1/2 h-full overflow-auto p-5">
            <div className="w-full h-auto flex flex-col gap-5">
              {bets&&bets.map((b) => {
                return (
                  <BetCard
                    key={b.id}
                    id={b.id}
                    result={b.result}
                    money_bet={b.money_bet}
                    userId={b.userId}
                    matchId={b.matchId}
                    final_profit={b.final_profit}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full overflow-auto  ">
           <div className="w-full h-auto flex flex-col gap-2 items-center justify-center pt-3">
              <h2>resultados apostados</h2>
              <div className="w-full border-b border-gristexto"></div>
              <BetResultGraph />
              <div className="w-full border-b border-gristexto"></div>
              <h2>apuestas realizadas por hora</h2>
              <div className="w-full border-b border-gristexto"></div>
              <DayliBetsGraphic
                allBets={bets}
              />
              <div className="w-full border-b border-gristexto"></div>
              <h2>ganancias y perdidas</h2>
              <div className="w-full border-b border-gristexto"></div>
              <WeaklyBetsGraphic 
                dataa={bets}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}