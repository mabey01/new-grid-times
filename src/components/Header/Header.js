import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import { format } from "date-fns";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainNav>
          <Search size={24} />
          <Menu size={24} />
        </MainNav>
        <Logo />
        <TodaysDate>{format(new Date(), "EEEE, MMMM do, yyyy")}</TodaysDate>
        <SubscribeButton>Subscribe</SubscribeButton>
        <AlreadySubscribedButton>Already a subscriber?</AlreadySubscribedButton>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr;

  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: auto 1fr auto;

    justify-content: space-between;
    align-items: baseline;
  }
`;

const MainNav = styled.nav`
  display: none;
  & > * {
    margin-right: 16px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const TodaysDate = styled.p`
  justify-self: center;

  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;

  @media ${QUERIES.desktopAndUp} {
    grid-column: 2;
    grid-row: 2;
  }
`;

const SubscribeButton = styled(Button)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const AlreadySubscribedButton = styled.a`
  display: none;

  font-family: "Crimson Text";

  font-style: italic;
  font-size: 0.875rem;

  text-decoration: underline;
  color: var(--color-gray-900);

  @media ${QUERIES.desktopAndUp} {
    display: block;

    justify-self: center;
    grid-column: -1 / -2;
    grid-row: 2;
  }
`;

export default Header;
