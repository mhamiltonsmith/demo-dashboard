import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { StatsBoxComponent } from './stats-box.component';
import { Metric }            from '../../../office/Office';

@Injectable()
export class StatsBoxService {
  factoryResolver:   ComponentFactoryResolver
  rootViewContainer: any

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addStatsBoxComponents( metrics: Metric[] ) {
    const factory = this.factoryResolver.resolveComponentFactory(StatsBoxComponent)
    for (var metric in metrics) {
      const component = factory.create(this.rootViewContainer.parentInjector)
      component.instance.updateMetric(metrics[metric])
      this.rootViewContainer.insert(component.hostView)
    }
  }
}
