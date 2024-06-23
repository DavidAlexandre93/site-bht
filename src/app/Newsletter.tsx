import "../styles/sections/Newsletter.css";

import { ChangeEvent, useState } from "react";
import { logoBHT2 } from "../assets/img";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import validateFields from "../utils/validateFields";
import ClawsButton from "../components/ClawsButton";
import SectionTitle from "../components/SectionTitle";

const Newsletter = () => {
  const { t: translate } = useTranslation();
  const [email, setEmail] = useState({
    value: "",
    error: {
      on: false,
      message: "",
    },
  });

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

  const handleSubmit = () => {
    const { existError, message } = validateFields("email", email.value);

    if (existError) {
      return setEmail((prevState) => ({
        ...prevState,
        error: { on: existError, message },
      }));
    }

    const form = document.getElementById("newsletterForm") as HTMLFormElement;
    if (form) {
      form.submit();
    }
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
      columnGap={{ xs: 3, xl: 3 }}
      px={{ xs: 3, md: 10, lg: 10, xl: 20 }}
      id="newsletter"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100%" }}
      >
        <Box width={{ xs: "80%", md: "50%", lg: "100%", xl: "70%" }}>
          <img width={"100%"} src={logoBHT2} alt="logo" />
        </Box>
      </Box>
      <Box
        id="newsletterForm"
        component={"form"}
        action={`https://bloodhuntsgaming.us18.list-manage.com/subscribe/post?u=${
          import.meta.env.VITE_TOKEN_NEWSLETTER_U
        }&id=${import.meta.env.VITE_TOKEN_NEWSLETTER_ID}`}
        method="POST"
        noValidate
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <SectionTitle
          title={translate("newsletter.title")}
          subtitle={translate("newsletter.subtitle")}
          description={translate("newsletter.description")}
        />
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          mt={3}
          gap={1}
        >
          <TextField
            type="email"
            name="EMAIL"
            id="email"
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
          <ClawsButton
            whiteSpace={"nowrap"}
            height={"56px"}
            onClick={() => handleSubmit()}
          >
            {translate("newsletter.btnText")}
          </ClawsButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
