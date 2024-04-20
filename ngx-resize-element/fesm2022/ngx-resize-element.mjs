import * as i0 from '@angular/core';
import { Injectable, Component, Directive } from '@angular/core';

class NgxResizeElementService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxResizeElementComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: NgxResizeElementComponent, isStandalone: true, selector: "lib-ngx-resize-element", ngImport: i0, template: `
    <p>
      ngx-resize-element works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-resize-element', template: `
    <p>
      ngx-resize-element works!
    </p>
  `, standalone: true }]
        }] });

class NgxResizeElementDirective {
    constructor(el) {
        this.el = el;
        this.element = this.el.nativeElement;
        this.element.style.resize = "both";
        this.element.style.overflow = "auto";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: NgxResizeElementDirective, isStandalone: true, selector: "[ngxResize]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxResizeElementDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxResize]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/*
 * Public API Surface of ngx-resize-element
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxResizeElementComponent, NgxResizeElementDirective, NgxResizeElementService };
//# sourceMappingURL=ngx-resize-element.mjs.map
