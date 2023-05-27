import { KeyValue } from "./keyValue";

export class MenuObject {
  private _primary: KeyValue;
  private _classParam: string;
  private _arraySecondary: Array<MenuObject>;

  constructor(
    primary: KeyValue,
    classParam: string,
    arraySecondary: Array<MenuObject>
  ) {
    this._primary = primary;
    this._classParam = classParam;
    this._arraySecondary = arraySecondary;
  }

  get primary(): KeyValue {
    return this._primary;
  }

  set primary(primary: KeyValue) {
    this._primary = primary;
  }

  get classParam(): string {
    return this._classParam;
  }

  set classParam(classParam: string) {
    this._classParam = classParam;
  }

  get arraySecondary(): Array<MenuObject> {
    return this._arraySecondary;
  }

  set arraySecondary(arraySecondary: Array<MenuObject>) {
    this._arraySecondary = arraySecondary;
  }
}
