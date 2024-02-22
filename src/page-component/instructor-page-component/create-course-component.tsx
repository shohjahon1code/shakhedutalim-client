import { Divider } from "@chakra-ui/react"
import "react-quill/dist/quill.snow.css"
import { InstructorManageCourse } from "src/components"
import SectionTitle from "src/components/section-title/section-title"

const CreateCourseComponent = () => {
  const onSubmit = () => {}
  return (
    <>
      <SectionTitle
        titles="Create course"
        subtitle="Note that when you're creating course it will be draft"
      />
      <Divider mt={5} />
      <InstructorManageCourse
        titleBtn="Create Course"
        submitHandler={onSubmit}
      />
    </>
  )
}

export default CreateCourseComponent
