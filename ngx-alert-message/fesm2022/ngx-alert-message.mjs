import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class NgxAlertMessageService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxAlertMessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxAlertMessageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxAlertMessageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxAlertMessageComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxAlertMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: NgxAlertMessageComponent, isStandalone: true, selector: "lib-ngx-alert-message", ngImport: i0, template: `
    <p>
      ngx-alert-message works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxAlertMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-alert-message', template: `
    <p>
      ngx-alert-message works!
    </p>
  `, standalone: true }]
        }] });

class AlertComponent {
    constructor() {
        this.mode = "success";
        this.close = true;
        this.bold = false;
        this.text = "ngx-alert-message";
        this.disabled = false;
    }
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: AlertComponent, isStandalone: true, selector: "ngx-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-alert-container ngx-alert-container-extended\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold  ? 'bold' : '500'\" [style.opacity]=\"disabled ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <span class=\"ngx-alert-close\" [hidden]=\"!close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n      <path fill=\"white\"\n        d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n    </svg>\n  </span>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-alert', standalone: true, template: "<div class=\"ngx-alert-container ngx-alert-container-extended\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold  ? 'bold' : '500'\" [style.opacity]=\"disabled ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <span class=\"ngx-alert-close\" [hidden]=\"!close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n      <path fill=\"white\"\n        d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n    </svg>\n  </span>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class JustAlertComponent {
    constructor() {
        this.mode = "success";
        this.close = true;
        this.bold = false;
        this.text = "ngx-just-alert-message";
        this.disabled = false;
    }
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = true;
        }
        console.log(this.mode, this.color);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: JustAlertComponent, isStandalone: true, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-alert-container\" [style.border]=\"'1px solid ' + color\" [style.color]=\"color\"\n  [style.fontWeight]=\"bold  ? 'bold' : '100'\" [style.opacity]=\"disabled  ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <div class=\"ngx-alert-close\" [style.background-color]=\"color\" [style.color]=\"'white'\">\n    <span class=\"closeIcon\" [hidden]=\"!close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n        <path fill=\"white\"\n          d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n      </svg>\n    </span>\n  </div>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', standalone: true, template: "<div class=\"ngx-alert-container\" [style.border]=\"'1px solid ' + color\" [style.color]=\"color\"\n  [style.fontWeight]=\"bold  ? 'bold' : '100'\" [style.opacity]=\"disabled  ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <div class=\"ngx-alert-close\" [style.background-color]=\"color\" [style.color]=\"'white'\">\n    <span class=\"closeIcon\" [hidden]=\"!close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n        <path fill=\"white\"\n          d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n      </svg>\n    </span>\n  </div>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-alert-message
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, JustAlertComponent, NgxAlertMessageComponent, NgxAlertMessageService };
//# sourceMappingURL=ngx-alert-message.mjs.map
