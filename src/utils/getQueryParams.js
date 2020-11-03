import queryString from "query-string";

export default function grtQueryParams(string) {
  return queryString.parse(string);
}
