import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { IntakeOffice }       from '../../../intake-office/IntakeOffice';
import { Metric }             from '../../../office/Office';

@Injectable()
export class AccordionService {
  factoryResolver:   ComponentFactoryResolver
  rootViewContainer: any

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addAccordionComponents( metrics: Metric[] ) {
    const factory = this.factoryResolver.resolveComponentFactory(AccordionComponent)
    for (var metric in metrics) {
      const component = factory.create(this.rootViewContainer.parentInjector)
      component.instance.updateMetric(metrics[metric])
      this.rootViewContainer.insert(component.hostView)
    }
  }
}
