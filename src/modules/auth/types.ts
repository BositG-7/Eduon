import { GENDER, JOB } from "./constants";

export namespace IEntity {
   export interface User {
      firstName: string;
      lastName: string;
      phone: string;
      img: string | null;
      balance: string;
      email: string;
      username: string;
      gender: GENDER;
      job: JOB
      birthday: string
      about: string
      isActive: boolean;
      isSpiker: boolean;
   }
   export interface Tokens {
      access: string
      refresh: string
    }
}
export namespace IForm {
   export interface Login {
      username: string;
      password: string;
   }
   export interface Register {
      first_name: string;
      last_name: string;
      email: string;
      username: string;
      password: string;
      re_password : string;
   }
}

export interface IToken {
   access: string
   refresh: string
}

export namespace IApi {
   export namespace Register {
      export interface Request extends IForm.Register {}
      export interface Response extends IForm.Register {}
   }
   export namespace Login {
      export interface Request extends IForm.Login {}
      export interface Response extends IToken {}
   }
}

