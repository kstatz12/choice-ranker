import { Component, OnInit } from '@angular/core';
import { Choice } from "../models/choice";
import { Pair } from "../models/pair"
import * as _ from 'lodash';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})


export class ChoicesComponent implements OnInit {
  newChoiceName: string;
  cacheService: CacheService;

  constructor(cacheService: CacheService) {
    this.newChoiceName = "";
    this.cacheService = cacheService;
  }

  ngOnInit(): void {

  }

  addChoice(): void {
    this.cacheService.addChoice(this.newChoiceName);
    //reset
    this.newChoiceName = "";
  }
}
