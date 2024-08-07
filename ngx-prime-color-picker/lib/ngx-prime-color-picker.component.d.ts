import { NgxColorConverterService } from 'ngx-color-converter';
import { AfterViewInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { COLOROBJECT } from '../public-api';
import * as i0 from "@angular/core";
export declare class NgxPrimeColorPickerComponent implements AfterViewInit {
    private cdref;
    getCurrentColorObject: EventEmitter<any>;
    showConversionTable: boolean;
    showSaturation: boolean;
    showLightness: boolean;
    showColorPalette: boolean;
    showGradient: boolean;
    color: string;
    isFreshColor: boolean;
    gradintPickerId: string;
    position: {
        offsetX: number;
        offsetY: number;
    };
    degrees: number[];
    primeColors: number[];
    saturationGradientString: string;
    lightnessGradientString: string;
    hslObject: {
        h: number;
        s: number;
        l: number;
    };
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    pointer: HTMLDivElement;
    protected colors: NgxColorConverterService;
    objectColors: COLOROBJECT;
    constructor(cdref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    colorObject(): void;
    bufferToHex(buffer: Uint8ClampedArray): string;
    createRGBGradient(): void;
    createFromPalette(): void;
    fillGradient(): void;
    hsl2rgb(): {
        r: number;
        g: number;
        b: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxPrimeColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxPrimeColorPickerComponent, "ngx-prime-color-picker", never, { "showConversionTable": { "alias": "showConversionTable"; "required": false; }; "showSaturation": { "alias": "showSaturation"; "required": false; }; "showLightness": { "alias": "showLightness"; "required": false; }; "showColorPalette": { "alias": "showColorPalette"; "required": false; }; "showGradient": { "alias": "showGradient"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "getCurrentColorObject": "getCurrentColorObject"; }, never, never, true, never>;
}
