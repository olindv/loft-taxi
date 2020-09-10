import React from 'react';
import Header from './Header.js'

const Map = ({changePage}) => {
    return (
        <>
            <Header changePage={changePage}/>
            <h1>Страница Карт</h1>
        </>
    ) 
}

export default Map;