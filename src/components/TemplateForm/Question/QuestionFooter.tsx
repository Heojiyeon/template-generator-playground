import { FormLabel, Switch } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function QuestionFooter() {
  return (
    <QuestionFooterContainer>
      <div>
        <FormLabel htmlFor="question-required" mb="0">
          필수
        </FormLabel>
        <Switch id="question-required" />
      </div>
      <div>
        <FormLabel htmlFor="question-removed" mb="0">
          삭제
        </FormLabel>
        <FaRegTrashCan id="question-removed" />
      </div>
    </QuestionFooterContainer>
  );
}

const QuestionFooterContainer = styled('div')`
  display: flex;
`;
