import { all, fork, delay, put, throttle } from 'redux-saga/effects'
import axios from 'axios';

import { 
    ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
    } from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try{
        yield delay(1000);
    //   const result = yield call(addPostAPI, action.data);
      yield put({
          type: ADD_POST_SUCCESS,
      });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
  }

function addCommnetAPI(data) {
    return axios.post('/api/post/${data.id}/comment', data)
}

function* addComment(action) {
try{
    yield delay(1000);
//   const result = yield call(addPostAPI, action.data);
    yield put({
        type: ADD_COMMENT_SUCCESS,
    });
} catch (err) {
    yield put({
        type: ADD_COMMENT_FAILURE,
        data: err.response.data,
    });
}
}


function* watchAddPost() {
    yield throttle(ADD_POST_REQUEST, addPost, 2000);
}

function* watchCommentPost() {
    yield throttle(ADD_COMMENT_REQUEST, addComment, 2000);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost),
    ])
}