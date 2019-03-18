import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithTabsPage } from './page-with-tabs.page';

describe('PageWithTabsPage', () => {
  let component: PageWithTabsPage;
  let fixture: ComponentFixture<PageWithTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
