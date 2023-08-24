import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, Output, NgModule } from '@angular/core';

class NgxSlightScrollService {
    constructor() { }
}
NgxSlightScrollService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxSlightScrollService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxSlightScrollDirective {
    constructor(el) {
        this.el = el;
        this.scrollBg = "#fff";
        this.scrollThumbBg = "#d9d9d9";
        this.scrollThumbRadius = 0;
        this.scrollWidth = 10;
        this.scrollBorder = false;
        this.scrollEndEvent = new EventEmitter();
        this.element = this.el.nativeElement;
        this.element.classList.add("ngx-slight-scroll");
    }
    ngAfterViewInit() {
        if (this.scrollBorder) {
            this.element.classList.add("ngx-slight-scroll-border");
        }
        if (this.minHeight) {
            this.element.style.minHeight = this.minHeight;
        }
        if (this.maxHeight) {
            this.element.style.maxHeight = this.maxHeight;
        }
        document.body.style.setProperty("--ngx-slight-scroll-thumb-bg", this.scrollThumbBg);
        document.body.style.setProperty("--ngx-slight-scroll-thumb-radius", this.scrollThumbRadius.toString() + "px");
        document.body.style.setProperty("--ngx-slight-scroll-width", this.scrollWidth.toString() + "px");
        document.body.style.setProperty("--ngx-slight-scroll-bg", this.scrollBg);
        this.element.addEventListener("scroll", () => {
            if (this.element.offsetHeight + this.element.scrollTop >=
                this.element.scrollHeight) {
                this.scrollEndEvent.emit();
            }
        });
    }
}
NgxSlightScrollDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxSlightScrollDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxSlightScrollDirective, selector: "[ngxSlimScroll]", inputs: { maxHeight: "maxHeight", minHeight: "minHeight", scrollBg: "scrollBg", scrollThumbBg: "scrollThumbBg", scrollThumbRadius: "scrollThumbRadius", scrollWidth: "scrollWidth", scrollBorder: "scrollBorder" }, outputs: { scrollEndEvent: "scrollEndEvent" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ngxSlimScroll]"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { maxHeight: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], scrollBg: [{
                type: Input
            }], scrollThumbBg: [{
                type: Input
            }], scrollThumbRadius: [{
                type: Input
            }], scrollWidth: [{
                type: Input
            }], scrollBorder: [{
                type: Input
            }], scrollEndEvent: [{
                type: Output
            }] } });

class NgxSlightScrollModule {
}
NgxSlightScrollModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxSlightScrollModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollModule, declarations: [NgxSlightScrollDirective], exports: [NgxSlightScrollDirective] });
NgxSlightScrollModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxSlightScrollModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxSlightScrollDirective
                    ],
                    imports: [],
                    exports: [
                        NgxSlightScrollDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-slight-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSlightScrollDirective, NgxSlightScrollModule, NgxSlightScrollService };
//# sourceMappingURL=ngx-slight-scroll.mjs.map
