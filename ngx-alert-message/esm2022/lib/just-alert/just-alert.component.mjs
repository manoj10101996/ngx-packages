import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class JustAlertComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: JustAlertComponent, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <div class=\"just-content\">\n    {{ text }}\n  </div>\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\n    <span>&#215;</span>\n  </div>\n</div>\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\n  <div class=\"just-content\">\n    {{ text }}\n  </div>\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\n    <span>&#215;</span>\n  </div>\n</div>\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYWxlcnQtbWVzc2FnZS9zcmMvbGliL2p1c3QtYWxlcnQvanVzdC1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRekQsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDOzhHQTFCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixrSkNSL0IscWRBVUE7OzJGREZhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBTWpCLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG50eXBlIG1vZGUgPSBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qdXN0LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2p1c3QtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSnVzdEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGU7XG4gIEBJbnB1dCgpIGNsb3NlOiBhbnk7XG4gIEBJbnB1dCgpIGJvbGQ6IGFueTtcbiAgQElucHV0KCkgdGV4dDogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYW55O1xuXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdncmVlbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY3JpbXNvbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgdGhpcy5jb2xvciA9ICcjZmY5ODAwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2luZm8nKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICB0aGlzLmJvbGQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwianVzdC1jb250YWluZXJcIiBbc3R5bGUuYm9yZGVyXT1cIicxcHggc29saWQgJyArIG1vZGVcIiBbc3R5bGUuY29sb3JdPVwibW9kZVwiXG4gIFtzdHlsZS5mb250V2VpZ2h0XT1cImJvbGQgPT09ICd0cnVlJyA/ICdib2xkJyA6ICcxMDAnXCIgW3N0eWxlLm9wYWNpdHldPVwiZGlzYWJsZWQgPT09ICd0cnVlJyA/ICcwLjUnIDogJzEnXCJcbiAgW3N0eWxlLmN1cnNvcl09XCJkaXNhYmxlZCA9PT0gJ3RydWUnID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ1wiPlxuICA8ZGl2IGNsYXNzPVwianVzdC1jb250ZW50XCI+XG4gICAge3sgdGV4dCB9fVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImp1c3QtY2xvc2VcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIm1vZGVcIiBbc3R5bGUuY29sb3JdPVwiJ3doaXRlJ1wiPlxuICAgIDxzcGFuPiYjMjE1Ozwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==