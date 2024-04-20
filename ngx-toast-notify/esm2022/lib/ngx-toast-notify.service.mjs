import { animate, style } from '@angular/animations';
import { Injectable, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
export class NgxToastNotifyService {
    constructor(rendererFactory, animationBuilder) {
        this.rendererFactory = rendererFactory;
        this.animationBuilder = animationBuilder;
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
        this.renderer.setStyle(alertContainer, 'background-color', this.getTheme(mode).color);
        this.renderer.setStyle(alertContainer, 'color', this.getTheme(mode).text);
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
            animate(500, style({ opacity: 1 })),
        ]);
        const loaderFadeOutAnimation = this.animationBuilder.build([
            style({ opacity: 1 }),
            animate(500, style({ opacity: 0 })),
        ]);
        const loaderFadeInAnimationPlayer = loaderFadeInAnimation.create(alertContainer);
        const loaderFadeOutAnimationPlayer = loaderFadeOutAnimation.create(alertContainer);
        loaderFadeInAnimationPlayer.play();
        this.setPosition(position, alertContainer);
        this.renderer.setProperty(alertContainer, 'innerHTML', text);
        this.renderer.setStyle(alertContainer, 'visibility', 'visible');
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
            }, 500);
        });
        setTimeout(() => {
            loaderFadeOutAnimationPlayer.play();
            setTimeout(() => {
                this.renderer.removeChild(document.body, alertContainer);
                this.renderer.destroy();
                alertContainer.remove();
            }, 500);
        }, 1000 * 5);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyService, deps: [{ token: i0.RendererFactory2 }, { token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxToastNotifyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i0.RendererFactory2 }, { type: i1.AnimationBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0LW5vdGlmeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRvYXN0LW5vdGlmeS9zcmMvbGliL25neC10b2FzdC1ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFvQixLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsVUFBVSxHQUlYLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkIsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNTLGVBQWlDLEVBQ2hDLGdCQUFrQztRQURuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQzNELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixjQUFjLEVBQ2QsSUFBSSxFQUNKLDZCQUE2QixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FDOUMsQ0FBQyxDQUFDLDZDQUE2QztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFF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Y0FBYyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs4R0FoTVUscUJBQXFCO2tIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkJ1aWxkZXIsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmludGVyZmFjZSBUSEVNRSB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUb2FzdE5vdGlmeVNlcnZpY2Uge1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJpdmF0ZSBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogc2hvd1RvYXN0OiBDcmVhdGVzIHRvYXN0IG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHRleHQ6IFRvYXN0IHRleHQgdG8gYmUgc2hvd24uIC0gU3RyaW5nXG4gICAqIEBwYXJhbSBtb2RlOiBUb2FzdCBhcHBlYXJhbmNlIGFzIC0gcHJpbWFyeSB8IHdhcm5pbmcgfCBkYW5nZXIgfCBzdWNjZXNzIHwgaW5mbyAgLSBTdHJpbmdcbiAgICogQHBhcmFtIHBvc2l0aW9uOiBUb2FzdCBwb3NpdGlvbiBhdCAtIHRvcC1sZWZ0IHwgdG9wLXJpZ2h0IHwgYm90dG9tLWxlZnQgfCBib3R0b20tcmlnaHQgfCB0b3AtY2VudGVyIHwgYm90dG9tPVxuICAgKi9cbiAgcHVibGljIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcsIG1vZGU6IHN0cmluZywgcG9zaXRpb246IHN0cmluZykge1xuICAgIGxldCBhbGVydENvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIFNldCB0aGUgaWQgb2YgdGhlIGRpdlxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICBhbGVydENvbnRhaW5lcixcbiAgICAgICdpZCcsXG4gICAgICAnbmd4LXRvYXN0LW5vdGlmeS1jb250YWluZXItJyArIE1hdGgucmFuZG9tKClcbiAgICApOyAvLyBBcHBlbmQgdGhlIGNyZWF0ZWQgZGl2IHRvIHRoZSBib2R5IGVsZW1lbnRcblxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgYWxlcnRDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd3aWR0aCcsICcyNzVweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBhbGVydENvbnRhaW5lcixcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRUaGVtZShtb2RlKS5jb2xvclxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGFsZXJ0Q29udGFpbmVyLFxuICAgICAgJ2NvbG9yJywgdGhpcy5nZXRUaGVtZShtb2RlKS50ZXh0XG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndGV4dC1hbGlnbicsICdsZWZ0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2JvcmRlci1yYWRpdXMnLCAnNXB4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3BhZGRpbmcnLCAnMTZweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd6LWluZGV4JywgJzEnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnaGVpZ2h0JywgJ2ZpdC1jb250ZW50Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2xpbmUtaGVpZ2h0JywgJzEuNXJlbScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2p1c3RpZnktY29udGVudCcsICdzcGFjZS1iZXR3ZWVuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGFsZXJ0Q29udGFpbmVyLFxuICAgICAgJ2JveC1zaGFkb3cnLFxuICAgICAgJzBweCAwcHggMTBweCAycHggI2Q5ZDlkOSdcbiAgICApO1xuXG4gICAgY29uc3QgbG9hZGVyRmFkZUluQW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSlcbiAgICAgICksXG4gICAgXSk7XG5cbiAgICBjb25zdCBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyLmJ1aWxkKFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSlcbiAgICAgICksXG4gICAgXSk7XG5cbiAgICBjb25zdCBsb2FkZXJGYWRlSW5BbmltYXRpb25QbGF5ZXIgPVxuICAgICAgbG9hZGVyRmFkZUluQW5pbWF0aW9uLmNyZWF0ZShhbGVydENvbnRhaW5lcik7XG4gICAgY29uc3QgbG9hZGVyRmFkZU91dEFuaW1hdGlvblBsYXllciA9XG4gICAgICBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uLmNyZWF0ZShhbGVydENvbnRhaW5lcik7XG5cbiAgICBsb2FkZXJGYWRlSW5BbmltYXRpb25QbGF5ZXIucGxheSgpO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbiwgYWxlcnRDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoYWxlcnRDb250YWluZXIsICdpbm5lckhUTUwnLCB0ZXh0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICBsZXQgY2xvc2VCdXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICdpZCcsXG4gICAgICAnbmd4LXRvYXN0LW5vdGlmeS1jbG9zZS1zdmctJyArIE1hdGgucmFuZG9tKClcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2xvc2VCdXR0b24sICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNsb3NlQnV0dG9uLCAncGFkZGluZycsICcwLjI1cmVtIDAuNXJlbScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICdpbm5lckhUTUwnLFxuICAgICAgYDxzdmcgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvdGhpcy5jb25maWcuYW5pbWF0aW9uRGVsYXlJbk1pbGxpU2Vjb25kczAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2aWV3Qm94PVwiMCAwIDE1MzYgMTUzNlwiPjxwYXRoIGQ9XCJNMTE0OSA5OTRxMC0yNi0xOS00NUw5NDkgNzY4bDE4MS0xODFxMTktMTkgMTktNDVxMC0yNy0xOS00NmwtOTAtOTBxLTE5LTE5LTQ2LTE5cS0yNiAwLTQ1IDE5TDc2OCA1ODdMNTg3IDQwNnEtMTktMTktNDUtMTlxLTI3IDAtNDYgMTlsLTkwIDkwcS0xOSAxOS0xOSA0NnEwIDI2IDE5IDQ1bDE4MSAxODFsLTE4MSAxODFxLTE5IDE5LTE5IDQ1cTAgMjcgMTkgNDZsOTAgOTBxMTkgMTkgNDYgMTlxMjYgMCA0NS0xOWwxODEtMTgxbDE4MSAxODFxMTkgMTkgNDUgMTlxMjcgMCA0Ni0xOWw5MC05MHExOS0xOSAxOS00NnptMzg3LTIyNnEwIDIwOS0xMDMgMzg1LjVUMTE1My41IDE0MzNUNzY4IDE1MzZ0LTM4NS41LTEwM1QxMDMgMTE1My41VDAgNzY4dDEwMy0zODUuNVQzODIuNSAxMDNUNzY4IDB0Mzg1LjUgMTAzVDE0MzMgMzgyLjVUMTUzNiA3Njh6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGFsZXJ0Q29udGFpbmVyLCBjbG9zZUJ1dHRvbik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbG9zZUJ1dHRvbiwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uUGxheWVyLnBsYXkoKTtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIGFsZXJ0Q29udGFpbmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICBhbGVydENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgNTAwXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2FkZXJGYWRlT3V0QW5pbWF0aW9uUGxheWVyLnBsYXkoKTtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIGFsZXJ0Q29udGFpbmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICBhbGVydENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgNTAwXG4gICAgICApO1xuICAgIH0sIDEwMDAgKiA1KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGhlbWUobW9kZTogc3RyaW5nID0gJ3ByaW1hcnknKTogVEhFTUUge1xuICAgIG1vZGUgPSBtb2RlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xvcjogJyMwMjc1ZDgnLFxuICAgICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbG9yOiAnIzVjYjg1YycsXG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjNWJjMGRlJyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xvcjogJyNmMGFkNGUnLFxuICAgICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjZDk1MzRmJyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICB0ZXh0OiAnIzAwMCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbS1yaWdodCcsIGFsZXJ0Q29udGFpbmVyOiBhbnkpIHtcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKHBvc2l0aW9uID09PSAndG9wLWxlZnQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndG9wJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2xlZnQnLCAnMHB4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnbWFyZ2luJywgJzEuNXJlbScpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICd0b3AtcmlnaHQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAndG9wJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3JpZ2h0JywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbicsICcxLjVyZW0nKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tLWxlZnQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnYm90dG9tJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2xlZnQnLCAnMHB4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnbWFyZ2luJywgJzEuNXJlbScpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdib3R0b20tcmlnaHQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnYm90dG9tJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3JpZ2h0JywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbicsICcxLjVyZW0nKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAndG9wLWNlbnRlcicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd0b3AnLCAnMHB4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnbGVmdCcsICc1MCUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICdtYXJnaW4tdG9wJywgJzEuNXJlbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC01MCUpJyk7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2JvdHRvbS1jZW50ZXInKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnYm90dG9tJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ2xlZnQnLCAnNTAlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnbWFyZ2luLWJvdHRvbScsICcxLjVyZW0nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYWxlcnRDb250YWluZXIsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtNTAlKScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGFsZXJ0Q29udGFpbmVyLCAnYm90dG9tJywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ3JpZ2h0JywgJzBweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShhbGVydENvbnRhaW5lciwgJ21hcmdpbicsICcxLjVyZW0nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==