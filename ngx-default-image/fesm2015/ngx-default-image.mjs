import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Directive, Input, Output, NgModule } from '@angular/core';

class NgxDefaultImageService {
    constructor() { }
}
NgxDefaultImageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxDefaultImageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxDefaultImageComponent {
}
NgxDefaultImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxDefaultImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxDefaultImageComponent, selector: "lib-ngx-default-image", ngImport: i0, template: `
    <p>
      ngx-default-image works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-default-image', template: `
    <p>
      ngx-default-image works!
    </p>
  ` }]
        }] });

class NgxDefaultImageDirective {
    constructor(el) {
        this.el = el;
        this.imageURL = "";
        this.imageMetaInfo = new EventEmitter();
        this.imageMeta = {
            isValidImage: false,
            aspectRatio: "1",
            x: 0,
            y: 0,
            rwidth: 0,
            rheight: 0,
            renderTime: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            datedOn: {
                loadedOn: 0,
                renderedOn: 0,
                renderTime: 0
            },
            width: 0,
            height: 0,
            src: "",
            esrc: "",
            alt: "",
            crossorigin: ""
        };
        this.imageElement = this.el.nativeElement;
        let image = new Image();
        this.imageMeta.datedOn = {
            loadedOn: new Date().getTime(),
            renderedOn: new Date().getTime(),
            renderTime: 0
        };
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        image.onload = (event) => {
            ctx.drawImage(image, 0, 0); // draw in image
            this.imageMeta.datedOn.renderedOn = new Date().getTime();
            this.imageMeta.datedOn.renderTime =
                this.imageMeta.datedOn.renderedOn - this.imageMeta.datedOn.loadedOn;
            this.getImageMeta(event, true);
        };
        image.onerror = (event) => {
            this.getImageMeta(event, false);
            this.imageElement.setAttribute("src", this.imageURL);
        };
        image.src = this.imageElement.getAttribute("src") || "";
    }
    getImageMeta(event, isValidImage) {
        let boundingRect = this.imageElement.getBoundingClientRect();
        let img = this.imageElement;
        this.imageMeta = {
            isValidImage: isValidImage,
            aspectRatio: (boundingRect.width / boundingRect.height).toPrecision(2),
            x: boundingRect.x,
            y: boundingRect.y,
            rwidth: boundingRect.width,
            rheight: boundingRect.height,
            renderTime: this.imageMeta.datedOn.renderTime,
            top: boundingRect.top,
            right: boundingRect.right,
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            datedOn: this.imageMeta.datedOn,
            width: event.target.width,
            height: event.target.height,
            src: event.target.src,
            esrc: this.imageURL,
            alt: event.target.alt,
            crossorigin: img.getAttribute("crossorigin") || ''
        };
        this.imageMetaInfo.emit(this.imageMeta);
    }
    calculateAspectRatio(width, height) {
        return width / height;
    }
}
NgxDefaultImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxDefaultImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxDefaultImageDirective, selector: "[NgxDefaultImage]", inputs: { imageURL: "imageURL" }, outputs: { imageMetaInfo: "imageMetaInfo" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[NgxDefaultImage]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { imageURL: [{
                type: Input
            }], imageMetaInfo: [{
                type: Output
            }] } });

class NgxDefaultImageModule {
}
NgxDefaultImageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxDefaultImageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageModule, declarations: [NgxDefaultImageComponent,
        NgxDefaultImageDirective], exports: [NgxDefaultImageComponent,
        NgxDefaultImageDirective] });
NgxDefaultImageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxDefaultImageComponent,
                        NgxDefaultImageDirective
                    ],
                    imports: [],
                    exports: [
                        NgxDefaultImageComponent,
                        NgxDefaultImageDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-default-image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDefaultImageComponent, NgxDefaultImageDirective, NgxDefaultImageModule, NgxDefaultImageService };
//# sourceMappingURL=ngx-default-image.mjs.map
