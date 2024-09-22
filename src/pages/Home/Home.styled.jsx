import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mq } from "utils";

export const StyledHeroVideoWrp = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  z-index: -1;
  overflow: hidden;

  ${mq.tablet} {
    top: 0;
  }
`;

export const StyledHeroVideo = styled.video`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center right;

  height: 320px;

  ${mq.tablet} {
    height: 616px;
  }

  ${mq.desktop} {
    height: 900px;
  }

  @media screen and (min-width: 1460px) {
    height: 1000px;
    object-position: center bottom;
  }
`;

export const StyledHeroSection = styled.section`
  position: relative;

  ${mq.smallMobile} {
    padding: 270px 18px 60px;
  }

  ${mq.mobile} {
    padding: 270px 38px 60px;
  }

  ${mq.tablet} {
    height: 616px;
    padding: 72px 32px;
  }

  ${mq.desktop} {
    height: 710px;
    padding: 140px 124px 80px;
  }

  @media screen and (min-width: 1460px) {
    height: 810px;
  }
`;

export const StyledHeroBlockWrp = styled.div`
  ${mq.mobile} {
    width: 316px;
  }

  ${mq.tablet} {
    width: 426px;
  }

  ${mq.desktop} {
    width: 680px;
  }
`;

export const StyledHeroTitle = styled.h1`
  margin-bottom: 20px;

  font-size: 40px;
  font-weight: 500;
  line-height: 120%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 12px;

    color: #ffffff;
  }

  ${mq.desktop} {
    margin-bottom: 20px;

    font-size: 60px;
  }
`;

export const StyledHeroText = styled.p`
  margin-bottom: 30px;

  font-size: 18px;
  font-weight: 500;
  line-height: 150%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    font-size: 20px;

    color: #ffffff;
  }

  ${mq.desktop} {
    margin-bottom: 40px;
  }
`;

export const StyledHeroBtn = styled.button`
  width: 100%;
  height: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: 120%;

  background: var(--button-primary-color);
  color: var(--button-primary-text-color);

  border: none;
  border-radius: 99px;

  ${mq.tablet} {
    width: 240px;

    color: #000000;
    background: #ffffff;
  }
`;

export const StyledSectionAboutUsWrp = styled.div`
  position: relative;
`;

export const StyledStatisticListWrp = styled.div`
  width: 316px;
  margin: 0 auto;
  padding: 16px 28px;

  background: var(--background-landing-mobile-statistic-list-color);
  border-radius: 18px;

  ${mq.tablet} {
    width: 100%;
    position: absolute;
    top: -20%;
    left: 0;
    transform: none;

    margin: 0 auto;
    padding: 0;

    background: var(--background-landing-statistic-list-color);
    border-radius: 0;
  }

  ${mq.desktop} {
    top: 0%;
  }
`;

export const StyledStatisticList = styled.ul`
  display: flex;
  width: 316px;
  flex-wrap: wrap;

  margin: -7px -25px;

  ${mq.tablet} {
    width: 760px;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding: 0px 32px;
  }

  ${mq.desktop} {
    width: 1440px;
    padding: 0px 124px;
  }
`;

export const StyledStatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  margin: 7px 25px;

  ${mq.tablet} {
    margin: 0;
  }
`;

export const StyledStatisticValue = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 150%;

  color: #ffffff;

  ${mq.tablet} {
    color: var(--text-primary-color);
  }

  ${mq.desktop} {
    font-size: 40px;
  }
`;

export const StyledStatisticText = styled.p`
  line-height: 150%;

  color: #ffffff;

  ${mq.tablet} {
    font-size: 12px;

    color: var(--text-primary-color);
  }

  ${mq.desktop} {
    font-size: 16px;
  }
`;

export const StyledAboutUsSection = styled.section`
  ${mq.smallMobile} {
    padding: 60px 18px 60px;
  }

  ${mq.mobile} {
    padding: 60px 38px 60px;
  }

  ${mq.tablet} {
    display: flex;
    align-items: center;

    padding: 30px 32px 80px;
  }

  ${mq.desktop} {
    padding: 220px 124px 160px;
  }
