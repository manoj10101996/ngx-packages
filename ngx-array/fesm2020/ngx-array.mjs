import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgxArrayService {
    constructor() { }
    /**
     * _min: Returns the minimum value in the array
     * @param arr: Array of values of any type[].
     */
    _min(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_min - Invalid Arguments: Array / Item should be valid');
            }
            return Math.min.apply(null, arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _max: Returns the maximum value in the array
     * @param arr: Array of values of any type[].
     */
    _max(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_max - Invalid Arguments: Array / Item should be valid');
            }
            return Math.max.apply(null, arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _sortNumbers: method sorts the elements of an numbers array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     * @param mode: 1 for ascending , -1 for descending - Default 1
     */
    _sortNumbers(arr, mode = 1) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_sortNumbers - Invalid Arguments: Array / Item should be valid');
            }
            return mode === 1 ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _sort: method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     */
    _sort(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_sort - Invalid Arguments: Array / Item should be valid');
            }
            return arr.sort();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _reverse: Returns the reverse ordered array
     * @param arr: Array of values of any type[].
     */
    _reverse(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_reverse - Invalid Arguments: Array / Item should be valid');
            }
            return arr.reverse();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _join: New string by concatenating all of the elements in an array
     * @param arr: Array of values of any type[].
     * @param joinBy: Concatenate by the string example = (-). Default is ''
     */
    _join(arr, joinBy = '') {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_join - Invalid Arguments: Array / Item should be valid');
            }
            return arr.join(joinBy);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _isValidArray: Checks whether the passed item is array or not
     * * return true if valid
     * * return false if not valid
     * @param arr: Array of values of any type[].
     */
    _isValidArray(arr) {
        try {
            return Array.isArray(arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _indexOfFrom: Returns the index of item from given array from starting at particular index
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param start: Starting index
     */
    _indexOfFrom(arr, item, start) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_indexOfFrom - Invalid Arguments: Array / Item should be valid');
            }
            return arr.indexOf(item, start);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _indexOf: Returns the index of item from given array
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _indexOf(arr, item) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_indexOf - Invalid Arguments: Array / Item should be valid');
            }
            return arr.indexOf(item);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _hasAt: Checks whether the array contains the item at particular given index
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param positionIndex: Starting index
     */
    _hasAt(arr, item, positionIndex) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_hasAt - Invalid Arguments: Array / Item should be valid');
            }
            return arr.includes(item, positionIndex);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _has: Checks whether the array contains the item
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _has(arr, item) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_has - Invalid Arguments: Array / Item should be valid');
            }
            return arr.includes(item);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _filterNumbersArray: Filters integer array for an given condition and returns a new array.
     * * return filtered new array
     * @param arr: Array of values of any type [].
     * @param condition: Possible conditions  ('>' , '<' , '>=', '<=' , '!==')
     * @param expected: Resulted value should be in
     */
    _filterNumbersArray(arr, condition, expected) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_filterNumbersArray - Invalid Arguments: Invalid length of Array');
            }
            switch (condition) {
                case '>':
                    return arr.filter((value) => value > expected);
                case '<':
                    return arr.filter((value) => value < expected);
                case '<=':
                    return arr.filter((value) => value <= expected);
                case '>=':
                    return arr.filter((value) => value >= expected);
                case '!=':
                    return arr.filter((value) => value !== expected);
                default:
                    throw new Error("Invalid condition: Invalid type of condition passed use ('>' , '<' , '>=', '<=' , '!==' )");
            }
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _fill: method shallow copies part of an array to another location in the same array and returns it without modifying its length method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
     * * Returns new array
     * @param arr: Array of values of any type [].
     * @param value: value to be filled in array
     * @param from: Start from this position
     * @param to: End at this position
     */
    _fill(arr, value, from, to) {
        try {
            if (!from || !Array.isArray(arr)) {
                throw new Error('_fill - Invalid Arguments: Array / Item should be valid');
            }
            else if (from > arr.length - 1 || to > arr.length - 1) {
                throw new Error('_fill - Invalid index: Start / End index out of range');
            }
            return arr.fill(value, from, to);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _copyWithin: method shallow copies part of an array to another location in the same array and returns it without modifying its length
     * return new array
     * @param arr: Array of values of any type [].
     * @param from: Start from this position
     * @param to: End at this position
  
     */
    _copyWithin(arr, from, to) {
        try {
            if (!from || !Array.isArray(arr)) {
                throw new Error('_copyWithin - Invalid Arguments: Array / Item should be valid');
            }
            else if (from > arr.length - 1 || to > arr.length - 1) {
                throw new Error('_copyWithin - Invalid index: Start / End index out of range');
            }
            return arr.copyWithin(from, to);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _concat: method is used to merge two or more arrays.
     * This method does not change the existing arrays, but instead returns a new array.
     * * return new concatenated array
     * @param args: Multiple Array of values at any length .
     */
    _concat(...args) {
        try {
            let concatArray = [];
            args.forEach((element) => {
                if (element.length === -1) {
                    throw new Error('_concat - Invalid Arguments: Invalid Array');
                }
                else {
                    for (const iterator of element) {
                        concatArray.push(iterator);
                    }
                }
            });
            return concatArray;
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _length: Returns the length of the given array
     * * return length of the array
     * @param arr: Array of values of any type [].
     */
    _length(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_length - Invalid Arguments: Invalid length of Array');
            }
            return arr.length || 0;
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _copy: Duplicates an array
     * * returns same array as result
     * @param arr: Array of values of any type [].
     */
    _copy(arr) {
        return [...arr];
    }
    /**
     * _slice: returns a shallow copy of a portion of an array into a new array object selected from start to end
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is length of the array
     */
    _slice(arr, start, end = arr.length - 1) {
        try {
            if (!start || !Array.isArray(arr)) {
                throw new Error('_slice - Invalid Arguments: Array / Item should be valid');
            }
            else if (start > arr.length - 1 || end > arr.length - 1) {
                throw new Error('_slice - Invalid index: Start / End index out of range');
            }
            return arr.slice(start, end);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _splice: Cut of / Splice of an items at particular valid index
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is 1
     */
    _splice(arr, start, end = 1) {
        try {
            if (!start || !Array.isArray(arr)) {
                throw new Error('_splice - Invalid Arguments: Array / Item should be valid');
            }
            else if (start > arr.length - 1 || end > arr.length - 1) {
                throw new Error('_splice - Invalid index: Start / End index out of range');
            }
            return arr.splice(start, end);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     *  _shift: It will remove the array item at beginning & return item
     * * return the item if removed from array at beginning
     * @param arr: Array of values of any type [].
     */
    _shift(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_shift - Invalid Arguments: Array should be valid');
            }
            return arr.shift();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     *  _shift: method adds one or more elements to the beginning of an array and returns the new length of the array.
     ** Use spread operator while passing array [...arr]
     * @param arr: Array of values of any type []. use spread operator [...arr]
     * @param args: Any length of values seperated by comma to unshift in array example _unshift(array,1,2,3,4,5...)
     */
    _unshift(arr, ...args) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_unshift - Invalid Arguments: Array should be valid');
            }
            arr.unshift(args);
            return arr.reduce((acc, val) => acc.concat(val), []);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _pop: It will remove the array item at end & return item
     * * return the item if removed from array at end
     * @param arr: Array of values of any type [].
     */
    _pop(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_pop - Invalid Arguments: Array should be valid');
            }
            return arr.pop();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _push: It will add / push new item to the array at end & return new array
     * * return the new array.
     * @param arr: Array of values of any type [].
     * @param item: item to be pushed of any type
     */
    _push(arr, item) {
        try {
            if (!item) {
                throw new Error('_push - Invalid Arguments: Item should be valid');
            }
            return [...arr, item];
        }
        catch (error) {
            console.trace(error);
        }
    }
}
NgxArrayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxArrayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class NgxArrayComponent {
}
NgxArrayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxArrayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxArrayComponent, selector: "lib-ngx-array", ngImport: i0, template: `
    <p>
      ngx-array works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-array', template: `
    <p>
      ngx-array works!
    </p>
  ` }]
        }] });

class NgxArrayModule {
}
NgxArrayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxArrayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayModule, declarations: [NgxArrayComponent], exports: [NgxArrayComponent] });
NgxArrayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxArrayModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxArrayComponent
                    ],
                    imports: [],
                    exports: [
                        NgxArrayComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-array
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxArrayComponent, NgxArrayModule, NgxArrayService };
//# sourceMappingURL=ngx-array.mjs.map
