import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  background-color: #24a000;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchContainer = styled.div`
  position: relative;
  background: #f2f2f2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  border: 1px solid transparent;

  &:focus {
    border-color: rgba(0, 0, 0, 0);
  }
`;

export const SearchButton = styled.button`
  position: relative;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &:hover {
    color: #white;

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.4rem;
  span {
    font-weight: 400;
    color: #ffd700;
  }  
`;