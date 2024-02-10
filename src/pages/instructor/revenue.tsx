import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"
import { RevenuePageComponent } from "src/page-component"

const Revenue: NextPage = () => {
  return <RevenuePageComponent />
}

export default withInstructorLayout(Revenue)
