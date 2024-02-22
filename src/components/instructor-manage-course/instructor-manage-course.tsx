import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react"
import { Form, Formik, FormikValues } from "formik"
import dynamic from "next/dynamic"
import { useState } from "react"
import { FileUploader } from "react-drag-drop-files"
import { GiSave } from "react-icons/gi"
import "react-quill/dist/quill.snow.css"
import { TagsInput } from "react-tag-input-component"
import { courseCategory, courseLevel, coursePrice } from "src/config/constants"
import { editorModules } from "src/config/editor.config"
import TextField from "../text-field/text-field"
import TextAreaField from "../text-area-field/text-area-field"
import SelectField from "../select-field/select-field"
import TagField from "../tag-field/tag-filed"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const InstructorManageCourse = () => {
  const [learned, setLearned] = useState<string[]>()
  const [requirements, setRequirements] = useState<string[]>()
  const [tags, setTags] = useState<string[]>()
  const [file, setFile] = useState(null)

  const handleChange = (file) => {
    setFile(file)
  }

  const onSubmit = (formDate: FormikValues) => {
    console.log(formDate)
  }

  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={{}}>
        {(formik) => (
          <Form>
            <Flex mt={12} gap={4}>
              <Box w={"70%"}>
                <Stack spacing={5}>
                  <TextField
                    name="title"
                    label="Title"
                    placeholder="JavaScript from 0 to hero"
                  />

                  <TextAreaField
                    name="excerp"
                    placeholder="Full course about JavaScript"
                    height={"150"}
                    label={"Excerpt"}
                  />
                  <Flex gap={4}>
                    <TagField
                      label=" What will students learn in your course?"
                      name="learn"
                      placeholder="Full project..."
                      formik={formik}
                      errorMessage=""
                    />
                    <TagField
                      label="Requirements"
                      name="requirements"
                      placeholder="Basic JavaScript..."
                      errorMessage=""
                      formik={formik}
                    />
                  </Flex>
                  <Box>
                    <FormLabel mb={3}>
                      Description{" "}
                      <Box as={"span"} color={"red.300"}>
                        *
                      </Box>
                    </FormLabel>
                    <ReactQuill modules={editorModules} />
                  </Box>
                  <Button
                    w={"full"}
                    h={14}
                    colorScheme={"facebook"}
                    rightIcon={<GiSave />}
                    type="submit"
                  >
                    Create course
                  </Button>
                </Stack>
              </Box>
              <Box w={"30%"}>
                <Stack spacing={5}>
                  <SelectField
                    name="Level"
                    label="Level"
                    placeholder="-"
                    arrOptions={courseLevel}
                  />
                  <SelectField
                    name="Category"
                    label="Category"
                    placeholder="-"
                    arrOptions={courseCategory}
                  />
                  <SelectField
                    name="Price"
                    label="Price"
                    placeholder="-"
                    arrOptions={coursePrice}
                  />

                  <TagField
                    placeholder="JavaScript..."
                    label="Course tags"
                    errorMessage=""
                    formik={formik}
                    name="tags"
                  />
                  <Box>
                    <FormLabel>
                      Course preview image{" "}
                      <Box as={"span"} color={"red.300"}>
                        *
                      </Box>
                    </FormLabel>
                    <FileUploader
                      handleChange={handleChange}
                      name="file"
                      types={["JPG", "PNG", "GIF"]}
                      style={{ minWidth: "100%" }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default InstructorManageCourse
