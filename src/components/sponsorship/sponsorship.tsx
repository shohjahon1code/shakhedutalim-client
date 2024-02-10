import React from "react"
import SectionTitle from "../section-title/section-title"
import Carousel from "react-multi-carousel"
import { sponsorshipCarousel } from "src/config/carousel"
import { trustedCompany } from "src/config/constants"
import { Icon } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Sponsorship = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionTitle
        titles=""
        subtitle={t("sponsor_title", { ns: "home" })}
        textAlign={"center"}
        mb={5}
      />
      <Carousel
        responsive={sponsorshipCarousel}
        arrows={false}
        showDots={false}
        infinite
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {trustedCompany.map((item, i) => (
          <Icon key={i} as={item} fontSize={50} />
        ))}
      </Carousel>
    </>
  )
}

export default Sponsorship
