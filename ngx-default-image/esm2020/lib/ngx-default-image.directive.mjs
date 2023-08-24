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
}
NgxDefaultImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxDefaultImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NgxDefaultImageDirective, selector: "[NgxDefaultImage]", inputs: { imageURL: "imageURL" }, outputs: { imageMetaInfo: "imageMetaInfo" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxDefaultImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[NgxDefaultImage]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { imageURL: [{
                type: Input
            }], imageMetaInfo: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlZmF1bHQtaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRlZmF1bHQtaW1hZ2Uvc3JjL2xpYi9uZ3gtZGVmYXVsdC1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNbkYsTUFBTSxPQUFPLHdCQUF3QjtJQStCbkMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUE3QnpCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFYixrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWhFLGNBQVMsR0FBUztZQUN2QixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsR0FBRztZQUNoQixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLENBQUM7YUFDZDtZQUNELEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBR0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWlDLENBQUM7UUFDOUQs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WUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7U0FDbkQsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sb0JBQW9CLENBQUMsS0FBYyxFQUFFLE1BQWM7UUFDeEQsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7O3FIQXJGVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCO2lHQUdVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1FVEEgfSBmcm9tICcuL01FVEEnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbTmd4RGVmYXVsdEltYWdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlZmF1bHRJbWFnZURpcmVjdGl2ZSB7XHJcblxyXG4gIEBJbnB1dCgpIGltYWdlVVJMID0gXCJcIjtcclxuICBwcml2YXRlIGltYWdlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDtcclxuICBAT3V0cHV0KCkgaW1hZ2VNZXRhSW5mbzogRXZlbnRFbWl0dGVyPE1FVEE+ID0gbmV3IEV2ZW50RW1pdHRlcjxNRVRBPigpO1xyXG5cclxuICBwdWJsaWMgaW1hZ2VNZXRhOiBNRVRBID0ge1xyXG4gICAgaXNWYWxpZEltYWdlOiBmYWxzZSxcclxuICAgIGFzcGVjdFJhdGlvOiBcIjFcIixcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgcndpZHRoOiAwLFxyXG4gICAgcmhlaWdodDogMCxcclxuICAgIHJlbmRlclRpbWU6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBkYXRlZE9uOiB7XHJcbiAgICAgIGxvYWRlZE9uOiAwLFxyXG4gICAgICByZW5kZXJlZE9uOiAwLFxyXG4gICAgICByZW5kZXJUaW1lOiAwXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBzcmM6IFwiXCIsXHJcbiAgICBlc3JjOiBcIlwiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgY3Jvc3NvcmlnaW46IFwiXCJcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmltYWdlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltYWdlTWV0YS5kYXRlZE9uID0ge1xyXG4gICAgICBsb2FkZWRPbjogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgIHJlbmRlcmVkT246IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICByZW5kZXJUaW1lOiAwXHJcbiAgICB9O1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7IC8vIGRyYXcgaW4gaW1hZ2VcclxuICAgICAgdGhpcy5pbWFnZU1ldGEuZGF0ZWRPbi5yZW5kZXJlZE9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VNZXRhLmRhdGVkT24ucmVuZGVyVGltZSA9XHJcbiAgICAgICAgdGhpcy5pbWFnZU1ldGEuZGF0ZWRPbi5yZW5kZXJlZE9uIC0gdGhpcy5pbWFnZU1ldGEuZGF0ZWRPbi5sb2FkZWRPbjtcclxuICAgICAgdGhpcy5nZXRJbWFnZU1ldGEoZXZlbnQsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZS5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0SW1hZ2VNZXRhKGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLmltYWdlVVJMKTtcclxuICAgIH07XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5pbWFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpIHx8IFwiXCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW1hZ2VNZXRhKGV2ZW50OiBhbnksIGlzVmFsaWRJbWFnZTogYm9vbGVhbikge1xyXG4gICAgbGV0IGJvdW5kaW5nUmVjdDogRE9NUmVjdCA9IHRoaXMuaW1hZ2VFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VFbGVtZW50O1xyXG4gICAgdGhpcy5pbWFnZU1ldGEgPSB7XHJcbiAgICAgIGlzVmFsaWRJbWFnZTogaXNWYWxpZEltYWdlLFxyXG4gICAgICBhc3BlY3RSYXRpbzogKGJvdW5kaW5nUmVjdC53aWR0aCAvIGJvdW5kaW5nUmVjdC5oZWlnaHQpLnRvUHJlY2lzaW9uKDIpLFxyXG4gICAgICB4OiBib3VuZGluZ1JlY3QueCxcclxuICAgICAgeTogYm91bmRpbmdSZWN0LnksXHJcbiAgICAgIHJ3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoLFxyXG4gICAgICByaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0LFxyXG4gICAgICByZW5kZXJUaW1lOiB0aGlzLmltYWdlTWV0YS5kYXRlZE9uLnJlbmRlclRpbWUsXHJcbiAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCxcclxuICAgICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCxcclxuICAgICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tLFxyXG4gICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCxcclxuICAgICAgZGF0ZWRPbjogdGhpcy5pbWFnZU1ldGEuZGF0ZWRPbixcclxuICAgICAgd2lkdGg6IGV2ZW50LnRhcmdldC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBldmVudC50YXJnZXQuaGVpZ2h0LFxyXG4gICAgICBzcmM6IGV2ZW50LnRhcmdldC5zcmMsXHJcbiAgICAgIGVzcmM6IHRoaXMuaW1hZ2VVUkwsXHJcbiAgICAgIGFsdDogZXZlbnQudGFyZ2V0LmFsdCxcclxuICAgICAgY3Jvc3NvcmlnaW46IGltZy5nZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiKSB8fCAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuaW1hZ2VNZXRhSW5mby5lbWl0KHRoaXMuaW1hZ2VNZXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVBc3BlY3RSYXRpbyh3aWR0aCA6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB3aWR0aCAvIGhlaWdodDtcclxuICB9XHJcbn1cclxuIl19