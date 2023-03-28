import styled from "styled-components";

const UiContainer = styled.div`
  width: 100%;
  max-width: 1235px;
  margin: 0 auto;
`;

const UiWhatWeTeach = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 103px 0px 60px;
  padding: 0px 35px;
`;

const UiWhatWeTeachTitle = styled.h2`
  font-weight: 600;
  font-size: 52px;
  margin: 0 0 60px;
`;

const UiWhatWeTeachList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  list-style: none;
`;

const UiWhatWeTeachListItem = styled.li``;

const UiWhatWeTeachListNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  min-width: 36px;
  height: 24px;
  border: 1px solid #000;
  border-radius: 20px;
  margin: 0 0 16px;
`;

const UiWhatWeTeachListTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 16px;
`;

const UiWhatWeTeachListDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const WhatWeTeach = () => {
  return (
    <UiContainer>
      <UiWhatWeTeach>
        <UiWhatWeTeachTitle>Чему мы учим</UiWhatWeTeachTitle>
        <UiWhatWeTeachList>
          <UiWhatWeTeachListItem>
            <UiWhatWeTeachListNumber>1</UiWhatWeTeachListNumber>
            <UiWhatWeTeachListTitle>Говорить по-английски</UiWhatWeTeachListTitle>
            <UiWhatWeTeachListDesc>Мы учим говорить по-английски, а не вставлять пропущенные буквы в непонятные предложения.</UiWhatWeTeachListDesc>
          </UiWhatWeTeachListItem>

          <UiWhatWeTeachListItem>
            <UiWhatWeTeachListNumber>2</UiWhatWeTeachListNumber>
            <UiWhatWeTeachListTitle>Высказывать свои мысли</UiWhatWeTeachListTitle>
            <UiWhatWeTeachListDesc>Мы учим выражать свои мысли и желания средствами другого языка, а не бессмысленно зазубривать чужие тексты.</UiWhatWeTeachListDesc>
          </UiWhatWeTeachListItem>

          <UiWhatWeTeachListItem>
            <UiWhatWeTeachListNumber>3</UiWhatWeTeachListNumber>
            <UiWhatWeTeachListTitle>Разговаривать предложениями</UiWhatWeTeachListTitle>
            <UiWhatWeTeachListDesc>Мы с первых уроков учим детей строить свою речь из предложений, а не заучивать отдельные слова, мертвым грузом лежащие в памяти.</UiWhatWeTeachListDesc>
          </UiWhatWeTeachListItem>
        </UiWhatWeTeachList>
      </UiWhatWeTeach>
    </UiContainer>
  );
};
