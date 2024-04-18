import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertComponent {
    constructor() {
        this.mode = "success";
        this.close = true;
        this.bold = false;
        this.text = "ngx-alert-message";
        this.disabled = false;
    }
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
            this.bold = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: AlertComponent, isStandalone: true, selector: "ngx-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-alert-container ngx-alert-container-extended\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold  ? 'bold' : '500'\" [style.opacity]=\"disabled ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <span class=\"ngx-alert-close\" [hidden]=\"!close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n      <path fill=\"white\"\n        d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n    </svg>\n  </span>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-alert', standalone: true, template: "<div class=\"ngx-alert-container ngx-alert-container-extended\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold  ? 'bold' : '500'\" [style.opacity]=\"disabled ? '0.75' : '1'\"\n  [style.cursor]=\"disabled  ? 'not-allowed' : 'pointer'\">\n  <div class=\"ngx-alert-text\">\n    {{ text }}\n  </div>\n  <span class=\"ngx-alert-close\" [hidden]=\"!close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n      <path fill=\"white\"\n        d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n    </svg>\n  </span>\n</div>\n", styles: [".ngx-alert-container{display:grid;align-items:center;grid-template-columns:auto 56px;margin-bottom:.5rem}.ngx-alert-container .ngx-alert-text{font-weight:500;font-size:1rem;padding:1rem 1.25rem}.ngx-alert-container .ngx-alert-close{width:56px;height:100%;display:flex;align-items:center;justify-content:center}.ngx-alert-container-extended .ngx-alert-text{color:#fff}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWFsZXJ0LW1lc3NhZ2Uvc3JjL2xpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVV6RCxNQUFNLE9BQU8sY0FBYztJQU4zQjtRQVFXLFNBQUksR0FBUyxTQUFTLENBQUM7UUFDdkIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFNBQUksR0FBUSxtQkFBbUIsQ0FBQztRQUNoQyxhQUFRLEdBQVksS0FBSyxDQUFDO0tBc0JwQztJQWxCQyxRQUFRO1FBRU4sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7SUFDSCxDQUFDOzhHQTNCVSxjQUFjO2tHQUFkLGNBQWMsaUtDVjNCLHUxQkFhQTs7MkZESGEsY0FBYztrQkFOMUIsU0FBUzsrQkFDRSxXQUFXLGNBR1QsSUFBSTs4QkFJUCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbnR5cGUgbW9kZSA9IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi9hbGVydC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGUgPSBcInN1Y2Nlc3NcIjtcbiAgQElucHV0KCkgY2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBib2xkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRleHQ6IGFueSA9IFwibmd4LWFsZXJ0LW1lc3NhZ2VcIjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdncmVlbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY3JpbXNvbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjZmY5ODAwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2luZm8nKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICB0aGlzLmJvbGQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5neC1hbGVydC1jb250YWluZXIgbmd4LWFsZXJ0LWNvbnRhaW5lci1leHRlbmRlZFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIiBbc3R5bGUuY29sb3JdPVwidGV4dENvbG9yXCJcbiAgW3N0eWxlLmZvbnRXZWlnaHRdPVwiYm9sZCAgPyAnYm9sZCcgOiAnNTAwJ1wiIFtzdHlsZS5vcGFjaXR5XT1cImRpc2FibGVkID8gJzAuNzUnIDogJzEnXCJcbiAgW3N0eWxlLmN1cnNvcl09XCJkaXNhYmxlZCAgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInXCI+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtYWxlcnQtdGV4dFwiPlxuICAgIHt7IHRleHQgfX1cbiAgPC9kaXY+XG4gIDxzcGFuIGNsYXNzPVwibmd4LWFsZXJ0LWNsb3NlXCIgW2hpZGRlbl09XCIhY2xvc2VcIj5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cbiAgICAgIDxwYXRoIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgIGQ9XCJNMzQyLjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTkyIDIxMC43IDg2LjYgMTA1LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDE0Ni43IDI1NiA0MS40IDM2MS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwTDE5MiAzMDEuMyAyOTcuNCA0MDYuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDIzNy4zIDI1NiAzNDIuNiAxNTAuNnpcIiAvPlxuICAgIDwvc3ZnPlxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==