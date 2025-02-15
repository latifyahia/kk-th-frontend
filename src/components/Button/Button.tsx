import { FC, JSX } from 'react';
import { IButtonProps } from './ButtonTypes';
import { Button as MUIButton } from '@mui/material';

/**
 * Button component that renders a Material-UI Button with custom styles.
 *
 * @param text - The text to display inside the button.
 * @param textColour - The color of the text inside the button.
 * @param backgroundColour - The background color of the button.
 *
 * @returns The rendered Material-UI Button component.
 */
const Button: FC<IButtonProps> = ({
  text,
  textColour,
  backgroundColour,
}: IButtonProps): JSX.Element => {
  return (
    <MUIButton
      className="custom-btn"
      sx={{
        color: textColour,
        backgroundColor: backgroundColour,
        border:
          backgroundColour === 'white'
            ? `1.5px solid ${textColour}`
            : `1.5px solid ${backgroundColour}`,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
