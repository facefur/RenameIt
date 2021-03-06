import styled, { css } from "styled-components"

export const InputMargin = "20px"

export const ButtonStyles = css`
  height: 24px;
  background-color: ${props => props.theme.button.bgColor};
  border: 1px solid ${props => props.theme.button.border};
  color: ${props => props.theme.button.color};
  border-radius: 4px;
  padding: 0 12px;
  letter-spacing: -0.07px;

  &:active {
    background-color: ${props => props.theme.button.bgActive};
  }
  &:focus {
    outline: none;
  }
`

export const LabelStyles = css`
  font-size: 14px;
  letter-spacing: -0.08px;
  align-self: center;
`

export const StyledH3 = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.92px;
`

export const Button = styled.button`
  ${ButtonStyles};
`
export const SecondaryButton = styled(Button)`
  font-size: 12px;
  border-radius: 12px;
  font-weight: 500;
  padding: 0 16px;
  color: ${props => props.theme.secondaryButton.textColor};
  border-color: ${props => props.theme.secondaryButton.borderColor};
`

export const SubmitButton = styled(SecondaryButton)`
  border: 0;
  color: ${props => props.theme.CTAButton.textColor};
  background-color: ${props => props.theme.CTAButton.bgColor};
  &:active {
    background-color: ${props => props.theme.CTAButton.bgActive};
  }
`

export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
  button {
    margin-left: 12px;
  }
`
