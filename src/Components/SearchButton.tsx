import React from "react";
import styled from "styled-components";

interface SearchButtonProps {
  searchPlayer: () => void; // Update the prop type
}

const SearchButton: React.FC<SearchButtonProps> = ({ searchPlayer }) => {
  return <StyledButton onClick={searchPlayer}>Search</StyledButton>;
};

const StyledButton = styled.div`
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;
export default SearchButton;
