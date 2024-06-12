import "../styles/components/Footer.css";

import LogoBHT from "../assets/img/LogoBHT.png";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import CustomLink from "./CustomLink";
import scrollToSection from "../utils/scrollToSection";

const Footer = () => {
  const { t: translate } = useTranslation();

  return (
    <footer>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CustomLink
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          <img width={56} height={56} src={LogoBHT} alt="logo" />
        </CustomLink>
        <Box display={{ xs: "none", md: "flex" }} gap={6}>
          <CustomLink
            style={{ cursor: "pointer" }}
            className="item-footer"
            onClick={() => scrollToSection("home")}
          >
            {translate("footer.home")}
          </CustomLink>
          <CustomLink
            style={{ cursor: "pointer" }}
            className="item-footer"
            onClick={() => scrollToSection("our-story")}
          >
            {translate("footer.ourStory")}
          </CustomLink>
          <CustomLink
            style={{ cursor: "pointer" }}
            className="item-footer"
            onClick={() => scrollToSection("important-announcements")}
          >
            {translate("footer.importantAnnouncements")}
          </CustomLink>
          <CustomLink
            style={{ cursor: "pointer" }}
            className="item-footer"
            onClick={() => scrollToSection("store")}
          >
            {translate("footer.store")}
          </CustomLink>
          <CustomLink
            style={{ cursor: "pointer" }}
            className="item-footer"
            onClick={() => scrollToSection("staff")}
          >
            {translate("footer.staff")}
          </CustomLink>
        </Box>
        <Box display={"flex"} className="social-container" gap={1}>
          <CustomLink
            target={"_blank"}
            href="https://www.instagram.com/bloodhunts_gaming"
          >
            <FaInstagram className="social-link" color="#fff" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://www.tiktok.com/@bloodhunts_gaming"
            className="social-link"
          >
            <FaTiktok className="social-link" color="#fff" />
          </CustomLink>
        </Box>
      </Box>
      <hr className="footer-line-separator" />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        rowGap={1.5}
        justifyContent={"space-between"}
        mt={2}
      >
        <Typography
          fontSize={14}
          textAlign={"center"}
          color={"var(--grey-light-2)"}
        >
          {translate("footer.textCopyright")}
        </Typography>
        <Typography fontSize={14} textAlign={"center"} color={"var(--grey-light-2)"}>
          {translate("footer.textDevelopedBy")}{" "}
          <CustomLink target={"_blank"} href="https://www.vitorbatista.dev">
            <Typography
              variant="caption"
              fontSize={14}
              color={"var(--grey-light-2)"}
              fontWeight={"bold"}
            >
              VITOR BATISTA
            </Typography>
          </CustomLink>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
