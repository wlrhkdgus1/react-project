import React, {useState} from 'react';
import { useHistory } from 'react-router';



function Detail(){

  let history = useHistory(); // 방문기록 등을 저장해놓는 object

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button><br/><br/>
            <button className="btn btn-danger" onClick={()=>{
              history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
  }

  export default Detail;