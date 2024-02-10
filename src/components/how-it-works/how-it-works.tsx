import React, { Fragment } from "react"
import SectionTitle from "../section-title/section-title"
import {
  FinishRightIcon,
  OnlineCourseIcon,
  OnlineLearningIcon,
  OnlineStudentIcon,
  RightLineIcon,
} from "src/icons"
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { howItWorks } from "src/config/constants"

const HowItWorks = () => {
  const backgroundColor = useColorModeValue("gray.200", "gray.700")
  const { t } = useTranslation()
  return (
    <>
      <SectionTitle
        textAlign={"center"}
        titles={t("how_it_works_title", { ns: "home" })}
        subtitle={t("how_it_works_description", { ns: "home" })}
      ></SectionTitle>
      <SimpleGrid mt={10} columns={5} spacing={10} alignItems={"center"}>
        {howItWorks.map((item, i) => {
          const odd = i % 2
          return (
            <Fragment key={i}>
              {!odd ? (
                <Stack justify={"center"} align={"center"}>
                  <Flex
                    w={100}
                    h={100}
                    justify={"center"}
                    align={"center"}
                    backgroundColor={backgroundColor}
                    borderRadius={"full"}
                  >
                    <Icon as={item.icon} w={50} h={50} />
                  </Flex>
                  <Text textAlign={"center"}>
                    {t(`${item.title}`, { ns: "home" })}
                  </Text>
                </Stack>
              ) : (
                <Stack justify={"center"}>
                  <Icon as={item.icon} w={"142px"} h={"21px"} />
                </Stack>
              )}
            </Fragment>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default HowItWorks
