import React from "react"
import SectionTitle from "../section-title/section-title"
import Carousel from "react-multi-carousel"
import { testimonialsCarousel } from "src/config/carousel"
import { Center, Icon, Text } from "@chakra-ui/react"
import { ImQuotesRight } from "react-icons/im"
import { useTranslation } from "react-i18next"

const Testimonials = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionTitle
        textAlign={"center"}
        titles={t("testimonials_title", { ns: "home" })}
        subtitle={t("testimonials_description", { ns: "home" })}
      />
      <Carousel
        responsive={testimonialsCarousel}
        arrows={true}
        showDots={false}
        infinite
      >
        {data.map((item, i) => (
          <Center
            key={i}
            flexDirection={"column"}
            maxW={"container.sm"}
            mx={"auto"}
          >
            <Icon as={ImQuotesRight} fontSize={100} />
            <Text mt={5} textAlign={"center"}>
              {item.description}
            </Text>
            <Text fontSize={"xl"} fontWeight={"bold"} mt={3}>
              {item.name}
            </Text>
          </Center>
        ))}
      </Carousel>
    </>
  )
}

export default Testimonials

const data = [
  {
    name: "Shohjahon Suyunov",
    description:
      "Ajoyib kurs mazza qilib tomosha qildim. bilimini ikki hissaga oshirdim ushbu sayt xodimlariga rahmat",
  },
  {
    name: "Shohjahon Suyunov",
    description:
      "Ajoyib kurs mazza qilib tomosha qildim. bilimini ikki hissaga oshirdim ushbu sayt xodimlariga rahmat",
  },
  {
    name: "Shohjahon Suyunov",
    description:
      "Ajoyib kurs mazza qilib tomosha qildim. bilimini ikki hissaga oshirdim ushbu sayt xodimlariga rahmat",
  },
  {
    name: "Shohjahon Suyunov",
    description:
      "Ajoyib kurs mazza qilib tomosha qildim. bilimini ikki hissaga oshirdim ushbu sayt xodimlariga rahmat",
  },
]
