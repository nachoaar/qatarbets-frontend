import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGroupAction } from "../../redux/actions/fixtureActions";
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
        <select onChange={e => handleByGroup(e)}>
        <option>Select</option>
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
