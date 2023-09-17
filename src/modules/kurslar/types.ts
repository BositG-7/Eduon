export namespace IEntity {
   export interface Course {
      count: number;
      next: string;
      previous: string;
      results: Results[];
   }
   export interface Results {
      id: number;
      name: string;
      price: number;
      view: number;
      img: string;
      review_count: number;
   }
   export interface GenreResults {
      id: number;
      name: string;
      lft: number;
      rght: number;
      tree_id: number;
      level: number;
      parent: number;
   }

   export interface SingleCourse {
      name: string;
      description: string;
      speaker: number;
      comment: string;
      video: string;
   }

   export interface Speaker {
      first_name: string;
      last_name: string;
      email: string;
      speaker: string;
   }
   export interface Genre {
      count: number;
      next: string | number;
      previous: number;
      results: GenreResults[];
   }
}

export namespace IApi {
   export namespace Course {
      export namespace Create {
         export interface Request {
            // name: string;
            // description: string;
            // price?: string;
            // image: any;
            // keyword: string;
            // whosCourse: string;
            // view?: number;
            // discount?: number;
            // language?: string;
            // type?: string;
            // degree?: string;
            // speaker?: number;
            // category?: number;

            formData: any;
         }
         export interface Response {
            name: string;
            description: string;
            price?: string;
            image: any;
            keyword: string;
            whosCourse: string;
            view?: number;
            discount?: number;
            language?: string;
            type?: string;
            degree?: string;
            speaker?: number;
            category?: number;
         }
      }
      export namespace List {
         export type Response = IEntity.Course[];
      }
      export namespace Single {
         export interface Request {
            id: string;
         }
         export interface Response extends IEntity.SingleCourse {}
      }

      export namespace Speaker {
         export interface Request {
            id: string;
         }
         export interface Response extends IEntity.Speaker {}
      }
      export namespace Genre {
         export interface Request {}
         export interface Response extends IEntity.Genre {}
      }
   }
}

export namespace IQuery {
   export namespace Course {
      export interface List {
         isLoading: boolean;
         course: IEntity.Course[];
      }
      export interface Single {
         isLoading: boolean;
         course: IEntity.SingleCourse[];
      }

      export interface Speaker {
         isLoading: boolean;
         teacher: IEntity.Speaker[];
      }
      export interface Genre {
         isLoading: boolean;
         genre: IEntity.Genre[];
      }
   }
}

type User = "firstName" | "lastName" | "age";

type Person = Extract<User, "firstName">;
