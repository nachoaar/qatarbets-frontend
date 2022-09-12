import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CacheDashGambler, getGamblers } from '../../../redux/actions/dashboardActions/dashGamblerActions';
import { NavbarDashboard } from '../NavbarDashboard/NavbarDashboard';
import { SidebarDashboard } from '../SidebarDashboard/SidebarDashboard';
import { UserCard } from './Cards/UserCard';
import UserStatGafic from './Graphs/userGrafics';
import image from '../../../media/metric.png';

export const UserDashboard = () => {

  const [graph, setGraph] = useState({
    status: false,
    id: ""
  });

  const dispatch = useDispatch();
  
  const {gamblers} = useSelector((store) => store.dashgambler);
  const {gamblerName} = useSelector((store) => store.dashgambler);
  const {bets} = useSelector((store) => store.dashbets);

  console.log(gamblerName);

  useEffect(() => {
    if (gamblers.length === 0) {
      dispatch(getGamblers());
    }
    return () => {
      dispatch(CacheDashGambler());
      setGraph({
        status: false,
        id: ""
      })
    };
  },[dispatch, gamblers]);

  function handleOnClick(e) {
    e.preventDefault();
    if(Object.keys(gamblerName).length > 0) {
      dispatch(CacheDashGambler());
      setGraph({
        status: false,
        id: ""
      })
    };
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
        <div className="w-full h-14 flex items-center gap-10">
          <div className="flex gap-2 items-center justify-center h-full">
            <svg className="fill-gristexto transition duration-500 hover:fill-rojosec" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.938 13 4.958-4.938L12.833 7l-3.895 3.875-1.771-1.75-1.063 1.063ZM4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3h11q.625 0 1.062.438Q17 3.875 17 4.5v11q0 .625-.438 1.062Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm0-11v11-11Z"/></svg>
            <h2 className="font-titulodash font-bold text-gristexto text-lg">Usuarios</h2>
          </div>
          <div className="flex gap-1 text-gristexto font-bold font-titulodash items-center justify-center h-full pl-5 border-solid border-l border-gristexto">
            <svg className="fill-grisfooter" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Z"/></svg>
            <button onClick={(e) => handleOnClick(e)}>all</button>
          </div>
        </div>
        <div className="w-full h-full flex flex-row overflow-auto divide-x divide-gristexto">
        <div className="flex flex-col w-1/2 h-full overflow-auto p-5">
          <div className="w-full h-auto flex flex-col gap-5">
            {Object.keys(gamblerName).length === 0 ? gamblers&&gamblers.map((g) => {
              return (
                <UserCard
                  key={g.id}
                  id={g.id}
                  name={g.name}
                  avatar={g.avatar}
                  userbanned={g.userbanned}
                  rol={g.rol}
                  setGraph={setGraph}
                />
              )
            }) : (
              <UserCard
              key={gamblerName.id}
              id={gamblerName.id}
              name={gamblerName.name}
              avatar={gamblerName.avatar}
              userbanned={gamblerName.userbanned}
              rol={gamblerName.rol}
              setGraph={setGraph}
            />
            )}
          </div>
          </div>
          <div className="flex flex-col w-1/2 h-full overflow-auto">
            {graph.status === false ? (
              <div className=" text-white w-full h-full flex flex-col justify-center items-center">
                <img src={image} alt="metrics" className="w-96 h-96"/>
                <p className="font-titulodash text-gristexto font-bold border border-gristexto p-2">! Seleccionar un usuario para visualizar su estadística</p>
              </div>
            ) : (
              <div className={`w-full h-auto flex flex-col gap-4 items-center justify-center pt-3 ${graph.status === false ? "hidden" : ""}`}>
              <h2 className="font-titulodash font-bold text-gristexto">estadística por usuario</h2>
              <div className="w-full border-b border-gristexto"></div>
                <UserStatGafic
                  dataa={bets}
                  userId={graph.id}
                />
              <div className="w-full border-b border-gristexto"></div>
            </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}