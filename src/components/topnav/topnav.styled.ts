import styled from 'styled-components';

export const StickyTopNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavHeader = styled.h4`
  color: ${({ theme }) => theme.text};
  margin: 0;
  margin-right: 50px;
  cursor: pointer;
  font-family: 'Anonymous Pro', monospace !important;
  padding: 0.4rem;
  border: 1px solid ${({ theme }) => theme.text};

  &:hover{
    color: ${({ theme }) => theme.toggleColor};
    border-color: ${({ theme }) => theme.toggleColor};
    transition: 0.2s all linear;
  }
`;