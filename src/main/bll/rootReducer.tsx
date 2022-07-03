type InitStateType = typeof initState

const initState = {}

export const rootReducer = (state: InitStateType = initState, action: any): InitStateType => {
  switch (action.type) {
    default:
      return state
  }
}
