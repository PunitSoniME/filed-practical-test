import { CreditCard } from '../models/credit-card.model';
import * as CreditCardActions from '../actions/credit-card.actions';

const initialState: CreditCard | any = null;

export function creditCardReducer(state: CreditCard = initialState, action: CreditCardActions.Actions) {

    switch (action.type) {
        case CreditCardActions.ADD_CREDIT_CARD:
            return action.payload;

        default:
            return state;
    }
}