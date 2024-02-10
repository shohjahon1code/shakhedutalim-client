import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthService } from "src/services/auth.service"
import { AuthUserResponse } from "./user.interface"
import { errorCatch } from "src/helpers/api.helper"

export const register = createAsyncThunk<
  AuthUserResponse,
  { email: string; password: string; callback: () => void }
>("auth/register", async ({ email, password, callback }, thunkApi) => {
  try {
    const response = await AuthService.register(email, password)
    callback()
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const login = createAsyncThunk<
  AuthUserResponse,
  { email: string; password: string; callback: () => void }
>("auth/login", async ({ email, password, callback }, thunkApi) => {
  try {
    const response = await AuthService.login(email, password)
    callback()
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const sendVerificationCode = createAsyncThunk<
  "Success",
  { email: string; isUser: boolean; callback: () => void }
>("auth/verification-code", async ({ email, isUser, callback }, thunkApi) => {
  try {
    const response = await AuthService.sendotp(email, isUser)
    callback()
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const verifyVerificationCode = createAsyncThunk<
  "Success",
  { email: string; otp: string; callback: () => void }
>(
  "auth/verify-verification-code",
  async ({ email, otp, callback }, thunkApi) => {
    try {
      const response = await AuthService.verifyOtp(email, otp)
      callback()
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error))
    }
  }
)

export const editProfilePassword = createAsyncThunk<
  "Success",
  { email: string; password: string; callback: () => void }
>("auth/edit-userPasword", async ({ email, password, callback }, thunkApi) => {
  try {
    const response = await AuthService.editProfilePassword(email, password)
    callback()
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const logout = createAsyncThunk("auth/logout", () => {
  AuthService.logout()
})

export const checkAuth = createAsyncThunk<AuthUserResponse>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens()
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error))
    }
  }
)
