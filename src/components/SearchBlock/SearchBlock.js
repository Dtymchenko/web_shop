import React from 'react';
import './SearchBlock.css'

const SearchBlock = (props) => {

    
    const onChangeSearchInput = (e) => props.setSearchValue(e.target.value)

    return (
        <div className='search__block'>
            <h1>{props.searchValue ? `Searching "${props.searchValue}"`: "List of All Goods!"}</h1>
            <div className='search__input__block'>
                <img src='/img/search-icon.png' alt='search' width={15} height={15}></img>
                <input value={props.searchValue} onChange={onChangeSearchInput} type="text" placeholder="Search..."></input>
                { props.searchValue && <img style={{cursor:"pointer"}} src='/img/remove.svg' alt='clear' width={20} height={20} onClick={() => props.setSearchValue("")}></img>}
            </div>
        </div>
    );
}

export default SearchBlock;

