import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxColorConverterService {
    constructor() {
        this.values = '';
        this.toRgbString = (red, green, blue) => {
            return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        };
        this.toRgbaString = (red, green, blue, alpha) => {
            return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
        };
        this.toHwbString = (hue, whiteness, blackness) => {
            return ('hwb(' +
                hue +
                ', ' +
                Math.round(whiteness * 100) +
                '%, ' +
                Math.round(blackness * 100) +
                '%)');
        };
        this.toHwbStringDecimal = (hue, whiteness, blackness) => {
            return 'hwb(' + hue + ', ' + whiteness + ', ' + blackness + ')';
        };
        this.toHwbaString = (hue, whiteness, blackness, alpha) => {
            return ('hwba(' +
                hue +
                ', ' +
                Math.round(whiteness * 100) +
                '%, ' +
                Math.round(blackness * 100) +
                '%, ' +
                alpha +
                ')');
        };
        this.toHslString = (hue, sat, lightness) => {
            return ('hsl(' +
                hue +
                ', ' +
                Math.round(sat * 100) +
                '%, ' +
                Math.round(lightness * 100) +
                '%)');
        };
        this.toHslStringDecimal = (hue, sat, lightness) => {
            return 'hsl(' + hue + ', ' + sat + ', ' + lightness + ')';
        };
        this.toHslaString = (hue, sat, lightness, alpha) => {
            return ('hsla(' +
                hue +
                ', ' +
                Math.round(sat * 100) +
                '%, ' +
                Math.round(lightness * 100) +
                '%, ' +
                alpha +
                ')');
        };
        this.toCmykString = (cyan, magenta, yellow, black) => {
            return ('cmyk(' +
                Math.round(cyan * 100) +
                '%, ' +
                Math.round(magenta * 100) +
                '%, ' +
                Math.round(yellow * 100) +
                '%, ' +
                Math.round(black * 100) +
                '%)');
        };
        this.toCmykStringDecimal = (cyan, magenta, yellow, black) => {
            return 'cmyk(' + cyan + ', ' + magenta + ', ' + yellow + ', ' + black + ')';
        };
        this.toNcolString = (ncol, whiteness, blackness) => {
            return (ncol +
                ', ' +
                Math.round(whiteness * 100) +
                '%, ' +
                Math.round(blackness * 100) +
                '%');
        };
        this.toNcolStringDecimal = (ncol, whiteness, blackness) => {
            return ncol + ', ' + whiteness + ', ' + blackness;
        };
        this.toNcolaString = (ncol, whiteness, blackness, alpha) => {
            return (ncol +
                ', ' +
                Math.round(whiteness * 100) +
                '%, ' +
                Math.round(blackness * 100) +
                '%, ' +
                alpha);
        };
        this.toName = () => {
            let r, g, b, colorhexs = this.getColorArr('hexs');
            for (let i = 0; i < colorhexs.length; i++) {
                r = parseInt(colorhexs[i].substr(0, 2), 16);
                g = parseInt(colorhexs[i].substr(2, 2), 16);
                b = parseInt(colorhexs[i].substr(4, 2), 16);
                if (this.red == r && this.green == g && this.blue == b) {
                    return this.getColorArr('names')[i];
                }
            }
            return '';
        };
        this.toHexString = (red, green, blue) => {
            let r = this.toHex(red);
            let g = this.toHex(green);
            let b = this.toHex(blue);
            return '#' + r + g + b;
        };
        this.toRgb = (red, green, blue, alpha) => {
            return { r: red, g: green, b: blue, a: alpha };
        };
        this.toHsl = (hue, sat, lightness, alpha) => {
            return { h: hue, s: sat, l: lightness, a: alpha };
        };
        this.toHwb = (hue, whiteness, blackness, alpha) => {
            return {
                h: hue,
                w: whiteness,
                b: blackness,
                a: alpha,
            };
        };
        this.toCmyk = (cyan, magenta, yellow, black, alpha) => {
            return {
                c: cyan,
                m: magenta,
                y: yellow,
                k: black,
                a: alpha,
            };
        };
        this.toNcol = (ncol, whiteness, blackness, alpha) => {
            return {
                ncol: ncol,
                w: whiteness,
                b: blackness,
                a: alpha,
            };
        };
        this.isDark = (n) => {
            let m = n || 128;
            return (+this.red * 299 + +this.green * 587 + +this.blue * 114) / 1000 < m;
        };
        this.saturate = (n) => {
            let x, rgb, color;
            x = n / 100 || 0.1;
            this.sat += x;
            if (this.sat > 1) {
                this.sat = 1;
            }
            rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
            color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
            this.attachValues(color);
        };
        this.desaturate = (n) => {
            let x, rgb, color;
            x = n / 100 || 0.1;
            this.sat -= x;
            if (this.sat < 0) {
                this.sat = 0;
            }
            rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
            color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
            this.attachValues(color);
        };
        this.lighter = (n) => {
            let x, rgb, color;
            x = n / 100 || 0.1;
            this.lightness += x;
            if (this.lightness > 1) {
                this.lightness = 1;
            }
            rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
            color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
            this.attachValues(color);
        };
        this.darker = (n) => {
            let x, rgb, color;
            x = n / 100 || 0.1;
            this.lightness -= x;
            if (this.lightness < 0) {
                this.lightness = 0;
            }
            rgb = this.hslToRgb(this.hue, this.sat, this.lightness);
            color = this.colorObject(rgb, this.opacity, this.hue, this.sat);
            this.attachValues(color);
        };
        this.attachValues = (color) => {
            this.red = color.red;
            this.green = color.green;
            this.blue = color.blue;
            this.hue = color.hue;
            this.sat = color.sat;
            this.lightness = color.lightness;
            this.whiteness = color.whiteness;
            this.blackness = color.blackness;
            this.cyan = color.cyan;
            this.magenta = color.magenta;
            this.yellow = color.yellow;
            this.black = color.black;
            this.ncol = color.ncol;
            this.opacity = color.opacity;
            this.valid = color.valid;
        };
    }
    ngOnInit() { }
    toColorObject(color) {
        let x, y, typ, arr = [], arrlength, i, opacity, match, a, hue, sat, rgb, colornames = [], colorhexs = [];
        let c = color;
        c = this.ngxColorTrim(c.toLowerCase());
        x = c.substr(0, 1).toUpperCase();
        y = c.substr(1);
        a = 1;
        if ((x == 'R' ||
            x == 'Y' ||
            x == 'G' ||
            x == 'C' ||
            x == 'B' ||
            x == 'M' ||
            x == 'W') &&
            !isNaN(y)) {
            if (c.length == 6 && c.indexOf(',') == -1) {
            }
            else {
                c = 'ncol(' + c + ')';
            }
        }
        if (c.length != 3 && c.length != 6 && !isNaN(c)) {
            c = 'ncol(' + c + ')';
        }
        if (c.indexOf(',') > 0 && c.indexOf('(') == -1) {
            c = 'ncol(' + c + ')';
        }
        if (c.substr(0, 3) == 'rgb' ||
            c.substr(0, 3) == 'hsl' ||
            c.substr(0, 3) == 'hwb' ||
            c.substr(0, 4) == 'ncol' ||
            c.substr(0, 4) == 'cmyk') {
            if (c.substr(0, 4) == 'ncol') {
                if (c.split(',').length == 4 && c.indexOf('ncola') == -1) {
                    c = c.replace('ncol', 'ncola');
                }
                typ = 'ncol';
                c = c.substr(4);
            }
            else if (c.substr(0, 4) == 'cmyk') {
                typ = 'cmyk';
                c = c.substr(4);
            }
            else {
                typ = c.substr(0, 3);
                c = c.substr(3);
            }
            arrlength = 3;
            opacity = false;
            if (c.substr(0, 1).toLowerCase() == 'a') {
                arrlength = 4;
                opacity = true;
                c = c.substr(1);
            }
            else if (typ == 'cmyk') {
                arrlength = 4;
                if (c.split(',').length == 5) {
                    arrlength = 5;
                    opacity = true;
                }
            }
            c = c.replace('(', '');
            c = c.replace(')', '');
            arr = c.split(',');
            if (typ == 'rgb') {
                if (arr.length != arrlength) {
                    return this.emptyObject();
                }
                for (i = 0; i < arrlength; i++) {
                    if (arr[i] == '' || arr[i] == ' ') {
                        arr[i] = '0';
                    }
                    if (arr[i].indexOf('%') > -1) {
                        arr[i] = arr[i].replace('%', '');
                        arr[i] = Number(arr[i] / 100);
                        if (i < 3) {
                            arr[i] = Math.round(arr[i] * 255);
                        }
                    }
                    if (isNaN(arr[i])) {
                        return this.emptyObject();
                    }
                    if (parseInt(arr[i]) > 255) {
                        arr[i] = 255;
                    }
                    if (i < 3) {
                        arr[i] = parseInt(arr[i]);
                    }
                    if (i == 3 && Number(arr[i]) > 1) {
                        arr[i] = 1;
                    }
                }
                rgb = { r: arr[0], g: arr[1], b: arr[2] };
                if (opacity == true) {
                    a = Number(arr[3]);
                }
            }
            if (typ == 'hsl' || typ == 'hwb' || typ == 'ncol') {
                while (arr.length < arrlength) {
                    arr.push('0');
                }
                if (typ == 'hsl' || typ == 'hwb') {
                    if (parseInt(arr[0]) >= 360) {
                        arr[0] = 0;
                    }
                }
                for (i = 1; i < arrlength; i++) {
                    if (arr[i].indexOf('%') > -1) {
                        arr[i] = arr[i].replace('%', '');
                        arr[i] = Number(arr[i]);
                        if (isNaN(arr[i])) {
                            return this.emptyObject();
                        }
                        arr[i] = arr[i] / 100;
                    }
                    else {
                        arr[i] = Number(arr[i]);
                    }
                    if (Number(arr[i]) > 1) {
                        arr[i] = 1;
                    }
                    if (Number(arr[i]) < 0) {
                        arr[i] = 0;
                    }
                }
                if (typ == 'hsl') {
                    rgb = this.hslToRgb(arr[0], arr[1], arr[2]);
                    hue = Number(arr[0]);
                    sat = Number(arr[1]);
                }
                if (typ == 'hwb') {
                    rgb = this.hwbToRgb(arr[0], arr[1], arr[2]);
                }
                if (typ == 'ncol') {
                    rgb = this.ncolToRgb(arr[0], arr[1], arr[2]);
                }
                if (opacity == true) {
                    a = Number(arr[3]);
                }
            }
            if (typ == 'cmyk') {
                while (arr.length < arrlength) {
                    arr.push('0');
                }
                for (i = 0; i < arrlength; i++) {
                    if (arr[i].indexOf('%') > -1) {
                        arr[i] = arr[i].replace('%', '');
                        arr[i] = Number(arr[i]);
                        if (isNaN(arr[i])) {
                            return this.emptyObject();
                        }
                        arr[i] = arr[i] / 100;
                    }
                    else {
                        arr[i] = Number(arr[i]);
                    }
                    if (Number(arr[i]) > 1) {
                        arr[i] = 1;
                    }
                    if (Number(arr[i]) < 0) {
                        arr[i] = 0;
                    }
                }
                rgb = this.cmykToRgb(arr[0], arr[1], arr[2], arr[3]);
                if (opacity == true) {
                    a = Number(arr[4]);
                }
            }
        }
        else if (c.substr(0, 3) == 'ncs') {
            rgb = this.ncsToRgb(c);
        }
        else {
            match = false;
            colornames = this.getColorArr('names');
            for (i = 0; i < colornames.length; i++) {
                if (c.toLowerCase() == colornames[i].toLowerCase()) {
                    colorhexs = this.getColorArr('hexs');
                    match = true;
                    rgb = {
                        r: parseInt(colorhexs[i].substr(0, 2), 16),
                        g: parseInt(colorhexs[i].substr(2, 2), 16),
                        b: parseInt(colorhexs[i].substr(4, 2), 16),
                    };
                    break;
                }
            }
            if (match == false) {
                c = c.replace('#', '');
                if (c.length == 3) {
                    c =
                        c.substr(0, 1) +
                            c.substr(0, 1) +
                            c.substr(1, 1) +
                            c.substr(1, 1) +
                            c.substr(2, 1) +
                            c.substr(2, 1);
                }
                for (i = 0; i < c.length; i++) {
                    if (!this.isHex(c.substr(i, 1))) {
                        return this.emptyObject();
                    }
                }
                arr[0] = parseInt(c.substr(0, 2), 16);
                arr[1] = parseInt(c.substr(2, 2), 16);
                arr[2] = parseInt(c.substr(4, 2), 16);
                for (i = 0; i < 3; i++) {
                    if (isNaN(arr[i])) {
                        return this.emptyObject();
                    }
                }
                rgb = {
                    r: arr[0],
                    g: arr[1],
                    b: arr[2],
                };
            }
        }
        this.view = this.colorObject(rgb, a, hue, sat);
        return this.colorObject(rgb, a, hue, sat);
    }
    colorObject(rgb, a, h, s) {
        let hsl, hwb, cmyk, ncol, color, hue, sat;
        if (!rgb) {
            return this.emptyObject();
        }
        if (a === null) {
            a = 1;
        }
        hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
        hwb = this.rgbToHwb(rgb.r, rgb.g, rgb.b);
        cmyk = this.rgbToCmyk(rgb.r, rgb.g, rgb.b);
        hue = h || hsl.h;
        sat = s || hsl.s;
        ncol = this.hueToNcol(hue);
        color = {
            red: rgb.r,
            green: rgb.g,
            blue: rgb.b,
            hue: hue,
            sat: sat,
            lightness: hsl.l,
            whiteness: hwb.w,
            blackness: hwb.b,
            cyan: cmyk.c,
            magenta: cmyk.m,
            yellow: cmyk.y,
            black: cmyk.k,
            ncol: ncol,
            opacity: a,
            valid: true,
        };
        color = this.roundDecimals(color);
        return color;
    }
    emptyObject() {
        return {
            red: 0,
            green: 0,
            blue: 0,
            hue: 0,
            sat: 0,
            lightness: 0,
            whiteness: 0,
            blackness: 0,
            cyan: 0,
            magenta: 0,
            yellow: 0,
            black: 0,
            ncol: 'R',
            opacity: 1,
            valid: false,
        };
    }
    getColorArr(x) {
        if (x == 'names') {
            return [
                'AliceBlue',
                'AntiqueWhite',
                'Aqua',
                'Aquamarine',
                'Azure',
                'Beige',
                'Bisque',
                'Black',
                'BlanchedAlmond',
                'Blue',
                'BlueViolet',
                'Brown',
                'BurlyWood',
                'CadetBlue',
                'Chartreuse',
                'Chocolate',
                'Coral',
                'CornflowerBlue',
                'Cornsilk',
                'Crimson',
                'Cyan',
                'DarkBlue',
                'DarkCyan',
                'DarkGoldenRod',
                'DarkGray',
                'DarkGrey',
                'DarkGreen',
                'DarkKhaki',
                'DarkMagenta',
                'DarkOliveGreen',
                'DarkOrange',
                'DarkOrchid',
                'DarkRed',
                'DarkSalmon',
                'DarkSeaGreen',
                'DarkSlateBlue',
                'DarkSlateGray',
                'DarkSlateGrey',
                'DarkTurquoise',
                'DarkViolet',
                'DeepPink',
                'DeepSkyBlue',
                'DimGray',
                'DimGrey',
                'DodgerBlue',
                'FireBrick',
                'FloralWhite',
                'ForestGreen',
                'Fuchsia',
                'Gainsboro',
                'GhostWhite',
                'Gold',
                'GoldenRod',
                'Gray',
                'Grey',
                'Green',
                'GreenYellow',
                'HoneyDew',
                'HotPink',
                'IndianRed',
                'Indigo',
                'Ivory',
                'Khaki',
                'Lavender',
                'LavenderBlush',
                'LawnGreen',
                'LemonChiffon',
                'LightBlue',
                'LightCoral',
                'LightCyan',
                'LightGoldenRodYellow',
                'LightGray',
                'LightGrey',
                'LightGreen',
                'LightPink',
                'LightSalmon',
                'LightSeaGreen',
                'LightSkyBlue',
                'LightSlateGray',
                'LightSlateGrey',
                'LightSteelBlue',
                'LightYellow',
                'Lime',
                'LimeGreen',
                'Linen',
                'Magenta',
                'Maroon',
                'MediumAquaMarine',
                'MediumBlue',
                'MediumOrchid',
                'MediumPurple',
                'MediumSeaGreen',
                'MediumSlateBlue',
                'MediumSpringGreen',
                'MediumTurquoise',
                'MediumVioletRed',
                'MidnightBlue',
                'MintCream',
                'MistyRose',
                'Moccasin',
                'NavajoWhite',
                'Navy',
                'OldLace',
                'Olive',
                'OliveDrab',
                'Orange',
                'OrangeRed',
                'Orchid',
                'PaleGoldenRod',
                'PaleGreen',
                'PaleTurquoise',
                'PaleVioletRed',
                'PapayaWhip',
                'PeachPuff',
                'Peru',
                'Pink',
                'Plum',
                'PowderBlue',
                'Purple',
                'RebeccaPurple',
                'Red',
                'RosyBrown',
                'RoyalBlue',
                'SaddleBrown',
                'Salmon',
                'SandyBrown',
                'SeaGreen',
                'SeaShell',
                'Sienna',
                'Silver',
                'SkyBlue',
                'SlateBlue',
                'SlateGray',
                'SlateGrey',
                'Snow',
                'SpringGreen',
                'SteelBlue',
                'Tan',
                'Teal',
                'Thistle',
                'Tomato',
                'Turquoise',
                'Violet',
                'Wheat',
                'White',
                'WhiteSmoke',
                'Yellow',
                'YellowGreen',
            ];
        }
        if (x == 'hexs') {
            return [
                'f0f8ff',
                'faebd7',
                '00ffff',
                '7fffd4',
                'f0ffff',
                'f5f5dc',
                'ffe4c4',
                '000000',
                'ffebcd',
                '0000ff',
                '8a2be2',
                'a52a2a',
                'deb887',
                '5f9ea0',
                '7fff00',
                'd2691e',
                'ff7f50',
                '6495ed',
                'fff8dc',
                'dc143c',
                '00ffff',
                '00008b',
                '008b8b',
                'b8860b',
                'a9a9a9',
                'a9a9a9',
                '006400',
                'bdb76b',
                '8b008b',
                '556b2f',
                'ff8c00',
                '9932cc',
                '8b0000',
                'e9967a',
                '8fbc8f',
                '483d8b',
                '2f4f4f',
                '2f4f4f',
                '00ced1',
                '9400d3',
                'ff1493',
                '00bfff',
                '696969',
                '696969',
                '1e90ff',
                'b22222',
                'fffaf0',
                '228b22',
                'ff00ff',
                'dcdcdc',
                'f8f8ff',
                'ffd700',
                'daa520',
                '808080',
                '808080',
                '008000',
                'adff2f',
                'f0fff0',
                'ff69b4',
                'cd5c5c',
                '4b0082',
                'fffff0',
                'f0e68c',
                'e6e6fa',
                'fff0f5',
                '7cfc00',
                'fffacd',
                'add8e6',
                'f08080',
                'e0ffff',
                'fafad2',
                'd3d3d3',
                'd3d3d3',
                '90ee90',
                'ffb6c1',
                'ffa07a',
                '20b2aa',
                '87cefa',
                '778899',
                '778899',
                'b0c4de',
                'ffffe0',
                '00ff00',
                '32cd32',
                'faf0e6',
                'ff00ff',
                '800000',
                '66cdaa',
                '0000cd',
                'ba55d3',
                '9370db',
                '3cb371',
                '7b68ee',
                '00fa9a',
                '48d1cc',
                'c71585',
                '191970',
                'f5fffa',
                'ffe4e1',
                'ffe4b5',
                'ffdead',
                '000080',
                'fdf5e6',
                '808000',
                '6b8e23',
                'ffa500',
                'ff4500',
                'da70d6',
                'eee8aa',
                '98fb98',
                'afeeee',
                'db7093',
                'ffefd5',
                'ffdab9',
                'cd853f',
                'ffc0cb',
                'dda0dd',
                'b0e0e6',
                '800080',
                '663399',
                'ff0000',
                'bc8f8f',
                '4169e1',
                '8b4513',
                'fa8072',
                'f4a460',
                '2e8b57',
                'fff5ee',
                'a0522d',
                'c0c0c0',
                '87ceeb',
                '6a5acd',
                '708090',
                '708090',
                'fffafa',
                '00ff7f',
                '4682b4',
                'd2b48c',
                '008080',
                'd8bfd8',
                'ff6347',
                '40e0d0',
                'ee82ee',
                'f5deb3',
                'ffffff',
                'f5f5f5',
                'ffff00',
                '9acd32',
            ];
        }
        return [];
    }
    roundDecimals(c) {
        c.red = Number(c.red.toFixed(0));
        c.green = Number(c.green.toFixed(0));
        c.blue = Number(c.blue.toFixed(0));
        c.hue = Number(c.hue.toFixed(0));
        c.sat = Number(c.sat.toFixed(2));
        c.lightness = Number(c.lightness.toFixed(2));
        c.whiteness = Number(c.whiteness.toFixed(2));
        c.blackness = Number(c.blackness.toFixed(2));
        c.cyan = Number(c.cyan.toFixed(2));
        c.magenta = Number(c.magenta.toFixed(2));
        c.yellow = Number(c.yellow.toFixed(2));
        c.black = Number(c.black.toFixed(2));
        c.ncol = c.ncol.substr(0, 1) + Math.round(Number(c.ncol.substr(1)));
        c.opacity = Number(c.opacity.toFixed(2));
        return c;
    }
    hslToRgb(hue, sat, light) {
        let t1, t2, r, g, b;
        hue = hue / 60;
        if (light <= 0.5) {
            t2 = light * (sat + 1);
        }
        else {
            t2 = light + sat - light * sat;
        }
        t1 = light * 2 - t2;
        r = this.hueToRgb(t1, t2, hue + 2) * 255;
        g = this.hueToRgb(t1, t2, hue) * 255;
        b = this.hueToRgb(t1, t2, hue - 2) * 255;
        return { r: r, g: g, b: b };
    }
    hueToRgb(t1, t2, hue) {
        if (hue < 0)
            hue += 6;
        if (hue >= 6)
            hue -= 6;
        if (hue < 1)
            return (t2 - t1) * hue + t1;
        else if (hue < 3)
            return t2;
        else if (hue < 4)
            return (t2 - t1) * (4 - hue) + t1;
        else
            return t1;
    }
    hwbToRgb(hue, white, black) {
        let i, rgb, rgbArr = [], tot;
        rgb = this.hslToRgb(hue, 1, 0.5);
        rgbArr[0] = rgb.r / 255;
        rgbArr[1] = rgb.g / 255;
        rgbArr[2] = rgb.b / 255;
        tot = white + black;
        if (tot > 1) {
            white = Number((white / tot).toFixed(2));
            black = Number((black / tot).toFixed(2));
        }
        for (i = 0; i < 3; i++) {
            rgbArr[i] *= 1 - white - black;
            rgbArr[i] += white;
            rgbArr[i] = Number(rgbArr[i] * 255);
        }
        return { r: rgbArr[0], g: rgbArr[1], b: rgbArr[2] };
    }
    cmykToRgb(c, m, y, k) {
        let r, g, b;
        r = 255 - Math.min(1, c * (1 - k) + k) * 255;
        g = 255 - Math.min(1, m * (1 - k) + k) * 255;
        b = 255 - Math.min(1, y * (1 - k) + k) * 255;
        return { r: r, g: g, b: b };
    }
    ncolToRgb(ncol, white, black) {
        let letter, percent, h, w, b;
        h = ncol;
        if (isNaN(ncol.substr(0, 1))) {
            letter = ncol.substr(0, 1).toUpperCase();
            percent = ncol.substr(1);
            if (percent == '') {
                percent = 0;
            }
            percent = Number(percent);
            if (isNaN(percent)) {
                return false;
            }
            if (letter == 'R') {
                h = 0 + percent * 0.6;
            }
            if (letter == 'Y') {
                h = 60 + percent * 0.6;
            }
            if (letter == 'G') {
                h = 120 + percent * 0.6;
            }
            if (letter == 'C') {
                h = 180 + percent * 0.6;
            }
            if (letter == 'B') {
                h = 240 + percent * 0.6;
            }
            if (letter == 'M') {
                h = 300 + percent * 0.6;
            }
            if (letter == 'W') {
                h = 0;
                white = 1 - percent / 100;
                black = percent / 100;
            }
        }
        return this.hwbToRgb(h, white, black);
    }
    hueToNcol(hue) {
        while (hue >= 360) {
            hue = hue - 360;
        }
        if (hue < 60) {
            return 'R' + hue / 0.6;
        }
        if (hue < 120) {
            return 'Y' + (hue - 60) / 0.6;
        }
        if (hue < 180) {
            return 'G' + (hue - 120) / 0.6;
        }
        if (hue < 240) {
            return 'C' + (hue - 180) / 0.6;
        }
        if (hue < 300) {
            return 'B' + (hue - 240) / 0.6;
        }
        if (hue < 360) {
            return 'M' + (hue - 300) / 0.6;
        }
        return '';
    }
    ncsToRgb(ncs) {
        let black, chroma, bc, percent, black1, chroma1, factor1, blue1, red1, red2, green2, blue2, max, factor2, grey, r, g, b, green1 = 0;
        ncs = this.ngxColorTrim(ncs).toUpperCase();
        ncs = ncs.replace('(', '');
        ncs = ncs.replace(')', '');
        ncs = ncs.replace('NCS', 'NCS ');
        ncs = ncs.replace(/  /g, ' ');
        if (ncs.indexOf('NCS') == -1) {
            ncs = 'NCS ' + ncs;
        }
        ncs = ncs.match(/^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|[A-Z])(\d{2})?([A-Z])?$/);
        if (ncs === null)
            return false;
        black = parseInt(ncs[1], 10);
        chroma = parseInt(ncs[2], 10);
        bc = ncs[3];
        if (bc != 'N' && bc != 'Y' && bc != 'R' && bc != 'B' && bc != 'G') {
            return false;
        }
        percent = parseInt(ncs[4], 10) || 0;
        if (bc !== 'N') {
            black1 = 1.05 * black - 5.25;
            chroma1 = chroma;
            if (bc === 'Y' && percent <= 60) {
                red1 = 1;
            }
            else if ((bc === 'Y' && percent > 60) ||
                (bc === 'R' && percent <= 80)) {
                if (bc === 'Y') {
                    factor1 = percent - 60;
                }
                else {
                    factor1 = percent + 40;
                }
                red1 = (Math.sqrt(14884 - Math.pow(factor1, 2)) - 22) / 100;
            }
            else if ((bc === 'R' && percent > 80) || bc === 'B') {
                red1 = 0;
            }
            else if (bc === 'G') {
                factor1 = percent - 170;
                red1 = (Math.sqrt(33800 - Math.pow(factor1, 2)) - 70) / 100;
            }
            if (bc === 'Y' && percent <= 80) {
                blue1 = 0;
            }
            else if ((bc === 'Y' && percent > 80) ||
                (bc === 'R' && percent <= 60)) {
                if (bc === 'Y') {
                    factor1 = percent - 80 + 20.5;
                }
                else {
                    factor1 = percent + 20 + 20.5;
                }
                blue1 = (104 - Math.sqrt(11236 - Math.pow(factor1, 2))) / 100;
            }
            else if ((bc === 'R' && percent > 60) ||
                (bc === 'B' && percent <= 80)) {
                if (bc === 'R') {
                    factor1 = percent - 60 - 60;
                }
                else {
                    factor1 = percent + 40 - 60;
                }
                blue1 = (Math.sqrt(10000 - Math.pow(factor1, 2)) - 10) / 100;
            }
            else if ((bc === 'B' && percent > 80) ||
                (bc === 'G' && percent <= 40)) {
                if (bc === 'B') {
                    factor1 = percent - 80 - 131;
                }
                else {
                    factor1 = percent + 20 - 131;
                }
                blue1 = (122 - Math.sqrt(19881 - Math.pow(factor1, 2))) / 100;
            }
            else if (bc === 'G' && percent > 40) {
                blue1 = 0;
            }
            if (bc === 'Y') {
                green1 = (85 - (17 / 20) * percent) / 100;
            }
            else if (bc === 'R' && percent <= 60) {
                green1 = 0;
            }
            else if (bc === 'R' && percent > 60) {
                factor1 = percent - 60 + 35;
                green1 = (67.5 - Math.sqrt(5776 - Math.pow(factor1, 2))) / 100;
            }
            else if (bc === 'B' && percent <= 60) {
                factor1 = 1 * percent - 68.5;
                green1 = (6.5 + Math.sqrt(7044.5 - Math.pow(factor1, 2))) / 100;
            }
            else if ((bc === 'B' && percent > 60) ||
                (bc === 'G' && percent <= 60)) {
                green1 = 0.9;
            }
            else if (bc === 'G' && percent > 60) {
                factor1 = percent - 60;
                let green1 = (90 - (1 / 8) * factor1) / 100;
            }
            factor1 = (red1 + green1 + blue1) / 3;
            red2 = ((factor1 - (red1 || 0)) * (100 - chroma1)) / 100 + (red1 || 0);
            green2 = ((factor1 - green1) * (100 - chroma1)) / 100 + green1;
            blue2 = ((factor1 - (blue1 || 0)) * (100 - chroma1)) / 100 + (blue1 || 0);
            if (red2 > green2 && red2 > blue2) {
                max = red2;
            }
            else if (green2 > red2 && green2 > blue2) {
                max = green2;
            }
            else if (blue2 > red2 && blue2 > green2) {
                max = blue2;
            }
            else {
                max = (red2 + green2 + blue2) / 3;
            }
            factor2 = 1 / max;
            (r = +((red2 * factor2 * (100 - black1)) / 100) * 255), 10;
            (g = +((green2 * factor2 * (100 - black1)) / 100) * 255), 10;
            (b = +((blue2 * factor2 * (100 - black1)) / 100) * 255), 10;
            if (r > 255) {
                r = 255;
            }
            if (g > 255) {
                g = 255;
            }
            if (b > 255) {
                b = 255;
            }
            if (r < 0) {
                r = 0;
            }
            if (g < 0) {
                g = 0;
            }
            if (b < 0) {
                b = 0;
            }
        }
        else {
            (grey = +(1 - black / 100) * 255), 10;
            if (grey > 255) {
                grey = 255;
            }
            if (grey < 0) {
                grey = 0;
            }
            r = grey;
            g = grey;
            b = grey;
        }
        return {
            r: r,
            g: g,
            b: b,
        };
    }
    rgbToHsl(r, g, b) {
        let min, max, i, l, s, maxcolor, h, rgb = [];
        rgb[0] = r / 255;
        rgb[1] = g / 255;
        rgb[2] = b / 255;
        min = rgb[0];
        max = rgb[0];
        maxcolor = 0;
        for (i = 0; i < rgb.length - 1; i++) {
            if (rgb[i + 1] <= min) {
                min = rgb[i + 1];
            }
            if (rgb[i + 1] >= max) {
                max = rgb[i + 1];
                maxcolor = i + 1;
            }
        }
        if (maxcolor == 0) {
            h = (rgb[1] - rgb[2]) / (max - min);
        }
        if (maxcolor == 1) {
            h = 2 + (rgb[2] - rgb[0]) / (max - min);
        }
        if (maxcolor == 2) {
            h = 4 + (rgb[0] - rgb[1]) / (max - min);
        }
        if (isNaN(h || 0)) {
            h = 0;
        }
        h = (h || 0) * 60;
        if (h < 0) {
            h = h + 360;
        }
        l = (min + max) / 2;
        if (min == max) {
            s = 0;
        }
        else {
            if (l < 0.5) {
                s = (max - min) / (max + min);
            }
            else {
                s = (max - min) / (2 - max - min);
            }
        }
        s = s;
        return { h: h, s: s, l: l };
    }
    rgbToHwb(r, g, b) {
        let h, w, bl;
        r = r / 255;
        g = g / 255;
        b = b / 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let chroma = max - min;
        if (chroma == 0) {
            h = 0;
        }
        else if (r == max) {
            h = (((g - b) / chroma) % 6) * 360;
        }
        else if (g == max) {
            h = (((b - r) / chroma + 2) % 6) * 360;
        }
        else {
            h = (((r - g) / chroma + 4) % 6) * 360;
        }
        w = min;
        bl = 1 - max;
        return { h: h, w: w, b: bl };
    }
    rgbToCmyk(red, green, blue) {
        let c, m, y, k;
        red = red / 255;
        green = green / 255;
        blue = blue / 255;
        let max = Math.max(red, green, blue);
        k = 1 - max;
        if (k == 1) {
            c = 0;
            m = 0;
            y = 0;
        }
        else {
            c = (1 - red - k) / (1 - k);
            m = (1 - green - k) / (1 - k);
            y = (1 - blue - k) / (1 - k);
        }
        return { c: c, m: m, y: y, k: k };
    }
    toHex(n) {
        let hex = n.toString(16);
        while (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }
    cl(x) {
        console.log(x);
    }
    ngxColorTrim(x) {
        return x.replace(/^\s+|\s+$/g, '');
    }
    isHex(x) {
        return '0123456789ABCDEFabcdef'.indexOf(x) > -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxColorConverterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxColorConverterService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxColorConverterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbG9yLWNvbnZlcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbG9yLWNvbnZlcnRlci9zcmMvbGliL25neC1jb2xvci1jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQztRQWpCTyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBcUJaLGdCQUFXLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxFQUFFO1lBQ2hFLE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVLLGlCQUFZLEdBQUcsQ0FDcEIsR0FBVyxFQUNYLEtBQWEsRUFDYixJQUFZLEVBQ1osS0FBYSxFQUNiLEVBQUU7WUFDRixPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3pFLENBQUMsQ0FBQztRQUVLLGdCQUFXLEdBQUcsQ0FBQyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7WUFDekUsT0FBTyxDQUNMLE1BQU07Z0JBQ04sR0FBRztnQkFDSCxJQUFJO2dCQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsS0FBSztnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FDTCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUssdUJBQWtCLEdBQUcsQ0FDMUIsR0FBVyxFQUNYLFNBQWlC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UixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7YUFDVCxDQUFDO1NBQ0g7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxhQUFhLENBQUMsQ0FBTTtRQUN6QixDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxD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T0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLENBQU0sRUFBRSxDQUFNO1FBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0MsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUs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QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxLQUFLLENBQUMsQ0FBTTtRQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTSxFQUFFLENBQUMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLFlBQVksQ0FBQyxDQUFNO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxDQUFNO1FBQ2pCLE9BQU8sd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OEdBOXpDVSx3QkFBd0I7a0hBQXhCLHdCQUF3QixjQUZ2QixNQUFNOzsyRkFFUCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09MT1JPQkpFQ1QgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neENvbG9yQ29udmVydGVyU2VydmljZSB7XG4gIHB1YmxpYyB2YWx1ZXMgPSAnJztcbiAgcHVibGljIHJlZDogbnVtYmVyO1xuICBwdWJsaWMgZ3JlZW46IG51bWJlcjtcbiAgcHVibGljIGJsdWU6IG51bWJlcjtcbiAgcHVibGljIG9wYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIGh1ZTogbnVtYmVyO1xuICBwdWJsaWMgd2hpdGVuZXNzOiBudW1iZXI7XG4gIHB1YmxpYyBibGFja25lc3M6IG51bWJlcjtcbiAgcHVibGljIHNhdDogbnVtYmVyO1xuICBwdWJsaWMgbGlnaHRuZXNzOiBudW1iZXI7XG4gIHB1YmxpYyBjeWFuOiBudW1iZXI7XG4gIHB1YmxpYyBtYWdlbnRhOiBudW1iZXI7XG4gIHB1YmxpYyB5ZWxsb3c6IG51bWJlcjtcbiAgcHVibGljIGJsYWNrOiBudW1iZXI7XG4gIHB1YmxpYyBuY29sOiBudW1iZXI7XG4gIHB1YmxpYyB2YWxpZDogYW55O1xuICBwdWJsaWMgdmlldzogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgcHVibGljIHRvUmdiU3RyaW5nID0gKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gJ3JnYignICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnKSc7XG4gIH07XG5cbiAgcHVibGljIHRvUmdiYVN0cmluZyA9IChcbiAgICByZWQ6IG51bWJlcixcbiAgICBncmVlbjogbnVtYmVyLFxuICAgIGJsdWU6IG51bWJlcixcbiAgICBhbHBoYTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiAncmdiYSgnICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG4gIH07XG5cbiAgcHVibGljIHRvSHdiU3RyaW5nID0gKGh1ZTogbnVtYmVyLCB3aGl0ZW5lc3M6IG51bWJlciwgYmxhY2tuZXNzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgJ2h3YignICtcbiAgICAgIGh1ZSArXG4gICAgICAnLCAnICtcbiAgICAgIE1hdGgucm91bmQod2hpdGVuZXNzICogMTAwKSArXG4gICAgICAnJSwgJyArXG4gICAgICBNYXRoLnJvdW5kKGJsYWNrbmVzcyAqIDEwMCkgK1xuICAgICAgJyUpJ1xuICAgICk7XG4gIH07XG5cbiAgcHVibGljIHRvSHdiU3RyaW5nRGVjaW1hbCA9IChcbiAgICBodWU6IG51bWJlcixcbiAgICB3aGl0ZW5lc3M6IG51bWJlcixcbiAgICBibGFja25lc3M6IG51bWJlclxuICApID0+IHtcbiAgICByZXR1cm4gJ2h3YignICsgaHVlICsgJywgJyArIHdoaXRlbmVzcyArICcsICcgKyBibGFja25lc3MgKyAnKSc7XG4gIH07XG5cbiAgcHVibGljIHRvSHdiYVN0cmluZyA9IChcbiAgICBodWU6IG51bWJlcixcbiAgICB3aGl0ZW5lc3M6IG51bWJlcixcbiAgICBibGFja25lc3M6IG51bWJlcixcbiAgICBhbHBoYTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAnaHdiYSgnICtcbiAgICAgIGh1ZSArXG4gICAgICAnLCAnICtcbiAgICAgIE1hdGgucm91bmQod2hpdGVuZXNzICogMTAwKSArXG4gICAgICAnJSwgJyArXG4gICAgICBNYXRoLnJvdW5kKGJsYWNrbmVzcyAqIDEwMCkgK1xuICAgICAgJyUsICcgK1xuICAgICAgYWxwaGEgK1xuICAgICAgJyknXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdG9Ic2xTdHJpbmcgPSAoaHVlOiBudW1iZXIsIHNhdDogbnVtYmVyLCBsaWdodG5lc3M6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAnaHNsKCcgK1xuICAgICAgaHVlICtcbiAgICAgICcsICcgK1xuICAgICAgTWF0aC5yb3VuZChzYXQgKiAxMDApICtcbiAgICAgICclLCAnICtcbiAgICAgIE1hdGgucm91bmQobGlnaHRuZXNzICogMTAwKSArXG4gICAgICAnJSknXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdG9Ic2xTdHJpbmdEZWNpbWFsID0gKGh1ZTogbnVtYmVyLCBzYXQ6IG51bWJlciwgbGlnaHRuZXNzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gJ2hzbCgnICsgaHVlICsgJywgJyArIHNhdCArICcsICcgKyBsaWdodG5lc3MgKyAnKSc7XG4gIH07XG5cbiAgcHVibGljIHRvSHNsYVN0cmluZyA9IChcbiAgICBodWU6IG51bWJlcixcbiAgICBzYXQ6IG51bWJlcixcbiAgICBsaWdodG5lc3M6IG51bWJlcixcbiAgICBhbHBoYTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAnaHNsYSgnICtcbiAgICAgIGh1ZSArXG4gICAgICAnLCAnICtcbiAgICAgIE1hdGgucm91bmQoc2F0ICogMTAwKSArXG4gICAgICAnJSwgJyArXG4gICAgICBNYXRoLnJvdW5kKGxpZ2h0bmVzcyAqIDEwMCkgK1xuICAgICAgJyUsICcgK1xuICAgICAgYWxwaGEgK1xuICAgICAgJyknXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdG9DbXlrU3RyaW5nID0gKFxuICAgIGN5YW46IG51bWJlcixcbiAgICBtYWdlbnRhOiBudW1iZXIsXG4gICAgeWVsbG93OiBudW1iZXIsXG4gICAgYmxhY2s6IG51bWJlclxuICApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgJ2NteWsoJyArXG4gICAgICBNYXRoLnJvdW5kKGN5YW4gKiAxMDApICtcbiAgICAgICclLCAnICtcbiAgICAgIE1hdGgucm91bmQobWFnZW50YSAqIDEwMCkgK1xuICAgICAgJyUsICcgK1xuICAgICAgTWF0aC5yb3VuZCh5ZWxsb3cgKiAxMDApICtcbiAgICAgICclLCAnICtcbiAgICAgIE1hdGgucm91bmQoYmxhY2sgKiAxMDApICtcbiAgICAgICclKSdcbiAgICApO1xuICB9O1xuXG4gIHB1YmxpYyB0b0NteWtTdHJpbmdEZWNpbWFsID0gKFxuICAgIGN5YW46IG51bWJlcixcbiAgICBtYWdlbnRhOiBudW1iZXIsXG4gICAgeWVsbG93OiBudW1iZXIsXG4gICAgYmxhY2s6IG51bWJlclxuICApID0+IHtcbiAgICByZXR1cm4gJ2NteWsoJyArIGN5YW4gKyAnLCAnICsgbWFnZW50YSArICcsICcgKyB5ZWxsb3cgKyAnLCAnICsgYmxhY2sgKyAnKSc7XG4gIH07XG5cbiAgcHVibGljIHRvTmNvbFN0cmluZyA9IChcbiAgICBuY29sOiBudW1iZXIsXG4gICAgd2hpdGVuZXNzOiBudW1iZXIsXG4gICAgYmxhY2tuZXNzOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5jb2wgK1xuICAgICAgJywgJyArXG4gICAgICBNYXRoLnJvdW5kKHdoaXRlbmVzcyAqIDEwMCkgK1xuICAgICAgJyUsICcgK1xuICAgICAgTWF0aC5yb3VuZChibGFja25lc3MgKiAxMDApICtcbiAgICAgICclJ1xuICAgICk7XG4gIH07XG5cbiAgcHVibGljIHRvTmNvbFN0cmluZ0RlY2ltYWwgPSAoXG4gICAgbmNvbDogbnVtYmVyLFxuICAgIHdoaXRlbmVzczogbnVtYmVyLFxuICAgIGJsYWNrbmVzczogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiBuY29sICsgJywgJyArIHdoaXRlbmVzcyArICcsICcgKyBibGFja25lc3M7XG4gIH07XG5cbiAgcHVibGljIHRvTmNvbGFTdHJpbmcgPSAoXG4gICAgbmNvbDogbnVtYmVyLFxuICAgIHdoaXRlbmVzczogbnVtYmVyLFxuICAgIGJsYWNrbmVzczogbnVtYmVyLFxuICAgIGFscGhhOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5jb2wgK1xuICAgICAgJywgJyArXG4gICAgICBNYXRoLnJvdW5kKHdoaXRlbmVzcyAqIDEwMCkgK1xuICAgICAgJyUsICcgK1xuICAgICAgTWF0aC5yb3VuZChibGFja25lc3MgKiAxMDApICtcbiAgICAgICclLCAnICtcbiAgICAgIGFscGhhXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdG9OYW1lID0gKCkgPT4ge1xuICAgIGxldCByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBjb2xvcmhleHMgPSB0aGlzLmdldENvbG9yQXJyKCdoZXhzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcmhleHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvcmhleHNbaV0uc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3JoZXhzW2ldLnN1YnN0cigyLCAyKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yaGV4c1tpXS5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICAgIGlmICh0aGlzLnJlZCA9PSByICYmIHRoaXMuZ3JlZW4gPT0gZyAmJiB0aGlzLmJsdWUgPT0gYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2xvckFycignbmFtZXMnKVtpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9O1xuXG4gIHB1YmxpYyB0b0hleFN0cmluZyA9IChyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHIgPSB0aGlzLnRvSGV4KHJlZCk7XG4gICAgbGV0IGcgPSB0aGlzLnRvSGV4KGdyZWVuKTtcbiAgICBsZXQgYiA9IHRoaXMudG9IZXgoYmx1ZSk7XG4gICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgfTtcblxuICBwdWJsaWMgdG9SZ2IgPSAocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7IHI6IHJlZCwgZzogZ3JlZW4sIGI6IGJsdWUsIGE6IGFscGhhIH07XG4gIH07XG5cbiAgcHVibGljIHRvSHNsID0gKFxuICAgIGh1ZTogbnVtYmVyLFxuICAgIHNhdDogbnVtYmVyLFxuICAgIGxpZ2h0bmVzczogbnVtYmVyLFxuICAgIGFscGhhOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgcmV0dXJuIHsgaDogaHVlLCBzOiBzYXQsIGw6IGxpZ2h0bmVzcywgYTogYWxwaGEgfTtcbiAgfTtcblxuICBwdWJsaWMgdG9Id2IgPSAoXG4gICAgaHVlOiBudW1iZXIsXG4gICAgd2hpdGVuZXNzOiBudW1iZXIsXG4gICAgYmxhY2tuZXNzOiBudW1iZXIsXG4gICAgYWxwaGE6IG51bWJlclxuICApID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaDogaHVlLFxuICAgICAgdzogd2hpdGVuZXNzLFxuICAgICAgYjogYmxhY2tuZXNzLFxuICAgICAgYTogYWxwaGEsXG4gICAgfTtcbiAgfTtcblxuICBwdWJsaWMgdG9DbXlrID0gKFxuICAgIGN5YW46IG51bWJlcixcbiAgICBtYWdlbnRhOiBudW1iZXIsXG4gICAgeWVsbG93OiBudW1iZXIsXG4gICAgYmxhY2s6IG51bWJlcixcbiAgICBhbHBoYTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjOiBjeWFuLFxuICAgICAgbTogbWFnZW50YSxcbiAgICAgIHk6IHllbGxvdyxcbiAgICAgIGs6IGJsYWNrLFxuICAgICAgYTogYWxwaGEsXG4gICAgfTtcbiAgfTtcblxuICBwdWJsaWMgdG9OY29sID0gKFxuICAgIG5jb2w6IG51bWJlcixcbiAgICB3aGl0ZW5lc3M6IG51bWJlcixcbiAgICBibGFja25lc3M6IG51bWJlcixcbiAgICBhbHBoYTogbnVtYmVyXG4gICkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuY29sOiBuY29sLFxuICAgICAgdzogd2hpdGVuZXNzLFxuICAgICAgYjogYmxhY2tuZXNzLFxuICAgICAgYTogYWxwaGEsXG4gICAgfTtcbiAgfTtcblxuICBwdWJsaWMgaXNEYXJrID0gKG46IGFueSkgPT4ge1xuICAgIGxldCBtID0gbiB8fCAxMjg7XG4gICAgcmV0dXJuICgrdGhpcy5yZWQgKiAyOTkgKyArdGhpcy5ncmVlbiAqIDU4NyArICt0aGlzLmJsdWUgKiAxMTQpIC8gMTAwMCA8IG07XG4gIH07XG5cbiAgcHVibGljIHNhdHVyYXRlID0gKG46IGFueSkgPT4ge1xuICAgIGxldCB4LCByZ2IsIGNvbG9yO1xuICAgIHggPSBuIC8gMTAwIHx8IDAuMTtcbiAgICB0aGlzLnNhdCArPSB4O1xuICAgIGlmICh0aGlzLnNhdCA+IDEpIHtcbiAgICAgIHRoaXMuc2F0ID0gMTtcbiAgICB9XG4gICAgcmdiID0gdGhpcy5oc2xUb1JnYih0aGlzLmh1ZSwgdGhpcy5zYXQsIHRoaXMubGlnaHRuZXNzKTtcbiAgICBjb2xvciA9IHRoaXMuY29sb3JPYmplY3QocmdiLCB0aGlzLm9wYWNpdHksIHRoaXMuaHVlLCB0aGlzLnNhdCk7XG4gICAgdGhpcy5hdHRhY2hWYWx1ZXMoY29sb3IpO1xuICB9O1xuXG4gIHB1YmxpYyBkZXNhdHVyYXRlID0gKG46IGFueSkgPT4ge1xuICAgIGxldCB4LCByZ2IsIGNvbG9yO1xuICAgIHggPSBuIC8gMTAwIHx8IDAuMTtcbiAgICB0aGlzLnNhdCAtPSB4O1xuICAgIGlmICh0aGlzLnNhdCA8IDApIHtcbiAgICAgIHRoaXMuc2F0ID0gMDtcbiAgICB9XG4gICAgcmdiID0gdGhpcy5oc2xUb1JnYih0aGlzLmh1ZSwgdGhpcy5zYXQsIHRoaXMubGlnaHRuZXNzKTtcbiAgICBjb2xvciA9IHRoaXMuY29sb3JPYmplY3QocmdiLCB0aGlzLm9wYWNpdHksIHRoaXMuaHVlLCB0aGlzLnNhdCk7XG4gICAgdGhpcy5hdHRhY2hWYWx1ZXMoY29sb3IpO1xuICB9O1xuXG4gIHB1YmxpYyBsaWdodGVyID0gKG46IGFueSkgPT4ge1xuICAgIGxldCB4LCByZ2IsIGNvbG9yO1xuICAgIHggPSBuIC8gMTAwIHx8IDAuMTtcbiAgICB0aGlzLmxpZ2h0bmVzcyArPSB4O1xuICAgIGlmICh0aGlzLmxpZ2h0bmVzcyA+IDEpIHtcbiAgICAgIHRoaXMubGlnaHRuZXNzID0gMTtcbiAgICB9XG4gICAgcmdiID0gdGhpcy5oc2xUb1JnYih0aGlzLmh1ZSwgdGhpcy5zYXQsIHRoaXMubGlnaHRuZXNzKTtcbiAgICBjb2xvciA9IHRoaXMuY29sb3JPYmplY3QocmdiLCB0aGlzLm9wYWNpdHksIHRoaXMuaHVlLCB0aGlzLnNhdCk7XG4gICAgdGhpcy5hdHRhY2hWYWx1ZXMoY29sb3IpO1xuICB9O1xuXG4gIHB1YmxpYyBkYXJrZXIgPSAobjogYW55KSA9PiB7XG4gICAgbGV0IHgsIHJnYiwgY29sb3I7XG4gICAgeCA9IG4gLyAxMDAgfHwgMC4xO1xuICAgIHRoaXMubGlnaHRuZXNzIC09IHg7XG4gICAgaWYgKHRoaXMubGlnaHRuZXNzIDwgMCkge1xuICAgICAgdGhpcy5saWdodG5lc3MgPSAwO1xuICAgIH1cbiAgICByZ2IgPSB0aGlzLmhzbFRvUmdiKHRoaXMuaHVlLCB0aGlzLnNhdCwgdGhpcy5saWdodG5lc3MpO1xuICAgIGNvbG9yID0gdGhpcy5jb2xvck9iamVjdChyZ2IsIHRoaXMub3BhY2l0eSwgdGhpcy5odWUsIHRoaXMuc2F0KTtcbiAgICB0aGlzLmF0dGFjaFZhbHVlcyhjb2xvcik7XG4gIH07XG5cbiAgcHVibGljIGF0dGFjaFZhbHVlcyA9IChjb2xvcjogYW55KSA9PiB7XG4gICAgdGhpcy5yZWQgPSBjb2xvci5yZWQ7XG4gICAgdGhpcy5ncmVlbiA9IGNvbG9yLmdyZWVuO1xuICAgIHRoaXMuYmx1ZSA9IGNvbG9yLmJsdWU7XG4gICAgdGhpcy5odWUgPSBjb2xvci5odWU7XG4gICAgdGhpcy5zYXQgPSBjb2xvci5zYXQ7XG4gICAgdGhpcy5saWdodG5lc3MgPSBjb2xvci5saWdodG5lc3M7XG4gICAgdGhpcy53aGl0ZW5lc3MgPSBjb2xvci53aGl0ZW5lc3M7XG4gICAgdGhpcy5ibGFja25lc3MgPSBjb2xvci5ibGFja25lc3M7XG4gICAgdGhpcy5jeWFuID0gY29sb3IuY3lhbjtcbiAgICB0aGlzLm1hZ2VudGEgPSBjb2xvci5tYWdlbnRhO1xuICAgIHRoaXMueWVsbG93ID0gY29sb3IueWVsbG93O1xuICAgIHRoaXMuYmxhY2sgPSBjb2xvci5ibGFjaztcbiAgICB0aGlzLm5jb2wgPSBjb2xvci5uY29sO1xuICAgIHRoaXMub3BhY2l0eSA9IGNvbG9yLm9wYWNpdHk7XG4gICAgdGhpcy52YWxpZCA9IGNvbG9yLnZhbGlkO1xuICB9O1xuXG4gIHB1YmxpYyB0b0NvbG9yT2JqZWN0KGNvbG9yOiBhbnkpIHtcbiAgICBsZXQgeCxcbiAgICAgIHksXG4gICAgICB0eXAsXG4gICAgICBhcnIgPSBbXSxcbiAgICAgIGFycmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBvcGFjaXR5LFxuICAgICAgbWF0Y2gsXG4gICAgICBhLFxuICAgICAgaHVlLFxuICAgICAgc2F0LFxuICAgICAgcmdiLFxuICAgICAgY29sb3JuYW1lcyA9IFtdLFxuICAgICAgY29sb3JoZXhzID0gW107XG4gICAgbGV0IGMgPSBjb2xvcjtcbiAgICBjID0gdGhpcy5uZ3hDb2xvclRyaW0oYy50b0xvd2VyQ2FzZSgpKTtcbiAgICB4ID0gYy5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKTtcbiAgICB5ID0gYy5zdWJzdHIoMSk7XG4gICAgYSA9IDE7XG4gICAgaWYgKFxuICAgICAgKHggPT0gJ1InIHx8XG4gICAgICAgIHggPT0gJ1knIHx8XG4gICAgICAgIHggPT0gJ0cnIHx8XG4gICAgICAgIHggPT0gJ0MnIHx8XG4gICAgICAgIHggPT0gJ0InIHx8XG4gICAgICAgIHggPT0gJ00nIHx8XG4gICAgICAgIHggPT0gJ1cnKSAmJlxuICAgICAgIWlzTmFOKHkpXG4gICAgKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPT0gNiAmJiBjLmluZGV4T2YoJywnKSA9PSAtMSkge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYyA9ICduY29sKCcgKyBjICsgJyknO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYy5sZW5ndGggIT0gMyAmJiBjLmxlbmd0aCAhPSA2ICYmICFpc05hTihjKSkge1xuICAgICAgYyA9ICduY29sKCcgKyBjICsgJyknO1xuICAgIH1cbiAgICBpZiAoYy5pbmRleE9mKCcsJykgPiAwICYmIGMuaW5kZXhPZignKCcpID09IC0xKSB7XG4gICAgICBjID0gJ25jb2woJyArIGMgKyAnKSc7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGMuc3Vic3RyKDAsIDMpID09ICdyZ2InIHx8XG4gICAgICBjLnN1YnN0cigwLCAzKSA9PSAnaHNsJyB8fFxuICAgICAgYy5zdWJzdHIoMCwgMykgPT0gJ2h3YicgfHxcbiAgICAgIGMuc3Vic3RyKDAsIDQpID09ICduY29sJyB8fFxuICAgICAgYy5zdWJzdHIoMCwgNCkgPT0gJ2NteWsnXG4gICAgKSB7XG4gICAgICBpZiAoYy5zdWJzdHIoMCwgNCkgPT0gJ25jb2wnKSB7XG4gICAgICAgIGlmIChjLnNwbGl0KCcsJykubGVuZ3RoID09IDQgJiYgYy5pbmRleE9mKCduY29sYScpID09IC0xKSB7XG4gICAgICAgICAgYyA9IGMucmVwbGFjZSgnbmNvbCcsICduY29sYScpO1xuICAgICAgICB9XG4gICAgICAgIHR5cCA9ICduY29sJztcbiAgICAgICAgYyA9IGMuc3Vic3RyKDQpO1xuICAgICAgfSBlbHNlIGlmIChjLnN1YnN0cigwLCA0KSA9PSAnY215aycpIHtcbiAgICAgICAgdHlwID0gJ2NteWsnO1xuICAgICAgICBjID0gYy5zdWJzdHIoNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXAgPSBjLnN1YnN0cigwLCAzKTtcbiAgICAgICAgYyA9IGMuc3Vic3RyKDMpO1xuICAgICAgfVxuICAgICAgYXJybGVuZ3RoID0gMztcbiAgICAgIG9wYWNpdHkgPSBmYWxzZTtcbiAgICAgIGlmIChjLnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpID09ICdhJykge1xuICAgICAgICBhcnJsZW5ndGggPSA0O1xuICAgICAgICBvcGFjaXR5ID0gdHJ1ZTtcbiAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgfSBlbHNlIGlmICh0eXAgPT0gJ2NteWsnKSB7XG4gICAgICAgIGFycmxlbmd0aCA9IDQ7XG4gICAgICAgIGlmIChjLnNwbGl0KCcsJykubGVuZ3RoID09IDUpIHtcbiAgICAgICAgICBhcnJsZW5ndGggPSA1O1xuICAgICAgICAgIG9wYWNpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjID0gYy5yZXBsYWNlKCcoJywgJycpO1xuICAgICAgYyA9IGMucmVwbGFjZSgnKScsICcnKTtcbiAgICAgIGFyciA9IGMuc3BsaXQoJywnKTtcbiAgICAgIGlmICh0eXAgPT0gJ3JnYicpIHtcbiAgICAgICAgaWYgKGFyci5sZW5ndGggIT0gYXJybGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlPYmplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJybGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyW2ldID09ICcnIHx8IGFycltpXSA9PSAnICcpIHtcbiAgICAgICAgICAgIGFycltpXSA9ICcwJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFycltpXS5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW2ldLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICAgICAgICBhcnJbaV0gPSBOdW1iZXIoYXJyW2ldIC8gMTAwKTtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSBNYXRoLnJvdW5kKGFycltpXSAqIDI1NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc05hTihhcnJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU9iamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyW2ldKSA+IDI1NSkge1xuICAgICAgICAgICAgYXJyW2ldID0gMjU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgIGFycltpXSA9IHBhcnNlSW50KGFycltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09IDMgJiYgTnVtYmVyKGFycltpXSkgPiAxKSB7XG4gICAgICAgICAgICBhcnJbaV0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZ2IgPSB7IHI6IGFyclswXSwgZzogYXJyWzFdLCBiOiBhcnJbMl0gfTtcbiAgICAgICAgaWYgKG9wYWNpdHkgPT0gdHJ1ZSkge1xuICAgICAgICAgIGEgPSBOdW1iZXIoYXJyWzNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cCA9PSAnaHNsJyB8fCB0eXAgPT0gJ2h3YicgfHwgdHlwID09ICduY29sJykge1xuICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCA8IGFycmxlbmd0aCkge1xuICAgICAgICAgIGFyci5wdXNoKCcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cCA9PSAnaHNsJyB8fCB0eXAgPT0gJ2h3YicpIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzBdKSA+PSAzNjApIHtcbiAgICAgICAgICAgIGFyclswXSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJbaV0uaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGFycltpXSA9IGFycltpXS5yZXBsYWNlKCclJywgJycpO1xuICAgICAgICAgICAgYXJyW2ldID0gTnVtYmVyKGFycltpXSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4oYXJyW2ldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyW2ldID0gYXJyW2ldIC8gMTAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJbaV0gPSBOdW1iZXIoYXJyW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKE51bWJlcihhcnJbaV0pID4gMSkge1xuICAgICAgICAgICAgYXJyW2ldID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKE51bWJlcihhcnJbaV0pIDwgMCkge1xuICAgICAgICAgICAgYXJyW2ldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cCA9PSAnaHNsJykge1xuICAgICAgICAgIHJnYiA9IHRoaXMuaHNsVG9SZ2IoYXJyWzBdLCBhcnJbMV0sIGFyclsyXSk7XG4gICAgICAgICAgaHVlID0gTnVtYmVyKGFyclswXSk7XG4gICAgICAgICAgc2F0ID0gTnVtYmVyKGFyclsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cCA9PSAnaHdiJykge1xuICAgICAgICAgIHJnYiA9IHRoaXMuaHdiVG9SZ2IoYXJyWzBdLCBhcnJbMV0sIGFyclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cCA9PSAnbmNvbCcpIHtcbiAgICAgICAgICByZ2IgPSB0aGlzLm5jb2xUb1JnYihhcnJbMF0sIGFyclsxXSwgYXJyWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BhY2l0eSA9PSB0cnVlKSB7XG4gICAgICAgICAgYSA9IE51bWJlcihhcnJbM10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwID09ICdjbXlrJykge1xuICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCA8IGFycmxlbmd0aCkge1xuICAgICAgICAgIGFyci5wdXNoKCcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFycmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycltpXS5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW2ldLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICAgICAgICBhcnJbaV0gPSBOdW1iZXIoYXJyW2ldKTtcbiAgICAgICAgICAgIGlmIChpc05hTihhcnJbaV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5T2JqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0gLyAxMDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycltpXSA9IE51bWJlcihhcnJbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoTnVtYmVyKGFycltpXSkgPiAxKSB7XG4gICAgICAgICAgICBhcnJbaV0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoTnVtYmVyKGFycltpXSkgPCAwKSB7XG4gICAgICAgICAgICBhcnJbaV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZ2IgPSB0aGlzLmNteWtUb1JnYihhcnJbMF0sIGFyclsxXSwgYXJyWzJdLCBhcnJbM10pO1xuICAgICAgICBpZiAob3BhY2l0eSA9PSB0cnVlKSB7XG4gICAgICAgICAgYSA9IE51bWJlcihhcnJbNF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjLnN1YnN0cigwLCAzKSA9PSAnbmNzJykge1xuICAgICAgcmdiID0gdGhpcy5uY3NUb1JnYihjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgIGNvbG9ybmFtZXMgPSB0aGlzLmdldENvbG9yQXJyKCduYW1lcycpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbG9ybmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGMudG9Mb3dlckNhc2UoKSA9PSBjb2xvcm5hbWVzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjb2xvcmhleHMgPSB0aGlzLmdldENvbG9yQXJyKCdoZXhzJyk7XG4gICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIHJnYiA9IHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KGNvbG9yaGV4c1tpXS5zdWJzdHIoMCwgMiksIDE2KSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KGNvbG9yaGV4c1tpXS5zdWJzdHIoMiwgMiksIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KGNvbG9yaGV4c1tpXS5zdWJzdHIoNCwgMiksIDE2KSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2ggPT0gZmFsc2UpIHtcbiAgICAgICAgYyA9IGMucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgaWYgKGMubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICBjID1cbiAgICAgICAgICAgIGMuc3Vic3RyKDAsIDEpICtcbiAgICAgICAgICAgIGMuc3Vic3RyKDAsIDEpICtcbiAgICAgICAgICAgIGMuc3Vic3RyKDEsIDEpICtcbiAgICAgICAgICAgIGMuc3Vic3RyKDEsIDEpICtcbiAgICAgICAgICAgIGMuc3Vic3RyKDIsIDEpICtcbiAgICAgICAgICAgIGMuc3Vic3RyKDIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzSGV4KGMuc3Vic3RyKGksIDEpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlPYmplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJyWzBdID0gcGFyc2VJbnQoYy5zdWJzdHIoMCwgMiksIDE2KTtcbiAgICAgICAgYXJyWzFdID0gcGFyc2VJbnQoYy5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICAgICAgYXJyWzJdID0gcGFyc2VJbnQoYy5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgIGlmIChpc05hTihhcnJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU9iamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZ2IgPSB7XG4gICAgICAgICAgcjogYXJyWzBdLFxuICAgICAgICAgIGc6IGFyclsxXSxcbiAgICAgICAgICBiOiBhcnJbMl0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmlldyA9IHRoaXMuY29sb3JPYmplY3QocmdiLCBhLCBodWUsIHNhdCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JPYmplY3QocmdiLCBhLCBodWUsIHNhdCk7XG4gIH1cblxuICBwdWJsaWMgY29sb3JPYmplY3QocmdiOiBhbnksIGE6IGFueSwgaDogYW55LCBzOiBhbnkpOiBDT0xPUk9CSkVDVCB7XG4gICAgbGV0IGhzbCwgaHdiLCBjbXlrLCBuY29sLCBjb2xvciwgaHVlLCBzYXQ7XG4gICAgaWYgKCFyZ2IpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtcHR5T2JqZWN0KCk7XG4gICAgfVxuICAgIGlmIChhID09PSBudWxsKSB7XG4gICAgICBhID0gMTtcbiAgICB9XG4gICAgaHNsID0gdGhpcy5yZ2JUb0hzbChyZ2IuciwgcmdiLmcsIHJnYi5iKTtcbiAgICBod2IgPSB0aGlzLnJnYlRvSHdiKHJnYi5yLCByZ2IuZywgcmdiLmIpO1xuICAgIGNteWsgPSB0aGlzLnJnYlRvQ215ayhyZ2IuciwgcmdiLmcsIHJnYi5iKTtcbiAgICBodWUgPSBoIHx8IGhzbC5oO1xuICAgIHNhdCA9IHMgfHwgaHNsLnM7XG4gICAgbmNvbCA9IHRoaXMuaHVlVG9OY29sKGh1ZSk7XG4gICAgY29sb3IgPSB7XG4gICAgICByZWQ6IHJnYi5yLFxuICAgICAgZ3JlZW46IHJnYi5nLFxuICAgICAgYmx1ZTogcmdiLmIsXG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdDogc2F0LFxuICAgICAgbGlnaHRuZXNzOiBoc2wubCxcbiAgICAgIHdoaXRlbmVzczogaHdiLncsXG4gICAgICBibGFja25lc3M6IGh3Yi5iLFxuICAgICAgY3lhbjogY215ay5jLFxuICAgICAgbWFnZW50YTogY215ay5tLFxuICAgICAgeWVsbG93OiBjbXlrLnksXG4gICAgICBibGFjazogY215ay5rLFxuICAgICAgbmNvbDogbmNvbCxcbiAgICAgIG9wYWNpdHk6IGEsXG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbG9yID0gdGhpcy5yb3VuZERlY2ltYWxzKGNvbG9yKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgZW1wdHlPYmplY3QoKTogQ09MT1JPQkpFQ1Qge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IDAsXG4gICAgICBncmVlbjogMCxcbiAgICAgIGJsdWU6IDAsXG4gICAgICBodWU6IDAsXG4gICAgICBzYXQ6IDAsXG4gICAgICBsaWdodG5lc3M6IDAsXG4gICAgICB3aGl0ZW5lc3M6IDAsXG4gICAgICBibGFja25lc3M6IDAsXG4gICAgICBjeWFuOiAwLFxuICAgICAgbWFnZW50YTogMCxcbiAgICAgIHllbGxvdzogMCxcbiAgICAgIGJsYWNrOiAwLFxuICAgICAgbmNvbDogJ1InLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldENvbG9yQXJyKHg6IGFueSk6IHN0cmluZ1tdIHtcbiAgICBpZiAoeCA9PSAnbmFtZXMnKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAnQWxpY2VCbHVlJyxcbiAgICAgICAgJ0FudGlxdWVXaGl0ZScsXG4gICAgICAgICdBcXVhJyxcbiAgICAgICAgJ0FxdWFtYXJpbmUnLFxuICAgICAgICAnQXp1cmUnLFxuICAgICAgICAnQmVpZ2UnLFxuICAgICAgICAnQmlzcXVlJyxcbiAgICAgICAgJ0JsYWNrJyxcbiAgICAgICAgJ0JsYW5jaGVkQWxtb25kJyxcbiAgICAgICAgJ0JsdWUnLFxuICAgICAgICAnQmx1ZVZpb2xldCcsXG4gICAgICAgICdCcm93bicsXG4gICAgICAgICdCdXJseVdvb2QnLFxuICAgICAgICAnQ2FkZXRCbHVlJyxcbiAgICAgICAgJ0NoYXJ0cmV1c2UnLFxuICAgICAgICAnQ2hvY29sYXRlJyxcbiAgICAgICAgJ0NvcmFsJyxcbiAgICAgICAgJ0Nvcm5mbG93ZXJCbHVlJyxcbiAgICAgICAgJ0Nvcm5zaWxrJyxcbiAgICAgICAgJ0NyaW1zb24nLFxuICAgICAgICAnQ3lhbicsXG4gICAgICAgICdEYXJrQmx1ZScsXG4gICAgICAgICdEYXJrQ3lhbicsXG4gICAgICAgICdEYXJrR29sZGVuUm9kJyxcbiAgICAgICAgJ0RhcmtHcmF5JyxcbiAgICAgICAgJ0RhcmtHcmV5JyxcbiAgICAgICAgJ0RhcmtHcmVlbicsXG4gICAgICAgICdEYXJrS2hha2knLFxuICAgICAgICAnRGFya01hZ2VudGEnLFxuICAgICAgICAnRGFya09saXZlR3JlZW4nLFxuICAgICAgICAnRGFya09yYW5nZScsXG4gICAgICAgICdEYXJrT3JjaGlkJyxcbiAgICAgICAgJ0RhcmtSZWQnLFxuICAgICAgICAnRGFya1NhbG1vbicsXG4gICAgICAgICdEYXJrU2VhR3JlZW4nLFxuICAgICAgICAnRGFya1NsYXRlQmx1ZScsXG4gICAgICAgICdEYXJrU2xhdGVHcmF5JyxcbiAgICAgICAgJ0RhcmtTbGF0ZUdyZXknLFxuICAgICAgICAnRGFya1R1cnF1b2lzZScsXG4gICAgICAgICdEYXJrVmlvbGV0JyxcbiAgICAgICAgJ0RlZXBQaW5rJyxcbiAgICAgICAgJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgJ0RpbUdyYXknLFxuICAgICAgICAnRGltR3JleScsXG4gICAgICAgICdEb2RnZXJCbHVlJyxcbiAgICAgICAgJ0ZpcmVCcmljaycsXG4gICAgICAgICdGbG9yYWxXaGl0ZScsXG4gICAgICAgICdGb3Jlc3RHcmVlbicsXG4gICAgICAgICdGdWNoc2lhJyxcbiAgICAgICAgJ0dhaW5zYm9ybycsXG4gICAgICAgICdHaG9zdFdoaXRlJyxcbiAgICAgICAgJ0dvbGQnLFxuICAgICAgICAnR29sZGVuUm9kJyxcbiAgICAgICAgJ0dyYXknLFxuICAgICAgICAnR3JleScsXG4gICAgICAgICdHcmVlbicsXG4gICAgICAgICdHcmVlblllbGxvdycsXG4gICAgICAgICdIb25leURldycsXG4gICAgICAgICdIb3RQaW5rJyxcbiAgICAgICAgJ0luZGlhblJlZCcsXG4gICAgICAgICdJbmRpZ28nLFxuICAgICAgICAnSXZvcnknLFxuICAgICAgICAnS2hha2knLFxuICAgICAgICAnTGF2ZW5kZXInLFxuICAgICAgICAnTGF2ZW5kZXJCbHVzaCcsXG4gICAgICAgICdMYXduR3JlZW4nLFxuICAgICAgICAnTGVtb25DaGlmZm9uJyxcbiAgICAgICAgJ0xpZ2h0Qmx1ZScsXG4gICAgICAgICdMaWdodENvcmFsJyxcbiAgICAgICAgJ0xpZ2h0Q3lhbicsXG4gICAgICAgICdMaWdodEdvbGRlblJvZFllbGxvdycsXG4gICAgICAgICdMaWdodEdyYXknLFxuICAgICAgICAnTGlnaHRHcmV5JyxcbiAgICAgICAgJ0xpZ2h0R3JlZW4nLFxuICAgICAgICAnTGlnaHRQaW5rJyxcbiAgICAgICAgJ0xpZ2h0U2FsbW9uJyxcbiAgICAgICAgJ0xpZ2h0U2VhR3JlZW4nLFxuICAgICAgICAnTGlnaHRTa3lCbHVlJyxcbiAgICAgICAgJ0xpZ2h0U2xhdGVHcmF5JyxcbiAgICAgICAgJ0xpZ2h0U2xhdGVHcmV5JyxcbiAgICAgICAgJ0xpZ2h0U3RlZWxCbHVlJyxcbiAgICAgICAgJ0xpZ2h0WWVsbG93JyxcbiAgICAgICAgJ0xpbWUnLFxuICAgICAgICAnTGltZUdyZWVuJyxcbiAgICAgICAgJ0xpbmVuJyxcbiAgICAgICAgJ01hZ2VudGEnLFxuICAgICAgICAnTWFyb29uJyxcbiAgICAgICAgJ01lZGl1bUFxdWFNYXJpbmUnLFxuICAgICAgICAnTWVkaXVtQmx1ZScsXG4gICAgICAgICdNZWRpdW1PcmNoaWQnLFxuICAgICAgICAnTWVkaXVtUHVycGxlJyxcbiAgICAgICAgJ01lZGl1bVNlYUdyZWVuJyxcbiAgICAgICAgJ01lZGl1bVNsYXRlQmx1ZScsXG4gICAgICAgICdNZWRpdW1TcHJpbmdHcmVlbicsXG4gICAgICAgICdNZWRpdW1UdXJxdW9pc2UnLFxuICAgICAgICAnTWVkaXVtVmlvbGV0UmVkJyxcbiAgICAgICAgJ01pZG5pZ2h0Qmx1ZScsXG4gICAgICAgICdNaW50Q3JlYW0nLFxuICAgICAgICAnTWlzdHlSb3NlJyxcbiAgICAgICAgJ01vY2Nhc2luJyxcbiAgICAgICAgJ05hdmFqb1doaXRlJyxcbiAgICAgICAgJ05hdnknLFxuICAgICAgICAnT2xkTGFjZScsXG4gICAgICAgICdPbGl2ZScsXG4gICAgICAgICdPbGl2ZURyYWInLFxuICAgICAgICAnT3JhbmdlJyxcbiAgICAgICAgJ09yYW5nZVJlZCcsXG4gICAgICAgICdPcmNoaWQnLFxuICAgICAgICAnUGFsZUdvbGRlblJvZCcsXG4gICAgICAgICdQYWxlR3JlZW4nLFxuICAgICAgICAnUGFsZVR1cnF1b2lzZScsXG4gICAgICAgICdQYWxlVmlvbGV0UmVkJyxcbiAgICAgICAgJ1BhcGF5YVdoaXAnLFxuICAgICAgICAnUGVhY2hQdWZmJyxcbiAgICAgICAgJ1BlcnUnLFxuICAgICAgICAnUGluaycsXG4gICAgICAgICdQbHVtJyxcbiAgICAgICAgJ1Bvd2RlckJsdWUnLFxuICAgICAgICAnUHVycGxlJyxcbiAgICAgICAgJ1JlYmVjY2FQdXJwbGUnLFxuICAgICAgICAnUmVkJyxcbiAgICAgICAgJ1Jvc3lCcm93bicsXG4gICAgICAgICdSb3lhbEJsdWUnLFxuICAgICAgICAnU2FkZGxlQnJvd24nLFxuICAgICAgICAnU2FsbW9uJyxcbiAgICAgICAgJ1NhbmR5QnJvd24nLFxuICAgICAgICAnU2VhR3JlZW4nLFxuICAgICAgICAnU2VhU2hlbGwnLFxuICAgICAgICAnU2llbm5hJyxcbiAgICAgICAgJ1NpbHZlcicsXG4gICAgICAgICdTa3lCbHVlJyxcbiAgICAgICAgJ1NsYXRlQmx1ZScsXG4gICAgICAgICdTbGF0ZUdyYXknLFxuICAgICAgICAnU2xhdGVHcmV5JyxcbiAgICAgICAgJ1Nub3cnLFxuICAgICAgICAnU3ByaW5nR3JlZW4nLFxuICAgICAgICAnU3RlZWxCbHVlJyxcbiAgICAgICAgJ1RhbicsXG4gICAgICAgICdUZWFsJyxcbiAgICAgICAgJ1RoaXN0bGUnLFxuICAgICAgICAnVG9tYXRvJyxcbiAgICAgICAgJ1R1cnF1b2lzZScsXG4gICAgICAgICdWaW9sZXQnLFxuICAgICAgICAnV2hlYXQnLFxuICAgICAgICAnV2hpdGUnLFxuICAgICAgICAnV2hpdGVTbW9rZScsXG4gICAgICAgICdZZWxsb3cnLFxuICAgICAgICAnWWVsbG93R3JlZW4nLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHggPT0gJ2hleHMnKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAnZjBmOGZmJyxcbiAgICAgICAgJ2ZhZWJkNycsXG4gICAgICAgICcwMGZmZmYnLFxuICAgICAgICAnN2ZmZmQ0JyxcbiAgICAgICAgJ2YwZmZmZicsXG4gICAgICAgICdmNWY1ZGMnLFxuICAgICAgICAnZmZlNGM0JyxcbiAgICAgICAgJzAwMDAwMCcsXG4gICAgICAgICdmZmViY2QnLFxuICAgICAgICAnMDAwMGZmJyxcbiAgICAgICAgJzhhMmJlMicsXG4gICAgICAgICdhNTJhMmEnLFxuICAgICAgICAnZGViODg3JyxcbiAgICAgICAgJzVmOWVhMCcsXG4gICAgICAgICc3ZmZmMDAnLFxuICAgICAgICAnZDI2OTFlJyxcbiAgICAgICAgJ2ZmN2Y1MCcsXG4gICAgICAgICc2NDk1ZWQnLFxuICAgICAgICAnZmZmOGRjJyxcbiAgICAgICAgJ2RjMTQzYycsXG4gICAgICAgICcwMGZmZmYnLFxuICAgICAgICAnMDAwMDhiJyxcbiAgICAgICAgJzAwOGI4YicsXG4gICAgICAgICdiODg2MGInLFxuICAgICAgICAnYTlhOWE5JyxcbiAgICAgICAgJ2E5YTlhOScsXG4gICAgICAgICcwMDY0MDAnLFxuICAgICAgICAnYmRiNzZiJyxcbiAgICAgICAgJzhiMDA4YicsXG4gICAgICAgICc1NTZiMmYnLFxuICAgICAgICAnZmY4YzAwJyxcbiAgICAgICAgJzk5MzJjYycsXG4gICAgICAgICc4YjAwMDAnLFxuICAgICAgICAnZTk5NjdhJyxcbiAgICAgICAgJzhmYmM4ZicsXG4gICAgICAgICc0ODNkOGInLFxuICAgICAgICAnMmY0ZjRmJyxcbiAgICAgICAgJzJmNGY0ZicsXG4gICAgICAgICcwMGNlZDEnLFxuICAgICAgICAnOTQwMGQzJyxcbiAgICAgICAgJ2ZmMTQ5MycsXG4gICAgICAgICcwMGJmZmYnLFxuICAgICAgICAnNjk2OTY5JyxcbiAgICAgICAgJzY5Njk2OScsXG4gICAgICAgICcxZTkwZmYnLFxuICAgICAgICAnYjIyMjIyJyxcbiAgICAgICAgJ2ZmZmFmMCcsXG4gICAgICAgICcyMjhiMjInLFxuICAgICAgICAnZmYwMGZmJyxcbiAgICAgICAgJ2RjZGNkYycsXG4gICAgICAgICdmOGY4ZmYnLFxuICAgICAgICAnZmZkNzAwJyxcbiAgICAgICAgJ2RhYTUyMCcsXG4gICAgICAgICc4MDgwODAnLFxuICAgICAgICAnODA4MDgwJyxcbiAgICAgICAgJzAwODAwMCcsXG4gICAgICAgICdhZGZmMmYnLFxuICAgICAgICAnZjBmZmYwJyxcbiAgICAgICAgJ2ZmNjliNCcsXG4gICAgICAgICdjZDVjNWMnLFxuICAgICAgICAnNGIwMDgyJyxcbiAgICAgICAgJ2ZmZmZmMCcsXG4gICAgICAgICdmMGU2OGMnLFxuICAgICAgICAnZTZlNmZhJyxcbiAgICAgICAgJ2ZmZjBmNScsXG4gICAgICAgICc3Y2ZjMDAnLFxuICAgICAgICAnZmZmYWNkJyxcbiAgICAgICAgJ2FkZDhlNicsXG4gICAgICAgICdmMDgwODAnLFxuICAgICAgICAnZTBmZmZmJyxcbiAgICAgICAgJ2ZhZmFkMicsXG4gICAgICAgICdkM2QzZDMnLFxuICAgICAgICAnZDNkM2QzJyxcbiAgICAgICAgJzkwZWU5MCcsXG4gICAgICAgICdmZmI2YzEnLFxuICAgICAgICAnZmZhMDdhJyxcbiAgICAgICAgJzIwYjJhYScsXG4gICAgICAgICc4N2NlZmEnLFxuICAgICAgICAnNzc4ODk5JyxcbiAgICAgICAgJzc3ODg5OScsXG4gICAgICAgICdiMGM0ZGUnLFxuICAgICAgICAnZmZmZmUwJyxcbiAgICAgICAgJzAwZmYwMCcsXG4gICAgICAgICczMmNkMzInLFxuICAgICAgICAnZmFmMGU2JyxcbiAgICAgICAgJ2ZmMDBmZicsXG4gICAgICAgICc4MDAwMDAnLFxuICAgICAgICAnNjZjZGFhJyxcbiAgICAgICAgJzAwMDBjZCcsXG4gICAgICAgICdiYTU1ZDMnLFxuICAgICAgICAnOTM3MGRiJyxcbiAgICAgICAgJzNjYjM3MScsXG4gICAgICAgICc3YjY4ZWUnLFxuICAgICAgICAnMDBmYTlhJyxcbiAgICAgICAgJzQ4ZDFjYycsXG4gICAgICAgICdjNzE1ODUnLFxuICAgICAgICAnMTkxOTcwJyxcbiAgICAgICAgJ2Y1ZmZmYScsXG4gICAgICAgICdmZmU0ZTEnLFxuICAgICAgICAnZmZlNGI1JyxcbiAgICAgICAgJ2ZmZGVhZCcsXG4gICAgICAgICcwMDAwODAnLFxuICAgICAgICAnZmRmNWU2JyxcbiAgICAgICAgJzgwODAwMCcsXG4gICAgICAgICc2YjhlMjMnLFxuICAgICAgICAnZmZhNTAwJyxcbiAgICAgICAgJ2ZmNDUwMCcsXG4gICAgICAgICdkYTcwZDYnLFxuICAgICAgICAnZWVlOGFhJyxcbiAgICAgICAgJzk4ZmI5OCcsXG4gICAgICAgICdhZmVlZWUnLFxuICAgICAgICAnZGI3MDkzJyxcbiAgICAgICAgJ2ZmZWZkNScsXG4gICAgICAgICdmZmRhYjknLFxuICAgICAgICAnY2Q4NTNmJyxcbiAgICAgICAgJ2ZmYzBjYicsXG4gICAgICAgICdkZGEwZGQnLFxuICAgICAgICAnYjBlMGU2JyxcbiAgICAgICAgJzgwMDA4MCcsXG4gICAgICAgICc2NjMzOTknLFxuICAgICAgICAnZmYwMDAwJyxcbiAgICAgICAgJ2JjOGY4ZicsXG4gICAgICAgICc0MTY5ZTEnLFxuICAgICAgICAnOGI0NTEzJyxcbiAgICAgICAgJ2ZhODA3MicsXG4gICAgICAgICdmNGE0NjAnLFxuICAgICAgICAnMmU4YjU3JyxcbiAgICAgICAgJ2ZmZjVlZScsXG4gICAgICAgICdhMDUyMmQnLFxuICAgICAgICAnYzBjMGMwJyxcbiAgICAgICAgJzg3Y2VlYicsXG4gICAgICAgICc2YTVhY2QnLFxuICAgICAgICAnNzA4MDkwJyxcbiAgICAgICAgJzcwODA5MCcsXG4gICAgICAgICdmZmZhZmEnLFxuICAgICAgICAnMDBmZjdmJyxcbiAgICAgICAgJzQ2ODJiNCcsXG4gICAgICAgICdkMmI0OGMnLFxuICAgICAgICAnMDA4MDgwJyxcbiAgICAgICAgJ2Q4YmZkOCcsXG4gICAgICAgICdmZjYzNDcnLFxuICAgICAgICAnNDBlMGQwJyxcbiAgICAgICAgJ2VlODJlZScsXG4gICAgICAgICdmNWRlYjMnLFxuICAgICAgICAnZmZmZmZmJyxcbiAgICAgICAgJ2Y1ZjVmNScsXG4gICAgICAgICdmZmZmMDAnLFxuICAgICAgICAnOWFjZDMyJyxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHVibGljIHJvdW5kRGVjaW1hbHMoYzogYW55KSB7XG4gICAgYy5yZWQgPSBOdW1iZXIoYy5yZWQudG9GaXhlZCgwKSk7XG4gICAgYy5ncmVlbiA9IE51bWJlcihjLmdyZWVuLnRvRml4ZWQoMCkpO1xuICAgIGMuYmx1ZSA9IE51bWJlcihjLmJsdWUudG9GaXhlZCgwKSk7XG4gICAgYy5odWUgPSBOdW1iZXIoYy5odWUudG9GaXhlZCgwKSk7XG4gICAgYy5zYXQgPSBOdW1iZXIoYy5zYXQudG9GaXhlZCgyKSk7XG4gICAgYy5saWdodG5lc3MgPSBOdW1iZXIoYy5saWdodG5lc3MudG9GaXhlZCgyKSk7XG4gICAgYy53aGl0ZW5lc3MgPSBOdW1iZXIoYy53aGl0ZW5lc3MudG9GaXhlZCgyKSk7XG4gICAgYy5ibGFja25lc3MgPSBOdW1iZXIoYy5ibGFja25lc3MudG9GaXhlZCgyKSk7XG4gICAgYy5jeWFuID0gTnVtYmVyKGMuY3lhbi50b0ZpeGVkKDIpKTtcbiAgICBjLm1hZ2VudGEgPSBOdW1iZXIoYy5tYWdlbnRhLnRvRml4ZWQoMikpO1xuICAgIGMueWVsbG93ID0gTnVtYmVyKGMueWVsbG93LnRvRml4ZWQoMikpO1xuICAgIGMuYmxhY2sgPSBOdW1iZXIoYy5ibGFjay50b0ZpeGVkKDIpKTtcbiAgICBjLm5jb2wgPSBjLm5jb2wuc3Vic3RyKDAsIDEpICsgTWF0aC5yb3VuZChOdW1iZXIoYy5uY29sLnN1YnN0cigxKSkpO1xuICAgIGMub3BhY2l0eSA9IE51bWJlcihjLm9wYWNpdHkudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBwdWJsaWMgaHNsVG9SZ2IoaHVlOiBhbnksIHNhdDogYW55LCBsaWdodDogYW55KSB7XG4gICAgbGV0IHQxLCB0MiwgciwgZywgYjtcbiAgICBodWUgPSBodWUgLyA2MDtcbiAgICBpZiAobGlnaHQgPD0gMC41KSB7XG4gICAgICB0MiA9IGxpZ2h0ICogKHNhdCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IGxpZ2h0ICsgc2F0IC0gbGlnaHQgKiBzYXQ7XG4gICAgfVxuICAgIHQxID0gbGlnaHQgKiAyIC0gdDI7XG4gICAgciA9IHRoaXMuaHVlVG9SZ2IodDEsIHQyLCBodWUgKyAyKSAqIDI1NTtcbiAgICBnID0gdGhpcy5odWVUb1JnYih0MSwgdDIsIGh1ZSkgKiAyNTU7XG4gICAgYiA9IHRoaXMuaHVlVG9SZ2IodDEsIHQyLCBodWUgLSAyKSAqIDI1NTtcbiAgICByZXR1cm4geyByOiByLCBnOiBnLCBiOiBiIH07XG4gIH1cblxuICBwdWJsaWMgaHVlVG9SZ2IodDE6IGFueSwgdDI6IGFueSwgaHVlOiBhbnkpIHtcbiAgICBpZiAoaHVlIDwgMCkgaHVlICs9IDY7XG4gICAgaWYgKGh1ZSA+PSA2KSBodWUgLT0gNjtcbiAgICBpZiAoaHVlIDwgMSkgcmV0dXJuICh0MiAtIHQxKSAqIGh1ZSArIHQxO1xuICAgIGVsc2UgaWYgKGh1ZSA8IDMpIHJldHVybiB0MjtcbiAgICBlbHNlIGlmIChodWUgPCA0KSByZXR1cm4gKHQyIC0gdDEpICogKDQgLSBodWUpICsgdDE7XG4gICAgZWxzZSByZXR1cm4gdDE7XG4gIH1cblxuICBwdWJsaWMgaHdiVG9SZ2IoaHVlOiBhbnksIHdoaXRlOiBhbnksIGJsYWNrOiBhbnkpIHtcbiAgICBsZXQgaSxcbiAgICAgIHJnYixcbiAgICAgIHJnYkFyciA9IFtdLFxuICAgICAgdG90O1xuICAgIHJnYiA9IHRoaXMuaHNsVG9SZ2IoaHVlLCAxLCAwLjUpO1xuICAgIHJnYkFyclswXSA9IHJnYi5yIC8gMjU1O1xuICAgIHJnYkFyclsxXSA9IHJnYi5nIC8gMjU1O1xuICAgIHJnYkFyclsyXSA9IHJnYi5iIC8gMjU1O1xuICAgIHRvdCA9IHdoaXRlICsgYmxhY2s7XG4gICAgaWYgKHRvdCA+IDEpIHtcbiAgICAgIHdoaXRlID0gTnVtYmVyKCh3aGl0ZSAvIHRvdCkudG9GaXhlZCgyKSk7XG4gICAgICBibGFjayA9IE51bWJlcigoYmxhY2sgLyB0b3QpLnRvRml4ZWQoMikpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICByZ2JBcnJbaV0gKj0gMSAtIHdoaXRlIC0gYmxhY2s7XG4gICAgICByZ2JBcnJbaV0gKz0gd2hpdGU7XG4gICAgICByZ2JBcnJbaV0gPSBOdW1iZXIocmdiQXJyW2ldICogMjU1KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcjogcmdiQXJyWzBdLCBnOiByZ2JBcnJbMV0sIGI6IHJnYkFyclsyXSB9O1xuICB9XG5cbiAgcHVibGljIGNteWtUb1JnYihjOiBhbnksIG06IGFueSwgeTogYW55LCBrOiBhbnkpIHtcbiAgICBsZXQgciwgZywgYjtcbiAgICByID0gMjU1IC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKSAqIDI1NTtcbiAgICBnID0gMjU1IC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKSAqIDI1NTtcbiAgICBiID0gMjU1IC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKSAqIDI1NTtcbiAgICByZXR1cm4geyByOiByLCBnOiBnLCBiOiBiIH07XG4gIH1cblxuICBwdWJsaWMgbmNvbFRvUmdiKG5jb2w6IGFueSwgd2hpdGU6IGFueSwgYmxhY2s6IGFueSkge1xuICAgIGxldCBsZXR0ZXIsIHBlcmNlbnQsIGgsIHcsIGI7XG4gICAgaCA9IG5jb2w7XG4gICAgaWYgKGlzTmFOKG5jb2wuc3Vic3RyKDAsIDEpKSkge1xuICAgICAgbGV0dGVyID0gbmNvbC5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKTtcbiAgICAgIHBlcmNlbnQgPSBuY29sLnN1YnN0cigxKTtcbiAgICAgIGlmIChwZXJjZW50ID09ICcnKSB7XG4gICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgfVxuICAgICAgcGVyY2VudCA9IE51bWJlcihwZXJjZW50KTtcbiAgICAgIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobGV0dGVyID09ICdSJykge1xuICAgICAgICBoID0gMCArIHBlcmNlbnQgKiAwLjY7XG4gICAgICB9XG4gICAgICBpZiAobGV0dGVyID09ICdZJykge1xuICAgICAgICBoID0gNjAgKyBwZXJjZW50ICogMC42O1xuICAgICAgfVxuICAgICAgaWYgKGxldHRlciA9PSAnRycpIHtcbiAgICAgICAgaCA9IDEyMCArIHBlcmNlbnQgKiAwLjY7XG4gICAgICB9XG4gICAgICBpZiAobGV0dGVyID09ICdDJykge1xuICAgICAgICBoID0gMTgwICsgcGVyY2VudCAqIDAuNjtcbiAgICAgIH1cbiAgICAgIGlmIChsZXR0ZXIgPT0gJ0InKSB7XG4gICAgICAgIGggPSAyNDAgKyBwZXJjZW50ICogMC42O1xuICAgICAgfVxuICAgICAgaWYgKGxldHRlciA9PSAnTScpIHtcbiAgICAgICAgaCA9IDMwMCArIHBlcmNlbnQgKiAwLjY7XG4gICAgICB9XG4gICAgICBpZiAobGV0dGVyID09ICdXJykge1xuICAgICAgICBoID0gMDtcbiAgICAgICAgd2hpdGUgPSAxIC0gcGVyY2VudCAvIDEwMDtcbiAgICAgICAgYmxhY2sgPSBwZXJjZW50IC8gMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5od2JUb1JnYihoLCB3aGl0ZSwgYmxhY2spO1xuICB9XG5cbiAgcHVibGljIGh1ZVRvTmNvbChodWU6IGFueSk6IHN0cmluZyB7XG4gICAgd2hpbGUgKGh1ZSA+PSAzNjApIHtcbiAgICAgIGh1ZSA9IGh1ZSAtIDM2MDtcbiAgICB9XG4gICAgaWYgKGh1ZSA8IDYwKSB7XG4gICAgICByZXR1cm4gJ1InICsgaHVlIC8gMC42O1xuICAgIH1cbiAgICBpZiAoaHVlIDwgMTIwKSB7XG4gICAgICByZXR1cm4gJ1knICsgKGh1ZSAtIDYwKSAvIDAuNjtcbiAgICB9XG4gICAgaWYgKGh1ZSA8IDE4MCkge1xuICAgICAgcmV0dXJuICdHJyArIChodWUgLSAxMjApIC8gMC42O1xuICAgIH1cbiAgICBpZiAoaHVlIDwgMjQwKSB7XG4gICAgICByZXR1cm4gJ0MnICsgKGh1ZSAtIDE4MCkgLyAwLjY7XG4gICAgfVxuICAgIGlmIChodWUgPCAzMDApIHtcbiAgICAgIHJldHVybiAnQicgKyAoaHVlIC0gMjQwKSAvIDAuNjtcbiAgICB9XG4gICAgaWYgKGh1ZSA8IDM2MCkge1xuICAgICAgcmV0dXJuICdNJyArIChodWUgLSAzMDApIC8gMC42O1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwdWJsaWMgbmNzVG9SZ2IobmNzOiBhbnkpIHtcbiAgICBsZXQgYmxhY2ssXG4gICAgICBjaHJvbWEsXG4gICAgICBiYyxcbiAgICAgIHBlcmNlbnQsXG4gICAgICBibGFjazEsXG4gICAgICBjaHJvbWExLFxuICAgICAgZmFjdG9yMSxcbiAgICAgIGJsdWUxLFxuICAgICAgcmVkMSxcbiAgICAgIHJlZDIsXG4gICAgICBncmVlbjIsXG4gICAgICBibHVlMixcbiAgICAgIG1heCxcbiAgICAgIGZhY3RvcjIsXG4gICAgICBncmV5LFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgZ3JlZW4xOiBhbnkgPSAwO1xuICAgIG5jcyA9IHRoaXMubmd4Q29sb3JUcmltKG5jcykudG9VcHBlckNhc2UoKTtcbiAgICBuY3MgPSBuY3MucmVwbGFjZSgnKCcsICcnKTtcbiAgICBuY3MgPSBuY3MucmVwbGFjZSgnKScsICcnKTtcbiAgICBuY3MgPSBuY3MucmVwbGFjZSgnTkNTJywgJ05DUyAnKTtcbiAgICBuY3MgPSBuY3MucmVwbGFjZSgvICAvZywgJyAnKTtcbiAgICBpZiAobmNzLmluZGV4T2YoJ05DUycpID09IC0xKSB7XG4gICAgICBuY3MgPSAnTkNTICcgKyBuY3M7XG4gICAgfVxuICAgIG5jcyA9IG5jcy5tYXRjaChcbiAgICAgIC9eKD86TkNTfE5DU1xcc1MpXFxzKFxcZHsyfSkoXFxkezJ9KS0oTnxbQS1aXSkoXFxkezJ9KT8oW0EtWl0pPyQvXG4gICAgKTtcbiAgICBpZiAobmNzID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgYmxhY2sgPSBwYXJzZUludChuY3NbMV0sIDEwKTtcbiAgICBjaHJvbWEgPSBwYXJzZUludChuY3NbMl0sIDEwKTtcbiAgICBiYyA9IG5jc1szXTtcbiAgICBpZiAoYmMgIT0gJ04nICYmIGJjICE9ICdZJyAmJiBiYyAhPSAnUicgJiYgYmMgIT0gJ0InICYmIGJjICE9ICdHJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwZXJjZW50ID0gcGFyc2VJbnQobmNzWzRdLCAxMCkgfHwgMDtcbiAgICBpZiAoYmMgIT09ICdOJykge1xuICAgICAgYmxhY2sxID0gMS4wNSAqIGJsYWNrIC0gNS4yNTtcbiAgICAgIGNocm9tYTEgPSBjaHJvbWE7XG4gICAgICBpZiAoYmMgPT09ICdZJyAmJiBwZXJjZW50IDw9IDYwKSB7XG4gICAgICAgIHJlZDEgPSAxO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGJjID09PSAnWScgJiYgcGVyY2VudCA+IDYwKSB8fFxuICAgICAgICAoYmMgPT09ICdSJyAmJiBwZXJjZW50IDw9IDgwKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChiYyA9PT0gJ1knKSB7XG4gICAgICAgICAgZmFjdG9yMSA9IHBlcmNlbnQgLSA2MDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWN0b3IxID0gcGVyY2VudCArIDQwO1xuICAgICAgICB9XG4gICAgICAgIHJlZDEgPSAoTWF0aC5zcXJ0KDE0ODg0IC0gTWF0aC5wb3coZmFjdG9yMSwgMikpIC0gMjIpIC8gMTAwO1xuICAgICAgfSBlbHNlIGlmICgoYmMgPT09ICdSJyAmJiBwZXJjZW50ID4gODApIHx8IGJjID09PSAnQicpIHtcbiAgICAgICAgcmVkMSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGJjID09PSAnRycpIHtcbiAgICAgICAgZmFjdG9yMSA9IHBlcmNlbnQgLSAxNzA7XG4gICAgICAgIHJlZDEgPSAoTWF0aC5zcXJ0KDMzODAwIC0gTWF0aC5wb3coZmFjdG9yMSwgMikpIC0gNzApIC8gMTAwO1xuICAgICAgfVxuICAgICAgaWYgKGJjID09PSAnWScgJiYgcGVyY2VudCA8PSA4MCkge1xuICAgICAgICBibHVlMSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoYmMgPT09ICdZJyAmJiBwZXJjZW50ID4gODApIHx8XG4gICAgICAgIChiYyA9PT0gJ1InICYmIHBlcmNlbnQgPD0gNjApXG4gICAgICApIHtcbiAgICAgICAgaWYgKGJjID09PSAnWScpIHtcbiAgICAgICAgICBmYWN0b3IxID0gcGVyY2VudCAtIDgwICsgMjAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWN0b3IxID0gcGVyY2VudCArIDIwICsgMjAuNTtcbiAgICAgICAgfVxuICAgICAgICBibHVlMSA9ICgxMDQgLSBNYXRoLnNxcnQoMTEyMzYgLSBNYXRoLnBvdyhmYWN0b3IxLCAyKSkpIC8gMTAwO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGJjID09PSAnUicgJiYgcGVyY2VudCA+IDYwKSB8fFxuICAgICAgICAoYmMgPT09ICdCJyAmJiBwZXJjZW50IDw9IDgwKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChiYyA9PT0gJ1InKSB7XG4gICAgICAgICAgZmFjdG9yMSA9IHBlcmNlbnQgLSA2MCAtIDYwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY3RvcjEgPSBwZXJjZW50ICsgNDAgLSA2MDtcbiAgICAgICAgfVxuICAgICAgICBibHVlMSA9IChNYXRoLnNxcnQoMTAwMDAgLSBNYXRoLnBvdyhmYWN0b3IxLCAyKSkgLSAxMCkgLyAxMDA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoYmMgPT09ICdCJyAmJiBwZXJjZW50ID4gODApIHx8XG4gICAgICAgIChiYyA9PT0gJ0cnICYmIHBlcmNlbnQgPD0gNDApXG4gICAgICApIHtcbiAgICAgICAgaWYgKGJjID09PSAnQicpIHtcbiAgICAgICAgICBmYWN0b3IxID0gcGVyY2VudCAtIDgwIC0gMTMxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY3RvcjEgPSBwZXJjZW50ICsgMjAgLSAxMzE7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ZTEgPSAoMTIyIC0gTWF0aC5zcXJ0KDE5ODgxIC0gTWF0aC5wb3coZmFjdG9yMSwgMikpKSAvIDEwMDtcbiAgICAgIH0gZWxzZSBpZiAoYmMgPT09ICdHJyAmJiBwZXJjZW50ID4gNDApIHtcbiAgICAgICAgYmx1ZTEgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmMgPT09ICdZJykge1xuICAgICAgICBncmVlbjEgPSAoODUgLSAoMTcgLyAyMCkgKiBwZXJjZW50KSAvIDEwMDtcbiAgICAgIH0gZWxzZSBpZiAoYmMgPT09ICdSJyAmJiBwZXJjZW50IDw9IDYwKSB7XG4gICAgICAgIGdyZWVuMSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGJjID09PSAnUicgJiYgcGVyY2VudCA+IDYwKSB7XG4gICAgICAgIGZhY3RvcjEgPSBwZXJjZW50IC0gNjAgKyAzNTtcbiAgICAgICAgZ3JlZW4xID0gKDY3LjUgLSBNYXRoLnNxcnQoNTc3NiAtIE1hdGgucG93KGZhY3RvcjEsIDIpKSkgLyAxMDA7XG4gICAgICB9IGVsc2UgaWYgKGJjID09PSAnQicgJiYgcGVyY2VudCA8PSA2MCkge1xuICAgICAgICBmYWN0b3IxID0gMSAqIHBlcmNlbnQgLSA2OC41O1xuICAgICAgICBncmVlbjEgPSAoNi41ICsgTWF0aC5zcXJ0KDcwNDQuNSAtIE1hdGgucG93KGZhY3RvcjEsIDIpKSkgLyAxMDA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoYmMgPT09ICdCJyAmJiBwZXJjZW50ID4gNjApIHx8XG4gICAgICAgIChiYyA9PT0gJ0cnICYmIHBlcmNlbnQgPD0gNjApXG4gICAgICApIHtcbiAgICAgICAgZ3JlZW4xID0gMC45O1xuICAgICAgfSBlbHNlIGlmIChiYyA9PT0gJ0cnICYmIHBlcmNlbnQgPiA2MCkge1xuICAgICAgICBmYWN0b3IxID0gcGVyY2VudCAtIDYwO1xuICAgICAgICBsZXQgZ3JlZW4xID0gKDkwIC0gKDEgLyA4KSAqIGZhY3RvcjEpIC8gMTAwO1xuICAgICAgfVxuICAgICAgZmFjdG9yMSA9IChyZWQxICsgZ3JlZW4xICsgYmx1ZTEpIC8gMztcbiAgICAgIHJlZDIgPSAoKGZhY3RvcjEgLSAocmVkMSB8fCAwKSkgKiAoMTAwIC0gY2hyb21hMSkpIC8gMTAwICsgKHJlZDEgfHwgMCk7XG4gICAgICBncmVlbjIgPSAoKGZhY3RvcjEgLSBncmVlbjEpICogKDEwMCAtIGNocm9tYTEpKSAvIDEwMCArIGdyZWVuMTtcbiAgICAgIGJsdWUyID0gKChmYWN0b3IxIC0gKGJsdWUxIHx8IDApKSAqICgxMDAgLSBjaHJvbWExKSkgLyAxMDAgKyAoYmx1ZTEgfHwgMCk7XG4gICAgICBpZiAocmVkMiA+IGdyZWVuMiAmJiByZWQyID4gYmx1ZTIpIHtcbiAgICAgICAgbWF4ID0gcmVkMjtcbiAgICAgIH0gZWxzZSBpZiAoZ3JlZW4yID4gcmVkMiAmJiBncmVlbjIgPiBibHVlMikge1xuICAgICAgICBtYXggPSBncmVlbjI7XG4gICAgICB9IGVsc2UgaWYgKGJsdWUyID4gcmVkMiAmJiBibHVlMiA+IGdyZWVuMikge1xuICAgICAgICBtYXggPSBibHVlMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IChyZWQyICsgZ3JlZW4yICsgYmx1ZTIpIC8gMztcbiAgICAgIH1cbiAgICAgIGZhY3RvcjIgPSAxIC8gbWF4O1xuICAgICAgKHIgPSArKChyZWQyICogZmFjdG9yMiAqICgxMDAgLSBibGFjazEpKSAvIDEwMCkgKiAyNTUpLCAxMDtcbiAgICAgIChnID0gKygoZ3JlZW4yICogZmFjdG9yMiAqICgxMDAgLSBibGFjazEpKSAvIDEwMCkgKiAyNTUpLCAxMDtcbiAgICAgIChiID0gKygoYmx1ZTIgKiBmYWN0b3IyICogKDEwMCAtIGJsYWNrMSkpIC8gMTAwKSAqIDI1NSksIDEwO1xuICAgICAgaWYgKHIgPiAyNTUpIHtcbiAgICAgICAgciA9IDI1NTtcbiAgICAgIH1cbiAgICAgIGlmIChnID4gMjU1KSB7XG4gICAgICAgIGcgPSAyNTU7XG4gICAgICB9XG4gICAgICBpZiAoYiA+IDI1NSkge1xuICAgICAgICBiID0gMjU1O1xuICAgICAgfVxuICAgICAgaWYgKHIgPCAwKSB7XG4gICAgICAgIHIgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGcgPCAwKSB7XG4gICAgICAgIGcgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGIgPCAwKSB7XG4gICAgICAgIGIgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAoZ3JleSA9ICsoMSAtIGJsYWNrIC8gMTAwKSAqIDI1NSksIDEwO1xuICAgICAgaWYgKGdyZXkgPiAyNTUpIHtcbiAgICAgICAgZ3JleSA9IDI1NTtcbiAgICAgIH1cbiAgICAgIGlmIChncmV5IDwgMCkge1xuICAgICAgICBncmV5ID0gMDtcbiAgICAgIH1cbiAgICAgIHIgPSBncmV5O1xuICAgICAgZyA9IGdyZXk7XG4gICAgICBiID0gZ3JleTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHIsXG4gICAgICBnOiBnLFxuICAgICAgYjogYixcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJnYlRvSHNsKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBsZXQgbWluLFxuICAgICAgbWF4LFxuICAgICAgaSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgbWF4Y29sb3IsXG4gICAgICBoLFxuICAgICAgcmdiID0gW107XG4gICAgcmdiWzBdID0gciAvIDI1NTtcbiAgICByZ2JbMV0gPSBnIC8gMjU1O1xuICAgIHJnYlsyXSA9IGIgLyAyNTU7XG4gICAgbWluID0gcmdiWzBdO1xuICAgIG1heCA9IHJnYlswXTtcbiAgICBtYXhjb2xvciA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHJnYi5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmIChyZ2JbaSArIDFdIDw9IG1pbikge1xuICAgICAgICBtaW4gPSByZ2JbaSArIDFdO1xuICAgICAgfVxuICAgICAgaWYgKHJnYltpICsgMV0gPj0gbWF4KSB7XG4gICAgICAgIG1heCA9IHJnYltpICsgMV07XG4gICAgICAgIG1heGNvbG9yID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXhjb2xvciA9PSAwKSB7XG4gICAgICBoID0gKHJnYlsxXSAtIHJnYlsyXSkgLyAobWF4IC0gbWluKTtcbiAgICB9XG4gICAgaWYgKG1heGNvbG9yID09IDEpIHtcbiAgICAgIGggPSAyICsgKHJnYlsyXSAtIHJnYlswXSkgLyAobWF4IC0gbWluKTtcbiAgICB9XG4gICAgaWYgKG1heGNvbG9yID09IDIpIHtcbiAgICAgIGggPSA0ICsgKHJnYlswXSAtIHJnYlsxXSkgLyAobWF4IC0gbWluKTtcbiAgICB9XG4gICAgaWYgKGlzTmFOKGggfHwgMCkpIHtcbiAgICAgIGggPSAwO1xuICAgIH1cbiAgICBoID0gKGggfHwgMCkgKiA2MDtcbiAgICBpZiAoaCA8IDApIHtcbiAgICAgIGggPSBoICsgMzYwO1xuICAgIH1cbiAgICBsID0gKG1pbiArIG1heCkgLyAyO1xuICAgIGlmIChtaW4gPT0gbWF4KSB7XG4gICAgICBzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGwgPCAwLjUpIHtcbiAgICAgICAgcyA9IChtYXggLSBtaW4pIC8gKG1heCArIG1pbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzID0gKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICB9XG4gICAgfVxuICAgIHMgPSBzO1xuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIGw6IGwgfTtcbiAgfVxuXG4gIHB1YmxpYyByZ2JUb0h3YihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgbGV0IGgsIHcsIGJsO1xuICAgIHIgPSByIC8gMjU1O1xuICAgIGcgPSBnIC8gMjU1O1xuICAgIGIgPSBiIC8gMjU1O1xuICAgIGxldCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBsZXQgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbGV0IGNocm9tYSA9IG1heCAtIG1pbjtcbiAgICBpZiAoY2hyb21hID09IDApIHtcbiAgICAgIGggPSAwO1xuICAgIH0gZWxzZSBpZiAociA9PSBtYXgpIHtcbiAgICAgIGggPSAoKChnIC0gYikgLyBjaHJvbWEpICUgNikgKiAzNjA7XG4gICAgfSBlbHNlIGlmIChnID09IG1heCkge1xuICAgICAgaCA9ICgoKGIgLSByKSAvIGNocm9tYSArIDIpICUgNikgKiAzNjA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGggPSAoKChyIC0gZykgLyBjaHJvbWEgKyA0KSAlIDYpICogMzYwO1xuICAgIH1cbiAgICB3ID0gbWluO1xuICAgIGJsID0gMSAtIG1heDtcbiAgICByZXR1cm4geyBoOiBoLCB3OiB3LCBiOiBibCB9O1xuICB9XG5cbiAgcHVibGljIHJnYlRvQ215ayhyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XG4gICAgbGV0IGMsIG0sIHksIGs7XG4gICAgcmVkID0gcmVkIC8gMjU1O1xuICAgIGdyZWVuID0gZ3JlZW4gLyAyNTU7XG4gICAgYmx1ZSA9IGJsdWUgLyAyNTU7XG4gICAgbGV0IG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgIGsgPSAxIC0gbWF4O1xuICAgIGlmIChrID09IDEpIHtcbiAgICAgIGMgPSAwO1xuICAgICAgbSA9IDA7XG4gICAgICB5ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYyA9ICgxIC0gcmVkIC0gaykgLyAoMSAtIGspO1xuICAgICAgbSA9ICgxIC0gZ3JlZW4gLSBrKSAvICgxIC0gayk7XG4gICAgICB5ID0gKDEgLSBibHVlIC0gaykgLyAoMSAtIGspO1xuICAgIH1cbiAgICByZXR1cm4geyBjOiBjLCBtOiBtLCB5OiB5LCBrOiBrIH07XG4gIH1cblxuICBwdWJsaWMgdG9IZXgobjogYW55KSB7XG4gICAgbGV0IGhleCA9IG4udG9TdHJpbmcoMTYpO1xuICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMikge1xuICAgICAgaGV4ID0gJzAnICsgaGV4O1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xuICB9XG5cbiAgcHVibGljIGNsKHg6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKHgpO1xuICB9XG5cbiAgcHVibGljIG5neENvbG9yVHJpbSh4OiBhbnkpIHtcbiAgICByZXR1cm4geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgaXNIZXgoeDogYW55KSB7XG4gICAgcmV0dXJuICcwMTIzNDU2Nzg5QUJDREVGYWJjZGVmJy5pbmRleE9mKHgpID4gLTE7XG4gIH1cbn1cbiJdfQ==