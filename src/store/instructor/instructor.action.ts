import { createAsyncThunk } from "@reduxjs/toolkit"
import { InstructorApplyBody } from "./instructor.interface"
import { InstructorService } from "src/services/instructor.service"
import { errorCatch } from "src/helpers/api.helper"

export const applyInstructor = createAsyncThunk<"Success", InstructorApplyBody>(
  "instructor/apply",
  async (body, thunkApi) => {
    try {
      const response = await InstructorService.applyInstructor(body)
      body.callback()
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error))
    }
  }
)
