import React from 'react'
import RoomsList from '../components/RoomsList'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewsLetter from '../components/NewsLetters'
import Category from '../components/Category'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <RoomsList />
            <Features />
            <NewsLetter />
            <Category />
        </div>
    )
}

export default HomePage
