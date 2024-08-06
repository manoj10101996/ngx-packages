import * as i0 from '@angular/core';
import { Injectable, inject, Component, ViewEncapsulation, Input } from '@angular/core';
import { NgxColorConverterService } from 'ngx-color-converter';
import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class NgxPrimeColorPickerService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxPrimeColorPickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxPrimeColorPickerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxPrimeColorPickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxPrimeColorPickerComponent {
    constructor() {
        this.showConversionTable = true;
        this.showSaturation = true;
        this.showLightness = true;
        this.showColorPalette = true;
        this.showGradient = true;
        this.gradintPickerId = 'color-canvas-' + (Math.random() + 1).toString(36).substring(7);
        this.position = {
            offsetX: 270 - 15,
            offsetY: 15
        };
        this.degrees = [];
        this.primeColors = [];
        this.saturationGradientString = `
      -webkit-linear-gradient(left,
        hsla(0, 0%, 50%, 1),
        hsla(0, 20%, 50%, 1),
        hsla(0, 40%, 50%, 1),
        hsla(0, 60%, 50%, 1),
        hsla(0, 80%, 50%, 1),
        hsla(0, 100%, 50%, 1))`;
        this.lightnessGradientString = `
      -webkit-linear-gradient(left,
        hsla(0, 100%, 0%, 1),
        hsla(0, 100%, 20%, 1),
        hsla(0, 100%, 40%, 1),
        hsla(0, 100%, 60%, 1),
        hsla(0, 100%, 80%, 1),
        hsla(0, 100%, 100%, 1))`;
        this.hslObject = { h: 360, s: 100, l: 50 };
        this.color = '#e52222ff';
        this.colors = inject(NgxColorConverterService);
        this.degrees = Array.from(Array(360).keys());
        this.primeColors = Array.from(Array(13).keys());
    }
    ngAfterViewInit() {
        this.canvas = document.getElementById(this.gradintPickerId);
        let width = 270;
        this.canvas.style.width = width + "px";
        this.canvas.style.height = ((width / 16) * 9) + "px";
        this.context = this.canvas.getContext("2d", { willReadFrequently: true });
        if (this.context && this.canvas) {
            this.createRGBGradient();
            this.canvas.addEventListener('click', (event) => {
                this.position.offsetX = event.offsetX;
                this.position.offsetY = event.offsetY;
                this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);
                this.colorObject();
            });
            this.pointer = document.getElementById('picker-gradient-pointer');
            this.canvas.addEventListener('dragover', (event) => {
                this.position.offsetX = event.offsetX;
                this.position.offsetY = event.offsetY;
                this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);
                this.colorObject();
            });
        }
    }
    colorObject() {
        this.objectColors = this.colors.toColorObject(this.color);
        this.objectColors['hex'] = this.colors.toHexString(this.objectColors.red, this.objectColors.green, this.objectColors.blue);
    }
    bufferToHex(buffer) {
        return '#' + [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('');
    }
    createRGBGradient() {
        this.saturationGradientString = `
      -webkit-linear-gradient(left,
        hsla(${this.hslObject.h}, 0%, 50%, 1),
        hsla(${this.hslObject.h}, 20%, 50%, 1),
        hsla(${this.hslObject.h}, 40%, 50%, 1),
        hsla(${this.hslObject.h}, 60%, 50%, 1),
        hsla(${this.hslObject.h}, 80%, 50%, 1),
        hsla(${this.hslObject.h}, 100%, 50%, 1))`;
        this.lightnessGradientString = `
        -webkit-linear-gradient(left,
          hsla(${this.hslObject.h}, 100%, 0%, 1),
          hsla(${this.hslObject.h}, 100%, 20%, 1),
          hsla(${this.hslObject.h}, 100%, 40%, 1),
          hsla(${this.hslObject.h}, 100%, 60%, 1),
          hsla(${this.hslObject.h}, 100%, 80%, 1),
          hsla(${this.hslObject.h}, 100%, 100%, 1))`;
        this.fillGradient();
    }
    createFromPalette() {
        this.position.offsetX = 270 - 15;
        this.position.offsetY = 15;
        this.fillGradient();
    }
    fillGradient() {
        const rgb = this.hsl2rgb();
        const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        // Create linear gradient
        const coreGradient = this.context.createLinearGradient(0, this.canvas.width / 2, this.canvas.width, this.canvas.width / 2);
        coreGradient.addColorStop(0, "rgb(255, 255, 255)");
        coreGradient.addColorStop(1, rgbString);
        // Fill rectangle with gradient
        this.context.fillStyle = coreGradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Create linear gradient
        const blackGradient = this.context.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.width / 2);
        blackGradient.addColorStop(0, "transparent");
        blackGradient.addColorStop(1, "rgb(0, 0, 0)");
        // Fill rectangle with gradient
        this.context.fillStyle = blackGradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);
        this.colorObject();
    }
    hsl2rgb() {
        let { h, s, l } = this.hslObject;
        // IMPORTANT if s and l between 0,1 remove the next two lines:
        s /= 100;
        l /= 100;
        const k = (n) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return {
            r: Math.round(255 * f(0)),
            g: Math.round(255 * f(8)),
            b: Math.round(255 * f(4)),
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxPrimeColorPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.5", type: NgxPrimeColorPickerComponent, isStandalone: true, selector: "ngx-prime-color-picker", inputs: { showConversionTable: "showConversionTable", showSaturation: "showSaturation", showLightness: "showLightness", showColorPalette: "showColorPalette", showGradient: "showGradient" }, ngImport: i0, template: "<div class=\"container-padding\" [style.background]=\"objectColors?.hex\">\n  <div class=\"container-padding\">\n    <div class=\"crimson-picker\" id=\"crimson-picker\">\n      <div class=\"crimson-picker-gradient\" [hidden]=\"!showGradient\">\n        <span class=\"crimson-picker-gradient-pointer\" draggable=\"true\" id=\"picker-gradient-pointer\"\n          [style.left.px]=\"position.offsetX\" [style.top.px]=\"position.offsetY\">\n        </span>\n        <canvas [attr.id]=\"gradintPickerId\"></canvas>\n      </div>\n      <div class=\"crimson-picker-color-grid\">\n        @for(color of degrees; let i = $index;track i) {\n        <div class=\"crimson-color-picker-point\" [style.background]=\"'hsl('+i+', 100%, 50%)'\"></div>\n        }\n        <div class=\"crimson-color-picker-range-container\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['h']\"\n            type=\"range\" min=\"0\" max=\"359\" />\n        </div>\n      </div>\n      @if(objectColors){\n      <div class=\"crimson-color-picker-input-data\">\n        <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hex']\" readonly />\n        <small class=\"crimson-color-picker-text\">HEX</small>\n      </div>\n      }\n      <!-- primeColors -->\n      <div class=\"crimson-picker-prime-color-grid\" [hidden]=\"!showColorPalette\">\n        @for(color of primeColors; let i = $index;track i) {\n        <div class=\"crimson-prime-color-picker-point\" (click)=\"hslObject.h = i * 30;createFromPalette();\"\n          [style.background]=\"'hsl('+i * 30+', 100%, 50%)'\"></div>\n        }\n      </div>\n      @if(objectColors){\n      <div [hidden]=\"!showConversionTable\">\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['red']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['green']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['blue']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">RGB</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hue']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['sat']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['lightness']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">HSL</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hue']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['whiteness']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['blackness']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">HWB</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['cyan']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['magenta']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['yellow']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['black']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">CMYK</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['ncol']\" readonly />\n          <small class=\"crimson-color-picker-text\">NCOL</small>\n        </div>\n      </div>\n      }\n\n      <!-- saturationGradientString -->\n      <div class=\"crimson-picker-color-saturation-container\" [hidden]=\"!showSaturation\">\n        <div class=\"crimson-picker-color-saturation-gradient\" [style.background]=\"saturationGradientString\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['s']\"\n            type=\"range\" min=\"0\" max=\"100\" />\n        </div>\n      </div>\n      <!-- lightnessGradientString -->\n      <div class=\"crimson-picker-color-saturation-container\" [hidden]=\"!showLightness\">\n        <div class=\"crimson-picker-color-saturation-gradient\" [style.background]=\"lightnessGradientString\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['l']\"\n            type=\"range\" min=\"0\" max=\"100\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".crimson-picker{width:270px;border:1px solid #d9d9d9;background-color:#fff}.crimson-picker .crimson-picker-gradient{position:relative}.crimson-picker .crimson-picker-gradient .crimson-picker-gradient-pointer{position:absolute;transform:translate(-50%,-50%);cursor:pointer;background-color:transparent;height:16px;width:16px;border-radius:16px;transition:all 0s ease}.crimson-picker .crimson-picker-color-grid{display:grid;grid-template-columns:repeat(360,1fr);position:relative;padding:3px 6px 6px}.crimson-picker .crimson-picker-color-grid .crimson-color-picker-point{height:32px;cursor:pointer}.crimson-picker .crimson-picker-prime-color-grid{display:grid;grid-template-columns:repeat(13,1fr);position:relative;padding:0 6px 6px}.crimson-picker .crimson-picker-prime-color-grid .crimson-prime-color-picker-point{height:32px;cursor:pointer;width:100%}.crimson-picker .crimson-picker-color-saturation-container{padding:0 6px 6px}.crimson-picker .crimson-picker-color-saturation-container .crimson-picker-color-saturation-gradient{position:relative;height:32px}.crimson-picker .crimson-color-picker-range-bar{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);height:0px;-webkit-appearance:none;-moz-appearance:none}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-runnable-track{background-color:transparent}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-thumb{background-color:transparent;border:2px solid white;height:16px;width:16px;border-radius:8px;-webkit-appearance:none;-moz-appearance:none;cursor:grab}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-thumb:active{cursor:grabbing}.crimson-color-picker-input-data{padding:0 6px 6px;display:grid;grid-template-columns:200px auto;align-items:center}.crimson-color-picker-input-data .crimson-color-picker-input-grid{display:flex;gap:5px}.crimson-color-picker-input-data .crimson-color-picker-input{padding:6px;font-size:12px;border:1px solid #d9d9d9;text-indent:6px;text-align:center;width:100%}.crimson-color-picker-input-data .crimson-color-picker-input:focus{outline:none;box-shadow:none}.crimson-color-picker-input-data .crimson-color-picker-text{font-size:10px;color:#000000bf;width:100%;text-align:end;font-weight:700}.container-padding{padding:2.5rem;height:100%;display:flex;align-items:center;justify-content:center}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxPrimeColorPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-prime-color-picker', standalone: true, imports: [FormsModule, ReactiveFormsModule], encapsulation: ViewEncapsulation.None, template: "<div class=\"container-padding\" [style.background]=\"objectColors?.hex\">\n  <div class=\"container-padding\">\n    <div class=\"crimson-picker\" id=\"crimson-picker\">\n      <div class=\"crimson-picker-gradient\" [hidden]=\"!showGradient\">\n        <span class=\"crimson-picker-gradient-pointer\" draggable=\"true\" id=\"picker-gradient-pointer\"\n          [style.left.px]=\"position.offsetX\" [style.top.px]=\"position.offsetY\">\n        </span>\n        <canvas [attr.id]=\"gradintPickerId\"></canvas>\n      </div>\n      <div class=\"crimson-picker-color-grid\">\n        @for(color of degrees; let i = $index;track i) {\n        <div class=\"crimson-color-picker-point\" [style.background]=\"'hsl('+i+', 100%, 50%)'\"></div>\n        }\n        <div class=\"crimson-color-picker-range-container\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['h']\"\n            type=\"range\" min=\"0\" max=\"359\" />\n        </div>\n      </div>\n      @if(objectColors){\n      <div class=\"crimson-color-picker-input-data\">\n        <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hex']\" readonly />\n        <small class=\"crimson-color-picker-text\">HEX</small>\n      </div>\n      }\n      <!-- primeColors -->\n      <div class=\"crimson-picker-prime-color-grid\" [hidden]=\"!showColorPalette\">\n        @for(color of primeColors; let i = $index;track i) {\n        <div class=\"crimson-prime-color-picker-point\" (click)=\"hslObject.h = i * 30;createFromPalette();\"\n          [style.background]=\"'hsl('+i * 30+', 100%, 50%)'\"></div>\n        }\n      </div>\n      @if(objectColors){\n      <div [hidden]=\"!showConversionTable\">\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['red']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['green']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['blue']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">RGB</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hue']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['sat']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['lightness']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">HSL</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['hue']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['whiteness']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['blackness']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">HWB</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <div class=\"crimson-color-picker-input-grid\">\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['cyan']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['magenta']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['yellow']\" readonly />\n            <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['black']\" readonly />\n          </div>\n          <small class=\"crimson-color-picker-text\">CMYK</small>\n        </div>\n        <div class=\"crimson-color-picker-input-data\">\n          <input type=\"text\" class=\"crimson-color-picker-input\" [value]=\"objectColors['ncol']\" readonly />\n          <small class=\"crimson-color-picker-text\">NCOL</small>\n        </div>\n      </div>\n      }\n\n      <!-- saturationGradientString -->\n      <div class=\"crimson-picker-color-saturation-container\" [hidden]=\"!showSaturation\">\n        <div class=\"crimson-picker-color-saturation-gradient\" [style.background]=\"saturationGradientString\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['s']\"\n            type=\"range\" min=\"0\" max=\"100\" />\n        </div>\n      </div>\n      <!-- lightnessGradientString -->\n      <div class=\"crimson-picker-color-saturation-container\" [hidden]=\"!showLightness\">\n        <div class=\"crimson-picker-color-saturation-gradient\" [style.background]=\"lightnessGradientString\">\n          <input class=\"crimson-color-picker-range-bar\" (input)=\"createRGBGradient()\" [(ngModel)]=\"hslObject['l']\"\n            type=\"range\" min=\"0\" max=\"100\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".crimson-picker{width:270px;border:1px solid #d9d9d9;background-color:#fff}.crimson-picker .crimson-picker-gradient{position:relative}.crimson-picker .crimson-picker-gradient .crimson-picker-gradient-pointer{position:absolute;transform:translate(-50%,-50%);cursor:pointer;background-color:transparent;height:16px;width:16px;border-radius:16px;transition:all 0s ease}.crimson-picker .crimson-picker-color-grid{display:grid;grid-template-columns:repeat(360,1fr);position:relative;padding:3px 6px 6px}.crimson-picker .crimson-picker-color-grid .crimson-color-picker-point{height:32px;cursor:pointer}.crimson-picker .crimson-picker-prime-color-grid{display:grid;grid-template-columns:repeat(13,1fr);position:relative;padding:0 6px 6px}.crimson-picker .crimson-picker-prime-color-grid .crimson-prime-color-picker-point{height:32px;cursor:pointer;width:100%}.crimson-picker .crimson-picker-color-saturation-container{padding:0 6px 6px}.crimson-picker .crimson-picker-color-saturation-container .crimson-picker-color-saturation-gradient{position:relative;height:32px}.crimson-picker .crimson-color-picker-range-bar{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);height:0px;-webkit-appearance:none;-moz-appearance:none}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-runnable-track{background-color:transparent}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-thumb{background-color:transparent;border:2px solid white;height:16px;width:16px;border-radius:8px;-webkit-appearance:none;-moz-appearance:none;cursor:grab}.crimson-picker .crimson-color-picker-range-bar::-webkit-slider-thumb:active{cursor:grabbing}.crimson-color-picker-input-data{padding:0 6px 6px;display:grid;grid-template-columns:200px auto;align-items:center}.crimson-color-picker-input-data .crimson-color-picker-input-grid{display:flex;gap:5px}.crimson-color-picker-input-data .crimson-color-picker-input{padding:6px;font-size:12px;border:1px solid #d9d9d9;text-indent:6px;text-align:center;width:100%}.crimson-color-picker-input-data .crimson-color-picker-input:focus{outline:none;box-shadow:none}.crimson-color-picker-input-data .crimson-color-picker-text{font-size:10px;color:#000000bf;width:100%;text-align:end;font-weight:700}.container-padding{padding:2.5rem;height:100%;display:flex;align-items:center;justify-content:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { showConversionTable: [{
                type: Input
            }], showSaturation: [{
                type: Input
            }], showLightness: [{
                type: Input
            }], showColorPalette: [{
                type: Input
            }], showGradient: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-prime-color-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPrimeColorPickerComponent, NgxPrimeColorPickerService };
//# sourceMappingURL=ngx-prime-color-picker.mjs.map
