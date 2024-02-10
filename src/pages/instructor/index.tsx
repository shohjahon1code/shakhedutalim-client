import { GetServerSideProps, NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"

const InstructorPage: NextPage = () => {
  return <div>InstructorPage</div>
}

export default withInstructorLayout(InstructorPage)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/instructor/students",
      permanent: false,
    },
  }
}
