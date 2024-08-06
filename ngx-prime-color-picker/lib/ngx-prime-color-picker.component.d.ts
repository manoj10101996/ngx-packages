import { NgxColorConverterService } from 'ngx-color-converter';
import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxPrimeColorPickerComponent implements AfterViewInit {
    showConversionTable: boolean;
    showSaturation: boolean;
    showLightness: boolean;
    showColorPalette: boolean;
    showGradient: boolean;
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
    color: string;
    pointer: HTMLDivElement;
    protected colors: NgxColorConverterService;
    objectColors: any;
    constructor();
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
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxPrimeColorPickerComponent, "ngx-prime-color-picker", never, { "showConversionTable": { "alias": "showConversionTable"; "required": false; }; "showSaturation": { "alias": "showSaturation"; "required": false; }; "showLightness": { "alias": "showLightness"; "required": false; }; "showColorPalette": { "alias": "showColorPalette"; "required": false; }; "showGradient": { "alias": "showGradient"; "required": false; }; }, {}, never, never, true, never>;
}
