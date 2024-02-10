import { userSliceAction } from "./user/user.slice"
import * as userActions from "./user/user.action"
import * as InstructorActions from "./instructor/instructor.action"
import { instructorSliceAction } from "./instructor/instructor.slice"

export const allActions = {
  ...userSliceAction,
  ...userActions,
  ...InstructorActions,
  ...instructorSliceAction,
}
