const logger = ({dispatch, getState}) => next => action => {
    console.log('before dispatch - ', action.type);
    let result = next(action);
    console.log('after dispatch - next state', getState());
    return result;
}
export default logger