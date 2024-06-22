import "../styles/components/Navbar.css";

import { Dispatch, SetStateAction, useMemo } from "react";
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
} from "@mui/material";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { logoBHT, codMobileIcon, codWarzoneIcon } from "../assets/img";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import CustomLink from "./CustomLink";
import { IoMdMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import scrollToSection from "../utils/scrollToSection";
import { defaultLanguage } from "../lib/i18n";

const Navbar = () => {
  const options = useMemo(
    () => [
      { caption: "PT-BR", lang: "pt_br" },
      { caption: "EN", lang: "en" },
      { caption: "FR", lang: "fr" },
      { caption: "ES", lang: "es" },
    ],
    []
  );

  const [scrollHeight, setScrollHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(
    options.findIndex((opt) => opt.lang === defaultLanguage)
  );

  const {
    t: translate,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleClickOpenMenuMobile = () => setOpenMenuMobile(true);

  const handleCloseMenuMobile = () => setOpenMenuMobile(false);

  const handleMenuItemClick = (index: number) => {
    changeLanguage(options[index].lang);
    localStorage.setItem("language", options[index].lang);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const newScrollHeight = window.scrollY;
      setScrollHeight(newScrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    if (localStorage.getItem("language")) {
      const index = options.findIndex(
        (opt) => opt.lang === localStorage.getItem("language")
      );
      setSelectedIndex(index);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [options]);

  const changeBgColorWhenScrolling =
    scrollHeight > 10
      ? {
          backdropFilter: "blur(3px)",
          backgroundColor: "#ff0000cc",
          transition: "0.3s",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        }
      : {
          backgroundColor: "transparent",
          transition: "0.3s",
          boxShadow: "none",
        };

  const changeColorWhenScrolling =
    scrollHeight > 10
      ? {
          "--hover-color": "#000000",
          "--hover-text-shadow": "none",
          cursor: "pointer",
        }
      : {
          "--hover-color": "#ff0000cc",
          "--hover-text-shadow": "0 0 1rem #000",
          cursor: "pointer",
        };

  return (
    <AppBar
      style={changeBgColorWhenScrolling}
      className="navbar-container"
      position="fixed"
      id="header"
    >
      <MenuMobile
        isOpen={openMenuMobile}
        onOpen={setOpenMenuMobile}
        onClose={handleCloseMenuMobile}
      />
      <Toolbar className="navbar">
        <CustomLink
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("begin")}
        >
          <img width={56} height={56} src={logoBHT} alt="logo" />
        </CustomLink>
        <Box alignItems={"center"} gap={6} display={{ xs: "none", md: "flex" }}>
          <CustomLink
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("begin")}
          >
            {translate("header.begin")}
          </CustomLink>
          <CustomLink
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("our-story")}
          >
            {translate("header.ourStory")}
          </CustomLink>
          <CustomLink
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("important-announcements")}
          >
            {translate("header.importantAnnouncements")}
          </CustomLink>
          <CustomLink
            display={{ md: "none", lg: "initial" }}
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("store")}
          >
            {translate("header.store")}
          </CustomLink>
          {/* <CustomLink
            display={{ md: "none", xl: "initial" }}
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("lineup")}
          >
            {translate("header.lineup")}
          </CustomLink> */}
          <CustomLink
            display={{ md: "none", lg: "initial" }}
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("staff")}
          >
            {translate("header.staff")}
          </CustomLink>
          {/* <CustomLink
            display={{ md: "none", xl: "initial" }}
            style={changeColorWhenScrolling as CSSProperties}
            className="item-navbar"
            onClick={() => scrollToSection("blog")}
          >
            {translate("header.blog")}
          </CustomLink> */}
        </Box>
        <Box display={{ xs: "flex", xl: "none" }} alignItems={"center"} gap={4}>
          <Box display={"flex"}>
            <Button
              ref={anchorRef}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                fontSize: 14,
                fontFamily: "var(--primary-font)",
              }}
              size="small"
              onClick={handleToggle}
              endIcon={<MdOutlineKeyboardArrowDown size={14} color={"#fff"} />}
            >
              {options[selectedIndex].caption}
            </Button>
            <Popper
              sx={{
                zIndex: 1,
                inset: "55px auto auto auto !important",
              }}
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
                  <Paper
                    style={{ backgroundColor: "var(--grey)", color: "#fff" }}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        {options.map((option, index) => (
                          <MenuItem
                            style={{
                              backgroundColor:
                                index === selectedIndex
                                  ? "var(--primary-color)"
                                  : "var(--grey)",
                              // fontFamily:
                            }}
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => handleMenuItemClick(index)}
                          >
                            {option.caption}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Box className="line" marginLeft={0.8} />
          </Box>

          <IconButton
            color="inherit"
            edge="start"
            onClick={handleClickOpenMenuMobile}
          >
            <IoMdMenu />
          </IconButton>
        </Box>
        <Box display={{ xs: "none", xl: "flex" }} alignItems={"center"}>
          <Button
            ref={anchorRef}
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
            }}
            size="small"
            onClick={handleToggle}
            endIcon={<MdOutlineKeyboardArrowDown size={14} color={"#fff"} />}
          >
            {options[selectedIndex].caption}
          </Button>
          <Popper
            sx={{
              zIndex: 1,
            }}
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
                <Paper
                  style={{ backgroundColor: "var(--grey)", color: "#fff" }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                      {options.map((option, index) => (
                        <MenuItem
                          style={{
                            backgroundColor:
                              index === selectedIndex
                                ? "var(--primary-color)"
                                : "var(--grey)",
                            padding: "0.6rem 1rem",
                          }}
                          key={index}
                          selected={index === selectedIndex}
                          onClick={() => handleMenuItemClick(index)}
                        >
                          {option.caption}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Box className="line" marginLeft={0.8} />
          <Box
            className="container-sponsor"
            display={"flex"}
            gap={1.25}
            marginLeft={2}
          >
            <CustomLink
              target={"_blank"}
              href="https://www.callofduty.com/br/pt/mobile"
            >
              <img src={codMobileIcon} alt="cod_mobile_icon" />
            </CustomLink>
            <CustomLink
              target={"_blank"}
              href="https://www.callofduty.com/br/pt/warzone"
            >
              <img src={codWarzoneIcon} alt="cod_warzone_icon" />
            </CustomLink>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

type MenuMobileProps = {
  isOpen: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};

const MenuMobile = (props: MenuMobileProps) => {
  const { isOpen, onOpen, onClose } = props;

  const { t: translate } = useTranslation();

  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#000"}
        height={"100%"}
        width={"100%"}
        rowGap={5}
      >
        <CustomLink
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("begin")}
        >
          <img width={200} height={200} src={logoBHT} alt="logo" />
        </CustomLink>
        <Box
          alignItems={"center"}
          rowGap={4}
          display={"flex"}
          flexDirection={"column"}
        >
          <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("begin");
              onOpen(false);
            }}
          >
            {translate("header.begin")}
          </CustomLink>
          <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("our-story");
              onOpen(false);
            }}
          >
            {translate("header.ourStory")}
          </CustomLink>
          <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("important-announcements");
              onOpen(false);
            }}
          >
            {translate("header.importantAnnouncements")}
          </CustomLink>
          <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("store");
              onOpen(false);
            }}
          >
            {translate("header.store")}
          </CustomLink>
          {/* <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("lineup");
              onOpen(false);
            }}
          >
            {translate("header.lineup")}
          </CustomLink> */}
          <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("staff");
              onOpen(false);
            }}
          >
            {translate("header.staff")}
          </CustomLink>
          {/* <CustomLink
            className="item-menu-mobile"
            onClick={() => {
              scrollToSection("blog");
              onOpen(false);
            }}
          >
            {translate("header.blog")}
          </CustomLink> */}
        </Box>
        <Box
          className={"menu-mobile-close-btn"}
          display={"flex"}
          onClick={() => onOpen(false)}
          border={"1px solid #fff"}
          borderRadius={15}
          padding={1.5}
        >
          <TfiClose color={"#fff"} size={14} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default Navbar;
