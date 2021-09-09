const lang = {
  nomer: 1,
};
export const infoReducer = (state = lang, action) => {
  if (action.type === 1) {
    return state;
  } else {
    return { nomer: action.type };
  }
};
