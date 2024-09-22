import { useState } from "react";
import { Svg } from "components/common";
import sprite from "assets/images/sprite.svg";
import {
  StyledQuestionItem,
  StyledQuestionItemContentWrp,
  StyledQuestionItemTitle,
  StyledQuestionItemTextWrp,
  StyledQuestionItemText,
  StyledQuestionItemBtn,
} from "./QuestionListItem.styled";

const QuestionListItem = ({ data }) => {
  const { title, text } = data;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownBtnClick = () => {
    setIsDropdownOpen((currentState) => !currentState);
  };

  return (
    <StyledQuestionItem onClick={handleDropdownBtnClick}>
      <StyledQuestionItemContentWrp>
        <StyledQuestionItemTitle>{title}</StyledQuestionItemTitle>

        <StyledQuestionItemBtn
          type="button"
          style={{
            transform: isDropdownOpen ? "" : "rotate(180deg)",
          }}
        >
          <Svg w_m="20" h_m="20">
            <use href={`${sprite}#landing-tick-btn`}></use>
          </Svg>

          <p className="hidden">tick</p>
        </StyledQuestionItemBtn>
      </StyledQuestionItemContentWrp>

      {isDropdownOpen && (
        <StyledQuestionItemTextWrp>
          <StyledQuestionItemText>{text}</StyledQuestionItemText>
        </StyledQuestionItemTextWrp>
      )}
    </StyledQuestionItem>
  );
};

export default QuestionListItem;
