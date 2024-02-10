import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import Logo from "../../icons/logo3.png"
import Image from "next/image"
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from "react-icons/bs"
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi"
import { MdOutlineContactSupport } from "react-icons/md"
import Link from "next/link"
import { HeaderProps } from "./header.props"
import { language } from "src/config/constants"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/router"
import { AiOutlineLogin } from "react-icons/ai"
import { useAuth } from "src/hooks/useAuth"
import { FiSettings } from "react-icons/fi"
import { IoIosLogOut } from "react-icons/io"
import { useActions } from "src/hooks/useActions"

export const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const { t, i18n } = useTranslation()
  const { user } = useAuth()
  const router = useRouter()
  const { logout } = useActions()

  const changeLanguage = (lng: string) => {
    router.replace(router.asPath)
    i18n.changeLanguage(lng)
  }

  const logoutHandler = () => {
    logout()
    router.push("/auth")
  }

  return (
    <Box
      zIndex={1001}
      width={"full"}
      height={"10vh"}
      px={10}
      borderBottom={"1px"}
      pos={"fixed"}
      left={0}
      top={0}
      right={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex height={"full"} justify={"space-between"} align={"center"}>
        <HStack>
          <Icon
            as={BiMenuAltLeft}
            w={6}
            h={6}
            onClick={onToggle}
            cursor={"pointer"}
          />
          <Link href={"/"}>
            {colorMode === "light" ? (
              <Image width={200} height={50} src={Logo} alt="logo" />
            ) : (
              <Image width={200} height={50} src={Logo} alt="logo" />
            )}
          </Link>
        </HStack>
        <HStack>
          <IconButton
            aria-label="support"
            icon={<MdOutlineContactSupport />}
            colorScheme="cyan"
            variant={"ghost"}
          />
          <Menu placement="bottom">
            <MenuButton
              as={Button}
              rightIcon={<BsTranslate />}
              aria-label="translate"
              colorScheme="cyan"
              variant={"outline"}
            >
              {i18n.resolvedLanguage.toUpperCase()}
            </MenuButton>
            <MenuList p={0}>
              {language.map((item) => (
                <MenuItem
                  key={item.lng}
                  onClick={() => changeLanguage(item.lng)}
                  icon={<item.icon />}
                  backgroundColor={
                    i18n.resolvedLanguage == item.lng ? "cyan.500" : ""
                  }
                >
                  {item.nativeLng}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <IconButton
            aria-label="color-mode"
            icon={
              colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />
            }
            colorScheme={"cyan"}
            variant={"outline"}
            onClick={toggleColorMode}
          />
          {user ? (
            <Menu>
              <MenuButton>
                <Avatar src={user.avatar} name={user.fullname} />
              </MenuButton>
              <MenuList p={0} m={0}>
                <MenuItem
                  h={14}
                  onClick={() => router.push("/")}
                  fontWeight={"bold"}
                  icon={<FiSettings />}
                >
                  {t("settings", { ns: "global" })}
                </MenuItem>
                <MenuItem
                  h={14}
                  onClick={logoutHandler}
                  fontWeight={"bold"}
                  icon={<IoIosLogOut />}
                >
                  {t("logout", { ns: "global" })}
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Button
                display={{ base: "none", md: "flex" }}
                rightIcon={<BiUserCircle />}
                onClick={() => router.push("/auth")}
                colorScheme={"cyan"}
              >
                {t("login", { ns: "layout" })}
              </Button>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="login"
                onClick={() => router.push("/auth")}
                icon={<AiOutlineLogin />}
                colorScheme={"cyan"}
                variant={"outline"}
              />
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  ) as JSX.Element
}
