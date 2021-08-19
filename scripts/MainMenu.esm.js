import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";

const START_SCREEN_GAME_BUTTON_ID = "js-start-game";
const START_SCREEN_ID = "js-start-screen";
const START_SCREEN_SETTINGS_BUTTON_ID = "js-settings-button";

class MainMenu extends Common {
  constructor() {
    super();
  }
}

export const mainMenu = new MainMenu();
