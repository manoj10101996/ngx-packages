import * as i0 from '@angular/core';
import { Directive, Input } from '@angular/core';

class NgxCursorHoverDirective {
    constructor(el) {
        this.el = el;
        this.cursor = "pointer";
        this.element = this.el.nativeElement;
    }
    ngAfterViewInit() {
        this.element.classList.add("ngx-cursor-hover-" + this.cursor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxCursorHoverDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: NgxCursorHoverDirective, isStandalone: true, selector: "[ngxCursor]", inputs: { cursor: "cursor" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxCursorHoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxCursor]",
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { cursor: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-cursor-hover
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCursorHoverDirective };
//# sourceMappingURL=ngx-cursor-hover.mjs.map
