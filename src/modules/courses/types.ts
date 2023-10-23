import { DEGREE, LANGUAGE, TYPE } from "./constants";

export namespace IEntity {
   export interface Course {
      id: number;
      name: string;
      description: string;
      price: number;
      image: string;
      whos_course: string;
      language: LANGUAGE;
      type: TYPE;
      degree: DEGREE;
      category: number;
   }
   export interface ICourseTop {
      id: number;
      name: string;
      price: number;
      view: string;
      image: string;
   }
   export interface SpeakerCourse {
      id: number;
      name: string;
      image: string;
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
   export interface CourseTop {
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
      export namespace PaymentStep1 {
         export namespace Click {
            export interface Request {
               card_number: string;
               expire_date: string;
            }
            export interface Response {
               card_number: string;
               expire_date: string;
            }
         }
         export namespace Payme {
            export interface Request {
               card_number: string;
               expire_date: string;
            }
            export interface Response {
               card_number: string;
               expire_date: string;
            }
         }
      }

      export namespace PaymentStep2 {
         export namespace Click {
            export interface Request {
               card_token: string;
               code: string;
               course_id?: number;
            }
            export interface Response {
               card_token: string;
               code: string;
               course_id?: number;
            }
         }
         export namespace Payme {
            export interface Request {
               token: string;
               code: string;
               course_id?: number;
            }
            export interface Response {
               token: string;
               code: string;
               course_id?: number;
            }
         }
      }
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
            course_id: number;
            message: string;
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
      export namespace CourseTop {
         export type Response = IEntity.ICourseTop;
      }
      export namespace Single {
         export interface Request {}
         export interface Response extends IEntity.SingleCourse {}
      }

      export namespace Filter {
         export interface Request {
            category__name?: string;
            max_price?: number;
            language?: string;
            degree?: string;
         }
         export interface Response extends IEntity.Course {}
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
      export interface Filter {
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
      export interface CourseTop {
         isLoading?: boolean;
         courseTop: IEntity.ICourseTop [] | null;
      }
   }
}

export namespace IContext {
   export interface Courses {
      course: IEntity.Course | null;
      isLoading: boolean;
      methods: {
         filter: (course: IEntity.Course | null) => void;
      };
   }
}

type User = "firstName" | "lastName" | "age";
type Person = Extract<User, "firstName">;
