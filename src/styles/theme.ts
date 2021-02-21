import {DefaultTheme} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  name: 'Light Theme',
  primaryColor: "#333",
  secondaryColor: "#666",
  backgroundColor: "#fff",
};

export const darkTheme: DefaultTheme = {
  name: 'Dark Theme',
  primaryColor: "#fff",
  secondaryColor: "#cacaca",
  backgroundColor: "#333",
};
