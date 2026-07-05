export type ApiResponse<T> = {
  message: string;
  data: T;
};

export type PaginatedMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginatedData<T> = {
  items: T[];
  meta: PaginatedMeta;
};
