import React from 'react'
import { useSelector } from 'react-redux'
import './roadPrice.css'

function RoadPrice({road_id}) {
    const input = useSelector(state => state.searchReducer.input)
    return (
        <div className="road_id_price">
            <p>Prix total pour {input.nbplace} {input.nbplace ==1 ?'passager' :'passagers'}</p>
            <h4>{road_id.price*input.nbplace} DT</h4>
        </div>
    )
}

export default RoadPrice
