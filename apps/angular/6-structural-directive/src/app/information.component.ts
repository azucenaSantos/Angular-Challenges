import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HasRoleDirective } from './directives/hasRole.directive';
import { HasSuperRoleDirective } from './directives/hasSuperRole.directive';

@Component({
  selector: 'app-information',
  imports: [HasRoleDirective, HasSuperRoleDirective],
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *hasSuperRole="true">visible only for super admin</div>
    <div *hasRole="'MANAGER'">visible if manager</div>
    <div *hasRole="['MANAGER', 'READER']">visible if manager and/or reader</div>
    <div *hasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</div>
    <div *hasRole="'CLIENT'">visible if client</div>
    <div>visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  // private readonly userStore = inject(UserStore);
  // user$ = this.userStore.user$;
  //NO PODEMOS INYECTAR EL USER STORE SI NO SERI MUY FACIL
}
