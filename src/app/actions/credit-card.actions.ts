import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';

export const ADD_CREDIT_CARD = '[Credit_Card] Add';

export class AddCreditCard implements Action {
    readonly type = ADD_CREDIT_CARD;

    constructor(public payload: CreditCard) {

    }
}

export type Actions = AddCreditCard;