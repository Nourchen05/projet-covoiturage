import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestReservation } from '../../JS/actions/reservation'
import {useHistory} from 'react-router-dom'
import RoadDiver from './roadById/RoadDiver'
import DepAndDes from './roadById/RoadDestAndDep'
import RoadPrice from './roadById/RoadPrice'

function Road() {
    const dispatch = useDispatch()
    const road_id = useSelector(state => state.roadReducer.road_id)
    const loading = useSelector(state => state.roadReducer.loadRoad)
    const d = road_id.date
    const date = new Date(d)
    //getting the day date (number)
    const day = date.getDate();
    //Getting Day Name (String)
    // const dayName = date.toString().split(' ')[0];
    var days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    var dayName = days[date.getDay()];
    //Getting month Name
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
    ];
    const monthName = months[date.getMonth()]

    //Reservation parameter 
    const customer_id = localStorage.getItem('user')
    
    const history = useHistory()

    return (
        <>
            {loading ? null :
                <div className="container">
                    {/* title : date part  */}
                    <h1 className="title">{dayName}.{day} {monthName} </h1>
                    {/* departure and destination part  */}
                    <DepAndDes road_id={road_id} />
                    {/* PRICE PART  */}
                    <RoadPrice road_id={road_id} />
                    {/* Road driver part  */}
                    <RoadDiver road_id={road_id} />
                    <button className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(requestReservation({
                                customer: customer_id,
                                driver: road_id.user._id,
                                road: road_id._id
                            })); 
                            history.push('/user/road')
                        }}>
                        Réserver</button>
                </div>
            }
        </>
    )
}

export default Road
