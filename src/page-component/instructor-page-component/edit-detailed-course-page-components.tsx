import { Divider } from "@chakra-ui/react"

import { useRouter } from "next/router"
import "react-quill/dist/quill.snow.css"
import { InstructorManageCourse } from "src/components"
import SectionTitle from "src/components/section-title/section-title"

const EditDetailedCoursePageComponent = () => {
  const router = useRouter()

  const onSubmit = () => {}

  return (
    <>
      <SectionTitle titles={`Edit course ${router.query.slug}`} subtitle={""} />
      <Divider mt={5} />
      <InstructorManageCourse titleBtn="Edit Course" submitHandler={onSubmit} />
    </>
  )
}

export default EditDetailedCoursePageComponent
