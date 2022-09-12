export interface DataReducer {
    user:{}
}

interface DataType {
    address: string;
    birthdate: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    present: boolean;
    ticket: number;
    _id: string;

}

const initialState = {
    user:{}
}

type  Action = {type:string, payload:DataType}

export const dataReducer = (state:DataReducer = initialState, action:Action) => {


    switch (action.type) {
        case 'ADD_USER' : {
            console.log({...state, user:action.payload});
            return {...state, user:action.payload}
        }
        default :
            return state
    }

}