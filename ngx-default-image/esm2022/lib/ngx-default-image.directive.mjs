import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxDefaultImageDirective {
    constructor(el) {
        this.el = el;
        this.imageURL = "";
        this.imageMetaInfo = new EventEmitter();
        this.imageMeta = {
            isValidImage: false,
            aspectRatio: "1",
            x: 0,
            y: 0,
            rwidth: 0,
            rheight: 0,
            renderTime: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            datedOn: {
                loadedOn: 0,
                renderedOn: 0,
                renderTime: 0
            },
            width: 0,
            height: 0,
            src: "",
            esrc: "",
            alt: "",
            crossorigin: ""
        };
        this.imageElement = this.el.nativeElement;
        let image = new Image();
        this.imageMeta.datedOn = {
            loadedOn: new Date().getTime(),
            renderedOn: new Date().getTime(),
            renderTime: 0
        };
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        image.onload = (event) => {
            ctx.drawImage(image, 0, 0); // draw in image
            this.imageMeta.datedOn.renderedOn = new Date().getTime();
            this.imageMeta.datedOn.renderTime =
                this.imageMeta.datedOn.renderedOn - this.imageMeta.datedOn.loadedOn;
            this.getImageMeta(event, true);
        };
        image.onerror = (event) => {
            this.getImageMeta(event, false);
            this.imageElement.setAttribute("src", this.imageURL);
        };
        image.src = this.imageElement.getAttribute("src") || "";
    }
    getImageMeta(event, isValidImage) {
        let boundingRect = this.imageElement.getBoundingClientRect();
        let img = this.imageElement;
        this.imageMeta = {
            isValidImage: isValidImage,
            aspectRatio: (boundingRect.width / boundingRect.height).toPrecision(2),
            x: boundingRect.x,
            y: boundingRect.y,
            rwidth: boundingRect.width,
            rheight: boundingRect.height,
            renderTime: this.imageMeta.datedOn.renderTime,
            top: boundingRect.top,
            right: boundingRect.right,
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            datedOn: this.imageMeta.datedOn,
            width: event.target.width,
            height: event.target.height,
            src: event.target.src,
            esrc: this.imageURL,
            alt: event.target.alt,
            crossorigin: img.getAttribute("crossorigin") || ''
        };
        this.imageMetaInfo.emit(this.imageMeta);
    }
    calculateAspectRatio(width, height) {
        return width / height;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxDefaultImageDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: NgxDefaultImageDirective, isStandalone: true, selector: "[NgxDefaultImage]", inputs: { imageURL: "imageURL" }, outputs: { imageMetaInfo: "imageMetaInfo" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxDefaultImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[NgxDefaultImage]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { imageURL: [{
                type: Input
            }], imageMetaInfo: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlZmF1bHQtaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRlZmF1bHQtaW1hZ2Uvc3JjL2xpYi9uZ3gtZGVmYXVsdC1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPbkYsTUFBTSxPQUFPLHdCQUF3QjtJQStCbkMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUE3QnpCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFYixrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWhFLGNBQVMsR0FBUztZQUN2QixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsR0FBRztZQUNoQixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLENBQUM7YUFDZDtZQUNELEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBR0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWlDLENBQUM7UUFDOUQs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WUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7U0FDbkQsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sb0JBQW9CLENBQUMsS0FBYyxFQUFFLE1BQWM7UUFDeEQsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7OEdBckZVLHdCQUF3QjtrR0FBeEIsd0JBQXdCOzsyRkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjsrRUFHVSxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUVUQSB9IGZyb20gJy4vTUVUQSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW05neERlZmF1bHRJbWFnZV0nLFxuICAgIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTmd4RGVmYXVsdEltYWdlRGlyZWN0aXZlIHtcblxuICBASW5wdXQoKSBpbWFnZVVSTCA9IFwiXCI7XG4gIHByaXZhdGUgaW1hZ2VFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xuICBAT3V0cHV0KCkgaW1hZ2VNZXRhSW5mbzogRXZlbnRFbWl0dGVyPE1FVEE+ID0gbmV3IEV2ZW50RW1pdHRlcjxNRVRBPigpO1xuXG4gIHB1YmxpYyBpbWFnZU1ldGE6IE1FVEEgPSB7XG4gICAgaXNWYWxpZEltYWdlOiBmYWxzZSxcbiAgICBhc3BlY3RSYXRpbzogXCIxXCIsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJ3aWR0aDogMCxcbiAgICByaGVpZ2h0OiAwLFxuICAgIHJlbmRlclRpbWU6IDAsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGRhdGVkT246IHtcbiAgICAgIGxvYWRlZE9uOiAwLFxuICAgICAgcmVuZGVyZWRPbjogMCxcbiAgICAgIHJlbmRlclRpbWU6IDBcbiAgICB9LFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBzcmM6IFwiXCIsXG4gICAgZXNyYzogXCJcIixcbiAgICBhbHQ6IFwiXCIsXG4gICAgY3Jvc3NvcmlnaW46IFwiXCJcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5pbWFnZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlTWV0YS5kYXRlZE9uID0ge1xuICAgICAgbG9hZGVkT246IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgcmVuZGVyZWRPbjogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICByZW5kZXJUaW1lOiAwXG4gICAgfTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgaW1hZ2Uub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTsgLy8gZHJhdyBpbiBpbWFnZVxuICAgICAgdGhpcy5pbWFnZU1ldGEuZGF0ZWRPbi5yZW5kZXJlZE9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLnJlbmRlclRpbWUgPVxuICAgICAgICB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLnJlbmRlcmVkT24gLSB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLmxvYWRlZE9uO1xuICAgICAgdGhpcy5nZXRJbWFnZU1ldGEoZXZlbnQsIHRydWUpO1xuICAgIH07XG5cbiAgICBpbWFnZS5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmdldEltYWdlTWV0YShldmVudCwgZmFsc2UpO1xuICAgICAgdGhpcy5pbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuaW1hZ2VVUkwpO1xuICAgIH07XG5cbiAgICBpbWFnZS5zcmMgPSB0aGlzLmltYWdlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgfHwgXCJcIjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbWFnZU1ldGEoZXZlbnQ6IGFueSwgaXNWYWxpZEltYWdlOiBib29sZWFuKSB7XG4gICAgbGV0IGJvdW5kaW5nUmVjdDogRE9NUmVjdCA9IHRoaXMuaW1hZ2VFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlRWxlbWVudDtcbiAgICB0aGlzLmltYWdlTWV0YSA9IHtcbiAgICAgIGlzVmFsaWRJbWFnZTogaXNWYWxpZEltYWdlLFxuICAgICAgYXNwZWN0UmF0aW86IChib3VuZGluZ1JlY3Qud2lkdGggLyBib3VuZGluZ1JlY3QuaGVpZ2h0KS50b1ByZWNpc2lvbigyKSxcbiAgICAgIHg6IGJvdW5kaW5nUmVjdC54LFxuICAgICAgeTogYm91bmRpbmdSZWN0LnksXG4gICAgICByd2lkdGg6IGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICAgIHJoZWlnaHQ6IGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgICByZW5kZXJUaW1lOiB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLnJlbmRlclRpbWUsXG4gICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AsXG4gICAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0LFxuICAgICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tLFxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgICBkYXRlZE9uOiB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLFxuICAgICAgd2lkdGg6IGV2ZW50LnRhcmdldC53aWR0aCxcbiAgICAgIGhlaWdodDogZXZlbnQudGFyZ2V0LmhlaWdodCxcbiAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnNyYyxcbiAgICAgIGVzcmM6IHRoaXMuaW1hZ2VVUkwsXG4gICAgICBhbHQ6IGV2ZW50LnRhcmdldC5hbHQsXG4gICAgICBjcm9zc29yaWdpbjogaW1nLmdldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIpIHx8ICcnXG4gICAgfTtcbiAgICB0aGlzLmltYWdlTWV0YUluZm8uZW1pdCh0aGlzLmltYWdlTWV0YSk7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQXNwZWN0UmF0aW8od2lkdGggOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHdpZHRoIC8gaGVpZ2h0O1xuICB9XG59XG4iXX0=