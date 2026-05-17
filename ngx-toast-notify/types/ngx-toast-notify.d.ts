import { AnimationBuilder } from '@angular/animations';
import * as i0 from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import * as i1 from '@angular/platform-browser/animations';

declare class NgxToastNotifyService {
    rendererFactory: RendererFactory2;
    private animationBuilder;
    private renderer;
    constructor(rendererFactory: RendererFactory2, animationBuilder: AnimationBuilder);
    /**
     * showToast: Creates toast notification.
     * @param text: Toast text to be shown. - String
     * @param mode: Toast appearance as - primary | warning | danger | success | info  - String
     * @param position: Toast position at - top-left | top-right | bottom-left | bottom-right | top-center | bottom=
     */
    showToast(text: string, mode: string, position: string): void;
    private getTheme;
    private setPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxToastNotifyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxToastNotifyService>;
}

declare class NgxToastNotifyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxToastNotifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxToastNotifyComponent, "lib-ngx-toast-notify", never, {}, {}, never, never, true, never>;
}

declare class NgxToastNotifyModule {
    constructor(parentModule?: NgxToastNotifyModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxToastNotifyModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxToastNotifyModule, never, [typeof i1.BrowserAnimationsModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxToastNotifyModule>;
}

export { NgxToastNotifyComponent, NgxToastNotifyModule, NgxToastNotifyService };
