interface IInitialState {
  value: number;
}

const initialState: IInitialState = {
  value: 1,
};

export const firstReducer = (state = initialState, action: any) => {
  switch (action) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: action.value,
      };

    default:
      return state;
  }
};
