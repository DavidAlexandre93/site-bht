const scrollToSection = (section: string) => {
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      const headerHeight = document.getElementById("header")?.offsetHeight || 0;

      const sectionPosition =
        selectedSection.offsetTop - headerHeight - 1;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

export default scrollToSection