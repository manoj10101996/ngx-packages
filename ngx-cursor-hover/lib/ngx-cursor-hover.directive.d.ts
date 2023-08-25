import { AfterViewInit, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class NgxCursorHoverDirective implements AfterViewInit {
    private el;
    cursor: string;
    private element;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCursorHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxCursorHoverDirective, "[ngxCursor]", never, { "cursor": "cursor"; }, {}, never, never, false, never>;
}
