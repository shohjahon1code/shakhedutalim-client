import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"
import { StudentPageComponent } from "src/page-component"

const Students: NextPage = () => {
  return <StudentPageComponent />
}

export default withInstructorLayout(Students)
