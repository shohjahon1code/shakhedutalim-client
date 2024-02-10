import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { AiFillShopping } from "react-icons/ai"
import SectionTitle from "src/components/section-title/section-title"
import { booksCategory } from "src/config/constants"
import { motion } from "framer-motion"

const BooksPageComponent = () => {
  const [filter, setFilter] = useState<string>("all-categories")
  const { t } = useTranslation()
  const backgroundColor = useColorModeValue("gray.200", "gray.900")

  const filteredData = useCallback(() => {
    switch (filter) {
      case "programming":
        return data.filter((c) => c.category === "programming")
      case "history":
        return data.filter((c) => c.category === "history")
      case "design":
        return data.filter((c) => c.category === "design")
      case "business":
        return data.filter((c) => c.category === "business")
      case "writing":
        return data.filter((c) => c.category === "writing")
      case "lifestyle":
        return data.filter((c) => c.category === "lifestyle")
      default:
        return data
    }
  }, [filter])

  return (
    <Box mb={20}>
      <SectionTitle
        titles={t("title", { ns: "books" })}
        subtitle={t("description", { ns: "books" })}
        textAlign={"center"}
        pt={4}
      />
      <Flex justify={"center"} mt={5} flexWrap={"wrap"}>
        {booksCategory.map((item, i) => (
          <Button
            key={item.id}
            colorScheme="cyan"
            borderRadius={0}
            borderLeftRadius={i == 0 ? "md" : 0}
            borderRightRadius={booksCategory.length - 1 == i ? "md" : 0}
            variant={item.id === filter ? "solid" : "outline"}
            onClick={() => setFilter(item.id)}
          >
            {t(item.label, { ns: "books" })}
          </Button>
        ))}
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        rowGap={20}
        gap={4}
        mt={5}
      >
        {filteredData().map((item) => (
          <motion.div key={item.name} layout>
            <Box pos={"relative"}>
              <Image
                src={item.image}
                alt={item.name}
                borderRadius={"lg"}
                w={"full"}
                h={"250px"}
                objectFit={"cover"}
              />
              <HStack
                pos={"absolute"}
                minH={"90px"}
                borderRadius={"lg"}
                boxShadow={"dark-lg"}
                bg={backgroundColor}
                left={2}
                right={2}
                bottom={-10}
                p={2}
                justify={"space-between"}
              >
                <Box>
                  <Text fontSize={"md"}>{item.name}</Text>
                  <Text fontWeight={"bold"} fontSize={"2xl"}>
                    {item.price.toLocaleString("en-Us", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Text>
                </Box>
                <Button colorScheme="cyan" rightIcon={<AiFillShopping />}>
                  Buy
                </Button>
              </HStack>
            </Box>
          </motion.div>
        ))}
      </Grid>
    </Box>
  )
}

export default BooksPageComponent

const data = [
  {
    name: "Javascript-full guide",
    image:
      "https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript-thumb.jpg",
    category: "programming",
    price: 10,
  },
  {
    name: "Professional React js",
    image:
      "https://www.bigscal.com/wp-content/uploads/2022/09/Is-React-js-Development-Services-Really-Worth-It.png",
    category: "programming",
    price: 40,
  },
  {
    name: "Html-css course",
    image:
      "https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png",
    category: "programming",
    price: 15,
  },
  {
    name: "Backend Programming",
    image:
      "https://www.ishir.com/wp-content/uploads/2023/03/backend-development-languages-ISHIR.png",
    category: "programming",
    price: 35,
  },
  {
    name: "The history of website",
    image:
      "https://images.yourstory.com/cs/1/88da36e0-2ea3-11e9-8315-41a215c693cc/Web_Developments1561010255275.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
    category: "history",
    price: 20,
  },
  {
    name: "Internet",
    image:
      "https://kb.planethoster.com/wp-content/uploads/2021/08/internet-1024x658.jpg",
    category: "history",
    price: 22,
  },
  {
    name: "Illustrator",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/05e7be13887469.5a5d542a12c9b.png",
    category: "design",
    price: 15,
  },
  {
    name: "Premier pro",
    image:
      "https://vsm365.com/getmetafile/721595fa-20f7-4858-9cc9-9e0748a575ad/Premier-pro-logo.aspx?maxsidesize=600",
    category: "design",
    price: 56,
  },
  {
    name: "Startup",
    image: "https://i.ytimg.com/vi/9vpnrNcAi9s/maxresdefault.jpg",
    category: "business",
    price: 45,
  },
  {
    name: "Business idea",
    image:
      "https://www.savethestudent.org/uploads/person-on-laptop-lightbulbs2.jpg",
    category: "business",
    price: 34,
  },
  {
    name: "Writitng an essay",
    image:
      "https://i.natgeofe.com/k/af9546d0-79d6-470a-a7ab-2eaf47d3b8b0/homework-help-essay-boy_4x3.jpg",
    category: "writing",
    price: 67,
  },
  {
    name: "Lifestyling",
    image:
      "https://media.defense.gov/2020/Apr/30/2002291608/-1/-1/0/200501-F-PO640-0034.JPG",
    category: "lifestyle",
    price: 12,
  },
]
