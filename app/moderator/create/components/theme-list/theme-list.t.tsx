export type Tthemeitems = {
  "id": number,
  "topic_name": string,
  "add": {
    "class": string,
    "quarter": string,
    "science": string
  }
}

export type Pagination = {
  "count": number,
  "currentPage": number,
  "previousPageUrl": string | null,
  "nextPageUrl": string | number,
  "total": number,
  "perPage": number,
  totalPage: number | string
}