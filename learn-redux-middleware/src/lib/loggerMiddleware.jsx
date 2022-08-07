const loggerMiddleware = store => next => action => {
  // middleware 기본구조
  // next(action)을 호출하면 그 다음 처리해야할 미들웨어에게 액션을 넘겨주고, 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다는 것
  // 미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리
  // 만약 미들웨어에서 next를 사용하지 않으면 액션이 리듀서에 전달되지 않음 ::: 액션이 무시되는 것

  console.group(action && action.type); // 액션 타입으로 log 그룹화함
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log('다음 상태', store.getState()); //업데이트 된 상태
  console.groupEnd(); // 그룹끝
};

export default loggerMiddleware;