import { MouseEvent } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  imgSrc?: string | undefined;
  type?: ButtonType;
  name: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  isRed?: boolean;
}
