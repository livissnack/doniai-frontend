import request from '../utils/request'
const ApiVersion = 'doniai/frontend/api/v1'

/*
|--------------------------------------------------------------------------
| article api methods
|--------------------------------------------------------------------------
|
| getArticles(get article list data)
| storeArticles(store article data)
| showArticle(shwo article data)
|
*/
export async function getArticles(params) {
  return request('get', `${ApiVersion}/articles`, params)
}

export async function storeArticles(params) {
  return request('post', `${ApiVersion}/articles`, params)
}

export async function showArticle(id, params) {
  return request('get', `${ApiVersion}/articles/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| book api methods
|--------------------------------------------------------------------------
|
| getBooks(get book list data)
| showBook(shwo book data)
|
*/
export async function getBooks(params) {
  return request('get', `${ApiVersion}/books`, params)
}

export async function showBook(id, params) {
  return request('get', `${ApiVersion}/books/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| comment api methods
|--------------------------------------------------------------------------
|
| getComments(get comment list data)
| storeComment(store comment data)
|
*/
export async function getComments(params) {
  return request('get', `${ApiVersion}/comments`, params)
}

export async function storeComment(params) {
  return request('post', `${ApiVersion}/comments`, params)
}

/*
|--------------------------------------------------------------------------
| course api methods
|--------------------------------------------------------------------------
|
| getCourses(get course list data)
| showCourse(shwo course data)
|
*/
export async function getCourses(params) {
  return request('get', `${ApiVersion}/courses`, params)
}

export async function showCourse(id, params) {
  return request('get', `${ApiVersion}/courses/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| link api methods
|--------------------------------------------------------------------------
|
| getLinks(get link list data)
|
*/
export async function getLinks(params) {
  return request('get', `${ApiVersion}/links`, params)
}

/*
|--------------------------------------------------------------------------
| question api methods
|--------------------------------------------------------------------------
|
| getQuestions(get question list data)
| storeQuestion(store question data)
| showQuestion(shwo question data)
|
*/
export async function getQuestions(params) {
  return request('get', `${ApiVersion}/questions`, params)
}

export async function storeQuestion(params) {
  return request('post', `${ApiVersion}/questions`, params)
}

export async function showQuestion(id, params) {
  return request('get', `${ApiVersion}/questions/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| replay api methods
|--------------------------------------------------------------------------
|
| getReplays(get replay list data)
| storeReplay(store replay data)
|
*/
export async function getReplays(params) {
  return request('get', '${ApiVersion}/replays', params)
}

export async function storeReplay(params) {
  return request('post', `${ApiVersion}/replays`, params)
}

/*
|--------------------------------------------------------------------------
| user api methods
|--------------------------------------------------------------------------
|
| getUser(shwo user data)
|
*/
export async function getUser(id, params) {
  return request('get', `${ApiVersion}/users/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| video api methods
|--------------------------------------------------------------------------
|
| getVideos(get video list data)
| showVideo(shwo video data)
|
*/
export async function getVideos(params) {
  return request('get', `${ApiVersion}/videos`, params)
}

export async function showVideo(id, params) {
  return request('get', `${ApiVersion}/videos/${id}`, params)
}
