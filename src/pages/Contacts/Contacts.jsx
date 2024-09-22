import { useTranslation } from "react-i18next";
import { Svg, Container } from "components/common";
import sprite from "assets/images/sprite.svg";
// import contacts from 'assets/images/contacts-2x.webp';
import {
  StyledSection,
  StyledPrimaryTitle,
  StyledImg,
  StyledList,
  StyledItem,
  StyledTextIconWrp,
  StyledText,
  StyledSecondaryTitle,
  StyledForm,
  StyledInputWrp,
  StyledInput,
  StyledBtn,
} from "./Contacts.styled";

const Contacts = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <StyledSection>
        <StyledPrimaryTitle>{t("contacts.title")}</StyledPrimaryTitle>
        {/* <StyledImg src={contacts} alt="contacts" loading="lazy" /> */}

        <StyledList>
          <StyledItem>
            <StyledTextIconWrp>
              <Svg w_m="20" h_m="20" mg_r_m="4" mg_r_d="8">
                <use href={`${sprite}#contacts_email`}></use>
              </Svg>
              <StyledText>{t("contacts.email")}</StyledText>
            </StyledTextIconWrp>
            <StyledSecondaryTitle>neutronx@gmail.com</StyledSecondaryTitle>
          </StyledItem>

          <StyledItem>
            <StyledTextIconWrp>
              <Svg w_m="18" h_m="18" mg_r_m="4" mg_r_d="8">
                <use href={`${sprite}#contacts_telegram`}></use>
              </Svg>
              <StyledText>{t("contacts.telegram")}</StyledText>
            </StyledTextIconWrp>
            <a
              href="https://t.me/+J6TN6qr9_PA0OGUy"
              target="_blank"
              rel="noreferrer"
            >
              <StyledSecondaryTitle>neutronx</StyledSecondaryTitle>
            </a>
          </StyledItem>

          <StyledItem>
            <StyledTextIconWrp>
              <Svg w_m="18" h_m="18" mg_r_m="4" mg_r_d="8">
                <use href={`${sprite}#contacts_telegram`}></use>
              </Svg>
              <StyledText>{t("contacts.telegramBot")}</StyledText>
            </StyledTextIconWrp>
            <a
              href="https://t.me/neutronXchange_bot"
              target="_blank"
              rel="noreferrer"
            >
              <StyledSecondaryTitle>neutronx-bot</StyledSecondaryTitle>
            </a>
          </StyledItem>
        </StyledList>

        <StyledForm onSubmit={handleSubmit}>
          <StyledSecondaryTitle>{t("contacts.form.title")}</StyledSecondaryTitle>
          <StyledText w_m="359" w_d="470" style={{ marginBottom: "50px" }}>
            {t("contacts.form.info")}
          </StyledText>

          <StyledInputWrp>
            <Svg
              w_m="24"
              h_m="24"
              c="secondary"
              type="form"
              style={{ left: "5%" }}
            >
              <use href={`${sprite}#email`}></use>
            </Svg>
            <StyledInput
              name="email"
              type="email"
              autoComplete="off"
              placeholder={t("contacts.form.email")}
            />
            <StyledBtn>{t("contacts.form.button")}</StyledBtn>
          </StyledInputWrp>
        </StyledForm>
      </StyledSection>
    </Container>
  );
};

export default Contacts;
