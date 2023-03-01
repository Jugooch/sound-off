import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfile } from './user.profile';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserProfileRoutingModule } from './user.profile-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UserProfileRoutingModule
  ],
  declarations: [UserProfile]
})
export class UserProfileModule {}
