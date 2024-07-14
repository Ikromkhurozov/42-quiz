export const font = (fontSize, lineHeight, fontWeight, color) => `
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
  color: ${color};
`;

export const scroll = () => `
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
  }

  &::-webkit-scrollbar-thumb {
    background: #888888;
    height: 80px;
    border-radius: 25px;
  }
`;