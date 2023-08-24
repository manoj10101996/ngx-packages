import * as i0 from '@angular/core';
import { Injectable, Component, Directive, NgModule } from '@angular/core';

class NgxResizeElementService {
    constructor() { }
}
NgxResizeElementService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxResizeElementService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxResizeElementComponent {
}
NgxResizeElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxResizeElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxResizeElementComponent, selector: "lib-ngx-resize-element", ngImport: i0, template: `
    <p>
      ngx-resize-element works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-resize-element', template: `
    <p>
      ngx-resize-element works!
    </p>
  ` }]
        }] });

class NgxResizeElementDirective {
    constructor(el) {
        this.el = el;
        this.element = this.el.nativeElement;
        this.element.style.resize = "both";
        this.element.style.overflow = "auto";
    }
}
NgxResizeElementDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxResizeElementDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxResizeElementDirective, selector: "[ngxResize]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxResize]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class NgxResizeElementModule {
}
NgxResizeElementModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxResizeElementModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementModule, declarations: [NgxResizeElementComponent,
        NgxResizeElementDirective], exports: [NgxResizeElementComponent,
        NgxResizeElementDirective] });
NgxResizeElementModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxResizeElementModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxResizeElementComponent,
                        NgxResizeElementDirective
                    ],
                    imports: [],
                    exports: [
                        NgxResizeElementComponent,
                        NgxResizeElementDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-resize-element
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxResizeElementComponent, NgxResizeElementDirective, NgxResizeElementModule, NgxResizeElementService };
//# sourceMappingURL=ngx-resize-element.mjs.map
