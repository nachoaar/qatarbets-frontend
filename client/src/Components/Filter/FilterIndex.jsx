import FilterByGroups from "./FilterByGroup"
import FilterByDate from "./FilterByDate"



export default function FilterIndex(){

    return(
        <div>

            <label className="titleDisplay" htmlFor="filtersDisplay"><h2 className="titleFilters">Filtros </h2></label>
            <div>
                <div>
                    <h3>Groups</h3>
                    <FilterByGroups />
                </div>

            </div>
        </div>
    )
}
