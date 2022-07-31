// root reducer setting : module이 여러개 있을 때 하나로 합치기
// 파일 이름을 index.js 로 설정하면 나중에 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있음 ::: import rootReducer from './modules';

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
