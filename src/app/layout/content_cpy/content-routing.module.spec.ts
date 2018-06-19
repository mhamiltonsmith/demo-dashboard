import { ContentRoutingModule } from './content-routing.module';

describe('ContentRoutingModule', () => {
  let contentRoutingModule: ContentRoutingModule;

  beforeEach(() => {
    contentRoutingModule = new ContentRoutingModule();
  });

  it('should create an instance', () => {
    expect(contentRoutingModule).toBeTruthy();
  });
});
