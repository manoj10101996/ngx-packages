import { ElementRef, EventEmitter } from '@angular/core';
import { META } from './META';
import * as i0 from "@angular/core";
export declare class NgxDefaultImageDirective {
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
