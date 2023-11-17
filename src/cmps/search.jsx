import { ReactSVG } from 'react-svg';
import SearchSvg from '../assets/icons/search.svg';
import { useState } from 'react';


export function Search({ setSearchTerm, setCurrPage }) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setSearchTerm(value);
        setCurrPage(1)
    };

    return (
        <div className="search-panel">
            <ReactSVG src={SearchSvg} />
            <input
                type="text"
                placeholder='Поиск'
                onChange={handleChange}
                name="txt"
                autoComplete="off"
                value={inputValue} />
        </div>
    )

}