import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"
import { CoursePageComponent } from "src/page-component"

const Courses: NextPage = () => {
  return <CoursePageComponent />
}

export default withInstructorLayout(Courses)
