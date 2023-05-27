export class KeyValue {
  private _key: string;
  private _value: string;

  constructor(key:string, value:string) {
    this._key = key;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  set key(newKey: string) {
    this._key = newKey;
  }

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
  }
}
