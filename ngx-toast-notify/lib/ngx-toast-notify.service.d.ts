import { AnimationBuilder } from '@angular/animations';
import { RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxToastNotifyService {
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
