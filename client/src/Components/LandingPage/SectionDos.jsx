import React, { useState } from 'react';
import { useEffect } from 'react';
import { CardLarge } from "../Utils/CardLarge";
import { Countdown } from "../LandingPage/Countdown/Countdown";
import { useSelector } from "react-redux";
import { TitleContent } from "../Utils/TitleContent";

export const SectionDos = (props) => {

  const images = ['publilanding1.png','publilanding2.png','publilanding3.png'];
  let autoPlay = true;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);


  const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }

  const matches = useSelector((state) => state.fixture?.fixture);
  const matchesMostBets = useSelector((state) => state.match.matchesMostBets);

  console.log(matchesMostBets);

/*   useEffect(() => {
    if(autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 5000);
      return () => clearInterval(interval);
    }
  }); */

  return (
    <div className="h-max flex flex-col justify-around items-center bg-morado py-6">
      <Countdown />

      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center mt-12">
        <div className="flex flex-col md:flex-row w-5/6 h-auto justify-between pb-8 items-center">
          <div className="w-full md:w-2/5 font-fifa text-white flex flex-col gap-4 pr-16">
            <h2 className="text-3xl">APOSTA Y GANA!</h2>
            <p className="text-lg">
              En Qatarbets ganar es muy facil. Solo tenes que el elegir el
              partido que mas te gusta y realizar tu apuesta.{" "}
            </p>
          </div>
          <div className="w-full md:w-3/5 overflow-hidden">
            <img src={require(`../../media/${selectedImage}`)} alt="" className="cursor-pointer"/>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full justify-center items-center">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex justify-start text-left w-5/6">
              <TitleContent title="Proximos partidos" />
            </div>
            <div className="w-5/6 h-auto flex flex-row gap-2 snap-x overflow-auto">
              {matches &&
                matches.slice(0, 10).map((m) => {
                  return (
                    <CardLarge
                      key={m.id}
                      id={m.id}
                      home_team={m.home_team.name}
                      away_team={m.away_team.name}
                      groupId={m.groupId}
                      profit_coef_home={m.profit_coef_home}
                      profit_coef_draw={m.profit_coef_draw}
                      profit_coef_away={m.profit_coef_away}
                      date={m.date}
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex justify-start text-left w-5/6">
              <TitleContent title="Partidos mas apostados" />
            </div>
            <div className="w-5/6 h-auto flex flex-row gap-2 snap-x overflow-auto">
              {matchesMostBets &&
                matchesMostBets.map((m) => {
                  return (
                    <CardLarge
                      key={m.matchData.id}
                      id={m.matchData.id}
                      home_team={m.homeName.name}
                      away_team={m.awayName.name}
                      groupId={m.groupId}
                      profit_coef_home={m.matchData.profit_coef_home}
                      profit_coef_draw={m.matchData.profit_coef_draw}
                      profit_coef_away={m.matchData.profit_coef_away}
                      date={m.matchData.date}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
