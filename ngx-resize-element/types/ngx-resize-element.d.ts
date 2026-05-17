import * as i0 from '@angular/core';
import { ElementRef } from '@angular/core';

declare class NgxResizeElementService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxResizeElementService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxResizeElementService>;
}

declare class NgxResizeElementComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxResizeElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxResizeElementComponent, "lib-ngx-resize-element", never, {}, {}, never, never, true, never>;
}

declare class NgxResizeElementDirective {
    private el;
    element: HTMLElement;
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxResizeElementDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxResizeElementDirective, "[ngxResize]", never, {}, {}, never, never, true, never>;
}

export { NgxResizeElementComponent, NgxResizeElementDirective, NgxResizeElementService };
