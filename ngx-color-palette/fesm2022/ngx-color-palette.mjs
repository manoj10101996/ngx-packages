import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, HostListener } from '@angular/core';
import { NgClass, KeyValuePipe } from '@angular/common';

class NgxColorPaletteService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxColorPaletteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxColorPaletteService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxColorPaletteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

const RAW = [
    {
        color: "rojo", preview: "#E57373", variants: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828"]
    },
    {
        color: "rosa", preview: "#F06292", variants: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457"]
    },
    {
        color: "purpura", preview: "#BA68C8", variants: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A"]
    },
    {
        color: "purpura oscuro", preview: "#9575CD", variants: ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0"]
    },
    {
        color: "indigo", preview: "#7986CB", variants: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593"]
    },
    {
        color: "azul", preview: "#64B5F6", variants: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0"]
    },
    {
        color: "celeste", preview: "#4FC3F7", variants: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD"]
    },
    {
        color: "cyan", preview: "#4DD0E1", variants: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F"]
    },
    {
        color: "color", preview: "#4DB6AC", variants: ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C"]
    },
    {
        color: "verde", preview: "#81C784", variants: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32"]
    },
    {
        color: "verde claro", preview: "#AED581", variants: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F"]
    },
    // {
    //   color: "lima", preview: "#DCE775", variants:
    //     ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24"]
    // },
    {
        color: "amarillo", preview: "#FFF176", variants: ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825"]
    },
    {
        color: "ambar", preview: "#FFD54F", variants: ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00"]
    },
    {
        color: "naranja", preview: "#FFB74D", variants: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00"]
    },
    {
        color: "naranja oscuro", preview: "#FF8A65", variants: ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315"]
    },
    {
        color: "marron", preview: "#A1887F", variants: ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E"]
    },
    {
        color: "escala de grises", preview: "#E0E0E0", variants: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#000000"]
    },
    {
        color: "azul gris", preview: "#90A4AE", variants: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F"]
    }
];

