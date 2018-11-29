import React from 'react'

export default ({onSubmit,onTextChange, text}) => (
    <form className={"search_container"} onSubmit={onSubmit}>
        <input 
            className={"search_input"} 
            placeholder="Search gifs"
            onChange={onTextChange}
            type="text"
            value={text}
            />
        <button type="submit">Submit</button>
    </form>
)