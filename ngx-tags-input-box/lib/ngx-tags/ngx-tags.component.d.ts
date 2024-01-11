import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
type mode = "primary" | "success" | "danger" | "info" | "warning" | "light";
export declare class NgxTagsComponent {
    tagsChange: EventEmitter<any>;
    limit: number;
    mode: mode;
    placeholder: string;
    tags: any[];
    rounded: boolean;
    disabled: boolean;
    color: string;
    constructor();
    ngOnInit(): void;
    add(e: any): void;
    remove(i: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxTagsComponent, "ngx-tags-input", never, { "limit": { "alias": "limit"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "tags": { "alias": "tags"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
