import { animate, style } from '@angular/animations';
import { Injectable, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
export class ngxToastNotifyConfig {
}
export class NgxToastNotifyService {
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
}
NgxToastNotifyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyService, deps: [{ token: i0.RendererFactory2 }, { token: i1.AnimationBuilder }, { token: ngxToastNotifyConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
NgxToastNotifyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxToastNotifyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }, { type: i1.AnimationBuilder }, { type: ngxToastNotifyConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0LW5vdGlmeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRvYXN0LW5vdGlmeS9zcmMvbGliL25neC10b2FzdC1ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFvQixLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsR0FHVCxNQUFNLGVBQWUsQ0FBQzs7O0FBTXZCLE1BQU0sT0FBTyxvQkFBb0I7Q0FPaEM7QUFLRCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQ1MsZUFBaUMsRUFDaEMsZ0JBQWtDLEVBQzlCLE1BQTZCO1FBRmxDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzFDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQzNELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixjQUFjLEVBQ2QsSUFBSSxFQUNKLDZCQUE2QixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FDOUMsQ0FBQyxDQUFDLDZDQUE2QztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3pE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QUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLFFBQVEsS0FBSyxZQUFZLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3pFO2FBQU0sSUFBSSxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztrSEFyTlUscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uQnVpbGRlciwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW50ZXJmYWNlIFRIRU1FIHtcbiAgY29sb3I6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3Mgbmd4VG9hc3ROb3RpZnlDb25maWcge1xuICB0b2FzdFRpbWVvdXRJblNlY29uZHM/OiBudW1iZXI7XG4gIGFuaW1hdGlvbkRlbGF5SW5NaWxsaVNlY29uZHM/OiBudW1iZXI7XG4gIGVuYWJsZUNsb3NlYnV0dG9uPzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VG9hc3ROb3RpZnlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHRvYXN0Q29uZmlnOiBuZ3hUb2FzdE5vdGlmeUNvbmZpZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgQE9wdGlvbmFsKCkgY29uZmlnPzogbmd4VG9hc3ROb3RpZnlDb25maWdcbiAgKSB7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgdGhpcy50b2FzdENvbmZpZyA9IGNvbmZpZztcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaG93VG9hc3Q6IENyZWF0ZXMgdG9hc3Qgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gdGV4dDogVG9hc3QgdGV4dCB0byBiZSBzaG93bi4gLSBTdHJpbmdcbiAgICogQHBhcmFtIG1vZGU6IFRvYXN0IGFwcGVhcmFuY2UgYXMgLSBwcmltYXJ5IHwgd2FybmluZyB8IGRhbmdlciB8IHN1Y2Nlc3MgfCBpbmZvICAtIFN0cmluZ1xuICAgKiBAcGFyYW0gcG9zaXRpb246IFRvYXN0IHBvc2l0aW9uIGF0IC0gdG9wLWxlZnQgfCB0b3AtcmlnaHQgfCBib3R0b20tbGVmdCB8IGJvdHRvbS1yaWdodCB8IHRvcC1jZW50ZXIgfCBib3R0b209XG4gICAqL1xuICBwdWJsaWMgc2hvd1RvYXN0KHRleHQ6IHN0cmluZywgbW9kZTogc3RyaW5nLCBwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgbGV0IGFsZXJ0Q29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gU2V0IHRoZSBpZCBvZiB0aGUgZGl2XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgIGFsZXJ0Q29udGFpbmVyLFxuICAgICAgJ2lkJyxcbiAgICAgICduZ3gtdG9hc3Qtbm90aWZ5LWNvbnRhaW5lci0nICsgTWF0aC5yYW5kb20oKVxuICAgICk7IC8vIEFwcGVuZCB0aGUgY3JlYXRlZCBkaXYgdG8gdGhlIGJvZHkgZWxlbWVudFxuXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBhbGVydENvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3dpZHRoJywgJzI3NXB4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGFsZXJ0Q29udGFpbmVyLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgdGhpcy50b2FzdENvbmZpZy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5nZXRUaGVtZShtb2RlKS5jb2xvclxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGFsZXJ0Q29udGFpbmVyLFxuICAgICAgJ2NvbG9yJyxcbiAgICAgIHRoaXMudG9hc3RDb25maWcudGV4dENvbG9yIHx8IHRoaXMuZ2V0VGhlbWUobW9kZSkudGV4dFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3RleHQtYWxpZ24nLCAnbGVmdCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdib3JkZXItcmFkaXVzJywgJzVweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdwYWRkaW5nJywgJzE2cHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnei1pbmRleCcsICcxJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2hlaWdodCcsICdmaXQtY29udGVudCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdsaW5lLWhlaWdodCcsICcxLjVyZW0nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2FsaWduLWl0ZW1zJywgJ2NlbnRlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdqdXN0aWZ5LWNvbnRlbnQnLCAnc3BhY2UtYmV0d2VlbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBhbGVydENvbnRhaW5lcixcbiAgICAgICdib3gtc2hhZG93JyxcbiAgICAgICcwcHggMHB4IDEwcHggMnB4ICNkOWQ5ZDknXG4gICAgKTtcblxuICAgIGNvbnN0IGxvYWRlckZhZGVJbkFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlci5idWlsZChbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICBhbmltYXRlKFxuICAgICAgICB0aGlzLnRvYXN0Q29uZmlnLmFuaW1hdGlvbkRlbGF5SW5NaWxsaVNlY29uZHMgfHwgNTAwIDwgMTAwXG4gICAgICAgICAgPyA1MDBcbiAgICAgICAgICA6IHRoaXMudG9hc3RDb25maWcuYW5pbWF0aW9uRGVsYXlJbk1pbGxpU2Vjb25kcyB8fCAwLFxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSlcbiAgICAgICksXG4gICAgXSk7XG5cbiAgICBjb25zdCBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgIGFuaW1hdGUoXG4gICAgICAgIHRoaXMudG9hc3RDb25maWcuYW5pbWF0aW9uRGVsYXlJbk1pbGxpU2Vjb25kcyB8fCA1MDAgPCAxMDBcbiAgICAgICAgICA/IDUwMFxuICAgICAgICAgIDogdGhpcy50b2FzdENvbmZpZy5hbmltYXRpb25EZWxheUluTWlsbGlTZWNvbmRzIHx8IDAsXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KVxuICAgICAgKSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGxvYWRlckZhZGVJbkFuaW1hdGlvblBsYXllciA9XG4gICAgICBsb2FkZXJGYWRlSW5BbmltYXRpb24uY3JlYXRlKGFsZXJ0Q29udGFpbmVyKTtcbiAgICBjb25zdCBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uUGxheWVyID1cbiAgICAgIGxvYWRlckZhZGVPdXRBbmltYXRpb24uY3JlYXRlKGFsZXJ0Q29udGFpbmVyKTtcblxuICAgIGxvYWRlckZhZGVJbkFuaW1hdGlvblBsYXllci5wbGF5KCk7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uLCBhbGVydENvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShhbGVydENvbnRhaW5lciwgJ2lubmVySFRNTCcsIHRleHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLmVuYWJsZUNsb3NlYnV0dG9uKSB7XG4gICAgICBsZXQgY2xvc2VCdXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgY2xvc2VCdXR0b24sXG4gICAgICAgICdpZCcsXG4gICAgICAgICduZ3gtdG9hc3Qtbm90aWZ5LWNsb3NlLXN2Zy0nICsgTWF0aC5yYW5kb20oKVxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2xvc2VCdXR0b24sICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2xvc2VCdXR0b24sICdwYWRkaW5nJywgJzAuMjVyZW0gMC41cmVtJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgJ2lubmVySFRNTCcsXG4gICAgICAgIGA8c3ZnIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnL3RoaXMuY29uZmlnLmFuaW1hdGlvbkRlbGF5SW5NaWxsaVNlY29uZHMwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAxNTM2IDE1MzZcIj48cGF0aCBkPVwiTTExNDkgOTk0cTAtMjYtMTktNDVMOTQ5IDc2OGwxODEtMTgxcTE5LTE5IDE5LTQ1cTAtMjctMTktNDZsLTkwLTkwcS0xOS0xOS00Ni0xOXEtMjYgMC00NSAxOUw3NjggNTg3TDU4NyA0MDZxLTE5LTE5LTQ1LTE5cS0yNyAwLTQ2IDE5bC05MCA5MHEtMTkgMTktMTkgNDZxMCAyNiAxOSA0NWwxODEgMTgxbC0xODEgMTgxcS0xOSAxOS0xOSA0NXEwIDI3IDE5IDQ2bDkwIDkwcTE5IDE5IDQ2IDE5cTI2IDAgNDUtMTlsMTgxLTE4MWwxODEgMTgxcTE5IDE5IDQ1IDE5cTI3IDAgNDYtMTlsOTAtOTBxMTktMTkgMTktNDZ6bTM4Ny0yMjZxMCAyMDktMTAzIDM4NS41VDExNTMuNSAxNDMzVDc2OCAxNTM2dC0zODUuNS0xMDNUMTAzIDExNTMuNVQwIDc2OHQxMDMtMzg1LjVUMzgyLjUgMTAzVDc2OCAwdDM4NS41IDEwM1QxNDMzIDM4Mi41VDE1MzYgNzY4elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+YFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYWxlcnRDb250YWluZXIsIGNsb3NlQnV0dG9uKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xvc2VCdXR0b24sICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uUGxheWVyLnBsYXkoKTtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIGFsZXJ0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgYWxlcnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLnRvYXN0Q29uZmlnLmFuaW1hdGlvbkRlbGF5SW5NaWxsaVNlY29uZHMgfHwgNTAwIDwgMTAwXG4gICAgICAgICAgICA/IDUwMFxuICAgICAgICAgICAgOiB0aGlzLnRvYXN0Q29uZmlnLmFuaW1hdGlvbkRlbGF5SW5NaWxsaVNlY29uZHNcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9hZGVyRmFkZU91dEFuaW1hdGlvblBsYXllci5wbGF5KCk7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBhbGVydENvbnRhaW5lcik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5kZXN0cm95KCk7XG4gICAgICAgICAgYWxlcnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMudG9hc3RDb25maWcuYW5pbWF0aW9uRGVsYXlJbk1pbGxpU2Vjb25kcyB8fCA1MDAgPCAxMDBcbiAgICAgICAgICA/IDUwMFxuICAgICAgICAgIDogdGhpcy50b2FzdENvbmZpZy5hbmltYXRpb25EZWxheUluTWlsbGlTZWNvbmRzXG4gICAgICApO1xuICAgIH0sIDEwMDAgKiAodGhpcy50b2FzdENvbmZpZy50b2FzdFRpbWVvdXRJblNlY29uZHMgfHwgNSkgfHwgNSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRoZW1lKG1vZGU6IHN0cmluZyA9ICdwcmltYXJ5Jyk6IFRIRU1FIHtcbiAgICBtb2RlID0gbW9kZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjMDI3NWQ4JyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xvcjogJyM1Y2I4NWMnLFxuICAgICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbG9yOiAnIzViYzBkZScsXG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjZjBhZDRlJyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbGlnaHQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgdGV4dDogJyMwMDAnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9zaXRpb24ocG9zaXRpb246IHN0cmluZyA9ICdib3R0b20tcmlnaHQnLCBhbGVydENvbnRhaW5lcjogYW55KSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3RvcCcsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdsZWZ0JywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbicsICcxLjVyZW0nKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAndG9wLXJpZ2h0Jykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3RvcCcsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdyaWdodCcsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdtYXJnaW4nLCAnMS41cmVtJyk7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2JvdHRvbScsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdsZWZ0JywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbicsICcxLjVyZW0nKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2JvdHRvbScsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdyaWdodCcsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdtYXJnaW4nLCAnMS41cmVtJyk7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3RvcC1jZW50ZXInKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndG9wJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2xlZnQnLCAnNTAlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnbWFyZ2luLXRvcCcsICcxLjVyZW0nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtNTAlKScpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdib3R0b20tY2VudGVyJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2JvdHRvbScsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdsZWZ0JywgJzUwJScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbi1ib3R0b20nLCAnMS41cmVtJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTUwJSknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2JvdHRvbScsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdyaWdodCcsICcwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdtYXJnaW4nLCAnMS41cmVtJyk7XG4gICAgfVxuICB9XG59XG4iXX0=