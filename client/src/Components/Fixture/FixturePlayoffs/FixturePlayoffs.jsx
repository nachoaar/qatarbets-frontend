import React from "react";
import { useSelector } from "react-redux";
import { Separator } from "../../Utils/Separator";
import { CardPlayoffs } from "./CardPlayoffs/CardPlayoffs";

export const FixturePlayoffs = () => {
  const matchesRound16 = useSelector((state) => state.fixture.fixtureRoundOf16);
  const matchesRound8 = useSelector((state) => state.fixture.fixtureRoundOf8);
  const matchesRound4 = useSelector((state) => state.fixture.fixtureRoundOf4);
  const matchesRound2 = useSelector((state) => state.fixture.fixtureRoundOf2);

  console.log(matchesRound8);

  return (
    <div className="w-full h-auto flex flex-col py-6">
      <div className="w-full flex flex-row py-6">
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
      <div className="flex flex-row ">
        <div className="flex flex-row gap-1 h-128 w-2/5 justify-center">
          <div className="flex flex-col justify-between py-7">
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[0]?.a1.name
                    ? matchesRound16[0].a1.name
                    : "- A1"
                }
                nameAway={
                  matchesRound16[1]?.b2.name
                    ? matchesRound16[1].b2.name
                    : "- B2"
                }
                id={1}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[2]?.c1.name
                    ? matchesRound16[2].c1.name
                    : "- C1"
                }
                nameAway={
                  matchesRound16[3]?.d2.name
                    ? matchesRound16[3].d2.name
                    : "- D2"
                }
                id={3}
                stage={"Octavos"}
              />
            </div>
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[4]?.e1.name
                    ? matchesRound16[4].e1.name
                    : "- E1"
                }
                nameAway={
                  matchesRound16[5]?.f2.name
                    ? matchesRound16[5].f2.name
                    : "- F2"
                }
                id={5}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[6]?.g1.name
                    ? matchesRound16[6].g1.name
                    : "- G1"
                }
                nameAway={
                  matchesRound16[7]?.h2.name
                    ? matchesRound16[7].h2.name
                    : "- H2"
                }
                id={7}
                stage={"Octavos"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-around">
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
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-center">
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
        <div className="w-1/5 flex flex-col justify-start items-center gap-4">
          <div className="font-fifa text-3xl text-white">
            <p>Final</p>
          </div>
          <div>logo</div>
          <div>
            <CardPlayoffs
              nameHome={
                matchesRound2[0]?.home_name
                  ? matchesRound2[0].home_name
                  : "- Ganador 13"
              }
              nameAway={
                matchesRound2[0]?.away_name
                  ? matchesRound2[0].away_name
                  : "- Ganador 13"
              }
              stage={"Final"}
              id={15}
            />
          </div>
          <div>
            <Separator />
          </div>
        </div>

        <div className="flex flex-row gap-1 h-128 w-2/5 justify-center">
          <div className="bg-morado flex flex-col justify-center">
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
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-around">
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
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
            <div className="flex flex-col gap-20">
              <Separator />
            </div>
          </div>
          <div className="bg-morado flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[1]?.b1.name
                    ? matchesRound16[1].b1.name
                    : "- B1"
                }
                nameAway={
                  matchesRound16[0]?.a2.name
                    ? matchesRound16[0].a2.name
                    : "- A2"
                }
                id={2}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[3]?.d1.name
                    ? matchesRound16[3].d1.name
                    : "- D1"
                }
                nameAway={
                  matchesRound16[2]?.c2.name
                    ? matchesRound16[2].c2.name
                    : "- C2"
                }
                id={4}
                stage={"Octavos"}
              />
            </div>
            <div className="flex flex-col gap-6">
              <CardPlayoffs
                nameHome={
                  matchesRound16[5]?.f1.name
                    ? matchesRound16[5].f1.name
                    : "- F1"
                }
                nameAway={
                  matchesRound16[4]?.e2.name
                    ? matchesRound16[4].e2.name
                    : "- E2"
                }
                id={6}
                stage={"Octavos"}
              />
              <CardPlayoffs
                nameHome={
                  matchesRound16[7]?.h1.name
                    ? matchesRound16[7].h1.name
                    : "- H1"
                }
                nameAway={
                  matchesRound16[6]?.g2.name
                    ? matchesRound16[6].g2.name
                    : "- G2"
                }
                id={8}
                stage={"Octavos"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between py-7">
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
