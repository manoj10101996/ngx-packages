import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertComponent {
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: AlertComponent, isStandalone: true, selector: "ngx-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.75' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\n    &#215;\n  </span>\n  {{ text }}\n</div>", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px;font-weight:bolder}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-alert', standalone: true, template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.75' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\n    &#215;\n  </span>\n  {{ text }}\n</div>", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px;font-weight:bolder}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWFsZXJ0LW1lc3NhZ2Uvc3JjL2xpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVV6RCxNQUFNLE9BQU8sY0FBYztJQVV6QixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDOzhHQTFCVSxjQUFjO2tHQUFkLGNBQWMsaUtDVjNCLCtYQU9NOzsyRkRHTyxjQUFjO2tCQU4xQixTQUFTOytCQUNJLFdBQVcsY0FHVCxJQUFJOzhCQUlULElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxudHlwZSBtb2RlID0gXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtYWxlcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LmNzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGU7XG4gIEBJbnB1dCgpIGNsb3NlOiBhbnk7XG4gIEBJbnB1dCgpIGJvbGQ6IGFueTtcbiAgQElucHV0KCkgdGV4dDogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYW55O1xuXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdncmVlbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY3JpbXNvbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjZmY5ODAwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2luZm8nKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICB0aGlzLmJvbGQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYWxlcnQtYmFyLW5neFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIiBbc3R5bGUuY29sb3JdPVwidGV4dENvbG9yXCJcbiAgW3N0eWxlLmZvbnRXZWlnaHRdPVwiYm9sZCA9PT0gJ3RydWUnID8gJ2JvbGQnIDogJzEwMCdcIiBbc3R5bGUub3BhY2l0eV09XCJkaXNhYmxlZCA9PT0gJ3RydWUnID8gJzAuNzUnIDogJzEnXCJcbiAgW3N0eWxlLmN1cnNvcl09XCJkaXNhYmxlZCA9PT0gJ3RydWUnID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ1wiPlxuICA8c3BhbiBjbGFzcz1cImNsb3NlSWNvblwiIFtoaWRkZW5dPVwiY2xvc2UgPT09ICdmYWxzZSdcIj5cbiAgICAmIzIxNTtcbiAgPC9zcGFuPlxuICB7eyB0ZXh0IH19XG48L2Rpdj4iXX0=