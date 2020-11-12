import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBreedingStatusPage } from './update-breeding-status.page';

describe('UpdateBreedingStatusPage', () => {
  let component: UpdateBreedingStatusPage;
  let fixture: ComponentFixture<UpdateBreedingStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBreedingStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBreedingStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
