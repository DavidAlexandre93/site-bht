import {
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
  Testimonial_4,
  Testimonial_5,
  Testimonial_6,
  Testimonial_7,
  Testimonial_8,
  Testimonial_9,
} from "../assets/img";
import TeamCarouselCard from "../components/TeamCarousel/Card";

const teamCarouselCards = [
  {
    key: 0,
    content: <TeamCarouselCard img={Testimonial_1} />,
  },
  {
    key: 1,
    content: <TeamCarouselCard img={Testimonial_2} />,
  },
  {
    key: 2,
    content: <TeamCarouselCard img={Testimonial_3} />,
  },
  {
    key: 3,
    content: <TeamCarouselCard img={Testimonial_4} />,
  },
  {
    key: 4,
    content: <TeamCarouselCard img={Testimonial_5} />,
  },
  {
    key: 5,
    content: <TeamCarouselCard img={Testimonial_6} />,
  },
  {
    key: 6,
    content: <TeamCarouselCard img={Testimonial_7} />,
  },
  {
    key: 7,
    content: <TeamCarouselCard img={Testimonial_8} />,
  },
  {
    key: 8,
    content: <TeamCarouselCard img={Testimonial_9} />,
  },
];

export default teamCarouselCards;
