export class Friend {
   firstName : string | null;
   lastName : string | null;
   phone : number | null;
   email : string | null;
   favLang : string | null;
   message : string | null;



  constructor(firstName : string  | null, lastName : string | null, phone : number | null, email : string | null, favLang : string | null, message : string | null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.favLang = favLang;
    this.message = message;
  }
}
