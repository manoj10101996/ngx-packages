import * as i0 from '@angular/core';
import { EventEmitter, ElementRef } from '@angular/core';

declare class NgxDefaultImageService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDefaultImageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDefaultImageService>;
}

declare class NgxDefaultImageComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDefaultImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxDefaultImageComponent, "lib-ngx-default-image", never, {}, {}, never, never, true, never>;
}

interface META {
    isValidImage: boolean;
    aspectRatio: string;
    x: number;
    y: number;
    rwidth: number;
    rheight: number;
    renderTime: any;
    top: number;
    right: number;
    bottom: number;
    left: number;
    datedOn: {
        loadedOn: number;
        renderedOn: number;
        renderTime: number;
    };
    width: number;
    height: number;
    src: any;
    esrc: string;
    alt: any;
    crossorigin: string;
}

declare class NgxDefaultImageDirective {
    private el;
    imageURL: string;
    private imageElement;
    imageMetaInfo: EventEmitter<META>;
    imageMeta: META;
    constructor(el: ElementRef);
    getImageMeta(event: any, isValidImage: boolean): void;
    calculateAspectRatio(width: number, height: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDefaultImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxDefaultImageDirective, "[NgxDefaultImage]", never, { "imageURL": { "alias": "imageURL"; "required": false; }; }, { "imageMetaInfo": "imageMetaInfo"; }, never, never, true, never>;
}

export { NgxDefaultImageComponent, NgxDefaultImageDirective, NgxDefaultImageService };
export type { META };
