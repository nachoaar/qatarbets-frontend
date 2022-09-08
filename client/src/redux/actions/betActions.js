import axios from 'axios'
import { getAllBets } from '../reducer/betsSlice'

   export function getBets(){
    return async function(dispatch){
        const allBets = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/bet/allBets')
        dispatch(getAllBets(allBets.data))
    }
    }
