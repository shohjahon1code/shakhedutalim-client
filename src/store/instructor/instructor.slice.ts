import { createSlice } from "@reduxjs/toolkit"
import { InstructorInitialStateType } from "./instructor.interface"
import { applyInstructor } from "./instructor.action"

const initialState: InstructorInitialStateType = {
  isLoading: false,
  error: null,
}

export const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    clearInstructorError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyInstructor.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(applyInstructor.fulfilled, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(applyInstructor.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
  },
})

export const InstructorReducer = instructorSlice.reducer
export const instructorSliceAction = instructorSlice.actions
