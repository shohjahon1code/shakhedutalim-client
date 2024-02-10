import axios from "axios"
import { API_URL, getInstructorUrl } from "src/config/api.config"
import { InstructorApplyBody } from "src/store/instructor/instructor.interface"
export const InstructorService = {
  async applyInstructor(body: InstructorApplyBody) {
    const response = await axios.post<"Success">(
      `${API_URL}${getInstructorUrl("apply")}`,
      body
    )
    console.log(response)

    return response
  },
}
