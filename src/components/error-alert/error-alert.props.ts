import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface ErrorAlertProps {
  title: string
  clearHandler?: ActionCreatorWithPayload<any, string> | undefined
}
