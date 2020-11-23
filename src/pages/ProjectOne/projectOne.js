import React from 'react'
import {ProjectSec} from "./projectSection";
import {projectObj} from "./Data";

export const ProjectOne = () => {
    return (
        <>
            <ProjectSec {...projectObj} />
        </>
    )
}


