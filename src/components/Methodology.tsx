import styled from "styled-components";
import Image from "next/image";

const UiContainer = styled.div`
  width: 100%;
  max-width: 1235px;
  margin: 0 auto;
`;

const UiMethodology = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e2dfff;
  background-image: url("/image/figures.png");
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 20px;
  padding: 60px 35px;
  margin: 0 0 84px;
`;

const UiMethodologyContent = styled.div`
  width: 100%;
  max-width: 55%;
`;

const UiMethodologyTitle = styled.h2`
  font-weight: 600;
  font-size: 52px;
  line-height: 60px;
  margin: 0 0 60px;
`;

const UiMethodologyDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const UiMethodologyList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  list-style: none;
  gap: 8px;
  margin: 60px 0px 62px;
`;

const UiMethodologyListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 32px 40px;
  background-color: #fff;
  border-radius: 20px;
`;

const UiMethodologyListItemImg = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 24px;
`;

const UiMethodologyListItemTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 16px;
`;

const UiMethodologyDescBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 87%;
  gap: 20px;
`;

const UiMethodologyListItemDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const UiMethodologyTextBlock = styled.div`
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
`;

const UiMethodologyText = styled.div``;

const UiMethodologyTextPurple = styled.div`
  color: #3f2aff;
`;

export const Methodology = () => {
  return (
    <UiContainer>
      <UiMethodology>
        <UiMethodologyContent>
          <UiMethodologyTitle>Инструменты методики</UiMethodologyTitle>

          <UiMethodologyDescBlock>
            <UiMethodologyDesc>
              В родном языке каждое понятие у нас ассоциируется с целой гаммой звуков, запахов, ощущений, воспоминаний. Однако, стараясь расширить лексикон детей иностранными словами, им обычно предлагают только такую бедную и сухую ассоциацию, как последовательность букв или, в лучшем случае,
              цветную картинку.
            </UiMethodologyDesc>

            <UiMethodologyDesc>Но у нас, у взрослых и тем более у детей много разных видов памяти и каналов восприятия! Мы решили попробовать задействовать их все! И вот что у нас получилось:</UiMethodologyDesc>
          </UiMethodologyDescBlock>
        </UiMethodologyContent>

        <UiMethodologyList>
          <UiMethodologyListItem>
            <UiMethodologyListItemImg>
              <Image src="/bubbles.svg" alt="icon" width={164} height={120} />
            </UiMethodologyListItemImg>

            <UiMethodologyListItemTitle>Разминки</UiMethodologyListItemTitle>

            <UiMethodologyListItemDesc>для моторно-двигательной памяти</UiMethodologyListItemDesc>
          </UiMethodologyListItem>

          <UiMethodologyListItem>
            <UiMethodologyListItemImg>
              <Image src="/piano.svg" alt="icon" width={100} height={100} />
            </UiMethodologyListItemImg>

            <UiMethodologyListItemTitle>Песенки и аудио-уроки</UiMethodologyListItemTitle>

            <UiMethodologyListItemDesc>для слуховой памяти</UiMethodologyListItemDesc>
          </UiMethodologyListItem>

          <UiMethodologyListItem>
            <UiMethodologyListItemImg>
              <Image src="/cards.svg" alt="icon" width={110} height={87} />
            </UiMethodologyListItemImg>

            <UiMethodologyListItemTitle>Мнемокарточки</UiMethodologyListItemTitle>

            <UiMethodologyListItemDesc>для зрительной и ассоциативной памяти</UiMethodologyListItemDesc>
          </UiMethodologyListItem>

          <UiMethodologyListItem>
            <UiMethodologyListItemImg>
              <Image src="/cup.svg" alt="icon" width={120} height={120} />
            </UiMethodologyListItemImg>

            <UiMethodologyListItemTitle>Игры</UiMethodologyListItemTitle>

            <UiMethodologyListItemDesc>для эмоциональной памяти</UiMethodologyListItemDesc>
          </UiMethodologyListItem>
        </UiMethodologyList>

        <UiMethodologyTextBlock>
          <UiMethodologyText> Каждая деталь выполняет свою функцию,</UiMethodologyText>
          
          <UiMethodologyTextPurple>и все вместе они работают на общий результат!</UiMethodologyTextPurple>
        </UiMethodologyTextBlock>
      </UiMethodology>
    </UiContainer>
  );
};
