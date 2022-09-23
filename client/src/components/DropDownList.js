import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropDownList = () => {
  const themeState = useSelector((state) => state.themeSlice).theme;

  const [isOpen, setIsOpen] = useState(false);
  const [seleted, setSelected] = useState('자바');

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <>
      <DropDownWrapper onClick={handleClick}>
        <StyledUl themeState={themeState}>
          <li>{`${seleted}`}</li>
          <FontAwesomeIcon icon={faAngleDown} />
        </StyledUl>
        {isOpen ? (
          <>
            <StyledUl active themeState={themeState}>
              <li onClick={handleSelect}>자바</li>
              <li onClick={handleSelect}>자바스크립트</li>
              <li onClick={handleSelect}>리액트</li>
              <li onClick={handleSelect}>스프링</li>
              <li onClick={handleSelect}>자료구조</li>
              <li onClick={handleSelect}>알고리즘</li>
              <li onClick={handleSelect}>운영체제</li>
              <li onClick={handleSelect}>데이터베이스</li>
              <li onClick={handleSelect}>네트워크</li>
            </StyledUl>
          </>
        ) : (
          <></>
        )}
      </DropDownWrapper>
    </>
  );
};

const DropDownWrapper = styled.div`
  position: relative;
  max-width: 20rem;
  height: 4rem;
  font-size: 1.8rem;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.themeState === 'light' ? 'var(--color-orange)' : 'var(--color-gray)'};
  border-radius: 1rem;
  cursor: pointer;

  ${(props) => {
    if (props.active) {
      return css`
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 4rem;
        height: fit-content;
        border-top: ${(props) =>
          props.themeState === 'light'
            ? '0.1rem solid #d2d2d2'
            : '0.1rem solid var(--color-gray)'};

        & li {
          display: flex;
          align-items: center;
          width: 100%;
          height: 2rem;
          padding-top: 0.1rem;
          margin: 0.3rem 0;
          border-radius: 0.3rem;
        }

        & li:hover {
          background-color: ${(props) =>
            props.themeState === 'light'
              ? 'var(--color-yellow)'
              : 'var(--color-gray)'};
          color: ${(props) =>
            props.themeState === 'light'
              ? 'var(--color-black)'
              : 'var(--color-white)'};
        }
      `;
    }
  }}
`;

export default DropDownList;