import React from "react";
import styled from "styled-components/macro";

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;
`;

export default Logo;
