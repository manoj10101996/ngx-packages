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
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxSlightScrollDirective, "[ngxSlimScroll]", never, { "maxHeight": "maxHeight"; "minHeight": "minHeight"; "scrollBg": "scrollBg"; "scrollThumbBg": "scrollThumbBg"; "scrollThumbRadius": "scrollThumbRadius"; "scrollWidth": "scrollWidth"; "scrollBorder": "scrollBorder"; }, { "scrollEndEvent": "scrollEndEvent"; }, never, never, false, never>;
}
