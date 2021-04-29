import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { BsSearch } from "react-icons/bs";
import { BiFastForward } from "react-icons/bi";
import { toggleSearch } from '../../JS/actions/search'

import './searched.css'


function Searched({ search, setSearch }) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.roadReducer.loadRoad)
    const searchedRoads = useSelector(state => state.roadReducer.roads)
    console.log()


    return (
        <div className="searched">
            <div className="top_searched"
                onClick={() => {
                    dispatch(toggleSearch()); setSearch({
                        departure: "",
                        arrive: "",
                        nbplace: "",
                        date: ""
                    })
                }}>
                <div className="search_icon">
                    <BsSearch style={{ color: "#708C91", fontSize: "1.5rem" }} />
                </div>
                <div>
                    <div className="top_searched_road">
                        <p>{search.departure}</p>
                        <BiFastForward style={{ color: "#054752", paddingRight: "10px" }} />
                        <p>{search.arrive}</p>
                    </div>
                    <div className='top_searched_date'>
                        <p>Le : {search.date} , </p>
                        <p>{search.nbplace} passager</p>
                    </div>
                </div>
            </div>
            <div className="bottom_searched">
                <h3>résultat : </h3>
                {loading ? null : <p>{searchedRoads.length} trajets disponible(s)</p>} 
            </div>
        </div>
    )
}

export default Searched
