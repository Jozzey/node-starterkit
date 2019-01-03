// By adding useMockApi=true to the URL the app will switch from using the prod API to the dev one
// e.g. http://localhost:3000/?useMockApi=true

export default function getBaseUrl() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var useMockApi = url.searchParams.get("useMockApi");

  return useMockApi ? "http://localhost:3001/" : "/";
}
