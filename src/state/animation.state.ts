import {create} from "./createStore";

type AnimationType = "back" | "forward";

export type Animation = {
  type: AnimationType;
};

type State = Animation;
type Actions = {
  navigate: (url: string, type?: AnimationType) => void;
};

export const $animation = create<State & Actions>(set => ({
  type: "forward",
  navigate: (url, type) => {
    set({type});
    if (typeof window !== "undefined") {
      window.swup.navigate(url, {animate: true});
    }
  },
}));
