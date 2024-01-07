import React from "react";
import styled from "styled-components";

interface SearchInputProps {
  onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <StyledInput
      placeholder="Enter summoner name"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;


  const StyledInput = styled.input`
  font-size: 14px;
  border-radius: 6px;
  line-height: 1.5;
  padding: 5px 10px;
  transition: box-shadow 100ms ease-in, border 100ms ease-in,
    background-color 100ms ease-in;
  border: 2px solid #dee1e2;
  color: rgb(14, 14, 16);
  background: #dee1e2;
  height: 36px;
  :hover {
    border-color: #ccc;
  }
  :focus {
    border-color: #9147ff;
    background: #fff;
  }
`;