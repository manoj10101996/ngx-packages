import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

class NgxCursorHoverDirective {
    constructor(el) {
        this.el = el;
        this.cursor = "pointer";
        this.element = this.el.nativeElement;
    }
    ngAfterViewInit() {
        this.element.classList.add("ngx-cursor-hover-" + this.cursor);
    }
}
NgxCursorHoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxCursorHoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxCursorHoverDirective, selector: "[ngxCursor]", inputs: { cursor: "cursor" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxCursor]"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { cursor: [{
                type: Input
            }] } });

class NgxCursorHoverModule {
}
NgxCursorHoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxCursorHoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverModule, declarations: [NgxCursorHoverDirective], exports: [NgxCursorHoverDirective] });
NgxCursorHoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxCursorHoverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxCursorHoverDirective
                    ],
                    imports: [],
                    exports: [
                        NgxCursorHoverDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-cursor-hover
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCursorHoverDirective, NgxCursorHoverModule };
//# sourceMappingURL=ngx-cursor-hover.mjs.map
