import { ChangeWidgetModule } from './change-widget.module';

describe('ChangeWidgetModule', () => {
  let changeWidgetModule: ChangeWidgetModule;

  beforeEach(() => {
    changeWidgetModule = new ChangeWidgetModule();
  });

  it('should create an instance', () => {
    expect(changeWidgetModule).toBeTruthy();
  });
});
