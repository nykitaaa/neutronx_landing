import QuestionListItem from 'components/landing/QuestionListItem';

const QuestionList = ({ data }) => {
  return (
    <ul>
      {data.map(el => (
        <QuestionListItem key={el.id} data={el} />
      ))}
    </ul>
  );
};

export default QuestionList;
