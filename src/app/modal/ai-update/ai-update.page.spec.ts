import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AiUpdatePage } from './ai-update.page';

describe('AiUpdatePage', () => {
  let component: AiUpdatePage;
  let fixture: ComponentFixture<AiUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AiUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
