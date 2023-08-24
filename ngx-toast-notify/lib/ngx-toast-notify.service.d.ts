import { AnimationBuilder } from '@angular/animations';
import { RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ngxToastNotifyConfig {
    toastTimeoutInSeconds?: number;
    animationDelayInMilliSeconds?: number;
    enableClosebutton?: boolean;
    position?: string;
    backgroundColor?: string;
    textColor?: string;
}
export declare class NgxToastNotifyService {
    rendererFactory: RendererFactory2;
    private animationBuilder;
    private renderer;
    private toastConfig;
    constructor(rendererFactory: RendererFactory2, animationBuilder: AnimationBuilder, config?: ngxToastNotifyConfig);
    /**
     * showToast: Creates toast notification.
     * @param text: Toast text to be shown. - String
     * @param mode: Toast appearance as - primary | warning | danger | success | info  - String
     * @param position: Toast position at - top-left | top-right | bottom-left | bottom-right | top-center | bottom=
     */
    showToast(text: string, mode: string, position: string): void;
    private getTheme;
    private setPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxToastNotifyService, [null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxToastNotifyService>;
}