`;

export const StyledAboutUsBlockWrp = styled.div`
  position: relative;

  ${mq.tablet} {
    width: ${({ w }) => (w ? `${w}%` : "")};
    margin-right: ${({ mg_r_t }) => (mg_r_t ? `${mg_r_t}px` : "")};
  }

  ${mq.desktop} {
    margin-right: ${({ mg_r_d }) => (mg_r_d ? `${mg_r_d}px` : "")};
  }
`;

export const StyledAboutUsText = styled.p`
  margin-bottom: ${({ mg_b_m }) => (mg_b_m ? `${mg_b_m}px` : "")};

  text-align: justify;
  font-size: 16px;
  line-height: 150%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 0;

    margin-bottom: ${({ mg_b_t }) => (mg_b_t ? `${mg_b_t}px` : "")};
  }
`;

export const StyledAboutUsCircleOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 252px;
  height: 252px;

  background-image: var(--background-landing-about-us-circle-outer-color),
    var(--border-landing-about-us-circle-outer-color);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: double 1px transparent;
  border-radius: 252px;

  ${mq.tablet} {
    width: 262px;
    height: 262px;

    border-radius: 262px;
  }

  ${mq.desktop} {
    width: 454px;
    height: 454px;

    border-radius: 454px;
  }
`;

export const StyledAboutUsCircleMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;

  background-image: var(--background-landing-about-us-circle-middle-color),
    var(--border-landing-about-us-circle-middle-color);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: double 1px transparent;
  border-radius: 200px;
  box-shadow: 11.202px 11.202px 56.012px 0px rgba(0, 0, 0, 0.7);

  ${mq.tablet} {
    width: 208px;
    height: 208px;

    border-radius: 208px;
  }

  ${mq.desktop} {
    width: 362px;
    height: 362px;

    border-radius: 362px;
  }
`;

export const StyledAboutUsCircleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 144px;

  border-radius: 144px;

  ${mq.tablet} {
    width: 150px;
    height: 150px;

    border-radius: 260px;
  }

  ${mq.desktop} {
    width: 260px;
    height: 260px;

    border-radius: 260px;
  }

  background-image: var(--background-landing-about-us-circle-inner-color),
    var(--border-landing-about-us-circle-inner-color);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: double 1px transparent;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.7);
`;

export const StyledAboutUsBenefitList = styled.ul`
  position: absolute;
  display: inline-block;

  ${mq.smallMobile} {
    bottom: 10%;
    left: 44%;
  }

  ${mq.mobile} {
    bottom: 12%;
    left: 54%;
  }

  ${mq.tablet} {
    top: 29%;
    left: 74%;
  }

  ${mq.desktop} {
    top: 32%;
    left: 73%;
  }
`;

export const StyledAboutUsBenefitItem = styled.li`
  display: inline-flex;
  align-items: center;

  border-radius: 99px;
  border: 1px solid #645c70;

  background-image: var(--background-landing-about-us-benefit-list-item-color),
    var(--border-landing-about-us-benefit-list-item-color);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: double 1px transparent;

  padding: 4px 10px;

  :nth-of-type(2) {
    margin-left: 32px;
  }

  :nth-of-type(3) {
    margin-left: 40px;
  }

  :nth-of-type(4) {
    margin-left: 28px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  ${mq.desktop} {
    padding: 12px 10px;

    :nth-of-type(2) {
      margin-left: 52px;
    }

    :nth-of-type(3) {
      margin-left: 74px;
    }

    :nth-of-type(4) {
      margin-left: 50px;
    }

    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const StyledAboutUsBenefitText = styled.p`
  font-weight: 500;
  line-height: 120%;

  color: #ffffff;

  ${mq.tablet} {
    font-size: 12px;
  }

  ${mq.desktop} {
    font-size: 20px;
  }
