// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { TodoListRemoveDirective } from './directive/todo-list-remove.directive';
import { TodoCardCompleteDirective } from './directive/todo-card-complete.directive';
import { ProductCompleteDirective } from './directive/product-complete.directive';
import { ProductRemoveDirective } from './directive/product-remove.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { CustomTranslateLoader } from './custom-translate-loader';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// feather icons
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

// bootstrap import
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbTooltipModule,
  NgbModule,
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgScrollbarModule,
    AlertComponent,
    CardComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
    FeatherModule.pick(allIcons)
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    TodoListRemoveDirective,
    TodoCardCompleteDirective,
    ProductCompleteDirective,
    ProductRemoveDirective,
    SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgScrollbarModule,
    AlertComponent,
    CardComponent,
    TranslateModule,
    FeatherModule
  ],
  declarations: [TodoListRemoveDirective, TodoCardCompleteDirective, ProductCompleteDirective, ProductRemoveDirective, SpinnerComponent]
})
export class SharedModule {}
