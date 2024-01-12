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
    static ɵdir: i0.ɵɵDirectiveDeclaration<StringcutDirective, "[ngxStringSlicer]", never, { "start": { "alias": "start"; "required": false; }; "end": { "alias": "end"; "required": false; }; "overflow": { "alias": "overflow"; "required": false; }; }, {}, never, never, true, never>;
}
