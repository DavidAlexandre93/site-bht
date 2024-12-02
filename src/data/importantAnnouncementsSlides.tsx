import {
  advogadaSorayaPerfil,
  developerVitorPerfil,
  sejaPatrocinador,
  psicologoDennerPerfil
} from "../assets/img";
import { AnnouncementsCarouselProps } from "../components/AnnouncementsCarousel";

const importantAnnouncementsSlides: AnnouncementsCarouselProps["slides"] = [
  { img: sejaPatrocinador },
  { img: psicologoDennerPerfil },
  { img: advogadaSorayaPerfil },
  { img: developerVitorPerfil },
];

export default importantAnnouncementsSlides;
