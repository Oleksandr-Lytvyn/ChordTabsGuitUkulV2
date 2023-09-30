import styled from 'styled-components';

export const StyledChordGuitarWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background: #f0e9c6;
  transform: scale(2) translateX(30%);
`;

export const StyledChordGuitar = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(#161515, transparent 3px),
    linear-gradient(90deg, #100f0f, transparent 1px);
  background-size: 16.6px 25px;
  background-position: 8px 0;
  display: flex;
  justify-content: space-between;
  ${props => props.r === 'horizontal' && 'rotate: -90deg;'}
`;
