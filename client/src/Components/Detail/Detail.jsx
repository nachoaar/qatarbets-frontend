import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroupMatch } from "../../redux/actions/fixtureActions";
import { groupById } from "../../redux/actions/groupActions";
import { matchId } from "../../redux/actions/matchActions";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Alignment } from "../Utils/Alignment";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContent } from "../Utils/TitleContent";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";

export const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  let { match } = useSelector((store) => store.match);
  let group = match[0]?.groupId;

  let { groupId } = useSelector((store) => store.group);

  let { fixtureGroup } = useSelector((store) => store.fixture);

  useEffect(() => {
    dispatch(matchId(id));

    dispatch(groupById(group));
    dispatch(getGroupMatch(group));
  }, [dispatch, id, group]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-center p-4 w-5/6 gap-3 h-auto">
        <div className="w-4/5">
          <div className="flex flex-row gap-1">
            <div className="w-7/12">
              <CardDetail
                date={match[0]?.date}
                home_team={match[0]?.home_team.name}
                away_team={match[0]?.away_team.name}
                city={match[0]?.city}
                stadium_name={match[0]?.stadium_name}
                group={groupId[0]?.name.toUpperCase().replace("_", " ")}
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
          <div className="flex flex-row gap-3 mt-3">
            <div className="w-full">
              <TitleContent title="PLANTILLAS" />
              <div className="flex flex-row gap-5">
                <div className="w-2/4">
                  <Alignment />
                </div>
                <div className="w-2/4">
                  <Alignment />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SidebarMatch
          group={groupId[0]?.name.toUpperCase().replace("_", " ")}
          fixture={fixtureGroup}
        />
      </div>
      <Footer />
    </div>
  );
};
