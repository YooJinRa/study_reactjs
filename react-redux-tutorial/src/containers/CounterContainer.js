// 리덕스 스토어와 연동된 컨포넌트를 컨테이너 컨포넌트라 함
// import { bindActionCreators } from 'redux'; //방법3에 활용하는 패키지
//import { connect } from 'react-redux'; // 컨포넌트를 리덕스와 연동
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// 방법 1, 2, 3, 4
// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
// };

// 방법 5
const CounterContainer = () => {
  const number = useSelector( state => state.counter.number );
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return(
    <Counter 
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease} 
    />
  );
};

export default CounterContainer;

// ::: 방법1
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//    dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// ::: 방법2
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// ::: 방법3
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => 
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// ::: 방법4 ::: 액션 생성 함수로 이루어진 객체 형태로 넣어주는 방법
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);