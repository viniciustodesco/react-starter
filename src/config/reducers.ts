import { IState, IAction } from "./interfaces";

import Modules from "./RootModules";

export default function reducer(
  state: IState | null | undefined,
  action: IAction
) {
  if (!state) return null;
  const _globalFunctions = Modules.getFunctions();
  const selectedFunction = _globalFunctions[action.type];

  if (selectedFunction) return selectedFunction(action, state);
  return state;
}
