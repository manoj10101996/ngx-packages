import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule } from '@angular/core';

class NgxStringsService {
    constructor() { }
}
NgxStringsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxStringsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxStringsComponent {
}
NgxStringsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxStringsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxStringsComponent, selector: "lib-ngx-strings", ngImport: i0, template: `
    <p>
      ngx-strings works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-strings', template: `
    <p>
      ngx-strings works!
    </p>
  ` }]
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
}
EmailcutDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EmailcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
EmailcutDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: EmailcutDirective, selector: "[ngxEmailSlicer]", inputs: { invalid: "invalid" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EmailcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxEmailSlicer]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { invalid: [{
                type: Input
            }] } });

class InitialcaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'initial');
    }
}
InitialcaseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: InitialcaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
InitialcaseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: InitialcaseDirective, selector: "[ngxInitialCase]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: InitialcaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxInitialCase]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

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
}
LinelimitDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LinelimitDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
LinelimitDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: LinelimitDirective, selector: "[ngxLineLimit]", inputs: { lines: "lines" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LinelimitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxLineLimit]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { lines: [{
                type: Input
            }] } });

class LowercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'lowercase');
    }
}
LowercaseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LowercaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
LowercaseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: LowercaseDirective, selector: "[ngxLowerCase]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LowercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxLowerCase]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

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
}
ReplacerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ReplacerDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
ReplacerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: ReplacerDirective, selector: "[ngxStringReplacer]", inputs: { from: "from", to: "to" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ReplacerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringReplacer]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { from: [{
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
}
StringcutDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StringcutDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
StringcutDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: StringcutDirective, selector: "[ngxStringSlicer]", inputs: { start: "start", end: "end", overflow: "overflow" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StringcutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxStringSlicer]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { start: [{
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
}
TitlecaseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TitlecaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
TitlecaseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: TitlecaseDirective, selector: "[ngxTitleCase]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TitlecaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxTitleCase]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class UppercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'uppercase');
    }
}
UppercaseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UppercaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
UppercaseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: UppercaseDirective, selector: "[ngxUpperCase]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UppercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxUpperCase]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class NgxStringsModule {
}
NgxStringsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxStringsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsModule, declarations: [NgxStringsComponent,
        UppercaseDirective,
        LowercaseDirective,
        TitlecaseDirective,
        InitialcaseDirective,
        LinelimitDirective,
        StringcutDirective,
        EmailcutDirective,
        ReplacerDirective], exports: [NgxStringsComponent,
        UppercaseDirective,
        LowercaseDirective,
        TitlecaseDirective,
        InitialcaseDirective,
        LinelimitDirective,
        StringcutDirective,
        EmailcutDirective,
        ReplacerDirective] });
NgxStringsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxStringsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxStringsComponent,
                        UppercaseDirective,
                        LowercaseDirective,
                        TitlecaseDirective,
                        InitialcaseDirective,
                        LinelimitDirective,
                        StringcutDirective,
                        EmailcutDirective,
                        ReplacerDirective
                    ],
                    imports: [],
                    exports: [
                        NgxStringsComponent,
                        UppercaseDirective,
                        LowercaseDirective,
                        TitlecaseDirective,
                        InitialcaseDirective,
                        LinelimitDirective,
                        StringcutDirective,
                        EmailcutDirective,
                        ReplacerDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-strings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmailcutDirective, InitialcaseDirective, LinelimitDirective, LowercaseDirective, NgxStringsComponent, NgxStringsModule, NgxStringsService, ReplacerDirective, StringcutDirective, TitlecaseDirective, UppercaseDirective };
//# sourceMappingURL=ngx-strings.mjs.map
