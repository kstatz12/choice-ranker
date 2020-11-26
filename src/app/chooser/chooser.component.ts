//TODO switch all != undefined to lowdash's helper func

import { Component, OnInit } from '@angular/core';
import { Choice } from '../models/choice';
import * as _ from 'lodash';
import { Pair } from '../models/pair';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {

  workingSet: Choice[];
  current: Choice;
  seenList: Choice[];
  currentPair: Pair | undefined;
  cacheService: CacheService;

  constructor(cacheService: CacheService) {

    //initialization
    this.workingSet = [];
    this.current = new Choice("");
    this.seenList = [];
    this.cacheService = cacheService;

    //set initial values
    let shuffled = _.shuffle(this.cacheService.getChoices());

    let value = shuffled.pop();
    if (!_.isUndefined(value)) {
      this.current = value;
      _.forEach(shuffled, x => this.workingSet.push(x));
      this.seenList.push(this.current);
      let nextComparer = this.workingSet.pop();
      if (!_.isUndefined(nextComparer)) {
        this.currentPair = new Pair(this.current, nextComparer);
      }
    }
  }

  ngOnInit(): void {
  }

  setNextPair(): void {
    let nextComparer = this.workingSet.pop();
    if (!_.isUndefined(nextComparer)) {
      this.currentPair = new Pair(this.current, nextComparer);
    }
    else {
      this.moveNext();
    }
  }

  choose(c: Choice): void {
    this.cacheService.setChoiceAsViewed(c.name);
  }

  moveNext(): void {
    let result = _.differenceWith(this.cacheService.getChoices(), this.seenList, (x, y) => x.name == y.name);
    if (!_.isUndefined(result)) {
      let shuffled = _.shuffle(result);
      let top = shuffled.pop();
      if (!_.isUndefined(top)) {
        this.current = top;
        this.workingSet = shuffled;
        let nextComparer = this.workingSet.pop();
        if (!_.isUndefined(nextComparer)) {
          this.currentPair = new Pair(this.current, nextComparer);
        }
      }

    }
  }
}
