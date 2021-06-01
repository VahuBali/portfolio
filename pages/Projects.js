import React from 'react'
import Navbar from "../components/Home Page/Navbar";
import Overview from "../components/Projects/overview"

function Projects() {
    return (
        <div>
            <Navbar src="../../v.svg" />
            <div>
                <h1 className="text-center text-3xl mt-10 font-semibold">My Projects</h1>
                <p className="text-center text-xl mt-3">These are all my commercially available projects for you to check out my work!</p>
            </div>
            <Overview />



        </div>
    )
}

export default Projects
