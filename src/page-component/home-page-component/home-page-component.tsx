import { Stack } from "@chakra-ui/react"
import React from "react"
import {
  Categories,
  Hero,
  HowItWorks,
  Instructors,
  NewsLetter,
  PopularCourses,
  Sponsorship,
  Testimonials,
} from "src/components"

const HomePageComponent = () => {
  return (
    <Stack spacing={10}>
      <Hero />
      <Categories />
      <PopularCourses />
      <HowItWorks />
      <Instructors />
      <Testimonials />
      <NewsLetter />
      <Sponsorship />
    </Stack>
  )
}

export default HomePageComponent
