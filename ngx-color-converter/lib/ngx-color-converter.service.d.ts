import * as i0 from "@angular/core";
export declare class NgxColorConverterService {
    values: string;
    red: number;
    green: number;
    blue: number;
    opacity: number;
    hue: number;
    whiteness: number;
    blackness: number;
    sat: number;
    lightness: number;
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
    ncol: number;
    valid: any;
    view: any;
    constructor();
    ngOnInit(): void;
    toRgbString: (red: number, green: number, blue: number) => string;
    toRgbaString: (red: number, green: number, blue: number, alpha: number) => string;
    toHwbString: (hue: number, whiteness: number, blackness: number) => string;
    toHwbStringDecimal: (hue: number, whiteness: number, blackness: number) => string;
    toHwbaString: (hue: number, whiteness: number, blackness: number, alpha: number) => string;
    toHslString: (hue: number, sat: number, lightness: number) => string;
    toHslStringDecimal: (hue: number, sat: number, lightness: number) => string;
    toHslaString: (hue: number, sat: number, lightness: number, alpha: number) => string;
    toCmykString: (cyan: number, magenta: number, yellow: number, black: number) => string;
    toCmykStringDecimal: (cyan: number, magenta: number, yellow: number, black: number) => string;
    toNcolString: (ncol: number, whiteness: number, blackness: number) => string;
    toNcolStringDecimal: (ncol: number, whiteness: number, blackness: number) => string;
    toNcolaString: (ncol: number, whiteness: number, blackness: number, alpha: number) => string;
    toName: () => string;
    toHexString: (red: number, green: number, blue: number) => string;
    toRgb: (red: number, green: number, blue: number, alpha: number) => {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    toHsl: (hue: number, sat: number, lightness: number, alpha: number) => {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    toHwb: (hue: number, whiteness: number, blackness: number, alpha: number) => {
        h: number;
        w: number;
        b: number;
        a: number;
    };
    toCmyk: (cyan: number, magenta: number, yellow: number, black: number, alpha: number) => {
        c: number;
        m: number;
        y: number;
        k: number;
        a: number;
    };
    toNcol: (ncol: number, whiteness: number, blackness: number, alpha: number) => {
        ncol: number;
        w: number;
        b: number;
        a: number;
    };
    isDark: (n: any) => boolean;
    saturate: (n: any) => void;
    desaturate: (n: any) => void;
    lighter: (n: any) => void;
    darker: (n: any) => void;
    attachValues: (color: any) => void;
    toColorObject(color: any): any;
    colorObject(rgb: any, a: any, h: any, s: any): any;
    emptyObject(): {
        red: number;
        green: number;
        blue: number;
        hue: number;
        sat: number;
        lightness: number;
        whiteness: number;
        blackness: number;
        cyan: number;
        magenta: number;
        yellow: number;
        black: number;
        ncol: string;
        opacity: number;
        valid: boolean;
    };
    getColorArr(x: any): string[];
    roundDecimals(c: any): any;
    hslToRgb(hue: any, sat: any, light: any): {
        r: number;
        g: number;
        b: number;
    };
    hueToRgb(t1: any, t2: any, hue: any): any;
    hwbToRgb(hue: any, white: any, black: any): {
        r: number;
        g: number;
        b: number;
    };
    cmykToRgb(c: any, m: any, y: any, k: any): {
        r: number;
        g: number;
        b: number;
    };
    ncolToRgb(ncol: any, white: any, black: any): false | {
        r: number;
        g: number;
        b: number;
    };
    hueToNcol(hue: any): string;
    ncsToRgb(ncs: any): false | {
        r: number;
        g: number;
        b: number;
    };
    rgbToHsl(r: number, g: number, b: number): {
        h: number;
        s: number;
        l: number;
    };
    rgbToHwb(r: number, g: number, b: number): {
        h: number;
        w: number;
        b: number;
    };
    rgbToCmyk(red: number, green: number, blue: number): {
        c: number;
        m: number;
        y: number;
        k: number;
    };
    toHex(n: any): any;
    cl(x: any): void;
    ngxColorTrim(x: any): any;
    isHex(x: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxColorConverterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxColorConverterService>;
}
