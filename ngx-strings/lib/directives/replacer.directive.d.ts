import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ReplacerDirective {
    private el;
    private renderer;
    from: string;
    to: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplacerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReplacerDirective, "[ngxStringReplacer]", never, { "from": "from"; "to": "to"; }, {}, never, never, false, never>;
}
