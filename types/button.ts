import React from "react";

export type ButtonType = "button" | "submit" | "reset";

export type Button = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  type?: ButtonType;
}