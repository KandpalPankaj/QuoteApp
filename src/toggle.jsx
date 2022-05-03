import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3.5rem;
  img {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ DarkMode }) =>
        DarkMode ? "translateY(0)" : "translateY(100px)"};
    }
    &:nth-child(2) {
      transform: ${({ DarkMode }) =>
        DarkMode ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  return (
    <ToggleContainer DarkMode={isDark} onClick={toggleTheme}>
      <img src="https://th.bing.com/th/id/R.93a62e3e30b33dfa6257fcbfb1b7f857?rik=eUQivekfn2D%2fzg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-sun-gif%2ftransparent-sun-gif-17.png&ehk=3ucTFNTtcVuoMi27tE34KnsIAY9DjK0Xgj4KFEFhOtw%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <img src="https://th.bing.com/th/id/R.06faa4aa337a3ef8fa8209863c1c1fdc?rik=59nIUk2yjaBn2Q&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fHalf-Moon-PNG-Pic.png&ehk=07BOMobDt6zJ4EKWJJn%2fhBN8u2FaAmFz1SmiTi0jKdY%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;