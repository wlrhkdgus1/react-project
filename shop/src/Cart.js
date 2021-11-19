import React from 'react';
import {Table} from 'react-bootstrap';
import { connect , useSelector, useDispatch } from 'react-redux';

function Cart(props){

  let state = useSelector((state) => state)
  console.log(state.reducer)
  let dispatch = useDispatch();
    return(
        <div>
            <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
    </thead>
    <tbody>
      {
        state.reducer.map((a,i)=>{
          return(
           <tr key={i}>
             <td>{ a.id }</td>
             <td>{ a.name }</td>
             <td>{ a.quan }</td>
             <td>
               <button onClick={()=>{ dispatch({ type : '수량증가' , 데이터 : a.id }) }}>+</button>
               <button onClick={()=>{ dispatch({ type : '수량감소' , 데이터 : a.id }) }}>-</button>
             </td>
           </tr>
          )
        })
      }
    </tbody>
  </Table>
    { props.alert열렸니 === true
    ? <div className="my-alert2">
        <p>지금 구매하시면 신규 할인 20%</p>
        <button onClick={()=>{ props.dispatch({ type : 'alert닫기' }) }}>닫기</button>
      </div>
    : null
    }

        </div> 
    )
}

function 함수명(state){
    return {
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
  }

export default connect(함수명)(Cart)
//export default Cart;