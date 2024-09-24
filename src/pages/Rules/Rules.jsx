import { useTranslation } from "react-i18next";
import { useApp } from "hooks";
import { Svg, Container, Sphere } from "components/common";
import sprite from "assets/images/sprite.svg";
import { imgRulesPage } from "assets/images";
import {
  StyledSection,
  StyledTopWrp,
  StyledTitle,
  StyledInfoBlock,
  StyledImgWrp,
  StyledImg,
  StyledParagraphTitle,
  StyledText,
  StyledList,
  StyledItem,
  StyledDot,
} from "./Rules.styled";

const Rules = () => {
  const { t } = useTranslation();

  const { theme } = useApp();

  return (
    <Container>
      <StyledSection>
        <StyledTopWrp>
          <div>
            <StyledTitle>{t("rules.title")}</StyledTitle>

            <StyledInfoBlock>
              <Svg w_m="24" h_m="24" mg_r_d="10" style={{ fill: "#ffffff" }}>
                <use href={`${sprite}#rules-info`}></use>
              </Svg>

              <StyledText style={{ color: "#ffffff" }}>
                {t("rules.info")}
              </StyledText>
            </StyledInfoBlock>
          </div>

          <StyledImgWrp>
            <StyledImg
              src={imgRulesPage.rules[theme]}
              alt="rules"
              loading="lazy"
            />

            <Sphere
              z="-1"
              t_d="20"
              l_d="32"
              w_d="169"
              h_d="169"
              f_d="142"
            />
          </StyledImgWrp>
        </StyledTopWrp>

        <StyledParagraphTitle>
          {t("rules.list.item1.title")}
        </StyledParagraphTitle>

        <StyledText mg_b_d="16">{t("rules.list.item1.info1")}</StyledText>

        <StyledList>
          <StyledItem>
            <StyledDot />

            <StyledText>{t("rules.list.item1.info2")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot />

            <StyledText>{t("rules.list.item1.info3")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot />

            <StyledText>{t("rules.list.item1.info4")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot />

            <StyledText>{t("rules.list.item1.info5")}</StyledText>
          </StyledItem>
        </StyledList>

        <StyledText mg_b_d="16">{t("rules.list.item1.info6")}</StyledText>

        <StyledText mg_b_m="32" mg_b_d="60">
          {t("rules.list.item1.info7")}
        </StyledText>

        <StyledParagraphTitle>
          {t("rules.list.item2.title")}
        </StyledParagraphTitle>

        <StyledText mg_b_d="16">{t("rules.list.item2.info1")}</StyledText>

        <StyledText mg_b_d="16">{t("rules.list.item2.info2")}</StyledText>

        <StyledText mg_b_m="32" mg_b_d="60">
          {t("rules.list.item2.info3")}
        </StyledText>

        <StyledParagraphTitle>
          {t("rules.list.item3.title")}
        </StyledParagraphTitle>

        <StyledText mg_b_d="16">{t("rules.list.item3.info1")}</StyledText>

        <StyledText mg_b_m="32" mg_b_d="60">
          {t("rules.list.item3.info2")}
        </StyledText>

        <StyledParagraphTitle>
          {t("rules.list.item4.title")}
        </StyledParagraphTitle>

        <StyledText mg_b_m="32" mg_b_d="60">
          {t("rules.list.item4.info1")}
        </StyledText>

        <StyledParagraphTitle>
          {t("rules.list.item5.title")}
        </StyledParagraphTitle>

        <StyledText>{t("rules.list.item5.info1")}</StyledText>
      </StyledSection>
    </Container>
  );
};

export default Rules;
