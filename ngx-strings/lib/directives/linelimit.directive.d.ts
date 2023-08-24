import { ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LinelimitDirective implements OnInit {
    private el;
    private renderer;
    lines: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinelimitDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinelimitDirective, "[ngxLineLimit]", never, { "lines": "lines"; }, {}, never, never, false, never>;
}
