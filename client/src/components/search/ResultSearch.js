import React from 'react'
import { useSelector } from 'react-redux'
import Detail from './SearchDetail'
import './search.css'


function ResultSearch() {
    const loading = useSelector(state => state.roadReducer.loadRoad)
    const searchedRoads = useSelector(state => state.roadReducer.roads)
    return (
        <div className="container">
            <div className="result_search">
                {loading ? null :
                    searchedRoads.map(el => <Detail key={el._id} data={el} />)}
            </div>
        </div>
    )
}

export default ResultSearch
