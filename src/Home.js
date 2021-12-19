import React from 'react'
import { useGlobalContext } from './context'
import "./Home.css"

const Home = () => {

    const {user} = useGlobalContext()

    return (
        <section className='container home-wrapper'>
            <div>
                welcome home {user && user.length > 0 ? user : "Guest"} !!!
            </div>
        </section>
    )
}

export default Home
