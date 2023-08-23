import { GENDER, JOB } from "./constants";

export namespace IEntity {
   export interface User {
      id: number;
      firstName: string;
      lastName: string;
      phone: string;
      image: string | null;
      balance: string;
      email: string;
      username: string;
      gender: GENDER;
      job: JOB
      birthday: string
      about: string
      is_active: boolean;
      is_spiker: boolean;
   }
}
export namespace IForm {
   export interface Login {
      username: string;
      password: string;
   }
   export interface Register {
      firstName?: string;
      lastName?: string;
      email: string;
      username: string;
      password: string;
      confirmPassword: string;
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

