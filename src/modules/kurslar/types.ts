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
}

export namespace IApi {
   export namespace Course {
      export namespace List {
         export type Response = IEntity.Course[];
      }
      export namespace Single {
         export interface Request {
            id: string;
         }
         export interface Response extends IEntity.Course {}
      }
   }
}

export namespace IQuery {
    export namespace Course {
      export interface List {
        isLoading: boolean;
        course: IEntity.Course[];
      }
    }
  }