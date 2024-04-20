import { Component, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxTagsComponent {
    constructor() {
        this.limit = 25;
        this.rounded = false;
        this.disabled = false;
        this.distinct = true;
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
        let tagString = e.target.value;
        if (this.tags.length < this.limit - 1) {
            if (this.distinct && !this.tags.includes(tagString)) {
                this.tags.push(e.target.value);
                e.target.value = '';
                this.tagsChange.emit(this.tags);
            }
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
    }
    remove(i) {
        this.tags.splice(i, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxTagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.5", type: NgxTagsComponent, isStandalone: true, selector: "ngx-tags-input", inputs: { limit: "limit", mode: "mode", placeholder: "placeholder", tags: "tags", rounded: "rounded", disabled: "disabled", distinct: "distinct" }, ngImport: i0, template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n      <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\">\n        {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n            <path fill=\"white\"\n              d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n          </svg>\n        </span>\n      </span>\n      }\n    </div>\n  </div>\n</div>", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 12.5px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:.25rem}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxTagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tags-input', standalone: true, imports: [], template: "<div class=\"ngx-tag-container\">\n  <input type=\"text\" class=\"ngx-tags-input\" [disabled]=\"disabled\" [class.ngx-tags-input-rounded]=\"rounded\"\n    (change)=\"add($event)\" [style.borderColor]=\"color\" [placeholder]=\"placeholder\" />\n  <div class=\"ngx-tags-extra\">\n    <div>\n      @for (item of tags; track item; let i = $index) {\n      <span class=\"ngx-tags-label\" [class.ngx-tags-label-rounded]=\"rounded\" [style.backgroundColor]=\"color\">\n        {{ item }} <span (click)=\"remove(i)\" class=\"ngx-tag-remove\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 384 512\">\n            <path fill=\"white\"\n              d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\" />\n          </svg>\n        </span>\n      </span>\n      }\n    </div>\n  </div>\n</div>", styles: [".ngx-tags-label-header{font-size:12px;font-weight:700;margin-bottom:.5rem}.ngx-tags-input{padding:7.5px 12.5px;margin-bottom:5px;width:100%;border:1.5px solid lightslategray;outline:none;border-radius:2.5px;font-weight:700}.ngx-tags-input:focus{border:1px solid lightslategray!important}.ngx-tags-input::placeholder{font-size:14px;color:#789;text-transform:capitalize}.ngx-tags-label{padding:7.5px;background-color:#6495ed;margin-right:5px;color:#fff;font-weight:700;font-size:12px;text-transform:lowercase;cursor:pointer;border-radius:5px;display:inline-flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:.25rem}.ngx-tags-input-rounded,.ngx-tags-label-rounded{border-radius:25px}input:focus{border:1px solid!important;outline:0;box-shadow:none}.ngx-tags-extra{display:flex;align-items:center;justify-content:space-between;margin-top:.25rem}.ngx-tag-container{margin:1rem 0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { limit: [{
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
            }], distinct: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRhZ3MtaW5wdXQtYm94L3NyYy9saWIvbmd4LXRhZ3Mvbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVcvRCxNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCO1FBVFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUluQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUloQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxzQkFBc0IsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO1FBQzFHLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDdEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7U0FDL0I7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFNO1FBQ1IsSUFBSSxTQUFTLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFL0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDRjthQUNJO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OEdBckRVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDhOQ1g3Qiw0aUNBaUJNOzsyRkROTyxnQkFBZ0I7a0JBUDVCLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLEVBQUU7d0RBSUYsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnR5cGUgbW9kZSA9IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwibGlnaHRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRhZ3MtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRhZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdGFncy5jb21wb25lbnQuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhZ3NDb21wb25lbnQge1xuICB0YWdzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDI1O1xuICBASW5wdXQoKSBtb2RlOiBtb2RlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0YWdzOiBhbnlbXTtcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXN0aW5jdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFnc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGltaXQgPSB0aGlzLmxpbWl0IHx8IDI1O1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyICsgYCggTWF4aW11bSAke3RoaXMubGltaXR9IClgIHx8IGBBZGQgdGFncyAoIE1heGltdW0gJHt0aGlzLmxpbWl0fSApYDtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnIzBkNDdhMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ2NyaW1zb24nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnd2FybmluZycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5jb2xvciA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdsaWdodCcpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnZ3JheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3IgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgIH1cbiAgfVxuXG4gIGFkZChlOiBhbnkpIHtcbiAgICBsZXQgdGFnU3RyaW5nOiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA8IHRoaXMubGltaXQgLSAxKSB7XG4gICAgICBpZiAodGhpcy5kaXN0aW5jdCAmJiAhdGhpcy50YWdzLmluY2x1ZGVzKHRhZ1N0cmluZykpIHtcbiAgICAgICAgdGhpcy50YWdzLnB1c2goZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMudGFnc0NoYW5nZS5lbWl0KHRoaXMudGFncyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50YWdzW3RoaXMubGltaXQgLSAxXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpOiBudW1iZXIpIHtcbiAgICB0aGlzLnRhZ3Muc3BsaWNlKGksIDEpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LXRhZy1jb250YWluZXJcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJuZ3gtdGFncy1pbnB1dFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjbGFzcy5uZ3gtdGFncy1pbnB1dC1yb3VuZGVkXT1cInJvdW5kZWRcIlxuICAgIChjaGFuZ2UpPVwiYWRkKCRldmVudClcIiBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiY29sb3JcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAvPlxuICA8ZGl2IGNsYXNzPVwibmd4LXRhZ3MtZXh0cmFcIj5cbiAgICA8ZGl2PlxuICAgICAgQGZvciAoaXRlbSBvZiB0YWdzOyB0cmFjayBpdGVtOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgPHNwYW4gY2xhc3M9XCJuZ3gtdGFncy1sYWJlbFwiIFtjbGFzcy5uZ3gtdGFncy1sYWJlbC1yb3VuZGVkXT1cInJvdW5kZWRcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCI+XG4gICAgICAgIHt7IGl0ZW0gfX0gPHNwYW4gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibmd4LXRhZy1yZW1vdmVcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGQ9XCJNMzQyLjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTkyIDIxMC43IDg2LjYgMTA1LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDE0Ni43IDI1NiA0MS40IDM2MS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwTDE5MiAzMDEuMyAyOTcuNCA0MDYuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDIzNy4zIDI1NiAzNDIuNiAxNTAuNnpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19