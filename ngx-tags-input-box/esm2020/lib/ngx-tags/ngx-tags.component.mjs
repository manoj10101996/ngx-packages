import { Component, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxTagsComponent {
    constructor() {
        this.limit = 25;
        this.rounded = false;
        this.disabled = false;
        this.tagsChange = new EventEmitter();
        this.tags = [];
    }
    ngOnInit() {
        this.limit = this.limit || 25;
        this.placeholder = this.placeholder + `( Maximum ${this.limit} )` || `Add tags ( Maximum ${this.limit} )`;
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
        else if (this.mode === 'light') {
            this.color = 'gray';
        }
        else {
            this.color = 'cornflowerblue';
        }
    }
    add(e) {
        if (this.tags.length < this.limit - 1) {
            this.tags.push(e.target.value);
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
        e.target.value = '';
        this.tagsChange.emit(this.tags);
    }
    remove(i) {
        this.tags.splice(i, 1);
    }
}
NgxTagsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxTagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxTagsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxTagsComponent, selector: "ngx-tags-input", inputs: { limit: "limit", mode: "mode", placeholder: "placeholder", tags: "tags", rounded: "rounded", disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n        *ngFor=\"let item of tags; index as i\">\n        {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n      </span>\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:10px 15px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:10px 15px;background-color:#6495ed;margin-right:5px;color:#fff;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tags-input', template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\"\n        *ngFor=\"let item of tags; index as i\">\n        {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">&times;</span>\n      </span>\n    </div>\n  </div>\n</div>\n", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:10px 15px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:10px 15px;background-color:#6495ed;margin-right:5px;color:#fff;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.5rem}.ngx-tag-remove{font-weight:700;padding-left:1rem;padding-right:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { limit: [{
                type: Input
            }], mode: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], tags: [{
                type: Input
            }], rounded: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRL0QsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQjtRQVJTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLHNCQUFzQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7UUFDMUcsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQU07UUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7YUFDSTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM1QztRQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OzZHQWhEVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQixvTENSN0IsNmtCQVlBOzJGREphLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxnQkFBZ0I7MEVBTWpCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbnR5cGUgbW9kZSA9IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwibGlnaHRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRhZ3MtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdGFncy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGFnc0NvbXBvbmVudCB7XG4gIHRhZ3NDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyID0gMjU7XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGU7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhZ3M6IGFueVtdO1xuICBASW5wdXQoKSByb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFnc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGltaXQgPSB0aGlzLmxpbWl0IHx8IDI1O1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyICsgYCggTWF4aW11bSAke3RoaXMubGltaXR9IClgIHx8IGBBZGQgdGFncyAoIE1heGltdW0gJHt0aGlzLmxpbWl0fSApYDtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnIzBkNDdhMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2NyaW1zb24nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnd2FybmluZycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdsaWdodCcpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgIH1cbiAgfVxuXG4gIGFkZChlOiBhbnkpIHtcbiAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA8IHRoaXMubGltaXQgLSAxKSB7XG4gICAgICB0aGlzLnRhZ3MucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50YWdzW3RoaXMubGltaXQgLSAxXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGFnc0NoYW5nZS5lbWl0KHRoaXMudGFncyk7XG4gIH1cblxuICByZW1vdmUoaTogbnVtYmVyKSB7XG4gICAgdGhpcy50YWdzLnNwbGljZShpLCAxKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5neC10YWctY29udGFpbmVyXCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmd4LXRhZ3MtaW5wdXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3Mubmd4LXRhZ3MtaW5wdXQtcm91bmRlZF09XCJyb3VuZGVkXCJcbiAgICAoY2hhbmdlKT1cImFkZCgkZXZlbnQpXCIgW3N0eWxlLmJvcmRlckNvbG9yXT1cImNvbG9yXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPGRpdiBjbGFzcz1cIm5neC10YWdzLWV4dHJhXCI+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibmd4LXRhZ3MtbGFiZWxcIiBbY2xhc3Mubmd4LXRhZ3MtbGFiZWwtcm91bmRlZF09XCJyb3VuZGVkXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRhZ3M7IGluZGV4IGFzIGlcIj5cbiAgICAgICAge3sgaXRlbSB9fSA8c3BhbiAoY2xpY2spPVwicmVtb3ZlKGkpXCIgY2xhc3M9XCJuZ3gtdGFnLXJlbW92ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=