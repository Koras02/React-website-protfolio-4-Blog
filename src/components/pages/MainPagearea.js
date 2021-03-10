import React from 'react';
import { MainPageareaWrapper, MainPageWrapperBackground, MainPageWrapperCol, MainPageWrapperColInner, MainPageWrapperColInnerTextDescription, MainPageWrapperColInnertextleft, MainPageWrapperColInnerTextleftTitle, MainPageWrapperColLinkButton, MainPageWrapperContainer, MainPageWrapperRow } from '../style/MainPageareaStyle';


function MainPagearea() {
    return (
        <MainPageareaWrapper>
            <MainPageWrapperBackground>
                <MainPageWrapperContainer>
                    <MainPageWrapperRow>
                        <MainPageWrapperCol>
                            <MainPageWrapperColInner>
                                <MainPageWrapperColInnertextleft>
                                    <MainPageWrapperColInnerTextleftTitle>
                                        Noir <br />
                                        Ragoli
                                    </MainPageWrapperColInnerTextleftTitle>
                                    <MainPageWrapperColInnerTextDescription>
                                        I’m creative with an expertise in
                                         <br />
                                        marketing & crafting custom designs
                                    </MainPageWrapperColInnerTextDescription>
                                    <MainPageWrapperColLinkButton>
                                        More Project
                                    </MainPageWrapperColLinkButton>
                                </MainPageWrapperColInnertextleft>
                            </MainPageWrapperColInner>
                        </MainPageWrapperCol>
                    </MainPageWrapperRow>
                </MainPageWrapperContainer>
            </MainPageWrapperBackground>
        </MainPageareaWrapper>
    );
}


export default MainPagearea;