const CRAYOLA = [
    {
        "hex": "#EFDECD",
        "name": "Almond",
        "rgb": "(239, 222, 205)"
    },
    {
        "hex": "#CD9575",
        "name": "Antique Brass",
        "rgb": "(205, 149, 117)"
    },
    {
        "hex": "#FDD9B5",
        "name": "Apricot",
        "rgb": "(253, 217, 181)"
    },
    {
        "hex": "#78DBE2",
        "name": "Aquamarine",
        "rgb": "(120, 219, 226)"
    },
    {
        "hex": "#87A96B",
        "name": "Asparagus",
        "rgb": "(135, 169, 107)"
    },
    {
        "hex": "#FFA474",
        "name": "Atomic Tangerine",
        "rgb": "(255, 164, 116)"
    },
    {
        "hex": "#FAE7B5",
        "name": "Banana Mania",
        "rgb": "(250, 231, 181)"
    },
    {
        "hex": "#9F8170",
        "name": "Beaver",
        "rgb": "(159, 129, 112)"
    },
    {
        "hex": "#FD7C6E",
        "name": "Bittersweet",
        "rgb": "(253, 124, 110)"
    },
    {
        "hex": "#000000",
        "name": "Black",
        "rgb": "(0,0,0)"
    },
    {
        "hex": "#ACE5EE",
        "name": "Blizzard Blue",
        "rgb": "(172, 229, 238)"
    },
    {
        "hex": "#1F75FE",
        "name": "Blue",
        "rgb": "(31, 117, 254)"
    },
    {
        "hex": "#A2A2D0",
        "name": "Blue Bell",
        "rgb": "(162, 162, 208)"
    },
    {
        "hex": "#6699CC",
        "name": "Blue Gray",
        "rgb": "(102, 153, 204)"
    },
    {
        "hex": "#0D98BA",
        "name": "Blue Green",
        "rgb": "(13, 152, 186)"
    },
    {
        "hex": "#7366BD",
        "name": "Blue Violet",
        "rgb": "(115, 102, 189)"
    },
    {
        "hex": "#DE5D83",
        "name": "Blush",
        "rgb": "(222, 93, 131)"
    },
    {
        "hex": "#CB4154",
        "name": "Brick Red",
        "rgb": "(203, 65, 84)"
    },
    {
        "hex": "#B4674D",
        "name": "Brown",
        "rgb": "(180, 103, 77)"
    },
    {
        "hex": "#FF7F49",
        "name": "Burnt Orange",
        "rgb": "(255, 127, 73)"
    },
    {
        "hex": "#EA7E5D",
        "name": "Burnt Sienna",
        "rgb": "(234, 126, 93)"
    },
    {
        "hex": "#B0B7C6",
        "name": "Cadet Blue",
        "rgb": "(176, 183, 198)"
    },
    {
        "hex": "#FFFF99",
        "name": "Canary",
        "rgb": "(255, 255, 153)"
    },
    {
        "hex": "#1CD3A2",
        "name": "Caribbean Green",
        "rgb": "(28, 211, 162)"
    },
    {
        "hex": "#FFAACC",
        "name": "Carnation Pink",
        "rgb": "(255, 170, 204)"
    },
    {
        "hex": "#DD4492",
        "name": "Cerise",
        "rgb": "(221, 68, 146)"
    },
    {
        "hex": "#1DACD6",
        "name": "Cerulean",
        "rgb": "(29, 172, 214)"
    },
    {
        "hex": "#BC5D58",
        "name": "Chestnut",
        "rgb": "(188, 93, 88)"
    },
    {
        "hex": "#DD9475",
        "name": "Copper",
        "rgb": "(221, 148, 117)"
    },
    {
        "hex": "#9ACEEB",
        "name": "Cornflower",
        "rgb": "(154, 206, 235)"
    },
    {
        "hex": "#FFBCD9",
        "name": "Cotton Candy",
        "rgb": "(255, 188, 217)"
    },
    {
        "hex": "#FDDB6D",
        "name": "Dandelion",
        "rgb": "(253, 219, 109)"
    },
    {
        "hex": "#2B6CC4",
        "name": "Denim",
        "rgb": "(43, 108, 196)"
    },
    {
        "hex": "#EFCDB8",
        "name": "Desert Sand",
        "rgb": "(239, 205, 184)"
    },
    {
        "hex": "#6E5160",
        "name": "Eggplant",
        "rgb": "(110, 81, 96)"
    },
    {
        "hex": "#CEFF1D",
        "name": "Electric Lime",
        "rgb": "(206, 255, 29)"
    },
    {
        "hex": "#71BC78",
        "name": "Fern",
        "rgb": "(113, 188, 120)"
    },
    {
        "hex": "#6DAE81",
        "name": "Forest Green",
        "rgb": "(109, 174, 129)"
    },
    {
        "hex": "#C364C5",
        "name": "Fuchsia",
        "rgb": "(195, 100, 197)"
    },
    {
        "hex": "#CC6666",
        "name": "Fuzzy Wuzzy",
        "rgb": "(204, 102, 102)"
    },
    {
        "hex": "#E7C697",
        "name": "Gold",
        "rgb": "(231, 198, 151)"
    },
    {
        "hex": "#FCD975",
        "name": "Goldenrod",
        "rgb": "(252, 217, 117)"
    },
    {
        "hex": "#A8E4A0",
        "name": "Granny Smith Apple",
        "rgb": "(168, 228, 160)"
    },
    {
        "hex": "#95918C",
        "name": "Gray",
        "rgb": "(149, 145, 140)"
    },
    {
        "hex": "#1CAC78",
        "name": "Green",
        "rgb": "(28, 172, 120)"
    },
    {
        "hex": "#1164B4",
        "name": "Green Blue",
        "rgb": "(17, 100, 180)"
    },
    {
        "hex": "#F0E891",
        "name": "Green Yellow",
        "rgb": "(240, 232, 145)"
    },
    {
        "hex": "#FF1DCE",
        "name": "Hot Magenta",
        "rgb": "(255, 29, 206)"
    },
    {
        "hex": "#B2EC5D",
        "name": "Inchworm",
        "rgb": "(178, 236, 93)"
    },
    {
        "hex": "#5D76CB",
        "name": "Indigo",
        "rgb": "(93, 118, 203)"
    },
    {
        "hex": "#CA3767",
        "name": "Jazzberry Jam",
        "rgb": "(202, 55, 103)"
    },
    {
        "hex": "#3BB08F",
        "name": "Jungle Green",
        "rgb": "(59, 176, 143)"
    },
    {
        "hex": "#FEFE22",
        "name": "Laser Lemon",
        "rgb": "(254, 254, 34)"
    },
    {
        "hex": "#FCB4D5",
        "name": "Lavender",
        "rgb": "(252, 180, 213)"
    },
    {
        "hex": "#FFF44F",
        "name": "Lemon Yellow",
        "rgb": "(255, 244, 79)"
    },
    {
        "hex": "#FFBD88",
        "name": "Macaroni and Cheese",
        "rgb": "(255, 189, 136)"
    },
    {
        "hex": "#F664AF",
        "name": "Magenta",
        "rgb": "(246, 100, 175)"
    },
    {
        "hex": "#AAF0D1",
        "name": "Magic Mint",
        "rgb": "(170, 240, 209)"
    },
    {
        "hex": "#CD4A4C",
        "name": "Mahogany",
        "rgb": "(205, 74, 76)"
    },
    {
        "hex": "#EDD19C",
        "name": "Maize",
        "rgb": "(237, 209, 156)"
    },
    {
        "hex": "#979AAA",
        "name": "Manatee",
        "rgb": "(151, 154, 170)"
    },
    {
        "hex": "#FF8243",
        "name": "Mango Tango",
        "rgb": "(255, 130, 67)"
    },
    {
        "hex": "#C8385A",
        "name": "Maroon",
        "rgb": "(200, 56, 90)"
    },
    {
        "hex": "#EF98AA",
        "name": "Mauvelous",
        "rgb": "(239, 152, 170)"
    },
    {
        "hex": "#FDBCB4",
        "name": "Melon",
        "rgb": "(253, 188, 180)"
    },
    {
        "hex": "#1A4876",
        "name": "Midnight Blue",
        "rgb": "(26, 72, 118)"
    },
    {
        "hex": "#30BA8F",
        "name": "Mountain Meadow",
        "rgb": "(48, 186, 143)"
    },
    {
        "hex": "#C54B8C",
        "name": "Mulberry",
        "rgb": "(197, 75, 140)"
    },
    {
        "hex": "#1974D2",
        "name": "Navy Blue",
        "rgb": "(25, 116, 210)"
    },
    {
        "hex": "#FFA343",
        "name": "Neon Carrot",
        "rgb": "(255, 163, 67)"
    },
    {
        "hex": "#BAB86C",
        "name": "Olive Green",
        "rgb": "(186, 184, 108)"
    },
    {
        "hex": "#FF7538",
        "name": "Orange",
        "rgb": "(255, 117, 56)"
    },
    {
        "hex": "#FF2B2B",
        "name": "Orange Red",
        "rgb": "(255, 43, 43)"
    },
    {
        "hex": "#F8D568",
        "name": "Orange Yellow",
        "rgb": "(248, 213, 104)"
    },
    {
        "hex": "#E6A8D7",
        "name": "Orchid",
        "rgb": "(230, 168, 215)"
    },
    {
        "hex": "#414A4C",
        "name": "Outer Space",
        "rgb": "(65, 74, 76)"
    },
    {
        "hex": "#FF6E4A",
        "name": "Outrageous Orange",
        "rgb": "(255, 110, 74)"
    },
    {
        "hex": "#1CA9C9",
        "name": "Pacific Blue",
        "rgb": "(28, 169, 201)"
    },
    {
        "hex": "#FFCFAB",
        "name": "Peach",
        "rgb": "(255, 207, 171)"
    },
    {
        "hex": "#C5D0E6",
        "name": "Periwinkle",
        "rgb": "(197, 208, 230)"
    },
    {
        "hex": "#FDDDE6",
        "name": "Piggy Pink",
        "rgb": "(253, 221, 230)"
    },
    {
        "hex": "#158078",
        "name": "Pine Green",
        "rgb": "(21, 128, 120)"
    },
    {
        "hex": "#FC74FD",
        "name": "Pink Flamingo",
        "rgb": "(252, 116, 253)"
    },
    {
        "hex": "#F78FA7",
        "name": "Pink Sherbet",
        "rgb": "(247, 143, 167)"
    },
    {
        "hex": "#8E4585",
        "name": "Plum",
        "rgb": "(142, 69, 133)"
    },
    {
        "hex": "#7442C8",
        "name": "Purple Heart",
        "rgb": "(116, 66, 200)"
    },
    {
        "hex": "#9D81BA",
        "name": "Purple Mountain's Majesty",
        "rgb": "(157, 129, 186)"
    },
    {
        "hex": "#FE4EDA",
        "name": "Purple Pizzazz",
        "rgb": "(254, 78, 218)"
    },
    {
        "hex": "#FF496C",
        "name": "Radical Red",
        "rgb": "(255, 73, 108)"
    },
    {
        "hex": "#D68A59",
        "name": "Raw Sienna",
        "rgb": "(214, 138, 89)"
    },
    {
        "hex": "#714B23",
        "name": "Raw Umber",
        "rgb": "(113, 75, 35)"
    },
    {
        "hex": "#FF48D0",
        "name": "Razzle Dazzle Rose",
        "rgb": "(255, 72, 208)"
    },
    {
        "hex": "#E3256B",
        "name": "Razzmatazz",
        "rgb": "(227, 37, 107)"
    },
    {
        "hex": "#EE204D",
        "name": "Red",
        "rgb": "(238,32 ,77 )"
    },
    {
        "hex": "#FF5349",
        "name": "Red Orange",
        "rgb": "(255, 83, 73)"
    },
    {
        "hex": "#C0448F",
        "name": "Red Violet",
        "rgb": "(192, 68, 143)"
    },
    {
        "hex": "#1FCECB",
        "name": "Robin's Egg Blue",
        "rgb": "(31, 206, 203)"
    },
    {
        "hex": "#7851A9",
        "name": "Royal Purple",
        "rgb": "(120, 81, 169)"
    },
    {
        "hex": "#FF9BAA",
        "name": "Salmon",
        "rgb": "(255, 155, 170)"
    },
    {
        "hex": "#FC2847",
        "name": "Scarlet",
        "rgb": "(252, 40, 71)"
    },
    {
        "hex": "#76FF7A",
        "name": "Screamin' Green",
        "rgb": "(118, 255, 122)"
    },
    {
        "hex": "#9FE2BF",
        "name": "Sea Green",
        "rgb": "(159, 226, 191)"
    },
    {
        "hex": "#A5694F",
        "name": "Sepia",
        "rgb": "(165, 105, 79)"
    },
    {
        "hex": "#8A795D",
        "name": "Shadow",
        "rgb": "(138, 121, 93)"
    },
    {
        "hex": "#45CEA2",
        "name": "Shamrock",
        "rgb": "(69, 206, 162)"
    },
    {
        "hex": "#FB7EFD",
        "name": "Shocking Pink",
        "rgb": "(251, 126, 253)"
    },
    {
        "hex": "#CDC5C2",
        "name": "Silver",
        "rgb": "(205, 197, 194)"
    },
    {
        "hex": "#80DAEB",
        "name": "Sky Blue",
        "rgb": "(128, 218, 235)"
    },
    {
        "hex": "#ECEABE",
        "name": "Spring Green",
        "rgb": "(236, 234, 190)"
    },
    {
        "hex": "#FFCF48",
        "name": "Sunglow",
        "rgb": "(255, 207, 72)"
    },
    {
        "hex": "#FD5E53",
        "name": "Sunset Orange",
        "rgb": "(253, 94, 83)"
    },
    {
        "hex": "#FAA76C",
        "name": "Tan",
        "rgb": "(250, 167, 108)"
    },
    {
        "hex": "#18A7B5",
        "name": "Teal Blue",
        "rgb": "(24, 167, 181)"
    },
    {
        "hex": "#EBC7DF",
        "name": "Thistle",
        "rgb": "(235, 199, 223)"
    },
    {
        "hex": "#FC89AC",
        "name": "Tickle Me Pink",
        "rgb": "(252, 137, 172)"
    },
    {
        "hex": "#DBD7D2",
        "name": "Timberwolf",
        "rgb": "(219, 215, 210)"
    },
    {
        "hex": "#17806D",
        "name": "Tropical Rain Forest",
        "rgb": "(23, 128, 109)"
    },
    {
        "hex": "#DEAA88",
        "name": "Tumbleweed",
        "rgb": "(222, 170, 136)"
    },
    {
        "hex": "#77DDE7",
        "name": "Turquoise Blue",
        "rgb": "(119, 221, 231)"
    },
    {
        "hex": "#FFFF66",
        "name": "Unmellow Yellow",
        "rgb": "(255, 255, 102)"
    },
    {
        "hex": "#926EAE",
        "name": "Violet (Purple)",
        "rgb": "(146, 110, 174)"
    },
    {
        "hex": "#324AB2",
        "name": "Violet Blue",
        "rgb": "(50, 74, 178)"
    },
    {
        "hex": "#F75394",
        "name": "Violet Red",
        "rgb": "(247, 83, 148)"
    },
    {
        "hex": "#FFA089",
        "name": "Vivid Tangerine",
        "rgb": "(255, 160, 137)"
    },
    {
        "hex": "#8F509D",
        "name": "Vivid Violet",
        "rgb": "(143, 80, 157)"
    },
    {
        "hex": "#FFFFFF",
        "name": "White",
        "rgb": "(255, 255, 255)"
    },
    {
        "hex": "#A2ADD0",
        "name": "Wild Blue Yonder",
        "rgb": "(162, 173, 208)"
    },
    {
        "hex": "#FF43A4",
        "name": "Wild Strawberry",
        "rgb": "(255, 67, 164)"
    },
    {
        "hex": "#FC6C85",
        "name": "Wild Watermelon",
        "rgb": "(252, 108, 133)"
    },
    {
        "hex": "#CDA4DE",
        "name": "Wisteria",
        "rgb": "(205, 164, 222)"
    },
    {
        "hex": "#FCE883",
        "name": "Yellow",
        "rgb": "(252, 232, 131)"
    },
    {
        "hex": "#C5E384",
        "name": "Yellow Green",
        "rgb": "(197, 227, 132)"
    },
    {
        "hex": "#FFAE42",
        "name": "Yellow Orange",
        "rgb": "(255, 174, 66)"
    }
];

