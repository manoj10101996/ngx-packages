import { ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class StringcutDirective implements OnInit {
    private el;
    private renderer;
    start: number;
    end: number;
    overflow: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringcutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StringcutDirective, "[ngxStringSlicer]", never, { "start": "start"; "end": "end"; "overflow": "overflow"; }, {}, never, never, false, never>;
}
