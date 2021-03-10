import React from 'react';
import MainPagearea from './pages/MainPagearea';
import MainPageHeader from './pages/MainPageHeader';
import Projects from './pages/Projects';
import { MainPageWrapper } from './style/MainPageStyle';

export function MainPage() {
    return (
        <MainPageWrapper>
            <MainPageHeader />
            <MainPagearea />
            <Projects />
        </MainPageWrapper>
    );
}


export default MainPage;