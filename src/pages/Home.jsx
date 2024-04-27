import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeGrid from '../components/HomeGrid'
import TitleContainer from '../components/TitleContainer'
import FlexContainer from '../contanier/FlexContainer'
import { useState } from 'react'

export default function Home() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <FlexContainer>
                <Sidebar />
                <HomeGrid searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </FlexContainer>
        </div>
    )
}
