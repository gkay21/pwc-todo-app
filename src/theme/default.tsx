import { ThemeFontConfig, ThemeColorConfig } from ".";

const DefaultThemeColorConfig: ThemeColorConfig = {
  Black: "#111111",
  White: "#FFFFFF",
  LightGrey: "#f2f3f8",
  Grey: "#83878e",
  DarkGrey: "#343434",
  Silver: "#DDDDDD",
  Navy: "#001f3f",
  Blue: "#0074D9",
  Aqua: "#7FDBFF",
  Teal: "#39CCCC",
  Olive: "#3D9970",
  Green: "#2ECC40",
  Lime: "#01FF70",
  Yellow: "#FFDC00",
  Orange: "#FF851B",
  Pink: "#F8D7DA",
  Red: "#FF4136",
  Burgundy: "#721C24",
  Maroon: "#85144b",
  Fuchsia: "#F012BE",
  Purple: "#B10DC9",
};

const System = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;

const DefaultThemeFontConfig: ThemeFontConfig = {
  System: System,
  Header: `"Raleway",${System}`,
  Body: `"Lato",${System}`,
  Emphasis: `"Great Vibes", cursive`,
};

export { DefaultThemeColorConfig, DefaultThemeFontConfig };