`;

export const StyledProductSection = styled.section`
  ${mq.smallMobile} {
    padding: 0 18px;
  }

  ${mq.mobile} {
    padding: 0 38px;
  }

  ${mq.tablet} {
    padding: 0 32px;
  }

  ${mq.desktop} {
    padding: 0 124px;
  }
`;

export const StyledProductList = styled.ul``;

export const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column-reverse;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  ${mq.tablet} {
    flex-direction: row;

    :nth-of-type(2n) {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  ${mq.desktop} {
    align-items: center;
  }
`;

export const StyledProductItemContentWrp = styled.div`
  ${mq.tablet} {
    width: 50%;
  }
`;

export const StyledProductItemTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 500;
  line-height: 120%;

  color: var(--text-primary-color);
`;

export const StyledProductItemText = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 150%;
  text-align: justify;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 30px;
  }

  ${mq.desktop} {
    margin-bottom: 40px;
  }
`;

export const StyledProductItemNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: 120%;

  color: var(--text-primary-color);
  background: transparent;
  border: 1px solid var(--border-landing-product-link-color);
  border-radius: 99px;

  ${mq.tablet} {
    width: 240px;
  }
`;

export const StyledProductItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  font-size: 16px;
  font-weight: 600;
  line-height: 120%;

  color: var(--text-primary-color);
  background: transparent;
  border: 1px solid var(--border-landing-product-link-color);
  border-radius: 99px;

  ${mq.tablet} {
    width: 240px;
  }
`;

export const StyledProductItemImgWrp = styled.div`
  position: relative;

  ${mq.tablet} {
    width: 50%;
  }

  ${mq.desktop} {
    height: 415px;
  }
`;

export const StyledProductItemImg = styled.img`
  width: 100%;
`;

export const StyledCoinSection = styled.section`
  ${mq.smallMobile} {
    padding: 72px 18px;
  }

  ${mq.mobile} {
    padding: 72px 38px;
  }

  ${mq.tablet} {
    padding: 80px 32px 80px;
  }

  ${mq.desktop} {
    padding: 160px 26px 160px 26px;
  }
`;

export const StyledCoinList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -12px;

  ${mq.tablet} {
    margin: -24px;
  }

  ${mq.desktop} {
    margin: -40px -60px;
  }
`;

export const StyledCoinItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 40px;
  margin: 6px;

  background: transparent;
  border-radius: 99px;
  border: 0.5px solid var(--border-landing-coin-list-item-color);

  ${mq.tablet} {
    width: 124px;
    height: 36px;
    margin: 12px;
  }

  ${mq.desktop} {
    width: 228px;
    height: 50px;
    margin: 20px 30px;
  }
`;

export const StyledCoinItemText = styled.p`
  font-size: 12px;
  font-weight: 500;

  color: var(--text-primary-color);

  ${mq.tablet} {
    font-size: 14px;
  }

  ${mq.desktop} {
    font-size: 18px;
  }
`;

export const StyledQuestionSection = styled.section`
  ${mq.smallMobile} {
    padding: 0 18px 0;
  }

  ${mq.mobile} {
    padding: 0 38px 0;
  }

  ${mq.tablet} {
    padding: 0 32px 180px;
  }

  ${mq.desktop} {
    padding: 80px 124px;
  }
`;

export const StyledQuestionArea = styled.div`
  width: 100%;
  padding: 32px 10px;

  background: var(--background-landing-question-area-color);
  border-radius: 18px;

  ${mq.tablet} {
    padding: 60px 36px;
  }

  ${mq.desktop} {
    padding: 80px 204px 70px 204px;
  }
`;

export const StyledStayAheadSectionWrp = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${mq.tablet} {
    display: block;
    position: relative;
    height: 475px;
  }

  ${mq.desktop} {
    height: 900px;
  }
`;

export const StyledStayAheadVideoWrp = styled.div`
  width: 100%;
  z-index: -1;
  overflow: hidden;

  ${mq.tablet} {
    position: absolute;
    top: 20%;
    left: 0;
  }
