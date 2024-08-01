import "../styles/components/Footer.css";

import logoBHT from "../assets/img/logos/logoBHT.webp";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  FaDiscord,
  FaInstagram,
  FaPatreon,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomLink from "./CustomLink";
import scrollToSection from "../utils/scrollToSection";

const Footer = () => {
  const { t: translate } = useTranslation();

  return (
    <Box
      component={"footer"}
      px={{ xs: 3, md: 10, xl: 20 }}
      pt={"3rem"}
      pb={"2rem"}
      bgcolor={"var(--secondary-dark)"}
    >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "center" }}
        alignItems={{ xs: "initial", lg: "center" }}
        flexWrap={"wrap"}
        rowGap={5}
      >
        <Box
          width={{ xs: "100%", lg: "auto" }}
          display={"flex"}
          justifyContent={"center"}
        >
          <CustomLink
            width={{ xs: 150, md: 180 }}
            mr={{ xs: 0, lg: 12 }}
            textAlign={{ xs: "center", md: "initial" }}
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("begin")}
          >
            <img width={"100%"} src={logoBHT} alt="logo_bht" />
          </CustomLink>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ xs: "space-between", lg: "initial" }}
          flexWrap={"wrap"}
          columnGap={{ xs: 5, md: 12, xl: 20 }}
          rowGap={5}
        >
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography
              mb={1}
              fontFamily={"var(--primary-font)"}
              color={"#fff"}
              fontWeight={600}
            >
              {translate("footer.sitemap.title")}
            </Typography>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("begin")}
              >
                {translate("footer.sitemap.begin")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("our-story")}
              >
                {translate("footer.sitemap.ourStory")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("important-announcements")}
              >
                {translate("footer.sitemap.importantAnnouncements")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("store")}
              >
                {translate("footer.sitemap.store")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("lineup")}
              >
                {translate("footer.sitemap.lineup")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("staff")}
              >
                {translate("footer.sitemap.staff")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                style={{ cursor: "pointer" }}
                className="item-footer"
                onClick={() => scrollToSection("blog")}
              >
                {translate("footer.sitemap.blog")}
              </CustomLink>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography
              mb={1}
              fontFamily={"var(--primary-font)"}
              color={"#fff"}
              fontWeight={600}
            >
              {translate("footer.contactUs.title")}
            </Typography>
            <Box>
              <CustomLink
                target="_blank"
                style={{ cursor: "pointer" }}
                className="item-footer"
                href="https://chat.whatsapp.com/ElO1CZH7r4tFueKqj5fj1U"
              >
                {translate("footer.contactUs.general")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                target="_blank"
                style={{ cursor: "pointer" }}
                className="item-footer"
                href="https://wa.me/+559191703941?text=Ol%C3%A1,%20Tudo%20bem?%20Eu%20gostaria%20de%20fazer%20parte%20da%20alcateia%20BloodHunts%20Gaming.%20"
              >
                {translate("footer.contactUs.casualRecruitment")}
              </CustomLink>
            </Box>
            <Box>
              <CustomLink
                target="_blank"
                style={{ cursor: "pointer" }}
                className="item-footer"
                href="https://wa.me/+5521972772718?text=Ol%C3%A1,%20Tudo%20bem?%20Eu%20gostaria%20de%20realizar%20o%20teste%20para%20o%20competitivo%20e%20quero%20me%20juntar%20a%20alcateia%20BloodHunts%20Gaming"
              >
                {translate("footer.contactUs.competitiveRecruitment")}
              </CustomLink>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1.5}>
            <Typography
              mb={1}
              fontFamily={"var(--primary-font)"}
              color={"#fff"}
              fontWeight={600}
            >
              {translate("footer.store.title")}
            </Typography>
            <Box>
              <CustomLink
                target="_blank"
                href="https://bloodhuntsgaming.mercadoshops.com.br/"
                style={{ cursor: "pointer" }}
                className="item-footer"
              >
                {translate("footer.store.visitOurStore")}
              </CustomLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider className="footer-line-separator" />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        rowGap={1}
        mt={2}
      >
        <Typography
          fontSize={14}
          textAlign={"center"}
          color={"var(--grey-light-2)"}
          fontFamily={"var(--primary-font)"}
        >
          {translate("footer.textCopyright")}
        </Typography>
        <Box mt={1} display={"flex"} className="social-container" gap={1}>
          <CustomLink
            target={"_blank"}
            href="https://www.patreon.com/BloodHuntsGaming"
            className="social-link"
          >
            <FaPatreon className="social-link" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://discord.gg/sjGQAHptjX"
            className="social-link"
          >
            <FaDiscord className="social-link" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://www.tiktok.com/@bloodhunts_gaming"
            className="social-link"
          >
            <FaTiktok className="social-link" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://x.com/i/flow/login?redirect_after_login=%2Fbloodhuntsgg"
            className="social-link"
          >
            <FaTwitter className="social-link" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://www.instagram.com/bloodhunts_gaming"
            className="social-link"
          >
            <FaInstagram className="social-link" />
          </CustomLink>
          <CustomLink
            target={"_blank"}
            href="https://www.youtube.com/@BloodHuntsGaming"
            className="social-link"
          >
            <FaYoutube className="social-link" />
          </CustomLink>
        </Box>
        <Typography
          mt={{ xs: 1, lg: 0 }}
          fontSize={14}
          textAlign={"center"}
          color={"var(--grey-light-2)"}
          fontFamily={"var(--primary-font)"}
        >
          {translate("footer.textDevelopedBy")}{" "}
          <CustomLink target={"_blank"} href="https://www.vitorbatista.dev">
            <Typography
              variant="caption"
              fontSize={14}
              fontWeight={"bold"}
              className="developedBy"
              fontFamily={"var(--primary-font)"}
            >
              VITOR BATISTA
            </Typography>
          </CustomLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
