import { ThemeProvider } from "styled-components";
import { addons } from "@storybook/addons";
import theme from "../src/theme";

import "story.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

addons.setConfig({
  showRoots: true,
});