const MATERIAL = {
    "red": {
        "50": "#ffebee",
        "100": "#ffcdd2",
        "200": "#ef9a9a",
        "300": "#e57373",
        "400": "#ef5350",
        "500": "#f44336",
        "600": "#e53935",
        "700": "#d32f2f",
        "800": "#c62828",
        "900": "#b71c1c",
        "a100": "#ff8a80",
        "a200": "#ff5252",
        "a400": "#ff1744",
        "a700": "#d50000"
    },
    "pink": {
        "50": "#fce4ec",
        "100": "#f8bbd0",
        "200": "#f48fb1",
        "300": "#f06292",
        "400": "#ec407a",
        "500": "#e91e63",
        "600": "#d81b60",
        "700": "#c2185b",
        "800": "#ad1457",
        "900": "#880e4f",
        "a100": "#ff80ab",
        "a200": "#ff4081",
        "a400": "#f50057",
        "a700": "#c51162"
    },
    "purple": {
        "50": "#f3e5f5",
        "100": "#e1bee7",
        "200": "#ce93d8",
        "300": "#ba68c8",
        "400": "#ab47bc",
        "500": "#9c27b0",
        "600": "#8e24aa",
        "700": "#7b1fa2",
        "800": "#6a1b9a",
        "900": "#4a148c",
        "a100": "#ea80fc",
        "a200": "#e040fb",
        "a400": "#d500f9",
        "a700": "#aa00ff"
    },
    "deeppurple": {
        "50": "#ede7f6",
        "100": "#d1c4e9",
        "200": "#b39ddb",
        "300": "#9575cd",
        "400": "#7e57c2",
        "500": "#673ab7",
        "600": "#5e35b1",
        "700": "#512da8",
        "800": "#4527a0",
        "900": "#311b92",
        "a100": "#b388ff",
        "a200": "#7c4dff",
        "a400": "#651fff",
        "a700": "#6200ea"
    },
    "indigo": {
        "50": "#e8eaf6",
        "100": "#c5cae9",
        "200": "#9fa8da",
        "300": "#7986cb",
        "400": "#5c6bc0",
        "500": "#3f51b5",
        "600": "#3949ab",
        "700": "#303f9f",
        "800": "#283593",
        "900": "#1a237e",
        "a100": "#8c9eff",
        "a200": "#536dfe",
        "a400": "#3d5afe",
        "a700": "#304ffe"
    },
    "blue": {
        "50": "#e3f2fd",
        "100": "#bbdefb",
        "200": "#90caf9",
        "300": "#64b5f6",
        "400": "#42a5f5",
        "500": "#2196f3",
        "600": "#1e88e5",
        "700": "#1976d2",
        "800": "#1565c0",
        "900": "#0d47a1",
        "a100": "#82b1ff",
        "a200": "#448aff",
        "a400": "#2979ff",
        "a700": "#2962ff"
    },
    "lightblue": {
        "50": "#e1f5fe",
        "100": "#b3e5fc",
        "200": "#81d4fa",
        "300": "#4fc3f7",
        "400": "#29b6f6",
        "500": "#03a9f4",
        "600": "#039be5",
        "700": "#0288d1",
        "800": "#0277bd",
        "900": "#01579b",
        "a100": "#80d8ff",
        "a200": "#40c4ff",
        "a400": "#00b0ff",
        "a700": "#0091ea"
    },
    "cyan": {
        "50": "#e0f7fa",
        "100": "#b2ebf2",
        "200": "#80deea",
        "300": "#4dd0e1",
        "400": "#26c6da",
        "500": "#00bcd4",
        "600": "#00acc1",
        "700": "#0097a7",
        "800": "#00838f",
        "900": "#006064",
        "a100": "#84ffff",
        "a200": "#18ffff",
        "a400": "#00e5ff",
        "a700": "#00b8d4"
    },
    "teal": {
        "50": "#e0f2f1",
        "100": "#b2dfdb",
        "200": "#80cbc4",
        "300": "#4db6ac",
        "400": "#26a69a",
        "500": "#009688",
        "600": "#00897b",
        "700": "#00796b",
        "800": "#00695c",
        "900": "#004d40",
        "a100": "#a7ffeb",
        "a200": "#64ffda",
        "a400": "#1de9b6",
        "a700": "#00bfa5"
    },
    "green": {
        "50": "#e8f5e9",
        "100": "#c8e6c9",
        "200": "#a5d6a7",
        "300": "#81c784",
        "400": "#66bb6a",
        "500": "#4caf50",
        "600": "#43a047",
        "700": "#388e3c",
        "800": "#2e7d32",
        "900": "#1b5e20",
        "a100": "#b9f6ca",
        "a200": "#69f0ae",
        "a400": "#00e676",
        "a700": "#00c853"
    },
    "lightgreen": {
        "50": "#f1f8e9",
        "100": "#dcedc8",
        "200": "#c5e1a5",
        "300": "#aed581",
        "400": "#9ccc65",
        "500": "#8bc34a",
        "600": "#7cb342",
        "700": "#689f38",
        "800": "#558b2f",
        "900": "#33691e",
        "a100": "#ccff90",
        "a200": "#b2ff59",
        "a400": "#76ff03",
        "a700": "#64dd17"
    },
    "lime": {
        "50": "#f9fbe7",
        "100": "#f0f4c3",
        "200": "#e6ee9c",
        "300": "#dce775",
        "400": "#d4e157",
        "500": "#cddc39",
        "600": "#c0ca33",
        "700": "#afb42b",
        "800": "#9e9d24",
        "900": "#827717",
        "a100": "#f4ff81",
        "a200": "#eeff41",
        "a400": "#c6ff00",
        "a700": "#aeea00"
    },
    "yellow": {
        "50": "#fffde7",
        "100": "#fff9c4",
        "200": "#fff59d",
        "300": "#fff176",
        "400": "#ffee58",
        "500": "#ffeb3b",
        "600": "#fdd835",
        "700": "#fbc02d",
        "800": "#f9a825",
        "900": "#f57f17",
        "a100": "#ffff8d",
        "a200": "#ffff00",
        "a400": "#ffea00",
        "a700": "#ffd600"
    },
    "amber": {
        "50": "#fff8e1",
        "100": "#ffecb3",
        "200": "#ffe082",
        "300": "#ffd54f",
        "400": "#ffca28",
        "500": "#ffc107",
        "600": "#ffb300",
        "700": "#ffa000",
        "800": "#ff8f00",
        "900": "#ff6f00",
        "a100": "#ffe57f",
        "a200": "#ffd740",
        "a400": "#ffc400",
        "a700": "#ffab00"
    },
    "orange": {
        "50": "#fff3e0",
        "100": "#ffe0b2",
        "200": "#ffcc80",
        "300": "#ffb74d",
        "400": "#ffa726",
        "500": "#ff9800",
        "600": "#fb8c00",
        "700": "#f57c00",
        "800": "#ef6c00",
        "900": "#e65100",
        "a100": "#ffd180",
        "a200": "#ffab40",
        "a400": "#ff9100",
        "a700": "#ff6d00"
    },
    "deeporange": {
        "50": "#fbe9e7",
        "100": "#ffccbc",
        "200": "#ffab91",
        "300": "#ff8a65",
        "400": "#ff7043",
        "500": "#ff5722",
        "600": "#f4511e",
        "700": "#e64a19",
        "800": "#d84315",
        "900": "#bf360c",
        "a100": "#ff9e80",
        "a200": "#ff6e40",
        "a400": "#ff3d00",
        "a700": "#dd2c00"
    },
    "brown": {
        "50": "#efebe9",
        "100": "#d7ccc8",
        "200": "#bcaaa4",
        "300": "#a1887f",
        "400": "#8d6e63",
        "500": "#795548",
        "600": "#6d4c41",
        "700": "#5d4037",
        "800": "#4e342e",
        "900": "#3e2723"
    },
    "grey": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121"
    },
    "bluegrey": {
        "50": "#eceff1",
        "100": "#cfd8dc",
        "200": "#b0bec5",
        "300": "#90a4ae",
        "400": "#78909c",
        "500": "#607d8b",
        "600": "#546e7a",
        "700": "#455a64",
        "800": "#37474f",
        "900": "#263238"
    }
};

class NgxColorPaletteComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.color = '';
        this.squared = false;
        this.position = 'bottom-left';
        this.currentColor = new EventEmitter();
        this.mode = 'basic';
        this.colors = RAW;
        this.crayola = CRAYOLA;
        this.material = MATERIAL;
        this.choosenColor = '';
        this.isShow = false;
        this.isPalette = false;
        this.paletteIndex = 0;
        this.iterator = Array.from(Array(360).keys());
        this.colorAxis = [];
        this.randomId = new Date().getTime().toString();
        this.randomId = new Date().getTime().toString();
    }
    ngAfterViewInit() {
        this.color = this.color || this.colors[0]['preview'];
        this.choosenColor = this.color;
        if (this.mode === 'wheel') {
            this.showColorWheel();
        }
    }
    setColor(color) {
        this.choosenColor = color;
    }
    discardCoreColor() {
        this.isShow = false;
        this.isPalette = false;
    }
    setCoreColor() {
        this.color = this.choosenColor;
        this.isShow = false;
        this.isPalette = false;
        let colorEvent = {
            color: this.color
        };
        this.currentColor.emit(colorEvent);
        this.mode = 'basic';
    }
    showWheel() {
        this.mode = 'wheel';
        this.showColorWheel();
    }
    showHsl() {
        this.mode = 'hsl';
    }
    showCrayola() {
        this.mode = 'crayola';
    }
    showBasic() {
        this.mode = 'basic';
        this.isPalette = false;
    }
    showMaterial() {
        this.mode = 'material';
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isShow = false;
        }
    }
    hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
    showColorWheel() {
        setTimeout(() => {
            let box = document.getElementById("color-box-" + this.randomId);
            this.clientBox = box.getBoundingClientRect();
            let rect = box.getBoundingClientRect();
            for (let index = 0; index < 90; index++) {
                this.colorAxis.push({
                    x1: rect.width,
                    y1: rect.width - (rect.width / 90) * index,
                    x2: rect.width / 2,
                    y2: rect.width / 2
                });
            }
            for (let index = 0; index < 90; index++) {
                this.colorAxis.push({
                    x1: rect.width - (rect.width / 90) * index,
                    y1: 0,
                    x2: rect.width / 2,
                    y2: rect.width / 2
                });
            }
            for (let index = 0; index < 90; index++) {
                this.colorAxis.push({
                    x1: 0,
                    y1: (rect.width / 90) * index,
                    x2: rect.width / 2,
                    y2: rect.width / 2
                });
            }
            for (let index = 0; index < 90; index++) {
                this.colorAxis.push({
                    x1: (rect.width / 90) * index,
                    y1: rect.width,
                    x2: rect.width / 2,
                    y2: rect.width / 2
                });
            }
        }, 500);
    }
    randomColor() {
        return '#' + ((1 << 24) * (Math.random() + 1) | 0).toString(16).substr(1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxColorPaletteComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.8", type: NgxColorPaletteComponent, isStandalone: true, selector: "ngx-color-palette", inputs: { color: "color", squared: "squared", position: "position" }, outputs: { currentColor: "currentColor" }, host: { listeners: { "document:mousedown": "onGlobalClick($event)" } }, ngImport: i0, template: "<div class=\"cp-core-container\">\n\n  <div class=\"cp-color-preview\" [class.ngx-palette-squared]=\"squared\" (mouseover)=\"isShow = true;\" (focusout)=\"isShow = false\" [style.background]=\"color\">\n    <div class=\"cp-color-palette\" [ngClass]=\"'cp-position-'+position\" [class.ngx-palette-squared]=\"squared\" [hidden]=\"!isShow\">\n      <div class=\"cp-colors-cavas ngx-cp-border-bottom\">\n        <div class=\"cp-color-pill-grid\">\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showBasic();\"  >\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'basic'\" fill=\"#d9d9d9\" class=\"bi bi-stack\" viewBox=\"0 0 16 16\">\n              <path d=\"m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z\"/>\n              <path d=\"m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showMaterial();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'material'\" fill=\"#d9d9d9\" class=\"bi bi-triangle-half\" viewBox=\"0 0 16 16\">\n              <path d=\"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showCrayola();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'crayola'\" fill=\"#d9d9d9\" class=\"bi bi-ui-radios-grid\" viewBox=\"0 0 16 16\">\n              <path d=\"M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showWheel();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'wheel'\" fill=\"#d9d9d9\" class=\"bi bi-palette-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\" />\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showHsl();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'hsl'\" fill=\"#d9d9d9\" class=\"bi bi-palette2\" viewBox=\"0 0 16 16\">\n              <path d=\"M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z\"/>\n              <path d=\"M0 12.995V13a3.07 3.07 0 0 0 0-.005z\"/>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <!--  -->\n      <div class=\"color-wheel-box\" [hidden]=\"mode !== 'wheel'\">\n        <div class=\"color-box\" [attr.id]=\"'color-box-'+ randomId\">\n          <svg>\n            @for (axis of colorAxis; track axis; let i = $index) {\n              <line [style.zIndex]=\"i\" [attr.id]=\"i\"\n                (click)=\"choosenColor = hslToHex(i, 100, 50);\" [attr.x1]=\"axis?.x1\" [attr.y1]=\"axis?.y1\"\n                [attr.x2]=\"axis?.x2\" [attr.y2]=\"axis?.y2\" [style.stroke]=\"'hsl('+i+',100%,50%)'\"\n                [style.strokeWidth]=\"(clientBox.width * 4 / 360)\" />\n            }\n          </svg>\n        </div>\n        <div class=\"center-box\">\n          <div class=\"black-box\" [style.backgroundColor]=\"choosenColor\"></div>\n        </div>\n      </div>\n      <!--  -->\n      @if (mode === 'hsl') {\n        <div class=\"hue-grid-hex\">\n          @for (hue of iterator; track hue) {\n            <div (click)=\"choosenColor = hslToHex(hue, 100, 50);\"\n            [style.backgroundColor]=\"'hsl('+hue+',100%,50%)'\" class=\"hue-item-hex\"></div>\n          }\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'crayola') {\n        <div class=\"cp-colors-cavas\">\n          <div class=\"cp-color-pill-grid\">\n            @for (colorValue of crayola; track colorValue) {\n              <div (click)=\"choosenColor = colorValue?.hex || '';\"\n                [class.ngx-palette-squared]=\"squared\"\n                [class.cp-color-pill-active]=\"choosenColor === colorValue?.hex\"\n              [style.backgroundColor]=\"colorValue?.hex\" class=\"cp-color-pill\"></div>\n            }\n          </div>\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'material') {\n        <div class=\"cp-colors-cavas\">\n          @for (matkey of material | keyvalue; track matkey) {\n            <div>\n              <div class=\"cp-color-pill-grid\">\n                @for (colorValue of matkey['value'] | keyvalue; track colorValue) {\n                  <div (click)=\"choosenColor = colorValue['value'];\"\n                    [class.ngx-palette-squared]=\"squared\"\n                    [class.cp-color-pill-active]=\"choosenColor === colorValue['value']\"\n                    [style.backgroundColor]=\"colorValue['value']\" class=\"cp-color-pill\">\n                  </div>\n                }\n              </div>\n              &nbsp;\n            </div>\n          }\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'basic') {\n        <div class=\"cp-colors-cavas\">\n          @if (!isPalette) {\n            <div class=\"cp-color-pill-grid\">\n              @for (colorValue of colors; track colorValue; let pIndex = $index) {\n                <div class=\"cp-color-pill\"\n                  [class.ngx-palette-squared]=\"squared\"\n                  [class.cp-color-pill-active]=\"choosenColor === colorValue.preview\"\n                  (click)=\"paletteIndex = pIndex;isPalette = true\" [style.background]=\"colorValue.preview\">\n                </div>\n              }\n            </div>\n          }\n          @if (isPalette) {\n            <div class=\"cp-color-pill-grid\">\n              @for (colorValue of colors[paletteIndex]['variants']; track colorValue; let cIndex = $index) {\n                <div class=\"cp-color-pill\"\n                  [class.ngx-palette-squared]=\"squared\"\n                  [class.cp-color-pill-active]=\"choosenColor === colorValue\" (click)=\"setColor(colorValue)\"\n                  [style.background]=\"colorValue\">\n                </div>\n              }\n              <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"isPalette = false;\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"transform: rotate(90deg)\" width=\"32\" height=\"32\" fill=\"#d9d9d9\" class=\"bi bi-arrow-down-circle-fill\" viewBox=\"0 0 16 16\">\n                  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z\"/>\n                </svg>\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <!--  -->\n      <div class=\"cp-color-actions\" [style.background]=\"choosenColor\">\n        <button class=\"cp-color-button cp-select-button\" [class.ngx-palette-squared]=\"squared\">\n          {{choosenColor}}\n        </button>\n        <div></div>\n        <button class=\"cp-color-button cp-select-button\" (click)=\"setCoreColor()\" [class.ngx-palette-squared]=\"squared\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#5cb85c\" class=\"bi bi-check-circle-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n          </svg>\n        </button>\n        <button class=\"cp-color-button cp-cancel-button\" (click)=\"discardCoreColor();\" [class.ngx-palette-squared]=\"squared\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#d9534f\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".cp-core-container{height:1.75rem;width:1.75rem;border-radius:1.5rem}.cp-core-container .cp-color-preview{position:relative;cursor:pointer;aspect-ratio:1/1;border-radius:1.5rem;outline:.35rem solid #ececec}.cp-core-container .cp-color-preview .cp-color-palette{z-index:1024;width:15rem;border:1px solid #ececec;overflow:hidden;transition:all .25s ease-in-out;border-radius:.5rem;background-color:#fff;transition:all 1s ease-in-out;animation:fadeinout 1s cubic-bezier(.175,.885,.32,1.275) forwards}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas{max-height:15rem;overflow:auto;background-color:#fff;padding:1rem}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid{display:grid;align-items:center;justify-content:center;grid-template-columns:repeat(5,1fr);gap:1rem;transition:all .25s ease-in-out}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill{width:100%;aspect-ratio:1/1;border-radius:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1) both}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill-active{outline:.35rem solid #ececec}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill-drop{background-color:#fff;display:grid;align-items:center;justify-content:center}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-svg-left{transform:rotate(90deg)}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas::-webkit-scrollbar{width:10px!important;background-color:#fff!important}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas::-webkit-scrollbar-thumb{width:10px!important;border-radius:0!important;background-color:#ececec!important}.cp-core-container .cp-color-preview .cp-color-actions{padding:.5rem;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:.5rem;border-top:1px solid #ececec}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-button{padding:.5rem;border:none;outline:1px solid #ececec;border-radius:.25rem;background-color:#fff;color:#00000080;font-size:small;font-weight:600;text-transform:capitalize;-webkit-user-select:none;user-select:none;display:flex;align-items:center;justify-content:center}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-button:hover{background-color:#fdfdfd}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-picker{color:#00000080;padding:.5rem;border:1px solid #ececec;border-radius:7.5px!important;font-size:small;width:75%;font-weight:600;text-transform:uppercase;-webkit-user-select:none;user-select:none}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-picker:focus{outline:none;box-shadow:none}@keyframes fadeinout{0%{opacity:0}to{opacity:1}}.hue-grid-hex{display:grid;grid-template-columns:repeat(360,1fr);width:100%;aspect-ratio:16/9}.hue-grid-hex .hue-item-hex{height:100%}.hue-grid-preview{padding:1rem;text-align:center;display:flex;align-items:center;justify-content:center}.hue-grid-preview .hue-grid-value{width:5rem!important;padding:.25rem .5rem;border-radius:5px;font-size:small;text-transform:uppercase;background-color:#f5f5f5}.color-wheel-box{padding:1rem}.color-wheel-box .color-box{width:100%;aspect-ratio:1/1;position:relative;border-radius:100%!important;overflow:hidden;display:flex;align-items:center;justify-content:center}.color-wheel-box .color-box svg{position:absolute;height:100%;width:100%;left:0}.color-wheel-box .color-box .center-box{height:5rem;width:5rem;background-color:#fff;position:absolute;left:50%;top:50%;border-radius:100%;transform:translate(-50%,-50%)}.color-wheel-box .color-box .center-box .black-box{height:2.5rem;width:2.5rem;background-color:#000;position:absolute;left:50%;top:50%;border-radius:100%;transform:translate(-50%,-50%)}@keyframes scale-up-center{0%{transform:scale(.5)}to{transform:scale(1)}}.ngx-palette-squared{border-radius:0!important}.rgb-grid{display:grid;grid-template-columns:repeat(3,1fr)}.rgb-grid .rgb-range{width:3rem}.ngx-cp-border-bottom{border-bottom:1px solid #ececec}.npx-active-mode{fill:#000000bf}.cp-position-bottom-left{position:absolute;top:3rem;left:-1rem}.cp-position-bottom-right{position:absolute;top:3rem;right:-1rem}.cp-position-top-left{position:absolute;bottom:3rem;left:-1rem}.cp-position-top-right{position:absolute;bottom:3rem;right:-1rem}.cp-position-top{position:absolute;bottom:3rem;left:50%;transform:translate(-50%)}.cp-position-bottom{position:absolute;top:3rem;left:50%;transform:translate(-50%)}.cp-position-right{position:absolute;left:50%;transform:translateY(-50%) translate(12.5%)}.cp-position-left{position:absolute;right:50%;transform:translateY(-50%) translate(-12.5%)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: KeyValuePipe, name: "keyvalue" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxColorPaletteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-color-palette', standalone: true, imports: [NgClass, KeyValuePipe], template: "<div class=\"cp-core-container\">\n\n  <div class=\"cp-color-preview\" [class.ngx-palette-squared]=\"squared\" (mouseover)=\"isShow = true;\" (focusout)=\"isShow = false\" [style.background]=\"color\">\n    <div class=\"cp-color-palette\" [ngClass]=\"'cp-position-'+position\" [class.ngx-palette-squared]=\"squared\" [hidden]=\"!isShow\">\n      <div class=\"cp-colors-cavas ngx-cp-border-bottom\">\n        <div class=\"cp-color-pill-grid\">\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showBasic();\"  >\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'basic'\" fill=\"#d9d9d9\" class=\"bi bi-stack\" viewBox=\"0 0 16 16\">\n              <path d=\"m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z\"/>\n              <path d=\"m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showMaterial();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'material'\" fill=\"#d9d9d9\" class=\"bi bi-triangle-half\" viewBox=\"0 0 16 16\">\n              <path d=\"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showCrayola();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'crayola'\" fill=\"#d9d9d9\" class=\"bi bi-ui-radios-grid\" viewBox=\"0 0 16 16\">\n              <path d=\"M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"/>\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showWheel();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'wheel'\" fill=\"#d9d9d9\" class=\"bi bi-palette-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\" />\n            </svg>\n          </div>\n          <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"showHsl();\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" [class.npx-active-mode]=\"mode === 'hsl'\" fill=\"#d9d9d9\" class=\"bi bi-palette2\" viewBox=\"0 0 16 16\">\n              <path d=\"M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z\"/>\n              <path d=\"M0 12.995V13a3.07 3.07 0 0 0 0-.005z\"/>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <!--  -->\n      <div class=\"color-wheel-box\" [hidden]=\"mode !== 'wheel'\">\n        <div class=\"color-box\" [attr.id]=\"'color-box-'+ randomId\">\n          <svg>\n            @for (axis of colorAxis; track axis; let i = $index) {\n              <line [style.zIndex]=\"i\" [attr.id]=\"i\"\n                (click)=\"choosenColor = hslToHex(i, 100, 50);\" [attr.x1]=\"axis?.x1\" [attr.y1]=\"axis?.y1\"\n                [attr.x2]=\"axis?.x2\" [attr.y2]=\"axis?.y2\" [style.stroke]=\"'hsl('+i+',100%,50%)'\"\n                [style.strokeWidth]=\"(clientBox.width * 4 / 360)\" />\n            }\n          </svg>\n        </div>\n        <div class=\"center-box\">\n          <div class=\"black-box\" [style.backgroundColor]=\"choosenColor\"></div>\n        </div>\n      </div>\n      <!--  -->\n      @if (mode === 'hsl') {\n        <div class=\"hue-grid-hex\">\n          @for (hue of iterator; track hue) {\n            <div (click)=\"choosenColor = hslToHex(hue, 100, 50);\"\n            [style.backgroundColor]=\"'hsl('+hue+',100%,50%)'\" class=\"hue-item-hex\"></div>\n          }\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'crayola') {\n        <div class=\"cp-colors-cavas\">\n          <div class=\"cp-color-pill-grid\">\n            @for (colorValue of crayola; track colorValue) {\n              <div (click)=\"choosenColor = colorValue?.hex || '';\"\n                [class.ngx-palette-squared]=\"squared\"\n                [class.cp-color-pill-active]=\"choosenColor === colorValue?.hex\"\n              [style.backgroundColor]=\"colorValue?.hex\" class=\"cp-color-pill\"></div>\n            }\n          </div>\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'material') {\n        <div class=\"cp-colors-cavas\">\n          @for (matkey of material | keyvalue; track matkey) {\n            <div>\n              <div class=\"cp-color-pill-grid\">\n                @for (colorValue of matkey['value'] | keyvalue; track colorValue) {\n                  <div (click)=\"choosenColor = colorValue['value'];\"\n                    [class.ngx-palette-squared]=\"squared\"\n                    [class.cp-color-pill-active]=\"choosenColor === colorValue['value']\"\n                    [style.backgroundColor]=\"colorValue['value']\" class=\"cp-color-pill\">\n                  </div>\n                }\n              </div>\n              &nbsp;\n            </div>\n          }\n        </div>\n      }\n      <!--  -->\n      @if (mode === 'basic') {\n        <div class=\"cp-colors-cavas\">\n          @if (!isPalette) {\n            <div class=\"cp-color-pill-grid\">\n              @for (colorValue of colors; track colorValue; let pIndex = $index) {\n                <div class=\"cp-color-pill\"\n                  [class.ngx-palette-squared]=\"squared\"\n                  [class.cp-color-pill-active]=\"choosenColor === colorValue.preview\"\n                  (click)=\"paletteIndex = pIndex;isPalette = true\" [style.background]=\"colorValue.preview\">\n                </div>\n              }\n            </div>\n          }\n          @if (isPalette) {\n            <div class=\"cp-color-pill-grid\">\n              @for (colorValue of colors[paletteIndex]['variants']; track colorValue; let cIndex = $index) {\n                <div class=\"cp-color-pill\"\n                  [class.ngx-palette-squared]=\"squared\"\n                  [class.cp-color-pill-active]=\"choosenColor === colorValue\" (click)=\"setColor(colorValue)\"\n                  [style.background]=\"colorValue\">\n                </div>\n              }\n              <div class=\"cp-color-pill cp-color-pill-drop\" (click)=\"isPalette = false;\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"transform: rotate(90deg)\" width=\"32\" height=\"32\" fill=\"#d9d9d9\" class=\"bi bi-arrow-down-circle-fill\" viewBox=\"0 0 16 16\">\n                  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z\"/>\n                </svg>\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <!--  -->\n      <div class=\"cp-color-actions\" [style.background]=\"choosenColor\">\n        <button class=\"cp-color-button cp-select-button\" [class.ngx-palette-squared]=\"squared\">\n          {{choosenColor}}\n        </button>\n        <div></div>\n        <button class=\"cp-color-button cp-select-button\" (click)=\"setCoreColor()\" [class.ngx-palette-squared]=\"squared\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#5cb85c\" class=\"bi bi-check-circle-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n          </svg>\n        </button>\n        <button class=\"cp-color-button cp-cancel-button\" (click)=\"discardCoreColor();\" [class.ngx-palette-squared]=\"squared\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#d9534f\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".cp-core-container{height:1.75rem;width:1.75rem;border-radius:1.5rem}.cp-core-container .cp-color-preview{position:relative;cursor:pointer;aspect-ratio:1/1;border-radius:1.5rem;outline:.35rem solid #ececec}.cp-core-container .cp-color-preview .cp-color-palette{z-index:1024;width:15rem;border:1px solid #ececec;overflow:hidden;transition:all .25s ease-in-out;border-radius:.5rem;background-color:#fff;transition:all 1s ease-in-out;animation:fadeinout 1s cubic-bezier(.175,.885,.32,1.275) forwards}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas{max-height:15rem;overflow:auto;background-color:#fff;padding:1rem}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid{display:grid;align-items:center;justify-content:center;grid-template-columns:repeat(5,1fr);gap:1rem;transition:all .25s ease-in-out}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill{width:100%;aspect-ratio:1/1;border-radius:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1) both}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill-active{outline:.35rem solid #ececec}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-pill-drop{background-color:#fff;display:grid;align-items:center;justify-content:center}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas .cp-color-pill-grid .cp-color-svg-left{transform:rotate(90deg)}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas::-webkit-scrollbar{width:10px!important;background-color:#fff!important}.cp-core-container .cp-color-preview .cp-color-palette .cp-colors-cavas::-webkit-scrollbar-thumb{width:10px!important;border-radius:0!important;background-color:#ececec!important}.cp-core-container .cp-color-preview .cp-color-actions{padding:.5rem;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:.5rem;border-top:1px solid #ececec}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-button{padding:.5rem;border:none;outline:1px solid #ececec;border-radius:.25rem;background-color:#fff;color:#00000080;font-size:small;font-weight:600;text-transform:capitalize;-webkit-user-select:none;user-select:none;display:flex;align-items:center;justify-content:center}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-button:hover{background-color:#fdfdfd}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-picker{color:#00000080;padding:.5rem;border:1px solid #ececec;border-radius:7.5px!important;font-size:small;width:75%;font-weight:600;text-transform:uppercase;-webkit-user-select:none;user-select:none}.cp-core-container .cp-color-preview .cp-color-actions .cp-color-picker:focus{outline:none;box-shadow:none}@keyframes fadeinout{0%{opacity:0}to{opacity:1}}.hue-grid-hex{display:grid;grid-template-columns:repeat(360,1fr);width:100%;aspect-ratio:16/9}.hue-grid-hex .hue-item-hex{height:100%}.hue-grid-preview{padding:1rem;text-align:center;display:flex;align-items:center;justify-content:center}.hue-grid-preview .hue-grid-value{width:5rem!important;padding:.25rem .5rem;border-radius:5px;font-size:small;text-transform:uppercase;background-color:#f5f5f5}.color-wheel-box{padding:1rem}.color-wheel-box .color-box{width:100%;aspect-ratio:1/1;position:relative;border-radius:100%!important;overflow:hidden;display:flex;align-items:center;justify-content:center}.color-wheel-box .color-box svg{position:absolute;height:100%;width:100%;left:0}.color-wheel-box .color-box .center-box{height:5rem;width:5rem;background-color:#fff;position:absolute;left:50%;top:50%;border-radius:100%;transform:translate(-50%,-50%)}.color-wheel-box .color-box .center-box .black-box{height:2.5rem;width:2.5rem;background-color:#000;position:absolute;left:50%;top:50%;border-radius:100%;transform:translate(-50%,-50%)}@keyframes scale-up-center{0%{transform:scale(.5)}to{transform:scale(1)}}.ngx-palette-squared{border-radius:0!important}.rgb-grid{display:grid;grid-template-columns:repeat(3,1fr)}.rgb-grid .rgb-range{width:3rem}.ngx-cp-border-bottom{border-bottom:1px solid #ececec}.npx-active-mode{fill:#000000bf}.cp-position-bottom-left{position:absolute;top:3rem;left:-1rem}.cp-position-bottom-right{position:absolute;top:3rem;right:-1rem}.cp-position-top-left{position:absolute;bottom:3rem;left:-1rem}.cp-position-top-right{position:absolute;bottom:3rem;right:-1rem}.cp-position-top{position:absolute;bottom:3rem;left:50%;transform:translate(-50%)}.cp-position-bottom{position:absolute;top:3rem;left:50%;transform:translate(-50%)}.cp-position-right{position:absolute;left:50%;transform:translateY(-50%) translate(12.5%)}.cp-position-left{position:absolute;right:50%;transform:translateY(-50%) translate(-12.5%)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { color: [{
                type: Input
            }], squared: [{
                type: Input
            }], position: [{
                type: Input
            }], currentColor: [{
                type: Output
            }], onGlobalClick: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }] } });

/*
 * Public API Surface of ngx-color-palette
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxColorPaletteComponent, NgxColorPaletteService, RAW };
//# sourceMappingURL=ngx-color-palette.mjs.map
