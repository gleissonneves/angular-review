import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  private log(hook: string) {
    console.log(hook);
  }

  constructor() { }

  ngOnDestroy(): void {
    this.log(`ngOnDestroy`);
  }

  ngAfterViewChecked(): void {
    this.log(`ngAfterViewChecked`);
  }

  ngAfterViewInit(): void {
    this.log(`ngAfterViewInit`);
  }

  ngAfterContentChecked(): void {
    this.log(`ngAfterContentChecked`);
  }

  ngAfterContentInit(): void {
    this.log(`ngAfterContentInit`);
  }

  ngDoCheck(): void {
    this.log(`ngDoCheck`);
  }

  ngOnInit(): void {
    this.log(`ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log(`ngOnChanges`);
  }
}
