import React from "react"
import SectionTitle from "../section-title/section-title"
import Carousel from "react-multi-carousel"
import { coursesCarousel } from "src/config/carousel"
import { useTranslation } from "react-i18next"
import { courses } from "src/config/constants"
import PopularCoursesCard from "../popular-courses-card/popular-courses-card"

const PopularCourses = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionTitle
        titles={t("popular_courses_title", { ns: "home" })}
        subtitle={t("popular_courses_description", { ns: "home" })}
      />
      <Carousel
        responsive={coursesCarousel}
        arrows={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
      >
        {courses.map((item, i) => (
          <PopularCoursesCard key={item.title} item={item} i={i} />
        ))}
      </Carousel>
    </>
  )
}

export default PopularCourses