`;

export const StyledStayAheadVideo = styled.video`
  display: block;
  width: 100%;
  height: 278px;
  object-fit: cover;
  object-position: center bottom;

  ${mq.tablet} {
    height: 475px;
  }

  ${mq.desktop} {
    height: 900px;
  }
`;

export const StyledStayAheadSection = styled.section`
  ${mq.smallMobile} {
    padding: 60px 18px 20px;
  }

  ${mq.mobile} {
    padding: 60px 38px 20px;
  }

  ${mq.tablet} {
    height: 150px;
    padding: 0 32px;
  }

  ${mq.desktop} {
    padding: 0 124px;
  }
`;

export const StyledStayAheadSectionContentWrp = styled.div`
  ${mq.tablet} {
    position: absolute;
    top: -74%;

    display: flex;
    align-items: center;
  }

  ${mq.desktop} {
    top: 80%;

    align-items: flex-end;
  }
`;

export const StyledStayAheadBlockWrp = styled.div`
  ${mq.smallMobile} {
    width: 280px;
  }

  ${mq.mobile} {
    width: 316px;
  }

  ${mq.tablet} {
    width: 336px;
    margin-right: 124px;
  }

  ${mq.desktop} {
    width: 582px;
    margin-right: 234px;
  }
`;

export const StyledStayAheadText = styled.p`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 150%;
  text-align: justify;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 0;
  }
`;

export const StyledStayAheadBtn = styled.button`
  display: flex;
  width: 100%;

  height: 60px;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 120%;

  color: var(--button-primary-text-color);
  background: var(--button-primary-color);
  border: none;
  border-radius: 99px;

  ${mq.tablet} {
    width: 240px;
  }
`;

export const StyledSectionSubTitle = styled.p`
  margin-bottom: 6px;

  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;

  color: var(--text-secondary-color);
`;

export const StyledSectionTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 36px;
  font-weight: 500;
  line-height: 120%;

  color: var(--text-primary-color);

  ${mq.desktop} {
    margin-bottom: 30px;

    font-size: 40px;
  }
`;

export const StyledSphere = styled.div`
  position: absolute;
  z-index: ${({ z }) => (z ? z : "")};

  pointer-events: none;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  top: ${({ t_m }) => (t_m ? `${t_m}%` : "")};
  left: ${({ l_m }) => (l_m ? `${l_m}%` : "")};

  width: ${({ w_m }) => (w_m ? `${w_m}px` : "")};
  height: ${({ h_m }) => (h_m ? `${h_m}px` : "")};

  border-radius: ${({ br_m }) => (br_m ? `${br_m}px` : "")};
  background: var(--background-sphere-color);
  filter: ${({ f_m }) => (f_m ? `blur(${f_m}px)` : "")};

  ${mq.tablet} {
    top: ${({ t_t }) => (t_t ? `${t_t}%` : "")};
    left: ${({ l_t }) => (l_t ? `${l_t}%` : "")};

    width: ${({ w_t }) => (w_t ? `${w_t}px` : "")};
    height: ${({ h_t }) => (h_t ? `${h_t}px` : "")};

    border-radius: ${({ br_t }) => (br_t ? `${br_t}px` : "")};
    background: var(--background-sphere-color);
    filter: ${({ f_t }) => (f_t ? `blur(${f_t}px)` : "")};
  }

  ${mq.desktop} {
    top: ${({ t_d }) => (t_d ? `${t_d}%` : "")};
    left: ${({ l_d }) => (l_d ? `${l_d}%` : "")};

    width: ${({ w_d }) => (w_d ? `${w_d}px` : "")};
    height: ${({ h_d }) => (h_d ? `${h_d}px` : "")};

    border-radius: ${({ br_d }) => (br_d ? `${br_d}px` : "")};
    background: var(--background-sphere-color);
    filter: ${({ f_d }) => (f_d ? `blur(${f_d}px)` : "")};
  }
`;
