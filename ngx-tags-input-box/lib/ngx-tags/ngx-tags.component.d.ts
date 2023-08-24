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
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxTagsComponent, "ngx-tags-input", never, { "limit": "limit"; "mode": "mode"; "placeholder": "placeholder"; "tags": "tags"; "rounded": "rounded"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
export {};
