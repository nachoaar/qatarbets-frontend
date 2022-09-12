import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { getGroupMatch, getMatchId } from "../../redux/actions/fixtureActions";
import { groupById } from "../../redux/actions/groupActions";
import { matchClean, matchId } from "../../redux/actions/matchActions";
import {
  startingPlayersAway,
  startingPlayersClean,
  startingPlayersHome,
} from "../../redux/actions/playersActions";
import { Footer } from "../Footer/Footer";
import FormLogin from "../Forms/FormLogin/FormLogin";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";

export const Detail = () => {



/*   let { id } = useParams();
  const dispatch = useDispatch();

  let { match } = useSelector((store) => store.match);
  let { groupId } = useSelector((store) => store.group);
  let { fixtureFilter } = useSelector((store) => store.fixture);
  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  let group = match[0]?.groupId;
  let homeId = match[0]?.home_team_id;
  let awayId = match[0]?.away_team_id;

  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");

    useEffect( () => {
    window.scrollTo(0, 0);
    dispatch(matchId(id));
    dispatch(startingPlayersHome(homeId));
    dispatch(startingPlayersAway(awayId));
    dispatch(groupById(group));
    dispatch(getGroupMatch(group));
    return () => {
      dispatch(startingPlayersClean());
    };
  }, [awayId, dispatch, group, homeId, id]); */





  let { id } = useParams();
  console.log("id del partido - " + id)

  const dispatch = useDispatch();

  //miramos el match
  const match = useSelector((state) => state.fixture.fixtureMatchId);
  console.log("match");
  console.log(match);

  const groupId = match[0]?.groupId; //obtengo el id del grupo del partido
  console.log("grupo id");
  console.log(groupId);


  //miramos los partidos del grupo
  const matchesGroup = useSelector((state) => state.fixture.fixtureFilter);
  console.log("partidos por grupo");
  console.log(matchesGroup);

  const nameGroups = ["A","B","C","D","E","F","G","H"]

  //para el modal
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);


  useEffect(() => {
    dispatch(getMatchId(id)); //obtengo el partido
    dispatch(getGroupMatch(groupId)); //action que obtiene todos los partidos del grupo pasado por parametro
  }, [id, groupId]);


  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />

      <div className="flex flex-row justify-center p-4 w-5/6 gap-3 h-auto mt-20">
        <div className="w-4/5">
          <div className="flex flex-row gap-2">
            <div className="w-7/12">
              <CardDetail
                home_team={match[0]?.home_team.name}
                away_team={match[0]?.away_team.name}
                group={nameGroups[groupId - 1] }
                date={match[0]?.date}
                profit_coef_home={match[0]?.profit_coef_home}
                profit_coef_draw={match[0]?.profit_coef_draw}
                profit_coef_away={match[0]?.profit_coef_away}
                /* openModal={openModalBet}
                setProfit={setProfit}
                setBet={setBet} */
              />
            </div>
            <div className="w-5/12 h-max">
              <CardCity
                date={match[0]?.date}
                city={match[0]?.city}
                stadium_name={match[0]?.stadium_name}
              />
            </div>
          </div>

          {/* <div className="w-full flex flex-col h-auto mt-4">
            <TitleContentMedium title="Formacion de los equipos" />
            <div className="w-full h-auto">
              {Object.entries(playersHome).length === 0 ? (
                <h2>no se cargo nada todavi</h2>
              ) : (
                <Court
                  playersGoalkeeperHome={playersHome?.goalkeeper}
                  playersDefenderHome={playersHome?.defenders}
                  playersMidfielderHome={playersHome?.midfielder}
                  playersAttackersHome={playersHome?.attackers}
                  playersGoalkeeperAway={playersAway?.goalkeeper}
                  playersDefenderAway={playersAway?.defenders}
                  playersMidfielderAway={playersAway?.midfielder}
                  playersAttackersAway={playersAway?.attackers}
                />
              )}
            </div>
          </div> */}


        </div>

        <SidebarMatch
          group={nameGroups[groupId - 1]}
          fixture={matchesGroup}
        />
      </div>
      <Footer />

      {/* <Modal isOpen={isOpenBet} closeModal={closeModalBet}>
        <ProfitsPotentials
          profit={profit}
          home_team={match[0]?.home_team.name}
          away_team={match[0]?.away_team.name}
          date={match[0]?.date}
          bet={bet}
        />
        <FormLogin />
      </Modal> */}
    </div>

  );
};
