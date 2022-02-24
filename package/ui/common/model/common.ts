import { createModel } from "@rematch/core";
import { RootModel } from "./connect";

interface CommonState {
}

const initializeCommonState: CommonState = {
};

export default createModel<RootModel>()({
  name: "common",
  state: initializeCommonState,
});
