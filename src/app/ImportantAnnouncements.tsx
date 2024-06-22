import "../styles/sections/ImportantAnnouncements.css";

import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel";
import SectionTitle from "../components/SectionTitle";
import AnnouncementsCarousel from "../components/AnnouncementsCarousel";
import slides from "../data/importantAnnouncementsSlides";

const ImportantAnnouncements = () => {
  const { t: translate } = useTranslation();

  const options: EmblaOptionsType = { dragFree: true };

  return (
    <Box
      component={"section"}
      className="important-announcements-section"
      id="important-announcements"
      px={{ xs: 3, md: 10, xl: 20 }}
      py={"4rem"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ xs: "center", xl: "flex-end" }}
        justifyContent={"center"}
      >
        <Box>
          <SectionTitle
            className="title-important-announcements"
            width={{ xs: "100%", lg: "48rem" }}
            title={translate("importantAnnouncements.title")}
            subtitle={translate("importantAnnouncements.subtitle")}
          />
          <AnnouncementsCarousel slides={slides} options={options} />
        </Box>
      </Box>
    </Box>
  );
};

export default ImportantAnnouncements;
