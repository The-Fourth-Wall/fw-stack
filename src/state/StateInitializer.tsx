import {$animation} from "@state";
import {useLayoutEffect} from "react";

type Props = {
  state: State;
};

export const StateInitializer = ({state}: Props) => {
  useLayoutEffect(() => {
    $animation.set({...$animation, ...state.animation});
  }, []);

  return null;
};
