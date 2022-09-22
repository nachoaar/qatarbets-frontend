import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { SidebarHome } from "../Utils/SidebarHome";
import { TitleContent } from "../Utils/TitleContent";
import { Footer } from "../Footer/Footer";
import { CardSmall } from "../Utils/CardSmall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture, getGroupMatch } from "../../redux/actions/fixtureActions";
import { CardsMatch } from "./CardsMatch/CardsMatch";
import { getGroups } from "../../redux/actions/groupActions";
import { CardLarge } from "../Utils/CardLarge";
import { Slider } from "./Slider/Slider";
import { useLocation } from "react-router-dom";
import { getTeams } from "../../redux/actions/teamActions";
import { startingAllPlayers } from "../../redux/actions/playersActions";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { getInternalUser,getIuBets} from "../../redux/actions/internalUserActions";
import { matchesMostBets } from "../../redux/actions/matchActions";
import { Fixture } from "../Fixture/Fixture";
import { NavigateHome } from "./NavigateHome/NavigateHome";


export const Home = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let groupId = query.get("id");
  let fase = query.get("fase");

  let mostrar = true
  if(fase) mostrar = false


  const dispatch = useDispatch();

  const matches = useSelector((state) => state.fixture?.fixture);
  const filter = useSelector((state) => state.fixture?.fixtureFilterCopy);
  const user = useSelector((store)=> store.internalUser?.user)
  const mostBets = useSelector((state) => state.match.matchesMostBets);
  const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let letraGroup = filter[0]?.groupId;

  //estado local para mostrar o los grupos o las llaves
  const [change, SetChange] = useState(mostrar);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGroups());
    dispatch(getInternalUser())
    dispatch(getIuBets())
    dispatch(matchesMostBets());
    if (groupId) {
      dispatch(getGroupMatch(Number(groupId)));
    } else {
      dispatch(getFixture());
      dispatch(getTeams());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(startingAllPlayers());
  }, []);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar id={user[0]?.id} />
      <NavigateHome setChange={SetChange} change={change}/>
      {change ? (
        <div className="flex flex-col sm:flex-row justify-between w-11/12 my-2 gap-3">
          <div className="w-full sm:w-2/5">
            <SidebarHome filter={filter} />
          </div>
          <div className="h-full w-full sm:w-3/5 flex flex-col gap-3">
            <TitleContent
              title={
                filter.length > 6
                  ? `proximos partidos`
                  : "partidos del grupo: " + letras[letraGroup - 1]
              }
            />
            <div className="w-full h-auto">
              <CardsMatch />
            </div>
          </div>
        </div>
      ) : (
        <Fixture />
      )}

      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-11/12 h-40 overflow-hidden flex items-center">
          <Slider />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <TitleContentMedium title="Proximos partidos" />
          <div className="w-11/12 h-auto flex flex-row gap-2 snap-x overflow-auto">
            {/* <Cards allMatch={matches}/> */}
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
        <div className="hidden lg:flex flex-col w-full justify-center items-center">
          <TitleContentMedium title="Partidos mas apostados" />
          <div className="flex flex-col sm:flex-row justify-between gap-1 w-full sm:w-11/12 mb-10">
            {mostBets &&
              mostBets.slice(0, 4).map((m) => {
                return (
                  <CardSmall
                    key={m.matchData.id}
                    id={m.matchData.id}
                    home_team={m.homeName.name}
                    away_team={m.awayName.name}
                    groupId={m.matchData.groupId}
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

      <Footer />
    </div>
  );
};
