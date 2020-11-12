import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AiNsPage } from './ai-ns.page';

describe('AiNsPage', () => {
  let component: AiNsPage;
  let fixture: ComponentFixture<AiNsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiNsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AiNsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
