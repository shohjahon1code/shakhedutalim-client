import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { LoginProps } from "./login.props"
import useShowPassword from "src/hooks/useShowPassword"
import { useActions } from "src/hooks/useActions"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import { Form, Formik } from "formik"
import { AuthValidation } from "src/validation/auth.validation"
import TextField from "../text-field/text-field"
import ErrorAlert from "../error-alert/error-alert"
import { InterfaceEmailAndPassword } from "src/store/user/user.interface"
import { useRouter } from "next/router"

const Login = ({ onNavigateStateComponent }: LoginProps) => {
  const { show, toggleShow } = useShowPassword()
  const { t } = useTranslation()
  const { login, clearError } = useActions()
  const { error, isLoading } = useTypedSelector((state) => state.user)
  const router = useRouter()
  const toast = useToast()

  const onSubmit = async (formData: InterfaceEmailAndPassword) => {
    login({
      email: formData.email,
      password: formData.password,
      callback: () => {
        router.push("/")
        toast({
          title: `${t("successfully_logged", { ns: "global" })}`,
          status: "success",
          isClosable: true,
          position: "top-right",
        })
      },
    })
  }

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {t("login_title", { ns: "global" })}
        <Text
          as={"span"}
          bgGradient="linear(to-r, gray.400,facebook.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        {t("login_description", { ns: "global" })}
      </Text>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: "", password: "" }}
        validationSchema={AuthValidation.login}
      >
        <Form>
          <>
            {error && (
              <ErrorAlert title={error as string} clearHandler={clearError} />
            )}
          </>
          <TextField
            name="email"
            label={t("login_input_email_label", { ns: "global" })}
            placeholder="Shohjahon@gmail.com"
            type="text"
          />
          <TextField
            name="password"
            label={t("login_input_password_label", { ns: "global" })}
            placeholder={"****"}
            type={!show ? "password" : "text"}
          >
            <InputRightElement pt={4}>
              <Icon
                as={!show ? AiOutlineEye : AiOutlineEyeInvisible}
                cursor={"pointer"}
                onClick={toggleShow}
              />
            </InputRightElement>
          </TextField>
          <HStack my={4} justify={"space-between"}>
            <Checkbox colorScheme={"facebook"}>
              {t("auth_remember_me", { ns: "global" })}
            </Checkbox>
            <Box
              cursor={"pointer"}
              as={"a"}
              color={"teal.500"}
              _hover={{ textDecoration: "underline" }}
              onClick={() => onNavigateStateComponent("account-recovery")}
            >
              {t("auth_forgot_password", { ns: "global" })}
            </Box>
          </HStack>
          <Button
            w={"full"}
            bgGradient="linear(to-r, facebook.400,gray.400)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, facebook.500,gray.500)",
              boxShadow: "xl",
            }}
            h={14}
            type="submit"
            isLoading={isLoading}
            loadingText={`${t("loading", { ns: "global" })}`}
          >
            {t("login_btn", { ns: "global" })}
          </Button>
        </Form>
      </Formik>
      <Text>
        {t("login_not_account_yet", { ns: "global" })}{" "}
        <Box
          as={"span"}
          onClick={() => onNavigateStateComponent("register")}
          color={"teal.500"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
        >
          {t("login_redirect_to_register", { ns: "global" })}
        </Box>
      </Text>
    </Stack>
  )
}

export default Login
