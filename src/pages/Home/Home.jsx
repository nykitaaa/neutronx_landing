import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "hooks";
import { Container, Svg, Sphere } from "components/common";
import { QuestionList } from "components/landing";
import sprite from "assets/images/sprite.svg";
import { videoLandingPage } from "assets/videos";
import { imgLandingPage } from "assets/images";
import {
  StyledHeroVideoWrp,
  StyledHeroVideo,
  StyledHeroSection,
  StyledHeroBlockWrp,
  StyledHeroTitle,
  StyledHeroText,
  StyledHeroBtn,
  StyledSectionAboutUsWrp,
  StyledStatisticListWrp,
  StyledStatisticList,
  StyledStatisticItem,
  StyledStatisticText,
  StyledStatisticValue,
  StyledAboutUsSection,
  StyledAboutUsBlockWrp,
  StyledSectionSubTitle,
  StyledSectionTitle,
  StyledAboutUsText,
  StyledAboutUsCircleOuter,
  StyledAboutUsCircleMiddle,
  StyledAboutUsCircleInner,
  StyledAboutUsBenefitList,
  StyledAboutUsBenefitItem,
  StyledAboutUsBenefitText,
  StyledProductSection,
  StyledProductList,
  StyledProductItem,
  StyledProductItemContentWrp,
  StyledProductItemTitle,
  StyledProductItemText,
  StyledProductItemNavLink,
  StyledProductItemLink,
  StyledProductItemImgWrp,
  StyledProductItemImg,
  StyledCoinSection,
  StyledCoinList,
  StyledCoinItem,
  StyledCoinItemText,
  StyledQuestionSection,
  StyledQuestionArea,
  StyledStayAheadSectionWrp,
  StyledStayAheadVideoWrp,
  StyledStayAheadVideo,
  StyledStayAheadSection,
  StyledStayAheadSectionContentWrp,
  StyledStayAheadBlockWrp,
  StyledStayAheadText,
  StyledStayAheadBtn,
} from "./Home.styled";

