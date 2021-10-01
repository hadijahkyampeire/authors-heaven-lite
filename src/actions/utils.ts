export const RESET = "RESET";

export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const resetAction = (actionType: string) => ({
  type: `${actionType}_${RESET}`
});