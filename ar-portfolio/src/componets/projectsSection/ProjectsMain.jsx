import React from 'react'
import ProjectsText from './ProjectsText'
import AllProjects from './AllProjects'

function ProjectsMain() {
  return (
    <div id = 'projects' className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden pb-[50px] mt-[125px]">
      <ProjectsText/>
      <div>
        {/* <SingleProject/> */}
        <AllProjects/>
      </div>
    </div>
  )
}

export default ProjectsMain
