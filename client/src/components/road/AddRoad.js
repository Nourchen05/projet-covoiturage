import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRoad } from '../../JS/actions/road'


function RoadForm() {
    const dispatch = useDispatch()
    const user_id = localStorage.getItem("user")
    const [dest, setDest] = useState(true)
    const [arr, setArr] = useState(false)
    const [place,setPlace]=useState(false)
    const [date,setDate]= useState(false)

    // useState for the input of road field
    const [road, setRoad] = useState({
        departure: "",
        arrive: "",
        nbplace: "",
        price: ""
    })
    //handleChange for the input of road fields
    const handleChange = (e) => {
        setRoad({ ...road, [e.target.name]: e.target.value })
    }
    //handleClick to add a New road
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addRoad(user_id, road))
        setDate(false)
        setDest(true)
        setRoad({
            departure: "",
            arrive: "",
            nbplace: "",
            price: ""
        })
    }

    return (
        <div>
            <form>
                {dest ?
                    <div className="road_field">
                        <h2 className="title">D’où partez-vous ?</h2>
                        <input type="text" placeholder="destination" name="departure" onChange={handleChange} />
                        <button className="btn"
                        onClick={(e)=> {e.preventDefault();setDest(false);setArr(true)}}
                        >Continuer</button>
                    </div> : null}
                {arr ? 
                <div className="road_field">
                    <h2 className="title">Où allez vous ?</h2>
                    <input type="text" placeholder="arrivee" name="arrive" onChange={handleChange} />
                    <button className="btn" 
                    onClick={(e)=> {e.preventDefault();setArr(false);setPlace(true)}}
                    >Continuer</button>
                </div>
                : null }
                {place ? 
                <div className="road_field">
                    <h2 className="title">Combien de place  ? Prix ?</h2>
                    <select onChange={handleChange} name="nbplace">
                        <option>places</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input type="text" placeholder="prix" name="price" onChange={handleChange} />
                    <button className="btn"
                    onClick={(e)=> {e.preventDefault();setPlace(false);setDate(true)}}
                    >Continuer</button>
                </div>
                :null
                }
                {date ? 
                <div className="road_field">
                    <h2 className="title">Quand vous partez ? </h2>
                    <input type="time" />
                    <input type="date" onChange={handleChange} name="date" />
                    <button type="submit" onClick={handleClick} className="btn">Finish</button>
                </div> :null }
            </form>
        </div>
    )
}

export default RoadForm
