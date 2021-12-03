// const dummyUser = {
//   id: 1,
//   nickname: 'supercoder',
//   Posts: [],
//   Followings: [],
//   Followers: [],
// };

export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUSET = 'LOG_IN_REQUSET';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUSET = 'LOG_OUT_REQUSET';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUSET = 'SIGN_UP_REQUSET';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_UP_REQUSET = 'FOLLOW_UP_REQUSET';
export const FOLLOW_UP_SUCCESS = 'FOLLOW_UP_SUCCESS';
export const FOLLOW_UP_FAILURE = 'FOLLOW_UP_FAILURE';

export const UNFOLLOW_UP_REQUSET = 'UNFOLLOW_UP_REQUSET';
export const UNFOLLOW_UP_SUCCESS = 'UNFOLLOW_UP_SUCCESS';
export const UNFOLLOW_UP_FAILURE = 'UNFOLLOW_UP_FAILURE';

export const loginRequsetAction = (data) => {
  return {
    type: 'LOG_IN_REQUSET',
    data,
  }
};

export const signUpAction = (data) => {
  return {
    type: SIGN_UP_REQUSET,
    data,
  };
};

export const signUpSuccess = {
  type: 'SIGN_UP_SUCCESS',
};

export const logoutRequsetAction = (data) => {
  return {
    type: 'LOG_OUT_REQUSET',
    data,
  }
};


export const signUp = (data) => {
  return {
    type: SIGN_UP,
    data,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUSET': {
      console.log('reducer login')
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case 'LOG_IN_SUCCES': {
      console.log('login success');
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'supercoder' },
      };
    }
    case 'LOG_IN_FAILURE': {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    }
    case 'LOG_OUT_REQUSET': {
      return {
        ...state,
        isLoggingOut: true,
        isLoggedIn: false,
      };
    }
    case 'LOG_OUT_SUCCESS': {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    }
    case 'LOG_OUT_FAILURE': {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      }
    }
  }
};

export default reducer;