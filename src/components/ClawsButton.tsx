import "../styles/components/ClawsButton.css";

import { Box, LinkProps, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import { CSSProperties, ReactNode } from "react";

type ClawsButtonProps = LinkProps & {
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  pulseAnimation?: boolean;
  children: ReactNode;
};

const ClawsButton = (props: ClawsButtonProps) => {
  const {
    children,
    height,
    width,
    fontSize,
    fontWeight,
    style,
    pulseAnimation = false,
    ...rest
  } = props;

  const btnStyle = {
    ...style,
    animation: pulseAnimation ? "pulse-btn 1s ease infinite" : undefined,
  };

  return (
    <CustomLink
      {...rest}
      style={btnStyle}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={width ? width : "115px"}
      height={height ? height : "40px"}
      px={2}
      py={1}
      borderRadius={1}
      className="claws-button"
      target={"_blank"}
    >
      <Typography
        fontFamily={"var(--primary-font)"}
        zIndex={2}
        fontSize={fontSize ? fontSize : "auto"}
        fontWeight={fontWeight ? fontWeight : "auto"}
        position={"absolute"}
        display={"flex"}
      >
        {children}
      </Typography>
      <Box zIndex={1} className="claws" />
    </CustomLink>
  );
};

export default ClawsButton;
