import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { Svg, Text } from "components/common";
import sprite from "assets/images/sprite.svg";
import {
  StyledWrp,
  StyledBtn,
  StyledList,
  StyledItem,
} from "./LanguageSelector.styled";

const languages = [
  { code: "en", name: "EN" },
  { code: "ua", name: "UA" },
  { code: "ru", name: "RU" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return JSON.parse(localStorage.getItem("language")) || "en";
  });

  const languageInUpperCase = selectedLanguage.toUpperCase();

  const handleButtonClick = () => {
    setIsDropdownOpen((currentState) => !currentState);
  };

  const handleSelectLanguage = (val) => {
    i18n.changeLanguage(val);
    setSelectedLanguage(val);
    localStorage.setItem("language", JSON.stringify(val));
  };

  return (
    <>
      <StyledWrp onClick={handleButtonClick}>
        <Text fw="800" c="primary">
          {languageInUpperCase}
        </Text>
        <StyledBtn
          type="button"
          style={{
            transform: isDropdownOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 250ms ",
          }}
        >
          <Svg w_m="11.5" h_m="5.5" c="secondary">
            <use href={`${sprite}#tick`}></use>
          </Svg>

          <p className="hidden">tick</p>
        </StyledBtn>

        <AnimatePresence initial={false} onExitComplete={() => null}>
          {isDropdownOpen && (
            <StyledList
              initial={{ height: 0 }}
              animate={{ height: "80px" }}
              exit={{ height: 0, padding: 0 }}
              transition={{ duration: 0.3 }}
            >
              {languages.map((el, index) => {
                return (
                  <StyledItem
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, transition: { duration: 0.2 } }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    key={el.code}
                    onClick={() => handleSelectLanguage(el.code)}
                  >
                    <Text fw="800" c="primary">
                      {el.name}
                    </Text>
                  </StyledItem>
                );
              })}
            </StyledList>
          )}
        </AnimatePresence>
      </StyledWrp>
    </>
  );
};

export default LanguageSelector;
