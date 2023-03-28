import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const UiContainer = styled.div`
  width: 100%;
  max-width: 1235px;
  margin: 0 auto;
`;

const UiNav = styled.section`
  display: flex;
  width: 100%;
  min-height: 96px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 35px;
`;

const UiNavLogo = styled.a`
  cursor: pointer;
`;

const UiNavNav = styled.nav`
  display: flex;
`;

const UiNavList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 36px;
`;

const UiNavListItem = styled.li`
  cursor: pointer;
`;

const UiNavListItemAuth = styled.li`
  margin: 0 0px 0 28px;
  cursor: pointer;
`;

export const Nav = () => {
  return (
    <UiContainer>
      <UiNav>
        <UiNavLogo>
          <Image src="/logo.svg" alt="logo" width={108} height={24} />
        </UiNavLogo>

        <UiNavNav>
          <UiNavList>
            <UiNavListItem>
              <Link href="/">О методике</Link>
            </UiNavListItem>

            <UiNavListItem>
              <Link href="/">Форматы</Link>
            </UiNavListItem>

            <UiNavListItem>
              <Link href="/">Отзывы</Link>
            </UiNavListItem>

            <UiNavListItemAuth>
              <Link href="/">Войти</Link>
            </UiNavListItemAuth>
          </UiNavList>
        </UiNavNav>
      </UiNav>
    </UiContainer>
  );
};
