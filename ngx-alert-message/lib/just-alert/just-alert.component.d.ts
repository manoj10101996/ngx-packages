import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
type mode = "primary" | "success" | "danger" | "info" | "warning";
export declare class JustAlertComponent implements OnInit {
    textColor: string;
    mode: mode;
    close: any;
    bold: any;
    text: any;
    disabled: any;
    color: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JustAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JustAlertComponent, "ngx-just-alert", never, { "mode": { "alias": "mode"; "required": false; }; "close": { "alias": "close"; "required": false; }; "bold": { "alias": "bold"; "required": false; }; "text": { "alias": "text"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
