export class Friend {
  private _firstName : string;
  private _lastName : string;
  private _phone : number;
  private _email : string;
  private _favLang : string;
  private _message : string;



  constructor(firstName : string, lastName : string, phone : number, email : string, favLang : string, message : string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._email = email;
    this._favLang = favLang;
    this._message = message;
  }

  get friendFirstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get phone(): number {
    return this._phone;
  }

  get friendEmail(): string {
    return this._email;
  }

  get favLang(): string {
    return this._favLang;
  }

  get message(): string {
    return this._message;
  }
}
