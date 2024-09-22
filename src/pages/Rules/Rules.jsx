import { useTranslation } from "react-i18next";
import { Svg, Container } from "components/common";
import sprite from "assets/images/sprite.svg";
// import rules from 'assets/images/rules-2x.webp';
import {
  StyledSection,
  StyledWrp,
  StyledPrimaryTitle,
  StyledInfoBlock,
  StyledImg,
  StyledSecondaryTitle,
  StyledText,
  StyledList,
  StyledItem,
  StyledDot,
} from "./Rules.styled";

const Rules = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledSection>
        <StyledWrp>
          <div>
            <StyledPrimaryTitle>{t("rules.title")}</StyledPrimaryTitle>

            <StyledInfoBlock>
              <Svg w_m="24" h_m="24" mg_r_d="10" c="primary">
                <use href={`${sprite}#rules-info`}></use>
              </Svg>
              <StyledText>{t("rules.info")}</StyledText>
            </StyledInfoBlock>
          </div>

          {/* <StyledImg src={rules} alt="rules" loading="lazy" /> */}
        </StyledWrp>

        <StyledSecondaryTitle>
          {t("rules.list.item1.title")}
        </StyledSecondaryTitle>
        <StyledText mg_b_d="16">{t("rules.list.item1.info1")}</StyledText>

        <StyledList>
          <StyledItem>
            <StyledDot></StyledDot>
            <StyledText>{t("rules.list.item1.info2")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot></StyledDot>
            <StyledText>{t("rules.list.item1.info3")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot></StyledDot>
            <StyledText>{t("rules.list.item1.info4")}</StyledText>
          </StyledItem>

          <StyledItem>
            <StyledDot></StyledDot>
            <StyledText>{t("rules.list.item1.info5")}</StyledText>
          </StyledItem>
        </StyledList>

        <StyledText mg_b_d="16">{t("rules.list.item1.info6")}</StyledText>

        <StyledText mg_b_m="42" mg_b_d="80">
          {t("rules.list.item1.info7")}
        </StyledText>

        <StyledSecondaryTitle>
          {t("rules.list.item2.title")}
        </StyledSecondaryTitle>
        <StyledText mg_b_d="16">{t("rules.list.item2.info1")}</StyledText>

        <StyledText mg_b_d="16">{t("rules.list.item2.info2")}</StyledText>

        <StyledText mg_b_m="42" mg_b_d="80">
          {t("rules.list.item2.info3")}
        </StyledText>

        <StyledSecondaryTitle>
          {t("rules.list.item3.title")}
        </StyledSecondaryTitle>

        <StyledText mg_b_d="16">{t("rules.list.item3.info1")}</StyledText>

        <StyledText mg_b_m="42" mg_b_d="80">
          {t("rules.list.item3.info2")}
        </StyledText>

        <StyledSecondaryTitle>
          {t("rules.list.item4.title")}
        </StyledSecondaryTitle>
        <StyledText mg_b_m="42" mg_b_d="80">
          {t("rules.list.item4.info1")}
        </StyledText>

        <StyledSecondaryTitle>
          {t("rules.list.item5.title")}
        </StyledSecondaryTitle>
        <StyledText>{t("rules.list.item5.info1")}</StyledText>
      </StyledSection>
    </Container>
  );
};

export default Rules;
