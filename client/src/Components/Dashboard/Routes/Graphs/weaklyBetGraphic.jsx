import React,{useState} from "react";
import { LineChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from "recharts"
import gruopBalanceByDate from "./groupByDay";


export default function WeaklyBetsGraphic({dataa}){

let data = gruopBalanceByDate(dataa)
let sortedData = data?.sort((a,b) => Number(a.date) - Number(b.date))



const [one,setOne] = useState(true)
const [two,setTwo] = useState(true)




    function handleButtons(e){
        if(e.target.value === 'gains'){
            setTwo(!two)

        }
        if(e.target.value === 'losed'){
            setOne(!one)
        }
    }

    return(
        <div className="flex flex-col justify-center items-center bg-white rounded-3xl shadow pt-5 mb-6">
            <LineChart width={450} height={250} data={sortedData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            { two === true ? (<Line type="monotone" dataKey="losed" stroke="#8884d8"/>) :(<></>)}
            {  one === true ? (<Line type="monotone" dataKey="gains" stroke="#82ca9d"  />):(<></>)}
            </LineChart>
            <div className="flex gap-2">
                <button className=" flex-1 m-1 border shadow-sm " onClick={(e)=>{ handleButtons(e)}} value='gains'>Gains</button> 
                <button className=" flex-1 m-1 border shadow-sm" onClick={(e)=>{handleButtons(e)}} value='losed'>Losed</button>
            </div>
        </div>
    )
}
