import styled from "styled-components";

const UiContainer = styled.div`
  width: 100%;
  max-width: 1235px;
  margin: 0 auto;
`;

const UiHero = styled.section`
  display: flex;
  width: 100%;
  background-color: #fff5eb;
  background-image: url("/image/children.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  border-radius: 20px;
  min-height: 560px;
`;

const UiHeroContent = styled.div`
  width: 53%;
  padding: 50px 0px 90px 35px;
`;

const UiHeroTitle = styled.h1`
  font-weight: 600;
  font-size: 60px;
  line-height: 68px;
  margin: 0 0 40px;
`;

const UiHeroDesc = styled.p`
  width: 100%;
  max-width: 477px;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin: 0 0 44px;
`;

const UiHeroBtn = styled.button`
  background-color: #3f2aff;
  min-height: 56px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  min-width: 209px;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  :hover {
    background-color: #000;
  }
`;

export const Hero = () => {
  return (
    <UiContainer>
      <UiHero>
        <UiHeroContent>
          <UiHeroTitle>Английский для детей от 5 до 10 лет</UiHeroTitle>
          <UiHeroDesc>Занятия проходят по уникальной методике, которая помогает детям в первую очередь заговорить на английском.</UiHeroDesc>
          <UiHeroBtn>Записаться</UiHeroBtn>
        </UiHeroContent>
      </UiHero>
    </UiContainer>
  );
};
