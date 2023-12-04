import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getOne } from '../../store/actions'
import Body from '../../Body/body'
import Bottom from '../../Bottom/bottom'
import Header from './Header'

//IMPORT COMPONENT



const Home = ({ token, userData, isLoggedIn }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(getOne(token))
        }
    }, [dispatch])

    return (
        <div className='Home'>
            <Header token={token} userData={userData}  isLoggedIn={isLoggedIn} />
            {console.log(userData)}
            <Body/>
            <Bottom/>
        </div>
    )
}

export default Home