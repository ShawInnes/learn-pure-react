import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import {darkTheme, lightTheme} from "../src/styles/theme";

const themes = [lightTheme, darkTheme];
addDecorator(withThemesProvider(themes));
