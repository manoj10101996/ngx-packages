import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input } from '@angular/core';

class NgxStringsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxStringsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxStringsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxStringsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxStringsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxStringsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: NgxStringsComponent, isStandalone: true, selector: "lib-ngx-strings", ngImport: i0, template: `
    <p>
      ngx-strings works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxStringsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-strings', template: `
    <p>
      ngx-strings works!
    </p>
  `, standalone: true }]
        }] });

class EmailcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            let email = actualText.split('@');
            let pre = '';
            let post = '';
            pre = email[0].trim();
            post = email[1].trim();
            pre = pre.slice(0, -5);
            post = post.substr(1, post.length);
            this.el.nativeElement.textContent = pre + '****' + post;
        }
        else {
            this.el.nativeElement.textContent = this.invalid;
            this.renderer.setStyle(this.el.nativeElement, 'color', 'crimson');
            this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: EmailcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: EmailcutDirective, isStandalone: true, selector: "[ngxEmailSlicer]", inputs: { invalid: "invalid" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: EmailcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxEmailSlicer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { invalid: [{
                type: Input
            }] } });

class InitialcaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'initial');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitialcaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: InitialcaseDirective, isStandalone: true, selector: "[ngxInitialCase]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: InitialcaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxInitialCase]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });

class LinelimitDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
        this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', this.lines);
        this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: LinelimitDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: LinelimitDirective, isStandalone: true, selector: "[ngxLineLimit]", inputs: { lines: "lines" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: LinelimitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxLineLimit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { lines: [{
                type: Input
            }] } });

class LowercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'lowercase');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: LowercaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: LowercaseDirective, isStandalone: true, selector: "[ngxLowerCase]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: LowercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxLowerCase]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });

class ReplacerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let find = this.from;
        let re = new RegExp(find, 'g');
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ReplacerDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: ReplacerDirective, isStandalone: true, selector: "[ngxStringReplacer]", inputs: { from: "from", to: "to" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ReplacerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringReplacer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { from: [{
                type: Input
            }], to: [{
                type: Input
            }] } });

class StringcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + '...';
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: StringcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: StringcutDirective, isStandalone: true, selector: "[ngxStringSlicer]", inputs: { start: "start", end: "end", overflow: "overflow" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: StringcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringSlicer]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { start: [{
                type: Input
            }], end: [{
                type: Input
            }], overflow: [{
                type: Input
            }] } });

class TitlecaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'capitalize');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: TitlecaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: TitlecaseDirective, isStandalone: true, selector: "[ngxTitleCase]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: TitlecaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxTitleCase]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });

class UppercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'uppercase');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: UppercaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: UppercaseDirective, isStandalone: true, selector: "[ngxUpperCase]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: UppercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxUpperCase]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });

/*
 * Public API Surface of ngx-strings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailcutDirective, InitialcaseDirective, LinelimitDirective, LowercaseDirective, NgxStringsComponent, NgxStringsService, ReplacerDirective, StringcutDirective, TitlecaseDirective, UppercaseDirective };
//# sourceMappingURL=ngx-strings.mjs.map
