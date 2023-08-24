import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
type mode = "primary" | "success" | "danger" | "info" | "warning";
export declare class AlertComponent implements OnInit {
    textColor: string;
    mode: mode;
    close: any;
    bold: any;
    text: any;
    disabled: any;
    color: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "ngx-alert", never, { "mode": "mode"; "close": "close"; "bold": "bold"; "text": "text"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
export {};
