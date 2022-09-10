import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { getGroupMatch } from "../../redux/actions/fixtureActions";
import { groupById } from "../../redux/actions/groupActions";
import { matchId } from "../../redux/actions/matchActions";
import {
  startingPlayersAway,
  startingPlayersClean,
  startingPlayersHome,
} from "../../redux/actions/playersActions";
import { Footer } from "../Footer/Footer";
import FormLogin from "../Forms/FormLogin/FormLogin";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContent } from "../Utils/TitleContent";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";

export const Detail = () => {

 const [isOpenLogin, openModalLogin, closeModalLogin] = useModal(false)
 const [isOpenBet, openModalBet, closeModalBet] = useModal(false)

  let { id } = useParams();

  const dispatch = useDispatch();

  let { match } = useSelector((store) => store.match);
  let group = match[0]?.groupId;
  let homeId = match[0]?.home_team_id;
  let awayId = match[0]?.away_team_id;

  let { groupId } = useSelector((store) => store.group);

  let { fixtureFilter } = useSelector((store) => store.fixture);

  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  console.log(playersHome);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(matchId(id));
    dispatch(startingPlayersHome(homeId));
    dispatch(startingPlayersAway(awayId));
    dispatch(groupById(group));
    dispatch(getGroupMatch(group));
    return () => {
      dispatch(startingPlayersClean());
      homeId = null;
      awayId = null;
    };
  }, [dispatch, id, group, homeId, awayId]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">

      <Modal isOpen={isOpenBet} closeModal={closeModalBet}>
        <h3>modal Bet</h3>
        <p>este es el contenido del modal</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      {/* <Modal isOpen={isOpenLogin}>
        <FormLogin />
      </Modal> */}

      <Navbar />
      <div className="flex flex-row justify-center p-4 w-5/6 gap-3 h-auto mt-20">
        <div className="w-4/5">
          <div className="flex flex-row gap-2">
            <div className="w-7/12">
              <CardDetail
                home_team={match[0]?.home_team.name}
                away_team={match[0]?.away_team.name}
                group={groupId[0]?.name.toUpperCase().replace("_", " ")}
                date={match[0]?.date}
                profit_coef_home={match[0]?.profit_coef_home}
                profit_coef_draw={match[0]?.profit_coef_draw}
                profit_coef_away={match[0]?.profit_coef_away}
                openModal={openModalBet}
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

          <div className="w-full flex flex-col h-auto">
            <TitleContent title="PLANTILLAS" />
            <div className="w-full h-96">
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
          </div>
        </div>

        <SidebarMatch
          group={groupId[0]?.name.toUpperCase().replace("_", " ")}
          fixture={fixtureFilter}
        />
      </div>
      <Footer />
    </div>
  );
};
