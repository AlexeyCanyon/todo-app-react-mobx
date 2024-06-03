import { action, makeObservable, observable, reaction  } from "mobx";

enum ThemeTypes {
  light = 'light',
  dark = 'dark'
}


export class ThemeStore {
  public theme: ThemeTypes = ThemeTypes.dark;

  constructor() {
    makeObservable(this, {
      theme: observable,
      switchTheme: action.bound
    })
  }

  switchTheme() {
    if (this.theme === ThemeTypes.dark) {
      this.theme = ThemeTypes.light;
    } else {
      this.theme = ThemeTypes.dark;
    }
  }
}

export const themeStore = new ThemeStore();

reaction(() => themeStore.theme, (current, prev) => {
  let bgLight: string = "hsl(0, 0%, 98%)";
  let bgDark: string = "hsl(235, 21%, 11%)";

  if (current === ThemeTypes.dark) {
    document.body.style.backgroundColor = bgLight;
  } else {
    document.body.style.backgroundColor = bgDark;
  }
});