const Home = () => {
  const { t } = useTranslation();
  const questions = [
    {
      id: 1,
      title: t("landing.questions.list.item1.title"),
      text: t("landing.questions.list.item1.text"),
    },

    {
      id: 2,
      title: t("landing.questions.list.item2.title"),
      text: t("landing.questions.list.item2.text"),
    },

    {
      id: 3,
      title: t("landing.questions.list.item3.title"),
      text: t("landing.questions.list.item3.text"),
    },

    {
      id: 4,
      title: t("landing.questions.list.item4.title"),
      text: t("landing.questions.list.item4.text"),
    },
  ];
  const sectionProducts = useRef();

  const { theme } = useApp();
  const heroVideoRef = useRef();
  const stayAheadVideoRef = useRef();

  const handleHeroQuestionBtnClick = () => {
    sectionProducts.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    heroVideoRef.current.src = videoLandingPage.hero[theme];
    stayAheadVideoRef.current.src = videoLandingPage.stay_ahead[theme];
  }, [theme]);

  return (
    <>
      <StyledHeroVideoWrp>
        <StyledHeroVideo ref={heroVideoRef} autoPlay muted loop playsInline>
          <source type="video/mp4" />
        </StyledHeroVideo>
      </StyledHeroVideoWrp>

      <Container>
        <StyledHeroSection>
          <StyledHeroBlockWrp>
            <StyledHeroTitle>{t("landing.hero.title")}</StyledHeroTitle>

            <StyledHeroText>{t("landing.hero.text")}</StyledHeroText>

            <StyledHeroBtn type="button" onClick={handleHeroQuestionBtnClick}>
              {t("landing.hero.btn")}
            </StyledHeroBtn>
          </StyledHeroBlockWrp>
        </StyledHeroSection>
      </Container>

      <StyledSectionAboutUsWrp>
        <StyledStatisticListWrp>
          <StyledStatisticList>
            <StyledStatisticItem>
              <StyledStatisticValue>87</StyledStatisticValue>

              <StyledStatisticText>
                {t("landing.aboutUs.statisticList.item1")}
              </StyledStatisticText>
            </StyledStatisticItem>

            <StyledStatisticItem>
              <StyledStatisticValue>$86k</StyledStatisticValue>

              <StyledStatisticText>
                {t("landing.aboutUs.statisticList.item2")}
              </StyledStatisticText>
            </StyledStatisticItem>

            <StyledStatisticItem>
              <StyledStatisticValue>189k</StyledStatisticValue>

              <StyledStatisticText>
                {t("landing.aboutUs.statisticList.item3")}
              </StyledStatisticText>
            </StyledStatisticItem>

            <StyledStatisticItem>
              <StyledStatisticValue>1M</StyledStatisticValue>

              <StyledStatisticText>
                {t("landing.aboutUs.statisticList.item4")}
              </StyledStatisticText>
            </StyledStatisticItem>

            <StyledStatisticItem>
              <StyledStatisticValue>219</StyledStatisticValue>

              <StyledStatisticText>
                {t("landing.aboutUs.statisticList.item5")}
              </StyledStatisticText>
            </StyledStatisticItem>
          </StyledStatisticList>
        </StyledStatisticListWrp>

        <Container>
          <StyledAboutUsSection>
            <StyledAboutUsBlockWrp w="50" mg_r_t="24" mg_r_d="30">
              <StyledSectionSubTitle>
                {t("landing.aboutUs.subTitle")}
              </StyledSectionSubTitle>

              <StyledSectionTitle>
                {t("landing.aboutUs.title")}
              </StyledSectionTitle>

              <StyledAboutUsText mg_b_m="16" mg_b_t="20">
                {t("landing.aboutUs.text.paragraph1")}
              </StyledAboutUsText>

              <StyledAboutUsText mg_b_m="40">
                {t("landing.aboutUs.text.paragraph2")}
              </StyledAboutUsText>

              <Sphere
                z="0"
                t_m="-4"
                l_m="-10"
                w_m="194"
                h_m="194"
                f_m="164"
                t_t="1"
                l_t="-8"
                w_t="194"
                h_t="194"
                f_t="164"
                t_d="25"
                l_d="-15"
                w_d="297"
                h_d="297"
                br_d="297"
                f_d="250"
              />
            </StyledAboutUsBlockWrp>

            <StyledAboutUsBlockWrp>
              <StyledAboutUsCircleOuter>
                <StyledAboutUsCircleMiddle>
                  <StyledAboutUsCircleInner>
                    <Svg w_m="38" h_m="38" w_d="68" h_d="68">
                      {theme === "light" && (
                        <svg viewBox="0 0 67 67" fill="none">
                          <g clipPath="url(#clip0_1238_27158)">
                            <path
                              d="M17.759 0.25H49.241C58.9109 0.25 66.75 8.08906 66.75 17.759V49.241C66.75 58.9109 58.9109 66.75 49.241 66.75H17.759C8.08906 66.75 0.25 58.9109 0.25 49.241V17.759C0.25 8.08906 8.08906 0.25 17.759 0.25Z"
                              fill="url(#paint0_linear_1238_27158)"
                              stroke="url(#paint1_linear_1238_27158)"
                              strokeWidth="0.5"
                            />
                            <g filter="url(#filter0_dif_1238_27158)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.6198 19.7771H34.7823L34.8704 19.9789H34.912L34.8908 20.0254L42.1962 36.7358L49.8724 19.9789L54.8909 30.4087L47.1641 48.0989L47.2223 48.2319H47.106H37.0599H36.9301L36.9965 48.0868L29.6909 31.3764L21.9697 48.2319L16.9512 37.8021L24.7222 20.011L24.6198 19.7771Z"
                                fill="black"
                                fillOpacity="0.5"
                              />
                              <path
                                d="M34.7826 19.7771L34.9674 19.6963L34.9145 19.5753H34.7826V19.7771ZM24.6202 19.7771V19.5753H24.3116L24.4353 19.858L24.6202 19.7771ZM34.8708 19.9789L34.6859 20.0598L34.7388 20.1807H34.8708V19.9789ZM34.9123 19.9789L35.0958 20.063L35.2267 19.7771H34.9123V19.9789ZM34.8911 20.0254L34.7075 19.9414L34.67 20.0235L34.7061 20.1062L34.8911 20.0254ZM42.1966 36.7358L42.0117 36.8167L42.1923 37.2298L42.38 36.8199L42.1966 36.7358ZM49.8727 19.9789L50.0545 19.8914L49.8683 19.5042L49.6893 19.8949L49.8727 19.9789ZM54.8912 30.4087L55.0761 30.4896L55.1132 30.4047L55.0731 30.3213L54.8912 30.4087ZM47.1644 48.0989L46.9794 48.0182L46.9443 48.0989L46.9796 48.1797L47.1644 48.0989ZM47.2226 48.2319V48.4337H47.5311L47.4074 48.151L47.2226 48.2319ZM36.9304 48.2319L36.747 48.148L36.616 48.4337H36.9304V48.2319ZM36.9968 48.0868L37.1802 48.171L37.218 48.0889L37.1816 48.0061L36.9968 48.0868ZM29.6912 31.3764L29.8762 31.2957L29.6956 30.8826L29.5077 31.2924L29.6912 31.3764ZM21.97 48.2319L21.7882 48.3195L21.9745 48.7068L22.1535 48.3159L21.97 48.2319ZM16.9515 37.8021L16.7665 37.7212L16.7295 37.8062L16.7696 37.8895L16.9515 37.8021ZM24.7225 20.011L24.9073 20.0918L24.9426 20.0109L24.9073 19.9301L24.7225 20.011ZM34.7826 19.5753H24.6202V19.9789H34.7826V19.5753ZM35.0556 19.8981L34.9674 19.6963L34.5975 19.858L34.6859 20.0598L35.0556 19.8981ZM34.8708 20.1807H34.9123V19.7771H34.8708V20.1807ZM34.7289 19.8949L34.7075 19.9414L35.0746 20.1095L35.0958 20.063L34.7289 19.8949ZM42.3816 36.6551L35.076 19.9446L34.7061 20.1062L42.0117 36.8167L42.3816 36.6551ZM49.6893 19.8949L42.0131 36.6518L42.38 36.8199L50.0563 20.063L49.6893 19.8949ZM55.0731 30.3213L50.0545 19.8914L49.6909 20.0664L54.7094 30.4963L55.0731 30.3213ZM47.3493 48.1797L55.0761 30.4896L54.7064 30.328L46.9794 48.0182L47.3493 48.1797ZM47.4074 48.151L47.3493 48.018L46.9796 48.1797L47.0377 48.3129L47.4074 48.151ZM47.1063 48.4337H47.2226V48.0301H47.1063V48.4337ZM37.0602 48.4337H47.1063V48.0301H37.0602V48.4337ZM36.9304 48.4337H37.0602V48.0301H36.9304V48.4337ZM36.8133 48.0029L36.747 48.148L37.1138 48.3159L37.1802 48.171L36.8133 48.0029ZM29.5063 31.4573L36.8119 48.1678L37.1816 48.0061L29.8762 31.2957L29.5063 31.4573ZM29.5077 31.2924L21.7864 48.148L22.1535 48.3159L29.8748 31.4605L29.5077 31.2924ZM22.1518 48.1443L17.1333 37.7146L16.7696 37.8895L21.7882 48.3195L22.1518 48.1443ZM17.1364 37.8829L24.9073 20.0918L24.5374 19.9302L16.7665 37.7212L17.1364 37.8829ZM24.4353 19.858L24.5374 20.0918L24.9073 19.9301L24.805 19.6963L24.4353 19.858Z"
                                fill="white"
                                fillOpacity="0.1"
                              />
                            </g>
                            <g filter="url(#filter1_di_1238_27158)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.623 18.0792H33.8016L33.89 18.278H33.9317L33.9104 18.3238L41.2276 34.7672L48.916 18.278L53.9425 28.541L46.2033 45.9486L46.2613 46.079H46.1453L46.1452 46.0792H35.9531L36.0195 45.9369L28.7023 29.4935L20.9689 46.0792L15.9424 35.8162L23.7256 18.3097L23.623 18.0792Z"
                                fill="url(#paint2_linear_1238_27158)"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.623 18.0792H33.8016L33.89 18.278H33.9317L33.9104 18.3238L41.2276 34.7672L48.916 18.278L53.9425 28.541L46.2033 45.9486L46.2613 46.079H46.1453L46.1452 46.0792H35.9531L36.0195 45.9369L28.7023 29.4935L20.9689 46.0792L15.9424 35.8162L23.7256 18.3097L23.623 18.0792Z"
                                fill="url(#paint3_linear_1238_27158)"
                                style={{ mixBlendMode: "overlay" }}
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.623 18.0792H33.8016L33.89 18.278H33.9317L33.9104 18.3238L41.2276 34.7672L48.916 18.278L53.9425 28.541L46.2033 45.9486L46.2613 46.079H46.1453L46.1452 46.0792H35.9531L36.0195 45.9369L28.7023 29.4935L20.9689 46.0792L15.9424 35.8162L23.7256 18.3097L23.623 18.0792Z"
                                fill="#C1A875"
                                style={{ mixBlendMode: "color" }}
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_dif_1238_27158"
                              x="6.09457"
                              y="8.86923"
                              width="59.6536"
                              height="50.4725"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1.06349" />
                              <feGaussianBlur stdDeviation="0.797619" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1238_27158"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1238_27158"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="2.12698" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_1238_27158"
                              />
                              <feGaussianBlur
                                stdDeviation="5.31746"
                                result="effect3_foregroundBlur_1238_27158"
                              />
                            </filter>
                            <filter
                              id="filter1_di_1238_27158"
                              x="14.3471"
                              y="17.5475"
                              width="41.1905"
                              height="31.1905"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1.06349" />
                              <feGaussianBlur stdDeviation="0.797619" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1238_27158"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1238_27158"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="2.12698" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_1238_27158"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_1238_27158"
                              x1="28.0885"
                              y1="4.63846"
                              x2="52.8269"
                              y2="67"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#353438" />
                              <stop offset="1" stopColor="#1D1D21" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_1238_27158"
                              x1="11"
                              y1="-2"
                              x2="51"
                              y2="63"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#2F2E33" />
                              <stop offset="1" stopColor="#55555A" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_1238_27158"
                              x1="18.0492"
                              y1="35.5915"
                              x2="52.0022"
                              y2="24.7973"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#576265" />
                              <stop offset="0.130395" stopColor="#9EA1A1" />
                              <stop offset="0.313927" stopColor="#848B8A" />
                              <stop offset="0.53" stopColor="#576265" />
                              <stop offset="0.715" stopColor="#576265" />
                              <stop offset="0.925155" stopColor="#757A7B" />
                              <stop offset="1" stopColor="#576265" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_1238_27158"
                              x1="53.0879"
                              y1="45.1283"
                              x2="7.42623"
                              y2="-3.46987"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0" />
                              <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <clipPath id="clip0_1238_27158">
                              <rect width="67" height="67" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}

                      {theme === "dark" && (
                        <svg viewBox="0 0 67 67" fill="none">
                          <g clipPath="url(#clip0_1238_27280)">
                            <mask
                              id="mask0_1238_27280"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="67"
                              height="67"
                            >
                              <path d="M67 0H0V67H67V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1238_27280)">
                              <g filter="url(#filter0_ii_1238_27280)">
                                <path
                                  d="M49.241 0H17.759C7.95099 0 0 7.95099 0 17.759V49.241C0 59.049 7.95099 67 17.759 67H49.241C59.049 67 67 59.049 67 49.241V17.759C67 7.95099 59.049 0 49.241 0Z"
                                  fill="url(#paint0_linear_1238_27280)"
                                />
                              </g>
                              <g style={{ mixBlendMode: "lighten" }}>
                                <path
                                  d="M49.241 0H17.759C7.95099 0 0 7.95099 0 17.759V49.241C0 59.049 7.95099 67 17.759 67H49.241C59.049 67 67 59.049 67 49.241V17.759C67 7.95099 59.049 0 49.241 0Z"
                                  fill="url(#paint1_linear_1238_27280)"
                                  fillOpacity="0.2"
                                />
                                <path
                                  d="M49.241 0.050415H17.7591C7.97894 0.050415 0.0505371 7.97882 0.0505371 17.759V49.2409C0.0505371 59.0211 7.97894 66.9495 17.7591 66.9495H49.241C59.0212 66.9495 66.9496 59.0211 66.9496 49.2409V17.759C66.9496 7.97882 59.0212 0.050415 49.241 0.050415Z"
                                  stroke="white"
                                  strokeOpacity="0.1"
                                  strokeWidth="0.265873"
                                />
                              </g>
                              <g filter="url(#filter1_f_1238_27280)">
                                <path
                                  d="M66.4954 49.5437L33.9036 52.6717L40.3614 47.9292L48.4337 38.6461L50.0481 26.8404L41.9759 16.75L66.4954 30.0693V49.5437Z"
                                  fill="url(#paint2_linear_1238_27280)"
                                  fillOpacity="0.1"
                                />
                              </g>
                            </g>
                            <g filter="url(#filter2_dif_1238_27280)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.6206 19.7771H34.783L34.8712 19.9789H34.9127L34.8916 20.0254L42.197 36.7358L49.8731 19.9789L54.8917 30.4087L47.1649 48.0989L47.223 48.2319H47.1067H37.0606H36.9308L36.9972 48.0868L29.6916 31.3764L21.9704 48.2319L16.9519 37.8021L24.7229 20.011L24.6206 19.7771Z"
                                fill="black"
                                fillOpacity="0.5"
                              />
                              <path
                                d="M34.783 19.7771L34.9679 19.6963L34.915 19.5753H34.783V19.7771ZM24.6206 19.7771V19.5753H24.3121L24.4358 19.858L24.6206 19.7771ZM34.8712 19.9789L34.6864 20.0598L34.7393 20.1807H34.8712V19.9789ZM34.9128 19.9789L35.0963 20.063L35.2272 19.7771H34.9128V19.9789ZM34.8916 20.0254L34.708 19.9414L34.6704 20.0235L34.7066 20.1062L34.8916 20.0254ZM42.197 36.7358L42.0122 36.8167L42.1928 37.2298L42.3805 36.8199L42.197 36.7358ZM49.8732 19.9789L50.055 19.8914L49.8687 19.5042L49.6897 19.8949L49.8732 19.9789ZM54.8917 30.4087L55.0766 30.4896L55.1137 30.4047L55.0736 30.3213L54.8917 30.4087ZM47.1649 48.0989L46.9799 48.0182L46.9448 48.0989L46.9801 48.1797L47.1649 48.0989ZM47.2231 48.2319V48.4337H47.5316L47.4079 48.151L47.2231 48.2319ZM36.9309 48.2319L36.7474 48.148L36.6165 48.4337H36.9309V48.2319ZM36.9973 48.0868L37.1807 48.171L37.2185 48.0889L37.1821 48.0061L36.9973 48.0868ZM29.6917 31.3764L29.8767 31.2957L29.6961 30.8826L29.5082 31.2924L29.6917 31.3764ZM21.9705 48.2319L21.7887 48.3195L21.9749 48.7068L22.154 48.3159L21.9705 48.2319ZM16.952 37.8021L16.767 37.7212L16.73 37.8062L16.7701 37.8895L16.952 37.8021ZM24.723 20.011L24.9078 20.0918L24.9431 20.0109L24.9078 19.9301L24.723 20.011ZM34.783 19.5753H24.6206V19.9789H34.783V19.5753ZM35.0561 19.8981L34.9679 19.6963L34.598 19.858L34.6864 20.0598L35.0561 19.8981ZM34.8712 20.1807H34.9128V19.7771H34.8712V20.1807ZM34.7294 19.8949L34.708 19.9414L35.0751 20.1095L35.0963 20.063L34.7294 19.8949ZM42.3821 36.6551L35.0765 19.9446L34.7066 20.1062L42.0122 36.8167L42.3821 36.6551ZM49.6897 19.8949L42.0136 36.6518L42.3805 36.8199L50.0568 20.063L49.6897 19.8949ZM55.0736 30.3213L50.055 19.8914L49.6914 20.0664L54.7099 30.4963L55.0736 30.3213ZM47.3498 48.1797L55.0766 30.4896L54.7069 30.328L46.9799 48.0182L47.3498 48.1797ZM47.4079 48.151L47.3498 48.018L46.9801 48.1797L47.0382 48.3129L47.4079 48.151ZM47.1068 48.4337H47.2231V48.0301H47.1068V48.4337ZM37.0606 48.4337H47.1068V48.0301H37.0606V48.4337ZM36.9309 48.4337H37.0606V48.0301H36.9309V48.4337ZM36.8138 48.0029L36.7474 48.148L37.1143 48.3159L37.1807 48.171L36.8138 48.0029ZM29.5068 31.4573L36.8124 48.1678L37.1821 48.0061L29.8767 31.2957L29.5068 31.4573ZM29.5082 31.2924L21.7869 48.148L22.154 48.3159L29.8753 31.4605L29.5082 31.2924ZM22.1523 48.1443L17.1338 37.7146L16.7701 37.8895L21.7887 48.3195L22.1523 48.1443ZM17.1369 37.8829L24.9078 20.0918L24.5379 19.9302L16.767 37.7212L17.1369 37.8829ZM24.4358 19.858L24.5379 20.0918L24.9078 19.9301L24.8055 19.6963L24.4358 19.858Z"
                                fill="white"
                                fillOpacity="0.1"
                              />
                            </g>
                            <g filter="url(#filter3_di_1238_27280)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.6235 18.0792H33.8021L33.8905 18.278H33.9322L33.9109 18.3238L41.228 34.7669L48.9162 18.278L53.9427 28.541L46.2037 45.9483L46.2618 46.079H46.1456L46.1455 46.0792H35.9534L36.0199 45.9366L28.7028 29.4935L20.9694 46.0792L15.9429 35.8162L23.7261 18.3097L23.6235 18.0792Z"
                                fill="url(#paint3_linear_1238_27280)"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_ii_1238_27280"
                              x="0"
                              y="0"
                              width="67"
                              height="67"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1.06349" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_1238_27280"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1.06349" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_innerShadow_1238_27280"
                                result="effect2_innerShadow_1238_27280"
                              />
                            </filter>
                            <filter
                              id="filter1_f_1238_27280"
                              x="28.5861"
                              y="11.4325"
                              width="43.2267"
                              height="46.5566"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2.65873"
                                result="effect1_foregroundBlur_1238_27280"
                              />
                            </filter>
                            <filter
                              id="filter2_dif_1238_27280"
                              x="6.09506"
                              y="8.86923"
                              width="59.6536"
                              height="50.4725"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1.06349" />
                              <feGaussianBlur stdDeviation="0.797619" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1238_27280"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1238_27280"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="2.12698" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_1238_27280"
                              />
                              <feGaussianBlur
                                stdDeviation="5.31746"
                                result="effect3_foregroundBlur_1238_27280"
                              />
                            </filter>
                            <filter
                              id="filter3_di_1238_27280"
                              x="14.3476"
                              y="17.5475"
                              width="41.1902"
                              height="31.1905"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1.06349" />
                              <feGaussianBlur stdDeviation="0.797619" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1238_27280"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1238_27280"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation="2.12698" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_1238_27280"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_1238_27280"
                              x1="8.5"
                              y1="7.5"
                              x2="54.5"
                              y2="66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495061" />
                              <stop offset="1" stopColor="#23262F" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_1238_27280"
                              x1="10.9985"
                              y1="56.0015"
                              x2="71.8799"
                              y2="43.2788"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#316FD2" />
                              <stop offset="0.552083" stopColor="#426BC2" />
                              <stop offset="1" stopColor="#4839B5" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_1238_27280"
                              x1="53.2771"
                              y1="33.2982"
                              x2="66.9999"
                              y2="39.0497"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop />
                              <stop offset="0.911758" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_1238_27280"
                              x1="33.9355"
                              y1="18.3465"
                              x2="13.787"
                              y2="21.9548"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#307CF4" />
                              <stop offset="0.302083" stopColor="#863AF7" />
                              <stop offset="0.640221" stopColor="#BC37E2" />
                              <stop offset="1" stopColor="#EF615C" />
                            </linearGradient>
                            <clipPath id="clip0_1238_27280">
                              <rect width="67" height="67" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </Svg>
                  </StyledAboutUsCircleInner>
                </StyledAboutUsCircleMiddle>
              </StyledAboutUsCircleOuter>
            </StyledAboutUsBlockWrp>

            <StyledAboutUsBenefitList>
              <StyledAboutUsBenefitItem>
                <Svg w_m="16" h_m="16" w_d="24" h_d="24" mg_r_m="8">
                  {theme === "dark" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M13.76 11.81C13.76 12.8925 12.8825 13.77 11.8 13.77C10.7175 13.77 9.84 12.8925 9.84 11.81C9.84 10.7275 10.7175 9.85 11.8 9.85C12.8825 9.85 13.76 10.7275 13.76 11.81Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C20.6989 9.5 21.0143 9.63064 21.2468 9.86319C21.4794 10.0957 21.61 10.4111 21.61 10.74V12.88C21.61 13.5648 21.0548 14.12 20.37 14.12C19.8683 14.1215 19.4169 14.4251 19.2264 14.8892C19.036 15.3534 19.144 15.8865 19.5 16.24C19.9776 16.7295 19.9776 17.5105 19.5 18L18 19.5C17.5105 19.9776 16.7295 19.9776 16.24 19.5C15.8865 19.144 15.3534 19.036 14.8892 19.2264C14.4251 19.4169 14.1215 19.8683 14.12 20.37C14.12 21.0548 13.5648 21.61 12.88 21.61H10.74C10.0552 21.61 9.5 21.0548 9.5 20.37C9.49854 19.8683 9.19491 19.4169 8.73077 19.2264C8.26664 19.036 7.73346 19.144 7.38 19.5C6.89055 19.9776 6.10945 19.9776 5.62 19.5L4.12 18C3.64237 17.5105 3.64237 16.7295 4.12 16.24C4.47735 15.8853 4.5847 15.3496 4.39166 14.8846C4.19862 14.4195 3.74352 14.1174 3.24 14.12C2.55517 14.12 2 13.5648 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.72474 4.47735 8.26035 4.5847 8.7254 4.39166C9.19046 4.19862 9.4926 3.74352 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.2089 2 13.5243 2.13064 13.7568 2.36319C13.9894 2.59573 14.12 2.91113 14.12 3.24C14.1174 3.74352 14.4195 4.19862 14.8846 4.39166C15.3496 4.5847 15.8853 4.47735 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.34 11.81C8.34 13.7209 9.88909 15.27 11.8 15.27C13.7109 15.27 15.26 13.7209 15.26 11.81C15.26 9.8991 13.7109 8.35 11.8 8.35C9.88909 8.35 8.34 9.8991 8.34 11.81Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {theme === "light" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M13.76 11.81C13.76 12.8925 12.8825 13.77 11.8 13.77C10.7175 13.77 9.84 12.8925 9.84 11.81C9.84 10.7275 10.7175 9.85 11.8 9.85C12.8825 9.85 13.76 10.7275 13.76 11.81Z"
                        fill="url(#paint0_linear_1238_27097)"
                      />
                      <path
                        d="M13.76 11.81C13.76 12.8925 12.8825 13.77 11.8 13.77C10.7175 13.77 9.84 12.8925 9.84 11.81C9.84 10.7275 10.7175 9.85 11.8 9.85C12.8825 9.85 13.76 10.7275 13.76 11.81Z"
                        fill="url(#paint1_linear_1238_27097)"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      <path
                        d="M13.76 11.81C13.76 12.8925 12.8825 13.77 11.8 13.77C10.7175 13.77 9.84 12.8925 9.84 11.81C9.84 10.7275 10.7175 9.85 11.8 9.85C12.8825 9.85 13.76 10.7275 13.76 11.81Z"
                        fill="#C1A875"
                        style={{ mixBlendMode: "color" }}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C20.6989 9.5 21.0143 9.63064 21.2468 9.86319C21.4794 10.0957 21.61 10.4111 21.61 10.74V12.88C21.61 13.5648 21.0548 14.12 20.37 14.12C19.8683 14.1215 19.4169 14.4251 19.2264 14.8892C19.036 15.3534 19.144 15.8865 19.5 16.24C19.9776 16.7295 19.9776 17.5105 19.5 18L18 19.5C17.5105 19.9776 16.7295 19.9776 16.24 19.5C15.8865 19.144 15.3534 19.036 14.8892 19.2264C14.4251 19.4169 14.1215 19.8683 14.12 20.37C14.12 21.0548 13.5648 21.61 12.88 21.61H10.74C10.0552 21.61 9.5 21.0548 9.5 20.37C9.49854 19.8683 9.19491 19.4169 8.73077 19.2264C8.26664 19.036 7.73346 19.144 7.38 19.5C6.89055 19.9776 6.10945 19.9776 5.62 19.5L4.12 18C3.64237 17.5105 3.64237 16.7295 4.12 16.24C4.47735 15.8853 4.5847 15.3496 4.39166 14.8846C4.19862 14.4195 3.74352 14.1174 3.24 14.12C2.55517 14.12 2 13.5648 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.72474 4.47735 8.26035 4.5847 8.7254 4.39166C9.19046 4.19862 9.4926 3.74352 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.2089 2 13.5243 2.13064 13.7568 2.36319C13.9894 2.59573 14.12 2.91113 14.12 3.24C14.1174 3.74352 14.4195 4.19862 14.8846 4.39166C15.3496 4.5847 15.8853 4.47735 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.34 11.81C8.34 13.7209 9.88909 15.27 11.8 15.27C13.7109 15.27 15.26 13.7209 15.26 11.81C15.26 9.8991 13.7109 8.35 11.8 8.35C9.88909 8.35 8.34 9.8991 8.34 11.81Z"
                        fill="url(#paint2_linear_1238_27097)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C20.6989 9.5 21.0143 9.63064 21.2468 9.86319C21.4794 10.0957 21.61 10.4111 21.61 10.74V12.88C21.61 13.5648 21.0548 14.12 20.37 14.12C19.8683 14.1215 19.4169 14.4251 19.2264 14.8892C19.036 15.3534 19.144 15.8865 19.5 16.24C19.9776 16.7295 19.9776 17.5105 19.5 18L18 19.5C17.5105 19.9776 16.7295 19.9776 16.24 19.5C15.8865 19.144 15.3534 19.036 14.8892 19.2264C14.4251 19.4169 14.1215 19.8683 14.12 20.37C14.12 21.0548 13.5648 21.61 12.88 21.61H10.74C10.0552 21.61 9.5 21.0548 9.5 20.37C9.49854 19.8683 9.19491 19.4169 8.73077 19.2264C8.26664 19.036 7.73346 19.144 7.38 19.5C6.89055 19.9776 6.10945 19.9776 5.62 19.5L4.12 18C3.64237 17.5105 3.64237 16.7295 4.12 16.24C4.47735 15.8853 4.5847 15.3496 4.39166 14.8846C4.19862 14.4195 3.74352 14.1174 3.24 14.12C2.55517 14.12 2 13.5648 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.72474 4.47735 8.26035 4.5847 8.7254 4.39166C9.19046 4.19862 9.4926 3.74352 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.2089 2 13.5243 2.13064 13.7568 2.36319C13.9894 2.59573 14.12 2.91113 14.12 3.24C14.1174 3.74352 14.4195 4.19862 14.8846 4.39166C15.3496 4.5847 15.8853 4.47735 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.34 11.81C8.34 13.7209 9.88909 15.27 11.8 15.27C13.7109 15.27 15.26 13.7209 15.26 11.81C15.26 9.8991 13.7109 8.35 11.8 8.35C9.88909 8.35 8.34 9.8991 8.34 11.81Z"
                        fill="url(#paint3_linear_1238_27097)"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C20.6989 9.5 21.0143 9.63064 21.2468 9.86319C21.4794 10.0957 21.61 10.4111 21.61 10.74V12.88C21.61 13.5648 21.0548 14.12 20.37 14.12C19.8683 14.1215 19.4169 14.4251 19.2264 14.8892C19.036 15.3534 19.144 15.8865 19.5 16.24C19.9776 16.7295 19.9776 17.5105 19.5 18L18 19.5C17.5105 19.9776 16.7295 19.9776 16.24 19.5C15.8865 19.144 15.3534 19.036 14.8892 19.2264C14.4251 19.4169 14.1215 19.8683 14.12 20.37C14.12 21.0548 13.5648 21.61 12.88 21.61H10.74C10.0552 21.61 9.5 21.0548 9.5 20.37C9.49854 19.8683 9.19491 19.4169 8.73077 19.2264C8.26664 19.036 7.73346 19.144 7.38 19.5C6.89055 19.9776 6.10945 19.9776 5.62 19.5L4.12 18C3.64237 17.5105 3.64237 16.7295 4.12 16.24C4.47735 15.8853 4.5847 15.3496 4.39166 14.8846C4.19862 14.4195 3.74352 14.1174 3.24 14.12C2.55517 14.12 2 13.5648 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.72474 4.47735 8.26035 4.5847 8.7254 4.39166C9.19046 4.19862 9.4926 3.74352 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.2089 2 13.5243 2.13064 13.7568 2.36319C13.9894 2.59573 14.12 2.91113 14.12 3.24C14.1174 3.74352 14.4195 4.19862 14.8846 4.39166C15.3496 4.5847 15.8853 4.47735 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.34 11.81C8.34 13.7209 9.88909 15.27 11.8 15.27C13.7109 15.27 15.26 13.7209 15.26 11.81C15.26 9.8991 13.7109 8.35 11.8 8.35C9.88909 8.35 8.34 9.8991 8.34 11.81Z"
                        fill="#C1A875"
                        style={{ mixBlendMode: "color" }}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1238_27097"
                          x1="3.08725"
                          y1="14.2649"
                          x2="21.3761"
                          y2="9.98063"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#576265" />
                          <stop offset="0.130395" stopColor="#9EA1A1" />
                          <stop offset="0.313927" stopColor="#848B8A" />
                          <stop offset="0.53" stopColor="#576265" />
                          <stop offset="0.715" stopColor="#576265" />
                          <stop offset="0.925155" stopColor="#757A7B" />
                          <stop offset="1" stopColor="#576265" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1238_27097"
                          x1="21.169"
                          y1="20.944"
                          x2="-9.94888"
                          y2="-3.45955"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1238_27097"
                          x1="3.08725"
                          y1="14.2649"
                          x2="21.3761"
                          y2="9.98063"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#576265" />
                          <stop offset="0.130395" stopColor="#9EA1A1" />
                          <stop offset="0.313927" stopColor="#848B8A" />
                          <stop offset="0.53" stopColor="#576265" />
                          <stop offset="0.715" stopColor="#576265" />
                          <stop offset="0.925155" stopColor="#757A7B" />
                          <stop offset="1" stopColor="#576265" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1238_27097"
                          x1="21.169"
                          y1="20.944"
                          x2="-9.94888"
                          y2="-3.45955"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </Svg>

                <StyledAboutUsBenefitText>
                  {t("landing.aboutUs.benefitList.item1")}
                </StyledAboutUsBenefitText>
              </StyledAboutUsBenefitItem>

              <StyledAboutUsBenefitItem>
                <Svg w_m="16" h_m="16" w_d="24" h_d="24" mg_r_m="8">
                  {theme === "dark" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M15.499 2.92969C13.0137 2.92969 10.999 4.94469 10.999 7.42969C10.999 9.91469 13.0137 11.9297 15.499 11.9297C17.9843 11.9297 19.999 9.91469 19.999 7.42969C19.999 4.94469 17.9843 2.92969 15.499 2.92969ZM7.99902 3.92969C5.78992 3.92969 3.99902 5.72069 3.99902 7.92969C3.99902 10.1387 5.78992 11.9297 7.99902 11.9297C8.82842 11.9297 9.58552 11.7017 10.2518 11.2357C8.54302 8.69572 8.78522 6.26369 9.71653 4.30469C9.18463 4.05269 8.60042 3.92969 7.99902 3.92969ZM5.06152 13.2737C3.22742 14.0307 1.99902 15.8857 1.99902 17.9297V19.9297C1.99902 20.4817 2.44672 20.9297 2.99902 20.9297L7.15182 20.9317C6.91782 20.1717 6.98662 18.9397 7.00202 17.9427C7.03452 15.8257 7.91002 14.3157 8.25292 13.9177C7.62272 13.9127 6.86642 13.7597 6.31152 13.5237C6.17752 13.4667 6.09972 13.4217 5.84282 13.3047C5.59092 13.1897 5.31732 13.1677 5.06152 13.2737ZM12.0615 13.2737C10.2274 14.0307 8.99902 15.8857 8.99902 17.9297V19.9297C8.99902 20.4817 9.44672 20.9297 9.99902 20.9297H20.999C21.5513 20.9297 21.999 20.4817 21.999 19.9297V17.9297C21.999 15.9337 20.7638 14.1237 18.9365 13.3357C18.6793 13.2247 18.3796 13.2217 18.124 13.3357C17.2392 13.7327 16.3772 13.9297 15.499 13.9297C14.6238 13.9297 13.7588 13.7217 12.8428 13.3047C12.5909 13.1897 12.3173 13.1677 12.0615 13.2737Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {theme === "light" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M15.499 2.92969C13.0137 2.92969 10.999 4.94469 10.999 7.42969C10.999 9.91469 13.0137 11.9297 15.499 11.9297C17.9843 11.9297 19.999 9.91469 19.999 7.42969C19.999 4.94469 17.9843 2.92969 15.499 2.92969ZM7.99902 3.92969C5.78992 3.92969 3.99902 5.72069 3.99902 7.92969C3.99902 10.1387 5.78992 11.9297 7.99902 11.9297C8.82842 11.9297 9.58552 11.7017 10.2518 11.2357C8.54302 8.69572 8.78522 6.26369 9.71653 4.30469C9.18463 4.05269 8.60042 3.92969 7.99902 3.92969ZM5.06152 13.2737C3.22742 14.0307 1.99902 15.8857 1.99902 17.9297V19.9297C1.99902 20.4817 2.44672 20.9297 2.99902 20.9297L7.15182 20.9317C6.91782 20.1717 6.98662 18.9397 7.00202 17.9427C7.03452 15.8257 7.91002 14.3157 8.25292 13.9177C7.62272 13.9127 6.86642 13.7597 6.31152 13.5237C6.17752 13.4667 6.09972 13.4217 5.84282 13.3047C5.59092 13.1897 5.31732 13.1677 5.06152 13.2737ZM12.0615 13.2737C10.2274 14.0307 8.99902 15.8857 8.99902 17.9297V19.9297C8.99902 20.4817 9.44672 20.9297 9.99902 20.9297H20.999C21.5513 20.9297 21.999 20.4817 21.999 19.9297V17.9297C21.999 15.9337 20.7638 14.1237 18.9365 13.3357C18.6793 13.2247 18.3796 13.2217 18.124 13.3357C17.2392 13.7327 16.3772 13.9297 15.499 13.9297C14.6238 13.9297 13.7588 13.7217 12.8428 13.3047C12.5909 13.1897 12.3173 13.1677 12.0615 13.2737Z"
                        fill="url(#paint0_linear_1238_27081)"
                      />
                      <path
                        d="M15.499 2.92969C13.0137 2.92969 10.999 4.94469 10.999 7.42969C10.999 9.91469 13.0137 11.9297 15.499 11.9297C17.9843 11.9297 19.999 9.91469 19.999 7.42969C19.999 4.94469 17.9843 2.92969 15.499 2.92969ZM7.99902 3.92969C5.78992 3.92969 3.99902 5.72069 3.99902 7.92969C3.99902 10.1387 5.78992 11.9297 7.99902 11.9297C8.82842 11.9297 9.58552 11.7017 10.2518 11.2357C8.54302 8.69572 8.78522 6.26369 9.71653 4.30469C9.18463 4.05269 8.60042 3.92969 7.99902 3.92969ZM5.06152 13.2737C3.22742 14.0307 1.99902 15.8857 1.99902 17.9297V19.9297C1.99902 20.4817 2.44672 20.9297 2.99902 20.9297L7.15182 20.9317C6.91782 20.1717 6.98662 18.9397 7.00202 17.9427C7.03452 15.8257 7.91002 14.3157 8.25292 13.9177C7.62272 13.9127 6.86642 13.7597 6.31152 13.5237C6.17752 13.4667 6.09972 13.4217 5.84282 13.3047C5.59092 13.1897 5.31732 13.1677 5.06152 13.2737ZM12.0615 13.2737C10.2274 14.0307 8.99902 15.8857 8.99902 17.9297V19.9297C8.99902 20.4817 9.44672 20.9297 9.99902 20.9297H20.999C21.5513 20.9297 21.999 20.4817 21.999 19.9297V17.9297C21.999 15.9337 20.7638 14.1237 18.9365 13.3357C18.6793 13.2247 18.3796 13.2217 18.124 13.3357C17.2392 13.7327 16.3772 13.9297 15.499 13.9297C14.6238 13.9297 13.7588 13.7217 12.8428 13.3047C12.5909 13.1897 12.3173 13.1677 12.0615 13.2737Z"
                        fill="url(#paint1_linear_1238_27081)"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      <path
                        d="M15.499 2.92969C13.0137 2.92969 10.999 4.94469 10.999 7.42969C10.999 9.91469 13.0137 11.9297 15.499 11.9297C17.9843 11.9297 19.999 9.91469 19.999 7.42969C19.999 4.94469 17.9843 2.92969 15.499 2.92969ZM7.99902 3.92969C5.78992 3.92969 3.99902 5.72069 3.99902 7.92969C3.99902 10.1387 5.78992 11.9297 7.99902 11.9297C8.82842 11.9297 9.58552 11.7017 10.2518 11.2357C8.54302 8.69572 8.78522 6.26369 9.71653 4.30469C9.18463 4.05269 8.60042 3.92969 7.99902 3.92969ZM5.06152 13.2737C3.22742 14.0307 1.99902 15.8857 1.99902 17.9297V19.9297C1.99902 20.4817 2.44672 20.9297 2.99902 20.9297L7.15182 20.9317C6.91782 20.1717 6.98662 18.9397 7.00202 17.9427C7.03452 15.8257 7.91002 14.3157 8.25292 13.9177C7.62272 13.9127 6.86642 13.7597 6.31152 13.5237C6.17752 13.4667 6.09972 13.4217 5.84282 13.3047C5.59092 13.1897 5.31732 13.1677 5.06152 13.2737ZM12.0615 13.2737C10.2274 14.0307 8.99902 15.8857 8.99902 17.9297V19.9297C8.99902 20.4817 9.44672 20.9297 9.99902 20.9297H20.999C21.5513 20.9297 21.999 20.4817 21.999 19.9297V17.9297C21.999 15.9337 20.7638 14.1237 18.9365 13.3357C18.6793 13.2247 18.3796 13.2217 18.124 13.3357C17.2392 13.7327 16.3772 13.9297 15.499 13.9297C14.6238 13.9297 13.7588 13.7217 12.8428 13.3047C12.5909 13.1897 12.3173 13.1677 12.0615 13.2737Z"
                        fill="#C1A875"
                        style={{ mixBlendMode: "color" }}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1238_27081"
                          x1="3.10789"
                          y1="14.1888"
                          x2="21.5358"
                          y2="9.39292"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#576265" />
                          <stop offset="0.130395" stopColor="#9EA1A1" />
                          <stop offset="0.313927" stopColor="#848B8A" />
                          <stop offset="0.53" stopColor="#576265" />
                          <stop offset="0.715" stopColor="#576265" />
                          <stop offset="0.925155" stopColor="#757A7B" />
                          <stop offset="1" stopColor="#576265" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1238_27081"
                          x1="21.5493"
                          y1="20.3203"
                          x2="-7.58785"
                          y2="-5.06593"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </Svg>

                <StyledAboutUsBenefitText>
                  {t("landing.aboutUs.benefitList.item2")}
                </StyledAboutUsBenefitText>
              </StyledAboutUsBenefitItem>

              <StyledAboutUsBenefitItem>
                <Svg w_m="16" h_m="16" w_d="24" h_d="24" mg_r_m="8">
                  {theme === "dark" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M8.00353 1.9989C5.14283 1.9989 2.60463 4.0146 2.03473 6.7801C1.92343 7.3205 2.27513 7.8564 2.81603 7.9677C3.35693 8.0789 3.89223 7.7268 4.00353 7.1864C4.38293 5.345 6.09663 3.9989 8.00353 3.9989C8.55583 3.9989 9.00353 3.5506 9.00353 2.9989C9.00353 2.4472 8.55583 1.9989 8.00353 1.9989ZM16.0035 1.9989C15.4512 1.9989 15.0035 2.4466 15.0035 2.9989C15.0035 3.5512 15.4512 3.9989 16.0035 3.9989C17.9126 3.9989 19.6265 5.3401 20.0035 7.1864C20.114 7.7275 20.6499 8.0781 21.191 7.9677C21.7321 7.8572 22.0827 7.3213 21.9723 6.7801C21.406 4.0072 18.8676 1.9989 16.0035 1.9989ZM12.0035 3.9989C7.03293 3.9989 3.00353 8.0283 3.00353 12.9989C3.00353 15.1095 3.75573 17.0891 4.97233 18.6239L3.31603 20.2801C2.92553 20.6707 2.92553 21.3271 3.31603 21.7177C3.70653 22.1082 4.33173 22.1082 4.72233 21.7177L6.37853 20.0301C7.91333 21.2467 9.89293 21.9989 12.0035 21.9989C14.1141 21.9989 16.0937 21.2467 17.6285 20.0301L19.316 21.7177C19.7065 22.1082 20.3317 22.0769 20.7223 21.6864C21.1128 21.2959 21.0815 20.6707 20.691 20.2801L19.0347 18.5927C20.2333 17.1396 21.0035 15.1095 21.0035 12.9989C21.0035 8.0283 16.9741 3.9989 12.0035 3.9989ZM12.0035 7.9989C12.5558 7.9989 13.0035 8.4466 13.0035 8.9989V12.9989C13.0035 13.5512 12.5558 13.9989 12.0035 13.9989H8.00353C7.45123 13.9989 7.00353 13.5512 7.00353 12.9989C7.00353 12.4466 7.45123 11.9989 8.00353 11.9989H11.0035V8.9989C11.0035 8.4466 11.4512 7.9989 12.0035 7.9989Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {theme === "light" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M8.00304 1.9989C5.14234 1.9989 2.60414 4.0146 2.03424 6.7801C1.92294 7.3205 2.27464 7.8564 2.81554 7.9677C3.35644 8.0789 3.89174 7.7268 4.00304 7.1864C4.38244 5.345 6.09614 3.9989 8.00304 3.9989C8.55534 3.9989 9.00304 3.5506 9.00304 2.9989C9.00304 2.4472 8.55534 1.9989 8.00304 1.9989ZM16.003 1.9989C15.4507 1.9989 15.003 2.4466 15.003 2.9989C15.003 3.5512 15.4507 3.9989 16.003 3.9989C17.9121 3.9989 19.626 5.3401 20.003 7.1864C20.1135 7.7275 20.6494 8.0781 21.1905 7.9677C21.7316 7.8572 22.0822 7.3213 21.9718 6.7801C21.4055 4.0072 18.8671 1.9989 16.003 1.9989ZM12.003 3.9989C7.03244 3.9989 3.00304 8.0283 3.00304 12.9989C3.00304 15.1095 3.75524 17.0891 4.97184 18.6239L3.31554 20.2801C2.92504 20.6707 2.92504 21.3271 3.31554 21.7177C3.70604 22.1082 4.33124 22.1082 4.72184 21.7177L6.37804 20.0301C7.91284 21.2467 9.89244 21.9989 12.003 21.9989C14.1136 21.9989 16.0932 21.2467 17.628 20.0301L19.3155 21.7177C19.706 22.1082 20.3312 22.0769 20.7218 21.6864C21.1123 21.2959 21.081 20.6707 20.6905 20.2801L19.0342 18.5927C20.2328 17.1396 21.003 15.1095 21.003 12.9989C21.003 8.0283 16.9736 3.9989 12.003 3.9989ZM12.003 7.9989C12.5553 7.9989 13.003 8.4466 13.003 8.9989V12.9989C13.003 13.5512 12.5553 13.9989 12.003 13.9989H8.00304C7.45074 13.9989 7.00304 13.5512 7.00304 12.9989C7.00304 12.4466 7.45074 11.9989 8.00304 11.9989H11.003V8.9989C11.003 8.4466 11.4507 7.9989 12.003 7.9989Z"
                        fill="url(#paint0_linear_1238_27086)"
                      />
                      <path
                        d="M8.00304 1.9989C5.14234 1.9989 2.60414 4.0146 2.03424 6.7801C1.92294 7.3205 2.27464 7.8564 2.81554 7.9677C3.35644 8.0789 3.89174 7.7268 4.00304 7.1864C4.38244 5.345 6.09614 3.9989 8.00304 3.9989C8.55534 3.9989 9.00304 3.5506 9.00304 2.9989C9.00304 2.4472 8.55534 1.9989 8.00304 1.9989ZM16.003 1.9989C15.4507 1.9989 15.003 2.4466 15.003 2.9989C15.003 3.5512 15.4507 3.9989 16.003 3.9989C17.9121 3.9989 19.626 5.3401 20.003 7.1864C20.1135 7.7275 20.6494 8.0781 21.1905 7.9677C21.7316 7.8572 22.0822 7.3213 21.9718 6.7801C21.4055 4.0072 18.8671 1.9989 16.003 1.9989ZM12.003 3.9989C7.03244 3.9989 3.00304 8.0283 3.00304 12.9989C3.00304 15.1095 3.75524 17.0891 4.97184 18.6239L3.31554 20.2801C2.92504 20.6707 2.92504 21.3271 3.31554 21.7177C3.70604 22.1082 4.33124 22.1082 4.72184 21.7177L6.37804 20.0301C7.91284 21.2467 9.89244 21.9989 12.003 21.9989C14.1136 21.9989 16.0932 21.2467 17.628 20.0301L19.3155 21.7177C19.706 22.1082 20.3312 22.0769 20.7218 21.6864C21.1123 21.2959 21.081 20.6707 20.6905 20.2801L19.0342 18.5927C20.2328 17.1396 21.003 15.1095 21.003 12.9989C21.003 8.0283 16.9736 3.9989 12.003 3.9989ZM12.003 7.9989C12.5553 7.9989 13.003 8.4466 13.003 8.9989V12.9989C13.003 13.5512 12.5553 13.9989 12.003 13.9989H8.00304C7.45074 13.9989 7.00304 13.5512 7.00304 12.9989C7.00304 12.4466 7.45074 11.9989 8.00304 11.9989H11.003V8.9989C11.003 8.4466 11.4507 7.9989 12.003 7.9989Z"
                        fill="url(#paint1_linear_1238_27086)"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      <path
                        d="M8.00304 1.9989C5.14234 1.9989 2.60414 4.0146 2.03424 6.7801C1.92294 7.3205 2.27464 7.8564 2.81554 7.9677C3.35644 8.0789 3.89174 7.7268 4.00304 7.1864C4.38244 5.345 6.09614 3.9989 8.00304 3.9989C8.55534 3.9989 9.00304 3.5506 9.00304 2.9989C9.00304 2.4472 8.55534 1.9989 8.00304 1.9989ZM16.003 1.9989C15.4507 1.9989 15.003 2.4466 15.003 2.9989C15.003 3.5512 15.4507 3.9989 16.003 3.9989C17.9121 3.9989 19.626 5.3401 20.003 7.1864C20.1135 7.7275 20.6494 8.0781 21.1905 7.9677C21.7316 7.8572 22.0822 7.3213 21.9718 6.7801C21.4055 4.0072 18.8671 1.9989 16.003 1.9989ZM12.003 3.9989C7.03244 3.9989 3.00304 8.0283 3.00304 12.9989C3.00304 15.1095 3.75524 17.0891 4.97184 18.6239L3.31554 20.2801C2.92504 20.6707 2.92504 21.3271 3.31554 21.7177C3.70604 22.1082 4.33124 22.1082 4.72184 21.7177L6.37804 20.0301C7.91284 21.2467 9.89244 21.9989 12.003 21.9989C14.1136 21.9989 16.0932 21.2467 17.628 20.0301L19.3155 21.7177C19.706 22.1082 20.3312 22.0769 20.7218 21.6864C21.1123 21.2959 21.081 20.6707 20.6905 20.2801L19.0342 18.5927C20.2328 17.1396 21.003 15.1095 21.003 12.9989C21.003 8.0283 16.9736 3.9989 12.003 3.9989ZM12.003 7.9989C12.5553 7.9989 13.003 8.4466 13.003 8.9989V12.9989C13.003 13.5512 12.5553 13.9989 12.003 13.9989H8.00304C7.45074 13.9989 7.00304 13.5512 7.00304 12.9989C7.00304 12.4466 7.45074 11.9989 8.00304 11.9989H11.003V8.9989C11.003 8.4466 11.4507 7.9989 12.003 7.9989Z"
                        fill="#C1A875"
                        style={{ mixBlendMode: "color" }}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1238_27086"
                          x1="3.12135"
                          y1="14.515"
                          x2="21.757"
                          y2="10.1567"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#576265" />
                          <stop offset="0.130395" stopColor="#9EA1A1" />
                          <stop offset="0.313927" stopColor="#848B8A" />
                          <stop offset="0.53" stopColor="#576265" />
                          <stop offset="0.715" stopColor="#576265" />
                          <stop offset="0.925155" stopColor="#757A7B" />
                          <stop offset="1" stopColor="#576265" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1238_27086"
                          x1="21.5429"
                          y1="21.3309"
                          x2="-10.1998"
                          y2="-3.52132"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </Svg>

                <StyledAboutUsBenefitText>
                  {t("landing.aboutUs.benefitList.item3")}
                </StyledAboutUsBenefitText>
              </StyledAboutUsBenefitItem>

              <StyledAboutUsBenefitItem>
                <Svg w_m="16" h_m="16" w_d="24" h_d="24" mg_r_m="8">
                  {theme === "dark" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M12.0142 1.9989C6.49116 1.9989 2.01416 6.4759 2.01416 11.9989C2.01416 13.2709 2.27615 14.5599 2.73315 15.7179L3.51416 17.3109C4.00916 18.3399 3.83517 19.3099 3.17017 20.4989C2.80317 21.1569 3.26116 21.9499 4.01416 21.9679C5.03116 21.9909 6.65816 21.5729 7.95216 21.0929C9.14516 21.6439 10.6822 21.9989 12.0142 21.9989C17.5372 21.9989 22.0142 17.5219 22.0142 11.9989C22.0142 6.4759 17.5372 1.9989 12.0142 1.9989ZM8.01416 10.9989C8.56616 10.9989 9.01416 11.4469 9.01416 11.9989C9.01416 12.5509 8.56616 12.9989 8.01416 12.9989C7.46216 12.9989 7.01416 12.5509 7.01416 11.9989C7.01416 11.4469 7.46216 10.9989 8.01416 10.9989ZM12.0142 10.9989C12.5662 10.9989 13.0142 11.4469 13.0142 11.9989C13.0142 12.5509 12.5662 12.9989 12.0142 12.9989C11.4622 12.9989 11.0142 12.5509 11.0142 11.9989C11.0142 11.4469 11.4622 10.9989 12.0142 10.9989ZM16.0142 10.9989C16.5662 10.9989 17.0142 11.4469 17.0142 11.9989C17.0142 12.5509 16.5662 12.9989 16.0142 12.9989C15.4622 12.9989 15.0142 12.5509 15.0142 11.9989C15.0142 11.4469 15.4622 10.9989 16.0142 10.9989Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {theme === "light" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M12.0137 1.9989C6.49067 1.9989 2.01367 6.4759 2.01367 11.9989C2.01367 13.2709 2.27567 14.5599 2.73267 15.7179L3.51367 17.3109C4.00867 18.3399 3.83468 19.3099 3.16968 20.4989C2.80268 21.1569 3.26067 21.9499 4.01367 21.9679C5.03067 21.9909 6.65768 21.5729 7.95168 21.0929C9.14468 21.6439 10.6817 21.9989 12.0137 21.9989C17.5367 21.9989 22.0137 17.5219 22.0137 11.9989C22.0137 6.4759 17.5367 1.9989 12.0137 1.9989ZM8.01367 10.9989C8.56567 10.9989 9.01367 11.4469 9.01367 11.9989C9.01367 12.5509 8.56567 12.9989 8.01367 12.9989C7.46167 12.9989 7.01367 12.5509 7.01367 11.9989C7.01367 11.4469 7.46167 10.9989 8.01367 10.9989ZM12.0137 10.9989C12.5657 10.9989 13.0137 11.4469 13.0137 11.9989C13.0137 12.5509 12.5657 12.9989 12.0137 12.9989C11.4617 12.9989 11.0137 12.5509 11.0137 11.9989C11.0137 11.4469 11.4617 10.9989 12.0137 10.9989ZM16.0137 10.9989C16.5657 10.9989 17.0137 11.4469 17.0137 11.9989C17.0137 12.5509 16.5657 12.9989 16.0137 12.9989C15.4617 12.9989 15.0137 12.5509 15.0137 11.9989C15.0137 11.4469 15.4617 10.9989 16.0137 10.9989Z"
                        fill="url(#paint0_linear_1238_27091)"
                      />
                      <path
                        d="M12.0137 1.9989C6.49067 1.9989 2.01367 6.4759 2.01367 11.9989C2.01367 13.2709 2.27567 14.5599 2.73267 15.7179L3.51367 17.3109C4.00867 18.3399 3.83468 19.3099 3.16968 20.4989C2.80268 21.1569 3.26067 21.9499 4.01367 21.9679C5.03067 21.9909 6.65768 21.5729 7.95168 21.0929C9.14468 21.6439 10.6817 21.9989 12.0137 21.9989C17.5367 21.9989 22.0137 17.5219 22.0137 11.9989C22.0137 6.4759 17.5367 1.9989 12.0137 1.9989ZM8.01367 10.9989C8.56567 10.9989 9.01367 11.4469 9.01367 11.9989C9.01367 12.5509 8.56567 12.9989 8.01367 12.9989C7.46167 12.9989 7.01367 12.5509 7.01367 11.9989C7.01367 11.4469 7.46167 10.9989 8.01367 10.9989ZM12.0137 10.9989C12.5657 10.9989 13.0137 11.4469 13.0137 11.9989C13.0137 12.5509 12.5657 12.9989 12.0137 12.9989C11.4617 12.9989 11.0137 12.5509 11.0137 11.9989C11.0137 11.4469 11.4617 10.9989 12.0137 10.9989ZM16.0137 10.9989C16.5657 10.9989 17.0137 11.4469 17.0137 11.9989C17.0137 12.5509 16.5657 12.9989 16.0137 12.9989C15.4617 12.9989 15.0137 12.5509 15.0137 11.9989C15.0137 11.4469 15.4617 10.9989 16.0137 10.9989Z"
                        fill="url(#paint1_linear_1238_27091)"
                        style={{ mixBlendMode: "overlay" }}
                      />
                      <path
                        d="M12.0137 1.9989C6.49067 1.9989 2.01367 6.4759 2.01367 11.9989C2.01367 13.2709 2.27567 14.5599 2.73267 15.7179L3.51367 17.3109C4.00867 18.3399 3.83468 19.3099 3.16968 20.4989C2.80268 21.1569 3.26067 21.9499 4.01367 21.9679C5.03067 21.9909 6.65768 21.5729 7.95168 21.0929C9.14468 21.6439 10.6817 21.9989 12.0137 21.9989C17.5367 21.9989 22.0137 17.5219 22.0137 11.9989C22.0137 6.4759 17.5367 1.9989 12.0137 1.9989ZM8.01367 10.9989C8.56567 10.9989 9.01367 11.4469 9.01367 11.9989C9.01367 12.5509 8.56567 12.9989 8.01367 12.9989C7.46167 12.9989 7.01367 12.5509 7.01367 11.9989C7.01367 11.4469 7.46167 10.9989 8.01367 10.9989ZM12.0137 10.9989C12.5657 10.9989 13.0137 11.4469 13.0137 11.9989C13.0137 12.5509 12.5657 12.9989 12.0137 12.9989C11.4617 12.9989 11.0137 12.5509 11.0137 11.9989C11.0137 11.4469 11.4617 10.9989 12.0137 10.9989ZM16.0137 10.9989C16.5657 10.9989 17.0137 11.4469 17.0137 11.9989C17.0137 12.5509 16.5657 12.9989 16.0137 12.9989C15.4617 12.9989 15.0137 12.5509 15.0137 11.9989C15.0137 11.4469 15.4617 10.9989 16.0137 10.9989Z"
                        fill="#C1A875"
                        style={{ mixBlendMode: "color" }}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1238_27091"
                          x1="3.12254"
                          y1="14.5077"
                          x2="21.7751"
                          y2="10.1382"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#576265" />
                          <stop offset="0.130395" stopColor="#9EA1A1" />
                          <stop offset="0.313927" stopColor="#848B8A" />
                          <stop offset="0.53" stopColor="#576265" />
                          <stop offset="0.715" stopColor="#576265" />
                          <stop offset="0.925155" stopColor="#757A7B" />
                          <stop offset="1" stopColor="#576265" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1238_27091"
                          x1="21.5639"
                          y1="21.3197"
                          x2="-10.1728"
                          y2="-3.56922"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </Svg>

                <StyledAboutUsBenefitText>
                  {t("landing.aboutUs.benefitList.item4")}
                </StyledAboutUsBenefitText>
              </StyledAboutUsBenefitItem>
            </StyledAboutUsBenefitList>
          </StyledAboutUsSection>
        </Container>
      </StyledSectionAboutUsWrp>

      <Container>
        <StyledProductSection ref={sectionProducts}>
          <StyledSectionSubTitle>
            {t("landing.ourProducts.subTitle")}
          </StyledSectionSubTitle>

          <StyledSectionTitle>
            {t("landing.ourProducts.title")}
          </StyledSectionTitle>

          <StyledProductList>
            <StyledProductItem>
              <StyledProductItemContentWrp>
                <StyledProductItemTitle>
                  {t("landing.ourProducts.list.item4.title")}
                </StyledProductItemTitle>

                <StyledProductItemText>
                  {t("landing.ourProducts.list.item4.text")}
                </StyledProductItemText>

                <StyledProductItemNavLink to="/">
                  {t("landing.ourProducts.list.item4.link")}
                </StyledProductItemNavLink>
              </StyledProductItemContentWrp>

              <StyledProductItemImgWrp>
                <StyledProductItemImg
                  src={imgLandingPage.product_bridge[theme]}
                  alt="bridge"
                />

                <Sphere
                  z="-1"
                  t_m="10"
                  l_m="40"
                  w_m="140"
                  h_m="140"
                  f_m="100"
                  t_t="3"
                  l_t="32"
                  w_t="140"
                  h_t="140"
                  f_t="100"
                  t_d="15"
                  l_d="38"
                  w_d="135"
                  h_d="135"
                  f_d="113"
                />
              </StyledProductItemImgWrp>
            </StyledProductItem>

            <StyledProductItem>
              <StyledProductItemContentWrp>
                <StyledProductItemTitle>
                  {t("landing.ourProducts.list.item1.title")}
                </StyledProductItemTitle>

                <StyledProductItemText>
                  {t("landing.ourProducts.list.item1.text")}
                </StyledProductItemText>

                <StyledProductItemNavLink to="/">
                  {t("landing.ourProducts.list.item1.link")}
                </StyledProductItemNavLink>
              </StyledProductItemContentWrp>

              <StyledProductItemImgWrp>
                <StyledProductItemImg
                  src={imgLandingPage.product_exchanger[theme]}
                  alt="merchant"
                />

                <Sphere
                  z="-1"
                  t_m="10"
                  l_m="40"
                  w_m="140"
                  h_m="140"
                  f_m="100"
                  t_t="5"
                  l_t="45"
                  w_t="140"
                  h_t="140"
                  f_t="100"
                  t_d="1"
                  l_d="30"
                  w_d="169"
                  h_d="169"
                  f_d="142"
                />
              </StyledProductItemImgWrp>
            </StyledProductItem>

            {/* <StyledProductItem>
              <StyledProductItemContentWrp>
                <StyledProductItemTitle>
                  {t('landing.ourProducts.list.item2.title')}
                </StyledProductItemTitle>

                <StyledProductItemText>
                  {t('landing.ourProducts.list.item2.text')}
                </StyledProductItemText>

                <StyledProductItemLink
                  href="https://t.me/neutronXchange_bot"
                  target="_blank"
                >
                  {t('landing.ourProducts.list.item2.link')}
                </StyledProductItemLink>
              </StyledProductItemContentWrp>

              <StyledProductItemImgWrp>
                <StyledProductItemImg
                  src={imgLandingPage.product_telegram[theme]}
                  alt="telegram"
                />

                <Sphere
                  z="-1"
                  t_m="10"
                  l_m="40"
                  w_m="140"
                  h_m="140"
                  f_m="100"
                  t_t="6"
                  l_t="41"
                  w_t="140"
                  h_t="140"
                  f_t="100"
                  t_d="-5"
                  l_d="41"
                  w_d="145"
                  h_d="145"
                  f_d="122"
                />
              </StyledProductItemImgWrp>
            </StyledProductItem> */}

            <StyledProductItem>
              <StyledProductItemContentWrp>
                <StyledProductItemTitle>
                  {t("landing.ourProducts.list.item3.title")}
                </StyledProductItemTitle>

                <StyledProductItemText>
                  {t("landing.ourProducts.list.item3.text")}
                </StyledProductItemText>

                <StyledProductItemNavLink href="/">
                  {t("landing.ourProducts.list.item3.link")}
                </StyledProductItemNavLink>
              </StyledProductItemContentWrp>

              <StyledProductItemImgWrp>
                <StyledProductItemImg
                  src={imgLandingPage.product_market[theme]}
                  alt="exchanger"
                />

                <Sphere
                  z="-1"
                  t_m="10"
                  l_m="40"
                  w_m="140"
                  h_m="140"
                  f_m="100"
                  t_t="20"
                  l_t="20"
                  w_t="140"
                  h_t="140"
                  f_t="100"
                  t_d="18"
                  l_d="33"
                  w_d="143"
                  h_d="143"
                  f_d="120"
                />
              </StyledProductItemImgWrp>
            </StyledProductItem>

            <StyledProductItem>
              <StyledProductItemContentWrp>
                <StyledProductItemTitle>
                  {t("landing.ourProducts.list.item5.title")}
                </StyledProductItemTitle>

                <StyledProductItemText>
                  {t("landing.ourProducts.list.item5.text")}
                </StyledProductItemText>

                <StyledProductItemLink
                  href="https://crypto.neutronx.com/en/sign-in"
                  target="_blank"
                >
                  {t("landing.ourProducts.list.item5.link")}
                </StyledProductItemLink>
              </StyledProductItemContentWrp>

              <StyledProductItemImgWrp>
                <StyledProductItemImg
                  src={imgLandingPage.product_telegram[theme]}
                  alt="exchanger"
                />

                <Sphere
                  z="-1"
                  t_m="10"
                  l_m="40"
                  w_m="140"
                  h_m="140"
                  f_m="100"
                  t_t="20"
                  l_t="20"
                  w_t="140"
                  h_t="140"
                  f_t="100"
                  t_d="18"
                  l_d="33"
                  w_d="143"
                  h_d="143"
                  f_d="120"
                />
              </StyledProductItemImgWrp>
            </StyledProductItem>
          </StyledProductList>
        </StyledProductSection>
      </Container>

      <Container>
        <StyledCoinSection>
          <h2 className="hidden">Coins</h2>

          <StyledCoinList>
            <StyledCoinItem>
              <Svg w_m="26" h_m="26" mg_r_m="10">
                <use href={`${sprite}#landing-coin-tether`}></use>
              </Svg>

              <StyledCoinItemText>tether</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="26" h_m="26" mg_r_m="10">
                <use href={`${sprite}#landing-coin-bitcoin`}></use>
              </Svg>

              <StyledCoinItemText>bitcoin</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="27" h_m="21" mg_r_m="10">
                <svg viewBox="0 0 27 21">
                  <g clipPath="url(#clip0_1238_27109)">
                    <path
                      d="M4.72362 16.0529C4.88053 15.896 5.09627 15.8044 5.32508 15.8044H26.0754C26.4546 15.8044 26.6442 16.2621 26.3761 16.5301L22.2771 20.6292C22.1202 20.7861 21.9044 20.8776 21.6756 20.8776H0.925285C0.546104 20.8776 0.356514 20.42 0.624556 20.1519L4.72362 16.0529Z"
                      fill="url(#paint0_linear_1238_27109)"
                    />
                    <path
                      d="M4.72362 0.748428C4.88706 0.591526 5.10281 0.5 5.32508 0.5H26.0754C26.4546 0.5 26.6442 0.957631 26.3761 1.22567L22.2771 5.32474C22.1202 5.48164 21.9044 5.57317 21.6756 5.57317H0.925285C0.546104 5.57317 0.356514 5.11554 0.624556 4.8475L4.72362 0.748428Z"
                      fill="url(#paint1_linear_1238_27109)"
                    />
                    <path
                      d="M22.2771 8.3517C22.1202 8.1948 21.9044 8.10327 21.6756 8.10327H0.925285C0.546104 8.10327 0.356514 8.5609 0.624556 8.82894L4.72362 12.928C4.88053 13.0849 5.09627 13.1764 5.32508 13.1764H26.0754C26.4546 13.1764 26.6442 12.7188 26.3761 12.4508L22.2771 8.3517Z"
                      fill="url(#paint2_linear_1238_27109)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1238_27109"
                      x1="24.0931"
                      y1="-1.94873"
                      x2="9.73227"
                      y2="25.5581"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FFA3" />
                      <stop offset="1" stopColor="#DC1FFF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1238_27109"
                      x1="17.8138"
                      y1="-5.22702"
                      x2="3.45291"
                      y2="22.2798"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FFA3" />
                      <stop offset="1" stopColor="#DC1FFF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1238_27109"
                      x1="20.9335"
                      y1="-3.59823"
                      x2="6.5726"
                      y2="23.9086"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FFA3" />
                      <stop offset="1" stopColor="#DC1FFF" />
                    </linearGradient>
                    <clipPath id="clip0_1238_27109">
                      <rect
                        width="26"
                        height="20.3777"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Svg>

              <StyledCoinItemText>solana</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="16" h_m="26" mg_r_m="10">
                <use href={`${sprite}#landing-coin-ethereum`}></use>
              </Svg>

              <StyledCoinItemText>ethereum</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="26" h_m="22" mg_r_m="10">
                <svg viewBox="0 0 26 22">
                  <path
                    d="M19.3122 15.4896L25.4684 12.0852C25.8101 11.9044 26 11.5788 26 11.217V4.40824C26 4.0465 25.8101 3.72093 25.4684 3.54006L19.3122 0.135654C18.9705 -0.0452179 18.5907 -0.0452179 18.2489 0.135654L12.0886 3.54006C11.7468 3.72093 11.557 4.0465 11.557 4.40824V16.5387L7.22363 18.9302L2.8903 16.5387V11.7958L7.22363 9.40431L10.0759 10.9598V7.77245L7.75527 6.50635C7.60338 6.434 7.4135 6.36165 7.22363 6.36165C7.03375 6.36165 6.84388 6.39783 6.69198 6.50635L0.531646 9.91477C0.189873 10.0956 0 10.4212 0 10.783V17.5918C0 17.9535 0.189873 18.2791 0.531646 18.4599L6.68776 21.8643C7.02954 22.0452 7.40928 22.0452 7.75105 21.8643L13.9072 18.4599C14.2489 18.2791 14.4388 17.9535 14.4388 17.5918V5.46131L14.5148 5.42514L18.7764 3.06979L23.1097 5.46131V10.2042L18.7764 12.5917L15.924 11.0362V14.2235L18.2447 15.4896C18.5865 15.6705 18.9662 15.6705 19.3122 15.4896Z"
                    fill="url(#paint0_linear_1238_27121)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1238_27121"
                      x1="-0.0426021"
                      y1="18.2604"
                      x2="24.1143"
                      y2="3.44157"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A726C1" />
                      <stop offset="0.8784" stopColor="#803BDF" />
                      <stop offset="1" stopColor="#7B3FE4" />
                    </linearGradient>
                  </defs>
                </svg>
              </Svg>

              <StyledCoinItemText>polygon</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="26" h_m="26" mg_r_m="10" c="primary">
                <use href={`${sprite}#landing-coin-tron`}></use>
              </Svg>

              <StyledCoinItemText>tron</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="27" h_m="26" mg_r_m="10">
                <use href={`${sprite}#landing-coin-bnb`}></use>
              </Svg>

              <StyledCoinItemText>bnb</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="26" h_m="26" mg_r_m="10">
                <svg viewBox="0 0 26 26">
                  <path
                    d="M23.0551 15.8669C22.058 15.3361 20.9352 15.1823 19.823 15.1465C18.8899 15.1164 17.4977 14.5651 17.4977 13.0001C17.4977 11.834 18.523 10.8956 19.8235 10.8537C20.9356 10.8179 22.0583 10.6639 23.0551 10.1333C23.9504 9.65665 24.694 8.97112 25.2109 8.14559C25.7279 7.32005 26 6.38361 26 5.43036C26 4.47712 25.7278 3.54067 25.2109 2.71515C24.6939 1.88962 23.9504 1.2041 23.055 0.727494C22.1596 0.250885 21.1439 -1.90329e-05 20.11 1.08288e-09C19.0761 1.9035e-05 18.0605 0.250961 17.1651 0.727602C16.2697 1.20424 15.5262 1.88979 15.0093 2.71534C14.4924 3.54088 14.2203 4.47734 14.2203 5.43058C14.2203 6.48271 14.6262 7.45094 15.1441 8.34895C15.5796 9.10423 15.8 10.5061 14.3061 11.3012C13.1948 11.8928 11.808 11.5182 11.1152 10.496C10.5301 9.63268 9.82371 8.82373 8.83476 8.29721C7.93939 7.82059 6.92372 7.56967 5.88984 7.56967C4.85596 7.56966 3.84029 7.82058 2.94492 8.2972C2.04955 8.77381 1.30603 9.45933 0.789089 10.2848C0.272148 11.1104 0 12.0468 0 13C0 13.9533 0.272148 14.8897 0.789089 15.7152C1.30603 16.5407 2.04955 17.2263 2.94492 17.7029C3.84029 18.1795 4.85596 18.4304 5.88984 18.4304C6.92372 18.4304 7.93939 18.1795 8.83476 17.7029C9.82343 17.1765 10.5299 16.3681 11.1146 15.5053C11.5948 14.7968 12.7941 13.8936 14.3061 14.699C15.4156 15.2901 15.7587 16.5851 15.1435 17.6518C14.6257 18.5497 14.2204 19.5177 14.2204 20.5697C14.2204 21.5229 14.4925 22.4593 15.0095 23.2848C15.5264 24.1104 16.2699 24.7959 17.1653 25.2725C18.0606 25.7491 19.0763 26 20.1101 26C21.144 26 22.1597 25.7491 23.055 25.2725C23.9504 24.7959 24.6939 24.1104 25.2108 23.2848C25.7278 22.4593 25.9999 21.5229 25.9999 20.5697C25.9999 19.6165 25.7278 18.68 25.2109 17.8545C24.6939 17.029 23.9504 16.3435 23.0551 15.8669Z"
                    fill="url(#paint0_linear_1238_27136)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1238_27136"
                      x1="7.33252"
                      y1="3.98993"
                      x2="25.2934"
                      y2="23.4705"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00AAE4" />
                      <stop offset="1" stopColor="#006097" />
                    </linearGradient>
                  </defs>
                </svg>
              </Svg>

              <StyledCoinItemText>ripple</StyledCoinItemText>
            </StyledCoinItem>

            <StyledCoinItem>
              <Svg w_m="26" h_m="26" mg_r_m="10">
                <use href={`${sprite}#landing-coin-arbitrum`}></use>
              </Svg>

              <StyledCoinItemText>arbitrum</StyledCoinItemText>
            </StyledCoinItem>
          </StyledCoinList>
        </StyledCoinSection>
      </Container>

      <Container>
        <StyledQuestionSection>
          <StyledSectionSubTitle>
            {t("landing.questions.subTitle")}
          </StyledSectionSubTitle>

          <StyledSectionTitle>{t("landing.questions.title")}</StyledSectionTitle>

          <StyledQuestionArea>
            <QuestionList data={questions} />
          </StyledQuestionArea>
        </StyledQuestionSection>
      </Container>

      <StyledStayAheadSectionWrp>
        <StyledStayAheadVideoWrp>
          <StyledStayAheadVideo
            ref={stayAheadVideoRef}
            autoPlay
            muted
            loop
            playsInline
          >
            <source type="video/mp4" />
          </StyledStayAheadVideo>
        </StyledStayAheadVideoWrp>

        <Container>
          <StyledStayAheadSection>
            <StyledStayAheadSectionContentWrp>
              <StyledStayAheadBlockWrp>
                <StyledSectionSubTitle>
                  {t("landing.stayAhead.subTitle")}
                </StyledSectionSubTitle>

                <StyledSectionTitle>
                  {t("landing.stayAhead.title")}
                </StyledSectionTitle>

                <StyledStayAheadText>
                  {t("landing.stayAhead.text")}
                </StyledStayAheadText>
              </StyledStayAheadBlockWrp>

              <StyledStayAheadBtn
                type="button"
                onClick={handleHeroQuestionBtnClick}
              >
                {t("landing.stayAhead.btn")}
              </StyledStayAheadBtn>
            </StyledStayAheadSectionContentWrp>
          </StyledStayAheadSection>
        </Container>
      </StyledStayAheadSectionWrp>
    </>
  );
};

export default Home;
