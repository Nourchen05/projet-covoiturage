import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { searchRoad } from '../../JS/actions/road'
import { toggleSearched, setInput } from '../../JS/actions/search'
import qs from 'query-string'
import Searched from './Searched'
import './search.css'

function FieldSearch() {
    const dispatch = useDispatch()
    const searched = useSelector(state => state.searchReducer.search)
    const user_id=localStorage.getItem('user')
    const [search, setSearch] = useState({
        departure: "",
        arrive: "",
        nbplace: "",
        date: ""
    })

    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value })
    }
    const departure = search.departure
    const arrive = search.arrive
    const places = search.nbplace
    const date = search.date

    const queryParam = qs.parse(window.location.search);
    const newQueryParam = {
        ...queryParam,
        departure: departure,
        arrive: arrive,
        places: places,
        date: date
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(searchRoad(user_id))
        dispatch(toggleSearched())
        dispatch(setInput(search))
        // history.push({pathname:'/search',  search: qs.stringify(newQueryParam)})
    }

    return (
        <>
            {searched ?
                <Searched search={search} setSearch={setSearch} />
                :
                <div className="container">
                    <div className="field_search">
                        <h1 className="title">Ou Voulez-vous aller ?</h1>
                        <form>
                            <input type="text" placeholder="Départ" name="departure" onChange={handleChange} />
                            <input type="text" placeholder="Destination" name="arrive" onChange={handleChange} />
                            <div className="form_part">
                                <div>
                                    <input type="date" placeholder="Aujourd'hui" onChange={handleChange} name="date" />
                                </div>
                                <div>
                                    <select name="nbplace" onChange={handleChange} >
                                        <option>Passager</option>
                                        <option value="1">1 </option>
                                        <option value="2">2 </option>
                                        <option value="3">3 </option>
                                        <option value="4">4 </option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn" onClick={handleClick}>
                                <Link to={{ pathname: '/search', search: qs.stringify(newQueryParam) }}
                                    className='link_style_btn'
                                >
                                    Rechercher
                                </Link>
                            </button>
                        </form>
                    </div >
                </div>
            }
        </>
    )
}

export default FieldSearch
