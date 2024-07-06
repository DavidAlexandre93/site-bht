import "../styles/sections/Lineup.css";

import { useRef, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import TeamCarousel from "../components/TeamCarousel";
import SectionTitle from "../components/SectionTitle";

import cards from "../data/lineupCarouselCards";
import { useTranslation } from "react-i18next";
import useScreenWidthSize from "../hooks/useScreenWindowSize";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Lineup = () => {
  const [selectedTeam, setSelectedTeam] = useState(cards[0].game);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const windowWidth = useScreenWidthSize();

  const { t: translate } = useTranslation();


  const carouselResponsive =
    windowWidth <= 768
      ? 1
      : windowWidth < 1024
      ? 3
      : windowWidth < 1400
      ? 1
      : 8;

  const handleMenuItemClick = (index: number) => {
    setSelectedTeam(cards[index].game);

    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setOpen(false);
  };

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      (
        anchorRef.current as {
          contains: (event: EventTarget | null) => boolean;
        }
      ).contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component={"section"}
      className="lineup-section"
      id="lineup"
      width="100%"
      paddingTop="4rem"
      paddingBottom={{ xs: 0, xl: "5rem" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box textAlign={"center"}>
        <SectionTitle
          title={translate("lineup.title")}
          subtitle={translate("lineup.subtitle")}
          withDivider={false}
        />
      </Box>
      <Box
        mt={5}
        width={{ xs: "20rem", md: "30rem", lg: "24rem", xl: "42rem" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          ref={anchorRef}
          style={{
            backgroundColor: "var(--primary-color)",
            padding: "0.8rem 2rem",
            color: "#fff",
            fontSize: 16,
            fontFamily: "var(--primary-font)",
            marginBottom: 8,
          }}
          size="small"
          onClick={() => handleToggle()}
          endIcon={<MdOutlineKeyboardArrowDown size={14} color={"#fff"} />}
        >
          {selectedTeam}
        </Button>
        <Popper
          sx={{ zIndex: 3 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper style={{ backgroundColor: "var(--grey)", color: "#fff" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {cards.map((card, index) => (
                      <MenuItem
                        style={{
                          backgroundColor:
                            card.game.toUpperCase() ===
                            selectedTeam.toUpperCase()
                              ? "var(--primary-color)"
                              : "var(--grey)",
                          padding: "0.6rem 1rem",
                          fontFamily: "var(--primary-font)",
                        }}
                        key={index}
                        selected={
                          card.game.toUpperCase() === selectedTeam.toUpperCase()
                        }
                        onClick={() => handleMenuItemClick(index)}
                      >
                        {card.game}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
      <Swiper
        style={{ width: "100%", height: windowWidth > 1024 ? "600px" : '500px' }}
        grabCursor={false}
        draggable={false}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              className={`${
                selectedTeam.toUpperCase() !== card.game.toUpperCase()
                  ? "opacity-animation"
                  : ""
              }`}
            >
              <TeamCarousel
                cards={card.img}
                height={windowWidth <= 1024 ? "360px" : "540px"}
                margin="0 50"
                width={"50%"}
                offset={carouselResponsive}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Lineup;
