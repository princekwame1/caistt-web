import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService {
  private excludedComponents: string[] = [];

  excludeComponent(componentName: string) {
    if (!this.isComponentExcluded(componentName)) {
      this.excludedComponents.push(componentName);
    }
  }

  includeComponent(componentName: string) {
    const index = this.excludedComponents.indexOf(componentName);
    if (index > -1) {
      this.excludedComponents.splice(index, 1);
    }
  }

  isComponentExcluded(componentName: string): boolean {
    return this.excludedComponents.includes(componentName);
  }
}
