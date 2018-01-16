import types from './types';

export function switchAuthentication(auth){
    return{
        type: types.SWITCH_AUTHENTICATION,
        auth: auth
    }
}
