import { EsriMapModule } from './esri-map.module';

describe('EsriMapModule', () => {
  let esriMapModule: EsriMapModule;

  beforeEach(() => {
    esriMapModule = new EsriMapModule();
  });

  it('should create an instance', () => {
    expect(esriMapModule).toBeTruthy();
  });
});
