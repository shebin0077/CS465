import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TriplistingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';


export const routes: Routes = [

    { path: 'add-trip', component: AddTripComponent },
    { path: '', component: TriplistingComponent, pathMatch: 'full' },
    { path: 'edit-trip/:tripCode', component: EditTripComponent },

];
