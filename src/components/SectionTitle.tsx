import {
  Box,
  BoxProps,
  TypographyProps,
  Divider,
  Typography,
} from "@mui/material";

type SectionTitleProps = BoxProps & {
  title: string;
  subtitle?: string;
  description?: string;
  withDivider?: boolean;
  titleFontStyle?: TypographyProps["fontStyle"];
  subtitleFontStyle?: TypographyProps["fontStyle"];
  descriptionFontStyle?: TypographyProps["fontStyle"];
};

const SectionTitle = (props: SectionTitleProps) => {
  const {
    title,
    subtitle,
    description,
    withDivider = true,
    titleFontStyle,
    subtitleFontStyle,
    descriptionFontStyle,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      {subtitle && (
        <Typography
          mb={1}
          fontStyle={subtitleFontStyle}
          variant="h4"
          fontSize={{ xs: "28px", md: "34px" }}
          fontFamily={"var(--primary-font)"}
          fontWeight={300}
          color={"#fff"}
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h2"
        fontStyle={titleFontStyle}
        fontSize={{ xs: "42px", md: "60px" }}
        className="glitch-overlay"
        fontFamily={"var(--primary-font)"}
        fontWeight={600}
        marginBottom={0}
        color={"#fff"}
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      {withDivider && (
        <Divider
          style={{
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "40px",
            border: "2px solid var(--primary-color)",
            borderRadius: "5rem",
            transition: "var(--default-transition)",
          }}
        />
      )}
      {description && (
        <Box mt={5}>
          <Typography
            fontStyle={descriptionFontStyle}
            fontFamily={"var(--primary-font)"}
            variant="body1"
            fontSize={{ xs: 18, md: 20 }}
            color={"#fff"}
            textAlign="justify"
            style={{ whiteSpace: "preserve-spaces" }}
          >
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SectionTitle;
