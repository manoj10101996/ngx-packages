import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input } from '@angular/core';

class NgxTagsInputBoxService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsInputBoxService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsInputBoxService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsInputBoxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxTagsComponent {
    constructor() {
        this.limit = 25;
        this.rounded = false;
        this.disabled = false;
        this.tagsChange = new EventEmitter();
        this.tags = [];
    }
    ngOnInit() {
        this.limit = this.limit || 25;
        this.placeholder = this.placeholder + `( Maximum ${this.limit} )` || `Add tags ( Maximum ${this.limit} )`;
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
        else if (this.mode === 'light') {
            this.color = 'gray';
        }
        else {
            this.color = 'cornflowerblue';
        }
    }
    add(e) {
        if (this.tags.length < this.limit - 1) {
            this.tags.push(e.target.value);
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
        e.target.value = '';
        this.tagsChange.emit(this.tags);
    }
    remove(i) {
        this.tags.splice(i, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.8", type: NgxTagsComponent, isStandalone: true, selector: "ngx-tags-input", inputs: { limit: "limit", mode: "mode", placeholder: "placeholder", tags: "tags", rounded: "rounded", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n        <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n          >\n          {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n        </span>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 10px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px 10px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tags-input', standalone: true, imports: [], template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n        <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n          >\n          {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n        </span>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 10px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px 10px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { limit: [{
                type: Input
            }], mode: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], tags: [{
                type: Input
            }], rounded: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-tags-input-box
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTagsComponent, NgxTagsInputBoxService };
//# sourceMappingURL=ngx-tags-input-box.mjs.map
