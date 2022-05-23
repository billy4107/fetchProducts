import React from 'react'

const Search = (props) => {
    const { value, onValueChange } = props;
    return (
        <div className="input-group input-group-lg w-25">
            <input type="text" className="form-control input-lg" placeholder="Category" value={value} 
            onChange={(event) => { onValueChange(event.target.value) }}/>
        </div>
    )
}

export default Search