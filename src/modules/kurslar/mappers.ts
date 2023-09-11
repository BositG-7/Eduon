import get from "lodash/get";

import { IEntity } from "./types";

export const Results = (item: any): IEntity.Results => ({
   id: get(item, "id"),
   name: get(item, "name"),
   price: get(item, "price"),
   view: get(item, "view"),
   img: get(item, "image"),
   review_count: get(item, "review_count")
});

export const Course = (item: any): IEntity.Course => ({
   count: get(item, "count"),
   next: get(item, "next"),
   previous: get(item, "previous"),
   results: (get(item, "results") || []).map(Results)
});
