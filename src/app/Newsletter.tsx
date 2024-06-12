import "../styles/sections/Newsletter.css";

import { ChangeEvent, FormEvent, useState } from "react";
import { LogoBHT } from "../assets/img";
import CustomLink from "../components/CustomLink";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import validateFields from "../utils/validateFields";
import toast from "react-hot-toast";
import ClawsButton from "../components/ClawsButton";

const Newsletter = () => {
  const { t: translate } = useTranslation();
  const [email, setEmail] = useState({
    value: "",
    error: {
      on: false,
      message: "",
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { existError, message } = validateFields("email", email.value);

    if (existError) {
      return setEmail((prevState) => ({
        ...prevState,
        error: { on: existError, message },
      }));
    }

    try {
      // const data = { email };
      // const url =  "https://bloodhuntsgaming.us18.list-manage.com/subscribe/post?u=d6a36bd136079ed9f553d652e&id=2bc7833269"

      // await fetch(
      //   url,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },const data =
      //     body: JSON.stringify(data),
      //   }
      // );

      toast.success("E-mail enviado com sucesso!");
    } catch {
      toast.error("Erro ao enviar e-mail.");
    }
  };

  const handleChangeEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { existError, message } = validateFields(
      "email",
      e.currentTarget.value
    );

    setEmail({
      value: e.currentTarget.value,
      error: {
        on: existError,
        message,
      },
    });
  };

  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      justify-content={"center"}
      align-items={"center"}
      className="newsletter-section"
      py={{ xs: "3rem", lg: "5rem" }}
      rowGap={4}
      columnGap={8}
      px={{ xs: 3, md: 10, xl: 20 }}
      id="newsletter"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100%" }}
      >
        <Box width={{ xs: "100%", md: "80%", lg: "100%", xl: "80%" }}>
          <img width={"100%"} src={LogoBHT} alt="logo" />
        </Box>
      </Box>
      <Box
        component={"form"}
        onSubmit={(e) => onSubmit(e)}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Typography
          variant="h4"
          fontFamily={"var(--primary-font)"}
          fontSize={{ xs: "28px", md: "34px" }}
          fontWeight={300}
          gutterBottom
          color={"#fff"}
        >
          {translate("newsletter.subtitle")}
        </Typography>
        <Typography
          variant="h2"
          className="glitch-overlay"
          fontSize={{ xs: "42px", md: "60px" }}
          fontFamily={"var(--primary-font)"}
          fontWeight={600}
          marginBottom={0}
          color={"#fff"}
        >
          {translate("newsletter.title")}
        </Typography>
        <Divider
          style={{
            marginTop: "0.5rem",
            border: "2px solid var(--primary-color)",
            borderRadius: "5rem",
            transition: "var(--default-transition)",
          }}
        />
        <Typography
          mt={5}
          fontFamily={"var(--primary-font)"}
          variant="body1"
          fontSize={{ xs: 18, md: 20 }}
          color={"#fff"}
          textAlign="justify"
        >
          {translate("newsletter.description")}
        </Typography>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          mt={3}
          gap={1}
        >
          <TextField
            error={email.error.on}
            helperText={email.error.message}
            sx={{
              "& label": {
                color: "#E0E3E7",
                fontFamily: "var(--primary-font)",
              },
              "& label.Mui-focused": {
                color: "#A0AAB4",
                fontFamily: "var(--primary-font)",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#B2BAC2",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E3E7",
                },
                "&:hover fieldset": {
                  borderColor: "#B2BAC2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6F7E8C",
                },
              },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontFamily: "var(--primary-font)",
              },
            }}
            label="E-mail"
            value={email.value}
            onChange={(e) => handleChangeEmail(e)}
            fullWidth={true}
          />
            <ClawsButton textAlign={'center'} height={"56px"} width={{ xs: "100%", md: "25%" }}>
              {translate("newsletter.btnText")}
            </ClawsButton>
          {/* <Box
            component={"button"}
            type="submit"
            className="subscribe-now-btn"
            height={"56px"}
            width={{ xs: "100%", md: "25%" }}
            py={{ xs: 1.8, md: "auto" }}
            px={1}
          >
            <CustomLink noWrap={true}>
              {translate("newsletter.btnText")}
            </CustomLink>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
