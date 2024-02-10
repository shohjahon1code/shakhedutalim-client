import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"
import { DraftCoursePageComponent } from "src/page-component"

const DraftCourses: NextPage = () => {
  return <DraftCoursePageComponent />
}

export default withInstructorLayout(DraftCourses)
