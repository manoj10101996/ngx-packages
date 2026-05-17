import * as i0 from '@angular/core';
import { ElementRef, Renderer2, OnInit } from '@angular/core';

declare class NgxStringsService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxStringsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxStringsService>;
}

declare class NgxStringsComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxStringsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxStringsComponent, "lib-ngx-strings", never, {}, {}, never, never, true, never>;
}

declare class EmailcutDirective {
    private el;
    private renderer;
    invalid: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailcutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EmailcutDirective, "[ngxEmailSlicer]", never, { "invalid": { "alias": "invalid"; "required": false; }; }, {}, never, never, true, never>;
}

declare class InitialcaseDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<InitialcaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InitialcaseDirective, "[ngxInitialCase]", never, {}, {}, never, never, true, never>;
}

declare class LinelimitDirective implements OnInit {
    private el;
    private renderer;
    lines: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinelimitDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinelimitDirective, "[ngxLineLimit]", never, { "lines": { "alias": "lines"; "required": false; }; }, {}, never, never, true, never>;
}

declare class LowercaseDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<LowercaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LowercaseDirective, "[ngxLowerCase]", never, {}, {}, never, never, true, never>;
}

declare class ReplacerDirective {
    private el;
    private renderer;
    from: string;
    to: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplacerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReplacerDirective, "[ngxStringReplacer]", never, { "from": { "alias": "from"; "required": false; }; "to": { "alias": "to"; "required": false; }; }, {}, never, never, true, never>;
}

declare class StringcutDirective implements OnInit {
    private el;
    private renderer;
    start: number;
    end: number;
    overflow: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringcutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StringcutDirective, "[ngxStringSlicer]", never, { "start": { "alias": "start"; "required": false; }; "end": { "alias": "end"; "required": false; }; "overflow": { "alias": "overflow"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TitlecaseDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<TitlecaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TitlecaseDirective, "[ngxTitleCase]", never, {}, {}, never, never, true, never>;
}

declare class UppercaseDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<UppercaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UppercaseDirective, "[ngxUpperCase]", never, {}, {}, never, never, true, never>;
}

export { EmailcutDirective, InitialcaseDirective, LinelimitDirective, LowercaseDirective, NgxStringsComponent, NgxStringsService, ReplacerDirective, StringcutDirective, TitlecaseDirective, UppercaseDirective };
