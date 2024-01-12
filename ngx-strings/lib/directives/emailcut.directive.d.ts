import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EmailcutDirective {
    private el;
    private renderer;
    invalid: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailcutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EmailcutDirective, "[ngxEmailSlicer]", never, { "invalid": { "alias": "invalid"; "required": false; }; }, {}, never, never, true, never>;
}
