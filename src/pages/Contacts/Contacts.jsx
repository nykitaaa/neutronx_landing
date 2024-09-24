import { useTranslation } from "react-i18next";
import { useApp } from "hooks";
import { Svg, Container, Text } from "components/common";
import sprite from "assets/images/sprite.svg";
import { imgContactsPage } from "assets/images";
import {
  StyledSection,
  StyledTopWrp,
  StyledTitle,
  StyledImg,
  StyledList,
  StyledItem,
  StyledInput,
  StyledBtn,
  StyledInputWrp,
} from "./Contacts.styled";

const Contacts = () => {
  const { t } = useTranslation();
  const { theme } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <StyledSection>
        <StyledTopWrp>
          <StyledTitle>{t("contacts.title")}</StyledTitle>

          <StyledImg
            src={imgContactsPage.email[theme]}
            alt="contacts"
            loading="lazy"
          />
        </StyledTopWrp>

        <StyledList>
          <StyledItem>
            <Text fz="16" fw="500" c="primary">
              For general queries
            </Text>

            <Text fz="32" fw="600" c="primary">
              neutronx@gmail.com
            </Text>
          </StyledItem>

          <StyledItem>
            <Text fz="16" fw="500" c="primary">
              Join our channel
            </Text>

            <a
              href="https://t.me/+J6TN6qr9_PA0OGUy"
              target="_blank"
              rel="noreferrer"
            >
              <Text fz="32" fw="600" c="primary">
                neutronx
              </Text>
            </a>
          </StyledItem>

          <StyledItem>
            <Text fz="16" fw="500" c="primary">
              Telegram bot
            </Text>

            <a
              href="https://t.me/neutronXchange_bot"
              target="_blank"
              rel="noreferrer"
            >
              <Text fz="32" fw="600" c="primary">
                neutronx-bot
              </Text>
            </a>
          </StyledItem>

          <StyledItem>
            <form onSubmit={handleSubmit}>
              <Text mg_b="12" fz="16" fw="500" c="primary">
                {t("contacts.form.title")}
              </Text>

              <StyledInputWrp>
                <Svg p="absolute" t="26" l="4" w_m="24" h_m="24" c="secondary">
                  <use href={`${sprite}#form-email`}></use>
                </Svg>

                <StyledInput
                  name="email"
                  type="email"
                  placeholder={t("contacts.form.email")}
                />

                <StyledBtn>{t("contacts.form.button")}</StyledBtn>
              </StyledInputWrp>
            </form>
          </StyledItem>
        </StyledList>
      </StyledSection>
    </Container>
  );
};

export default Contacts;
