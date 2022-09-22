import React from "react";
import { useSelector } from "react-redux";
import { Separator } from "../../Utils/Separator";
import { CardPlayoffs } from "./CardPlayoffs/CardPlayoffs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const FixturePlayoffs = () => {
  const matchesRound16 = useSelector((state) => state.fixture.fixtureRoundOf16);
  const matchesRound8 = useSelector((state) => state.fixture.fixtureRoundOf8);
  const matchesRound4 = useSelector((state) => state.fixture.fixtureRoundOf4);
  const matchThirdPlace = useSelector((state) => state.fixture.fixtureThirdPlaceMatch);
  const matchFinal = useSelector((state) => state.fixture.fixtureFinalMatch);


  return (
    <div className="w-full h-136 flex flex-col my-6">

      <div className="w-full hidden sm:flex flex-row py-6">
        <div className="w-2/5 flex flex-row text-center font-fifa text-white">
          <div className="w-1/3">
            <p>Octavos de final</p>
          </div>
          <div className="w-1/3">
            <p>Cuartos de final</p>
          </div>
          <div className="w-1/3">
            <p>Semifinal</p>
          </div>
        </div>
        <div className="w-1/5"></div>
        <div className="w-2/5 flex flex-row text-center font-fifa text-white">
          <div className="w-1/3">
            <p>Semifinal</p>
          </div>
          <div className="w-1/3">
            <p>Cuartos de final</p>
          </div>
          <div className="w-1/3">
            <p>Octavos de final</p>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-row snap-x overflow-x-auto sm:overflow-hidden">
        <div className="flex flex-row gap-1 h-128 sm:w-2/5 justify-center snap-start">
          <div className="flex flex-col justify-between py-7 snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-between snap-start">
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[0]?.home_name
                    ? matchesRound16[0].home_name
                    : "- 1º del grupo A"
                }
                nameAway={
                  matchesRound16[0]?.away_name
                    ? matchesRound16[0].away_name
                    : "- 2º del grupo B"
                }
                id={1}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[2]?.home_name
                    ? matchesRound16[2].home_name
                    : "- 1º del grupo C"
                }
                nameAway={
                  matchesRound16[2]?.away_name
                    ? matchesRound16[2].away_name
                    : "- 2º del grupo D"
                }
                id={3}
                stage={"Octavos"}
              />
            </div>
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[4]?.home_name
                    ? matchesRound16[4].home_name
                    : "- 1º del grupo E"
                }
                nameAway={
                  matchesRound16[4]?.away_name
                    ? matchesRound16[4].away_name
                    : "- 2º del grupo F"
                }
                id={5}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[6]?.home_name
                    ? matchesRound16[6].home_name
                    : "- 1º del grupo G"
                }
                nameAway={
                  matchesRound16[6]?.away_name
                    ? matchesRound16[6].away_name
                    : "- 2º del grupo H"
                }
                id={7}
                stage={"Octavos"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-around snap-start">
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound8[0]?.home_name
                    ? matchesRound8[0].home_name
                    : "- Ganador 1"
                }
                nameAway={
                  matchesRound8[0]?.away_name
                    ? matchesRound8[0].away_name
                    : "- Ganador 2"
                }
                stage={"Cuartos"}
                id={9}
              />
            </div>
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound8[2]?.home_name
                    ? matchesRound8[2].home_name
                    : "- Ganador 3"
                }
                nameAway={
                  matchesRound8[2]?.away_name
                    ? matchesRound8[2].away_name
                    : "- Ganador 4"
                }
                stage={"Cuartos"}
                id={11}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-center snap-start">
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound4[0]?.home_name
                    ? matchesRound4[0].home_name
                    : "- Ganador 9"
                }
                nameAway={
                  matchesRound4[0]?.away_name
                    ? matchesRound4[0].away_name
                    : "- Ganador 10"
                }
                stage={"Semis"}
                id={13}
              />
            </div>
          </div>
        </div>


        {/* FINAL */}
        <div className="sm:w-1/5 flex flex-col justify-start items-center gap-4 snap-start">
          <div className="font-fifa text-xl sm:text-3xl text-white">
            <p>Final</p>
          </div>
          <div>
            <CardPlayoffs
              nameHome={
                matchFinal?.home_name
                  ? matchFinal.home_name
                  : "- Ganador 13"
              }
              nameAway={
                matchFinal?.away_name
                  ? matchFinal.away_name
                  : "- Ganador 13"
              }
              stage={"Final"}
              id={15}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Separator />
            <Separator />
          </div>
          <div className="font-fifa text-md text-white">
            <p>3er puesto</p>
          </div>
          <div>
            <CardPlayoffs
              nameHome={
                matchThirdPlace?.home_name
                  ? matchThirdPlace.home_name
                  : "- Perderdor 13"
              }
              nameAway={
                matchThirdPlace?.away_name
                  ? matchThirdPlace.away_name
                  : "- Perdedor 13"
              }
              stage={"Tercer"}
              id={15}
            />
          </div>
        </div>

        <div className="flex flex-row gap-1 h-128 sm:w-2/5 justify-center ">
          <div className="bg-morado flex flex-col justify-center snap-start">
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound4[1]?.home_name
                    ? matchesRound4[1].home_name
                    : "- Ganador 11"
                }
                nameAway={
                  matchesRound4[1]?.away_name
                    ? matchesRound4[1].away_name
                    : "- Ganador 12"
                }
                stage={"Semis"}
                id={14}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-around snap-start">
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound8[1]?.home_name
                    ? matchesRound8[1].home_name
                    : "- Ganador 3"
                }
                nameAway={
                  matchesRound8[1]?.away_name
                    ? matchesRound8[1].away_name
                    : "- Ganador 4"
                }
                stage={"Cuartos"}
                id={10}
              />
            </div>
            <div>
              <CardPlayoffs
                nameHome={
                  matchesRound8[3]?.home_name
                    ? matchesRound8[3].home_name
                    : "- Ganador 3"
                }
                nameAway={
                  matchesRound8[3]?.away_name
                    ? matchesRound8[3].away_name
                    : "- Ganador 4"
                }
                stage={"Cuartos"}
                id={12}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-between snap-start">
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[1]?.home_name
                    ? matchesRound16[1].home_name
                    : "- 1º del grupo B"
                }
                nameAway={
                  matchesRound16[1]?.away_name
                    ? matchesRound16[1].away_name
                    : "- 2º del grupo A"
                }
                id={2}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[3]?.home_name
                    ? matchesRound16[3].home_name
                    : "- 1º del grupo D"
                }
                nameAway={
                  matchesRound16[3]?.away_name
                    ? matchesRound16[3].away_name
                    : "- 2º del grupo C"
                }
                id={4}
                stage={"Octavos"}
              />
            </div>
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[5]?.home_name
                    ? matchesRound16[5].home_name
                    : "- 1º del grupo F"
                }
                nameAway={
                  matchesRound16[5]?.away_name
                    ? matchesRound16[5].away_name
                    : "- 2º del grupo E"
                }
                id={6}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[7]?.home_name
                    ? matchesRound16[7].home_name
                    : "- 1º del grupo H"
                }
                nameAway={
                  matchesRound16[7]?.away_name
                    ? matchesRound16[7].away_name
                    : "- 2º del grupo G"
                }
                id={8}
                stage={"Octavos"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between py-7 snap-start">
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
