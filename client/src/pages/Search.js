import React from 'react'
import { useSelector } from 'react-redux'
import Fields from '../components/search/FieldSearch'
import Result from '../components/search/ResultSearch'

function Search() {
    const searched = useSelector(state => state.searchReducer.search)
    console.log(searched)
    return (
        <div >
            <Fields />
            {searched ? <Result /> : null }
        </div>
    )
}

export default Search
