import React from 'react';
import {
    MainPageHeaderBox,
    MainPageHeaderInner,
    MainPageHeaderLeft,
    MainPageHeaderLeftLogo,
    MainPageHeaderRight,
    MainPageHeadeWrapper
} from '../style/MainPageHeaderStyle';
import { FiMenu } from 'react-icons/fi'

export function MainPageHeader() {
    return (
        <MainPageHeadeWrapper>
            <MainPageHeaderInner>
                <MainPageHeaderLeft>
                    <MainPageHeaderLeftLogo to="">
                        ARLO
                    </MainPageHeaderLeftLogo>
                </MainPageHeaderLeft>
                <MainPageHeaderRight>
                    <MainPageHeaderBox>
                        <FiMenu size="20px" />
                    </MainPageHeaderBox>
                </MainPageHeaderRight>
            </MainPageHeaderInner>
        </MainPageHeadeWrapper>
    );
}


export default MainPageHeader;