import { combineReducers } from 'redux'
import {INCREMENT, DECREMENT} from './actions'


export default function update_count(state = 0, action){
    switch(action.type){
        case INCREMENT:
            return state + 1
         case DECREMENT:
            return state - 1
    }
    return state;
}


