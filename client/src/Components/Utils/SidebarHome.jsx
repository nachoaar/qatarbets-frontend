import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";
import { BotonGroup } from "./BotonGroup";
import { ButtonCity } from "./Buttons/ButtonCity";
import { ButtonFecha } from "./Buttons/ButtonFecha";
import { TitleContent } from "./TitleContent";

export const SidebarHome = ({ filter }) => {
  const { group } = useSelector((store) => store.group);

  const dispatch = useDispatch();

  let ciudades = new Set(filter?.map((c) => c.city));
  let ciudadesArray = Array.from(ciudades);


  function handleOnClick(e) {
    e.preventDefault();
    dispatch(getFixture());
  }

  return (
    <div className="h-full w-2/5 bg-gradient-to-b from-morado to-moradosec py-2 flex flex-row gap-1 border-t-2 border-gris">
      <div className="flex flex-col gap-1 w-1/2">
        <div className="flex items-center justify-between">
          <TitleContent title="grupos" />
          <svg
            onClick={(e) => handleOnClick(e)}
            className="h-5 w-5 mr-5 cursor-pointer transition duration-700 hover:rotate-180"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6 2.4C12.2.9 10.2 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8c3.7 0 6.8-2.6 7.7-6h-2.1c-.8 2.3-3 4-5.6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.1.7 4.2 1.8L9 7h7V0l-2.4 2.4Z"
              fill="#ffffff"
              fill-rule="evenodd"
              class="fill-000000"
            ></path>
          </svg>
        </div>
        {group &&
          group.map((g) => {
            return (
              <BotonGroup
                key={g.id}
                name={g.name?.slice(-1)}
                teams={g.teams}
                id={g.id}
              />
            );
          })}
      </div>

      <div className="flex flex-col gap-1 w-1/2">
        <TitleContent title="ciudades" />

        {ciudadesArray &&
          ciudadesArray.map((c) => {
            return <ButtonCity ciudad={c} />;
          })}

        <TitleContent title="orden de fechas" />
        <ButtonFecha order="ascendente" cod="asc"/>
        <ButtonFecha order="descendente" cod="desc"/>
      </div>
    </div>
  );
};
