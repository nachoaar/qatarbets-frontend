import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGroupAction, getFixture } from "../../redux/actions/fixtureActions";
import { getGroups } from "../../redux/actions/groupActions";


export default function FilterByGroups(){
    const dispatch = useDispatch()
    const groups = useSelector((state) => state.group)

    useEffect(()=>{
        dispatch(getGroups())
    },[dispatch])

    function handleByGroup(e){
        e.preventDefault()
        dispatch(filterByGroupAction(e.target.value))
    }

    return(
        <div>
            <div>
<<<<<<< HEAD
                <select onChange={e => handleByGroup(e)}>                   
=======
                <select onChange={e => handleByGroup(e)}>
                    <option>Select</option>
>>>>>>> e2f87b30b8cfdd37b775ad1ed0ee3db2851ef566
                    {groups && groups.group?.map(group =>{
                        return(
                            <option key={group.name} value={group.id}>{group.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}