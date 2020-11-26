import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import { Choice } from './models/choice';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  choicesSrc: BehaviorSubject<Choice[]> = new BehaviorSubject<Choice[]>([]);
  maxChoices: number = 15;

  readonly choices$ = this.choicesSrc.asObservable();
  constructor() {
  }

  private _setChoices(choices: Choice[]): void {
    this.choicesSrc.next(choices);
  }

  getChoices(): Choice[] {
    return this.choicesSrc.getValue();
  }


  addChoice(name: string): void {
    if(name === "") {
      return;
    }

    const localChoices = this.getChoices();
    if(localChoices.length > this.maxChoices) {
      return;
    }

    let existing = _.find(localChoices, x =>x.name === name);
    if(!_.isUndefined(existing)) {
      return;
    }
    localChoices.push(new Choice(name));
    this._setChoices(localChoices);
  }

  setChoiceAsViewed(choiceName: string): void {
    //TODO this is odd, i wonder if, through references update this cleaner
    // but i guess using _.find, worst case would go through the whole array anyway
    const localChoices = this.getChoices().map(x => {
      if(x.name === choiceName) {
        x.chosenCount += 1;
      }
      return x;
    });

    this._setChoices(localChoices);
  }



}
