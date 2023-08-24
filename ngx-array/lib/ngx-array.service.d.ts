import * as i0 from "@angular/core";
export declare class NgxArrayService {
    constructor();
    /**
     * _min: Returns the minimum value in the array
     * @param arr: Array of values of any type[].
     */
    _min(arr: Array<any>): any;
    /**
     * _max: Returns the maximum value in the array
     * @param arr: Array of values of any type[].
     */
    _max(arr: Array<any>): any;
    /**
     * _sortNumbers: method sorts the elements of an numbers array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     * @param mode: 1 for ascending , -1 for descending - Default 1
     */
    _sortNumbers(arr: Array<any>, mode?: number | any): Array<any> | any;
    /**
     * _sort: method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     */
    _sort(arr: Array<any>): Array<any> | any;
    /**
     * _reverse: Returns the reverse ordered array
     * @param arr: Array of values of any type[].
     */
    _reverse(arr: Array<any>): Array<any> | any;
    /**
     * _join: New string by concatenating all of the elements in an array
     * @param arr: Array of values of any type[].
     * @param joinBy: Concatenate by the string example = (-). Default is ''
     */
    _join(arr: Array<any>, joinBy?: string | any): string | any;
    /**
     * _isValidArray: Checks whether the passed item is array or not
     * * return true if valid
     * * return false if not valid
     * @param arr: Array of values of any type[].
     */
    _isValidArray(arr: any): boolean | any;
    /**
     * _indexOfFrom: Returns the index of item from given array from starting at particular index
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param start: Starting index
     */
    _indexOfFrom(arr: Array<any>, item: any, start: number | any): number | any;
    /**
     * _indexOf: Returns the index of item from given array
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _indexOf(arr: Array<any>, item: any): number | any;
    /**
     * _hasAt: Checks whether the array contains the item at particular given index
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param positionIndex: Starting index
     */
    _hasAt(arr: Array<any>, item: any, positionIndex: number | any): boolean | any;
    /**
     * _has: Checks whether the array contains the item
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _has(arr: Array<any>, item: any): boolean | any;
    /**
     * _filterNumbersArray: Filters integer array for an given condition and returns a new array.
     * * return filtered new array
     * @param arr: Array of values of any type [].
     * @param condition: Possible conditions  ('>' , '<' , '>=', '<=' , '!==')
     * @param expected: Resulted value should be in
     */
    _filterNumbersArray(arr: Array<number>, condition: any, expected: number | any): any;
    /**
     * _fill: method shallow copies part of an array to another location in the same array and returns it without modifying its length method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
     * * Returns new array
     * @param arr: Array of values of any type [].
     * @param value: value to be filled in array
     * @param from: Start from this position
     * @param to: End at this position
     */
    _fill(arr: Array<any>, value: any, from: number | any, to: number | any): Array<any> | any;
    /**
     * _copyWithin: method shallow copies part of an array to another location in the same array and returns it without modifying its length
     * return new array
     * @param arr: Array of values of any type [].
     * @param from: Start from this position
     * @param to: End at this position
  
     */
    _copyWithin(arr: Array<any>, from: number | any, to: number | any): Array<any> | any;
    /**
     * _concat: method is used to merge two or more arrays.
     * This method does not change the existing arrays, but instead returns a new array.
     * * return new concatenated array
     * @param args: Multiple Array of values at any length .
     */
    _concat(...args: Array<any>): any;
    /**
     * _length: Returns the length of the given array
     * * return length of the array
     * @param arr: Array of values of any type [].
     */
    _length(arr: Array<any>): number | any;
    /**
     * _copy: Duplicates an array
     * * returns same array as result
     * @param arr: Array of values of any type [].
     */
    _copy(arr: Array<any>): Array<any> | any;
    /**
     * _slice: returns a shallow copy of a portion of an array into a new array object selected from start to end
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is length of the array
     */
    _slice(arr: Array<any>, start: number | any, end?: number | any): Array<any> | any;
    /**
     * _splice: Cut of / Splice of an items at particular valid index
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is 1
     */
    _splice(arr: Array<any>, start: number | any, end?: number | any): Array<any> | any;
    /**
     *  _shift: It will remove the array item at beginning & return item
     * * return the item if removed from array at beginning
     * @param arr: Array of values of any type [].
     */
    _shift(arr: Array<any>): any;
    /**
     *  _shift: method adds one or more elements to the beginning of an array and returns the new length of the array.
     ** Use spread operator while passing array [...arr]
     * @param arr: Array of values of any type []. use spread operator [...arr]
     * @param args: Any length of values seperated by comma to unshift in array example _unshift(array,1,2,3,4,5...)
     */
    _unshift(arr: Array<any>, ...args: any[]): any;
    /**
     * _pop: It will remove the array item at end & return item
     * * return the item if removed from array at end
     * @param arr: Array of values of any type [].
     */
    _pop(arr: Array<any>): any;
    /**
     * _push: It will add / push new item to the array at end & return new array
     * * return the new array.
     * @param arr: Array of values of any type [].
     * @param item: item to be pushed of any type
     */
    _push(arr: Array<any>, item: any): Array<any> | any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxArrayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxArrayService>;
}
