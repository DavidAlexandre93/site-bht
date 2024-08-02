import {
  avaliandoPlayerBloodStrike,
  avaliandoPlayerCS2,
  avaliandoPlayerPUBGMobile,
  avaliandoPlayerWarzone,
  recrutandoMulheresCompetitivoFPS,
  advogadaSorayaPerfil,
  developerVitorPerfil,
} from "../assets/img";
import { AnnouncementsCarouselProps } from "../components/AnnouncementsCarousel";

const importantAnnouncementsSlides: AnnouncementsCarouselProps["slides"] = [
  { img: advogadaSorayaPerfil },
  { img: developerVitorPerfil },
  { img: avaliandoPlayerBloodStrike },
  { img: avaliandoPlayerCS2 },
  { img: avaliandoPlayerPUBGMobile },
  { img: avaliandoPlayerWarzone },
  { img: recrutandoMulheresCompetitivoFPS },
];

export default importantAnnouncementsSlides;
