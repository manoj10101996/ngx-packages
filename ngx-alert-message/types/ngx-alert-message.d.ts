import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';

declare class NgxAlertMessageService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxAlertMessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxAlertMessageService>;
}

declare class NgxAlertMessageComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxAlertMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxAlertMessageComponent, "lib-ngx-alert-message", never, {}, {}, never, never, true, never>;
}

type mode$1 = "primary" | "success" | "danger" | "info" | "warning";
declare class AlertComponent implements OnInit {
    textColor: string;
    mode: mode$1;
    close: boolean;
    bold: boolean;
    text: any;
    disabled: boolean;
    color: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "ngx-alert", never, { "mode": { "alias": "mode"; "required": false; }; "close": { "alias": "close"; "required": false; }; "bold": { "alias": "bold"; "required": false; }; "text": { "alias": "text"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

type mode = "primary" | "success" | "danger" | "info" | "warning";
declare class JustAlertComponent implements OnInit {
    textColor: string;
    mode: mode;
    close: boolean;
    bold: boolean;
    text: any;
    disabled: boolean;
    color: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JustAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JustAlertComponent, "ngx-just-alert", never, { "mode": { "alias": "mode"; "required": false; }; "close": { "alias": "close"; "required": false; }; "bold": { "alias": "bold"; "required": false; }; "text": { "alias": "text"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

export { AlertComponent, JustAlertComponent, NgxAlertMessageComponent, NgxAlertMessageService };
