import { AsyncPipe } from '@angular/common';
import { Component, inject, Input as RouterInput } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-subscription',
  imports: [AsyncPipe],
  template: `
    <p>Sin router input</p>
    <div>TestId: {{ testId$ | async }}</div>
    <div>Permission: {{ permission$ | async }}</div>
    <div>User: {{ user$ | async }}</div>

    <p>Con router input</p>
    <div>TestId: {{ testId }}</div>
    <div>Permission: {{ permission }}</div>
    <div>User: {{ user }}</div>
  `,
})
export default class TestComponent {
  private activatedRoute = inject(ActivatedRoute);

  testId$ = this.activatedRoute.params.pipe(map((p) => p['testId']));
  permission$ = this.activatedRoute.data.pipe(map((d) => d['permission']));
  user$ = this.activatedRoute.queryParams.pipe(map((q) => q['user']));

  @RouterInput() testId!: string;
  @RouterInput() permission!: string;
  @RouterInput() user!: string;
}
