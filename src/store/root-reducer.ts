import { InstructorReducer } from "./instructor/instructor.slice"
import { UserReducer } from "./user/user.slice"

export const reducer = {
  user: UserReducer,
  instructor: InstructorReducer,
}
