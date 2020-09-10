import React from 'react';
import Header from './Header.js'

const Profile = ({changePage}) => {
    return (
        <>
            <Header changePage={changePage}/>
            <h1>Страница Профиля</h1>
        </>
    ) 
}

export default Profile;