import { useTranslation } from "react-i18next";
import { Svg } from "components/common";
import sprite from "assets/images/sprite.svg";
import {
  StyledMainContentWrp,
  StyledMainList,
  StyledMainItem,
  StyledMainTitle,
  StyledInsertedList,
  StyledInsertedItem,
  StyledInsertedLink,
  StyledSecondaryContentWrp,
  StyledSecondaryList,
  StyledSecondaryItem,
  StyledSecondaryText,
  StyledSecondaryLink,
  StyledIconsList,
  StyledIconsItem,
} from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <StyledMainContentWrp>
        <StyledMainList>
          <StyledMainItem>
            <StyledMainTitle>
              {t("footer.mainList.item1.title")}
            </StyledMainTitle>
            <StyledInsertedList>
              <StyledInsertedItem>
                <StyledInsertedLink href="/merchant">
                  {t("footer.mainList.item1.list.item1")}
                </StyledInsertedLink>
              </StyledInsertedItem>

              <StyledInsertedItem>
                <StyledInsertedLink href="/">
                  {t("footer.mainList.item1.list.item2")}
                </StyledInsertedLink>
              </StyledInsertedItem>
            </StyledInsertedList>
          </StyledMainItem>

          <StyledMainItem>
            <StyledMainTitle>
              {t("footer.mainList.item2.title")}
            </StyledMainTitle>
            <StyledInsertedList>
              <StyledInsertedItem>
                <StyledInsertedLink href="/">
                  {t("footer.mainList.item2.list.item1")}
                </StyledInsertedLink>
              </StyledInsertedItem>
            </StyledInsertedList>
          </StyledMainItem>

          <StyledMainItem>
            <StyledMainTitle>
              {t("footer.mainList.item3.title")}
            </StyledMainTitle>
            <StyledInsertedList>
              <StyledInsertedItem>
                <StyledInsertedLink href="/">
                  {t("footer.mainList.item3.list.item1")}
                </StyledInsertedLink>
              </StyledInsertedItem>

              <StyledInsertedItem>
                <StyledInsertedLink href="/contacts">
                  {t("footer.mainList.item3.list.item2")}
                </StyledInsertedLink>
              </StyledInsertedItem>
            </StyledInsertedList>
          </StyledMainItem>

          <StyledMainItem>
            <StyledMainTitle>
              {t("footer.mainList.item4.title")}
            </StyledMainTitle>

            <StyledIconsList>
              <StyledIconsItem>
                <a href="/">
                  <Svg w_m="30" h_m="30" w_d="24" h_d="24" c="secondary">
                    <use href={`${sprite}#footer-telegram`}></use>
                  </Svg>
                  <p className="hidden">telegram</p>
                </a>
              </StyledIconsItem>
            </StyledIconsList>
          </StyledMainItem>
        </StyledMainList>
      </StyledMainContentWrp>

      <StyledSecondaryContentWrp>
        <StyledSecondaryList>
          <StyledSecondaryItem>
            <StyledSecondaryText>
              {t("footer.secondaryList.item1")}
            </StyledSecondaryText>
          </StyledSecondaryItem>

          <StyledSecondaryItem>
            <StyledSecondaryLink href="/">
              {t("footer.secondaryList.item2")}
            </StyledSecondaryLink>
          </StyledSecondaryItem>

          <StyledSecondaryItem>
            <StyledSecondaryLink href="/">
              {t("footer.secondaryList.item3")}
            </StyledSecondaryLink>
          </StyledSecondaryItem>
        </StyledSecondaryList>
      </StyledSecondaryContentWrp>
    </footer>
  );
};

export default Footer;
