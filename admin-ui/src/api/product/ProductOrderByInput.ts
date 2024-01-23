import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoriesId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  title?: SortOrder;
  titledPrice?: SortOrder;
  updatedAt?: SortOrder;
  varients?: SortOrder;
};
