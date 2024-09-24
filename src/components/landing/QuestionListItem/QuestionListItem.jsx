import { useState } from "react";
import { Svg } from "components/common";
import sprite from "assets/images/sprite.svg";
import {
  StyledWrp,
  StyledContentWrp,
  StyledTitle,
  StyledTextWrp,
  StyledText,
  StyledBtn,
} from "./QuestionListItem.styled";

const QuestionListItem = ({ data }) => {
  const { title, text } = data;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownBtnClick = () => {
    setIsDropdownOpen((currentState) => !currentState);
  };

  return (
    <StyledWrp onClick={handleDropdownBtnClick}>
      <StyledContentWrp>
        <StyledTitle>{title}</StyledTitle>

        <StyledBtn
          type="button"
          style={{
            transform: isDropdownOpen ? "" : "rotate(180deg)",
          }}
        >
          <Svg w_m="20" h_m="20">
            <use href={`${sprite}#landing-tick-btn`}></use>
          </Svg>

          <p className="hidden">tick</p>
        </StyledBtn>
      </StyledContentWrp>

      {isDropdownOpen && (
        <StyledTextWrp>
          <StyledText>{text}</StyledText>
        </StyledTextWrp>
      )}
    </StyledWrp>
  );
};

export default QuestionListItem;
