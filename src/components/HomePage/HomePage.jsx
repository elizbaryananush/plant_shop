import React from 'react'
import CareTools from '../CareTools/CareTools'
import Collections from '../Collections/Collections'
import Find from '../Find/Find'
import Footer from '../Footer/Footer'
import Home from '../Home/Home.'
import List from '../List/List'
import NavBar from '../NavBar/NavBar'

function HomePage() {
    return (
        <div>
            <NavBar />
            <Home />
            <List />
            <Collections />
            <CareTools />
            <Find />
            <Footer />
        </div>
    )
}

export default HomePage
