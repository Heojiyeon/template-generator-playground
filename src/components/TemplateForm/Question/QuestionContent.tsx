import styled from '@emotion/styled';

export default function QuestionContent() {
  return (
    <QuestionContentContainer>
      <label htmlFor="question-title">문항 제목</label>
      <input
        id="question-title"
        placeholder="문항 제목을 적어주세요. (최대 50자)"
      />
      <label htmlFor="question-description">문항 설명</label>
      <input
        id="question-description"
        placeholder="문항 설명을 적어주세요. (생략가능)"
      />
    </QuestionContentContainer>
  );
}

const QuestionContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
