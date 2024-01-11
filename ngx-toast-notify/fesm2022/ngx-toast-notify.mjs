import * as i1 from '@angular/animations';
import { style, animate } from '@angular/animations';
import * as i0 from '@angular/core';
import { Injectable, Optional, Component, NgModule, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class ngxToastNotifyConfig {
}
class NgxToastNotifyService {
    constructor(rendererFactory, animationBuilder, config) {
        this.rendererFactory = rendererFactory;
        this.animationBuilder = animationBuilder;
        if (config) {
            this.toastConfig = config;
        }
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * showToast: Creates toast notification.
     * @param text: Toast text to be shown. - String
     * @param mode: Toast appearance as - primary | warning | danger | success | info  - String
     * @param position: Toast position at - top-left | top-right | bottom-left | bottom-right | top-center | bottom=
     */
    showToast(text, mode, position) {
        let alertContainer = this.renderer.createElement('div'); // Set the id of the div
        this.renderer.setProperty(alertContainer, 'id', 'ngx-toast-notify-container-' + Math.random()); // Append the created div to the body element
        this.renderer.appendChild(document.body, alertContainer);
        this.renderer.setStyle(alertContainer, 'visibility', 'hidden');
        this.renderer.setStyle(alertContainer, 'width', '275px');
        this.renderer.setStyle(alertContainer, 'background-color', this.toastConfig.backgroundColor || this.getTheme(mode).color);
        this.renderer.setStyle(alertContainer, 'color', this.toastConfig.textColor || this.getTheme(mode).text);
        this.renderer.setStyle(alertContainer, 'text-align', 'left');
        this.renderer.setStyle(alertContainer, 'border-radius', '5px');
        this.renderer.setStyle(alertContainer, 'padding', '16px');
        this.renderer.setStyle(alertContainer, 'z-index', '1');
        this.renderer.setStyle(alertContainer, 'position', 'fixed');
        this.renderer.setStyle(alertContainer, 'height', 'fit-content');
        this.renderer.setStyle(alertContainer, 'line-height', '1.5rem');
        this.renderer.setStyle(alertContainer, 'display', 'flex');
        this.renderer.setStyle(alertContainer, 'align-items', 'center');
        this.renderer.setStyle(alertContainer, 'justify-content', 'space-between');
        this.renderer.setStyle(alertContainer, 'box-shadow', '0px 0px 10px 2px #d9d9d9');
        const loaderFadeInAnimation = this.animationBuilder.build([
            style({ opacity: 0 }),
            animate(this.toastConfig.animationDelayInMilliSeconds || 500 < 100
                ? 500
                : this.toastConfig.animationDelayInMilliSeconds || 0, style({ opacity: 1 })),
        ]);
        const loaderFadeOutAnimation = this.animationBuilder.build([
            style({ opacity: 1 }),
            animate(this.toastConfig.animationDelayInMilliSeconds || 500 < 100
                ? 500
                : this.toastConfig.animationDelayInMilliSeconds || 0, style({ opacity: 0 })),
        ]);
        const loaderFadeInAnimationPlayer = loaderFadeInAnimation.create(alertContainer);
        const loaderFadeOutAnimationPlayer = loaderFadeOutAnimation.create(alertContainer);
        loaderFadeInAnimationPlayer.play();
        this.setPosition(position, alertContainer);
        this.renderer.setProperty(alertContainer, 'innerHTML', text);
        this.renderer.setStyle(alertContainer, 'visibility', 'visible');
        if (this.toastConfig.enableClosebutton) {
            let closeButton = this.renderer.createElement('div');
            this.renderer.setProperty(closeButton, 'id', 'ngx-toast-notify-close-svg-' + Math.random());
            this.renderer.setStyle(closeButton, 'display', 'flex');
            this.renderer.setStyle(closeButton, 'padding', '0.25rem 0.5rem');
            this.renderer.setProperty(closeButton, 'innerHTML', `<svg style="cursor:pointer" xmlns="http://www.w3.org/this.config.animationDelayInMilliSeconds0/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1536"><path d="M1149 994q0-26-19-45L949 768l181-181q19-19 19-45q0-27-19-46l-90-90q-19-19-46-19q-26 0-45 19L768 587L587 406q-19-19-45-19q-27 0-46 19l-90 90q-19 19-19 46q0 26 19 45l181 181l-181 181q-19 19-19 45q0 27 19 46l90 90q19 19 46 19q26 0 45-19l181-181l181 181q19 19 45 19q27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768z" fill="currentColor"/></svg>`);
            this.renderer.appendChild(alertContainer, closeButton);
            this.renderer.listen(closeButton, 'click', (event) => {
                loaderFadeOutAnimationPlayer.play();
                setTimeout(() => {
                    this.renderer.removeChild(document.body, alertContainer);
                    this.renderer.destroy();
                    alertContainer.remove();
                }, this.toastConfig.animationDelayInMilliSeconds || 500 < 100
                    ? 500
                    : this.toastConfig.animationDelayInMilliSeconds);
            });
        }
        setTimeout(() => {
            loaderFadeOutAnimationPlayer.play();
            setTimeout(() => {
                this.renderer.removeChild(document.body, alertContainer);
                this.renderer.destroy();
                alertContainer.remove();
            }, this.toastConfig.animationDelayInMilliSeconds || 500 < 100
                ? 500
                : this.toastConfig.animationDelayInMilliSeconds);
        }, 1000 * (this.toastConfig.toastTimeoutInSeconds || 5) || 5);
    }
    getTheme(mode = 'primary') {
        mode = mode.toLocaleLowerCase();
        switch (mode) {
            case 'primary':
                return {
                    color: '#0275d8',
                    text: '#fff',
                };
            case 'success':
                return {
                    color: '#5cb85c',
                    text: '#fff',
                };
            case 'info':
                return {
                    color: '#5bc0de',
                    text: '#fff',
                };
            case 'warning':
                return {
                    color: '#f0ad4e',
                    text: '#fff',
                };
            case 'danger':
                return {
                    color: '#d9534f',
                    text: '#fff',
                };
            case 'light':
                return {
                    color: '#fff',
                    text: '#000',
                };
            case 'dark':
                return {
                    color: '#000',
                    text: '#fff',
                };
            default:
                return {
                    color: '#000',
                    text: '#fff',
                };
        }
    }
    setPosition(position = 'bottom-right', alertContainer) {
        position = position.toLocaleLowerCase();
        if (position === 'top-left') {
            this.renderer.setStyle(alertContainer, 'top', '0px');
            this.renderer.setStyle(alertContainer, 'left', '0px');
            this.renderer.setStyle(alertContainer, 'margin', '1.5rem');
        }
        else if (position === 'top-right') {
            this.renderer.setStyle(alertContainer, 'top', '0px');
            this.renderer.setStyle(alertContainer, 'right', '0px');
            this.renderer.setStyle(alertContainer, 'margin', '1.5rem');
        }
        else if (position === 'bottom-left') {
            this.renderer.setStyle(alertContainer, 'bottom', '0px');
            this.renderer.setStyle(alertContainer, 'left', '0px');
            this.renderer.setStyle(alertContainer, 'margin', '1.5rem');
        }
        else if (position === 'bottom-right') {
            this.renderer.setStyle(alertContainer, 'bottom', '0px');
            this.renderer.setStyle(alertContainer, 'right', '0px');
            this.renderer.setStyle(alertContainer, 'margin', '1.5rem');
        }
        else if (position === 'top-center') {
            this.renderer.setStyle(alertContainer, 'top', '0px');
            this.renderer.setStyle(alertContainer, 'left', '50%');
            this.renderer.setStyle(alertContainer, 'margin-top', '1.5rem');
            this.renderer.setStyle(alertContainer, 'transform', 'translateX(-50%)');
        }
        else if (position === 'bottom-center') {
            this.renderer.setStyle(alertContainer, 'bottom', '0px');
            this.renderer.setStyle(alertContainer, 'left', '50%');
            this.renderer.setStyle(alertContainer, 'margin-bottom', '1.5rem');
            this.renderer.setStyle(alertContainer, 'transform', 'translateX(-50%)');
        }
        else {
            this.renderer.setStyle(alertContainer, 'bottom', '0px');
            this.renderer.setStyle(alertContainer, 'right', '0px');
            this.renderer.setStyle(alertContainer, 'margin', '1.5rem');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyService, deps: [{ token: i0.RendererFactory2 }, { token: i1.AnimationBuilder }, { token: ngxToastNotifyConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i0.RendererFactory2 }, { type: i1.AnimationBuilder }, { type: ngxToastNotifyConfig, decorators: [{
                    type: Optional
                }] }] });

class NgxToastNotifyComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: NgxToastNotifyComponent, selector: "lib-ngx-toast-notify", ngImport: i0, template: `
    <p>
      ngx-toast-notify works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-toast-notify', template: `
    <p>
      ngx-toast-notify works!
    </p>
  ` }]
        }] });

class NgxToastNotifyModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxToastNotifyModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NgxToastNotifyModule,
            providers: [{ provide: ngxToastNotifyConfig, useValue: config }],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyModule, deps: [{ token: NgxToastNotifyModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyModule, imports: [BrowserAnimationsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxToastNotifyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [BrowserAnimationsModule],
                    exports: [],
                }]
        }], ctorParameters: () => [{ type: NgxToastNotifyModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });

/*
 * Public API Surface of ngx-toast-notify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxToastNotifyComponent, NgxToastNotifyModule, NgxToastNotifyService, ngxToastNotifyConfig };
//# sourceMappingURL=ngx-toast-notify.mjs.map
