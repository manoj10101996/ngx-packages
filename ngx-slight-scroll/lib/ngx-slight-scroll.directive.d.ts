import { AfterViewInit, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class NgxSlightScrollDirective implements AfterViewInit {
    private el;
    maxHeight: string;
    minHeight: string;
    scrollBg: string;
    scrollThumbBg: string;
    scrollThumbRadius: number;
    scrollWidth: number;
    scrollBorder: boolean;
    scrollEndEvent: EventEmitter<any>;
    element: HTMLElement;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSlightScrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxSlightScrollDirective, "[ngxSlimScroll]", never, { "maxHeight": { "alias": "maxHeight"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "scrollBg": { "alias": "scrollBg"; "required": false; }; "scrollThumbBg": { "alias": "scrollThumbBg"; "required": false; }; "scrollThumbRadius": { "alias": "scrollThumbRadius"; "required": false; }; "scrollWidth": { "alias": "scrollWidth"; "required": false; }; "scrollBorder": { "alias": "scrollBorder"; "required": false; }; }, { "scrollEndEvent": "scrollEndEvent"; }, never, never, true, never>;
}
