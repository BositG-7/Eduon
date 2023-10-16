export namespace IEntity {
   export interface Course {
      count: number;
      next: string;
      previous: string;
      results: Results[];
   }
   export interface SpeakerCourse {
      id: number;
      name: string;
      image: string;
   }
   export interface Results {
      id: number;
      name: string;
      price: number;
      view: number;
      image: string;
      review_count: number;
   }
   export interface CategoryResults {
      id: number;
      name: string;
      lft: number;
      rght: number;
      tree_id: number;
      level: number;
      parent: number;
   }

   export interface SpeakerInfo {}

   export interface Comment {
      text: string;
      course: number;
      author: number;
   }
   export interface Video {
      video: string;
      module: number;
   }
   export interface SingleCourse {
      name: string;
      description: string;
      speaker: number;
      comment: Comment;
      video: Video;
   }

   export interface Speaker {
      first_name: string;
      last_name: string;
      email: string;
      speaker: string;
      image: string;
      courses: [];
      username: string;
   }
   export interface Category {
      id: any;
      name: any;
      count: number;
      next: string | number;
      previous: number;
      results: CategoryResults[];
   }
}

export namespace IApi {
   export namespace Course {
      export namespace Create {
         export interface Request {
            name: string;
            description: string;
            price?: string;
            image: any[];
            whos_course: string;
            language?: string;
            type?: string;
            degree?: string;
            category?: number;
         }
         export interface Response {
            id: number;
            name: string;
            description: string;
            price?: string;
            image: any[];
            key_word: string;
            whos_course: string;
            view?: number;
            discount?: number;
            language?: string;
            type?: string;
            degree?: string;
            speaker?: number;
            category?: number;
         }
      }
      export namespace VideoUpload {
         export interface Request {
            title: string;
            description: string;
            duration?: string;
            video?: any;

            course: number;
            module?: number;
            file?: number;
         }
         export interface Response {
            id?: number;
            title: string;
            description: string;
            duration?: string;
            video?: string;
            author: number;
            course: number;
            module?: number;
            file?: number;
         }
      }
      export namespace List {
         export type Response = IEntity.Course;
      }
      export namespace Single {
         export interface Request {}
         export interface Response extends IEntity.SingleCourse {}
      }

      export namespace Speaker {
         export interface Request {
            id: string;
         }
         export interface Response extends IEntity.Speaker {}
      }
      export namespace SpeakerCourse {
         export interface Request {
            id: string;
         }
         export interface Response {
            data: IEntity.SpeakerCourse[];
         }
      }
      export namespace Category {
         export interface Request {}
         export interface Response extends IEntity.Category {}
      }
      export namespace SpeakerInfo {
         export interface Request {}
         export interface Response extends IEntity.SpeakerInfo {}
      }
   }
}

export namespace IQuery {
   export namespace Course {
      export interface List {
         isLoading: boolean;
         course: IEntity.Course | null;
      }
      export interface Single {
         isLoading: boolean;
         course: IEntity.SingleCourse[];
      }

      export interface Speaker {
         isLoading: boolean;
         teacher: IEntity.Speaker[];
      }
      export interface SpeakerCourse {
         isLoading: boolean;
         speakerCourse: IEntity.SpeakerCourse[];
      }
      export interface Category {
         isLoading?: boolean;
         category: IEntity.Category[];
      }
      export interface SpeakerInfo {
         isLoading?: boolean;
         info: IEntity.SpeakerInfo[];
      }
   }
}

type User = "firstName" | "lastName" | "age";
type Person = Extract<User, "firstName">;
