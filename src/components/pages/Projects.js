import React from 'react';
import { ProjectsContainer, ProjectsContainerRow, ProjectsContainerRowCol, ProjectsContainerRowColH3, ProjectsWrapper } from '../style/ProjectsStyle';

function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectsContainer>
                <ProjectsContainerRow>
                    <ProjectsContainerRowCol>
                        <ProjectsContainerRowColH3>
                            Latest Projects
                         </ProjectsContainerRowColH3>
                    </ProjectsContainerRowCol>
                </ProjectsContainerRow>
            </ProjectsContainer>
        </ProjectsWrapper>
    );
}


export default Projects;