import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addOne, minusOne, deleteOne } from './../store/shoppinglistSlice.js'
import { changeName } from './../store.js'
import { useState } from 'react';

// Cart 웹 페이지


// let Child = memo(function () {
//     console.log('재렌더링됨')
//     return <div>자식임</div>
// })

// memo : props 가 변할 때만 재렌더링 해줌

function Cart() {

    let shoppinglist = useSelector((state) => { return state.shoppinglist });
    let stock = useSelector((state) => { return state.stock });
    let user = useSelector((state) => { return state.user });
    let dispatch = useDispatch();
    let [count, setCount] = useState(0)

    //let result = useMemo(()=>{return usememoFunction(),[state]})
    // useMemo : 컴포넌트 로드시 1회만 실행하고 싶은 코드가 있으면 거기 담으면 됩니다. 

    return (
        <div>
            <Table striped bordered hover className='cart-table'>
                <thead>
                    <tr>
                        <th> </th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppinglist.map((a, i) =>
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{shoppinglist[i].name}</td>
                                <td>{shoppinglist[i].count}</td>
                                <td>
                                    <button className='changebtn' onClick={() => {
                                        dispatch(addOne(i))
                                    }}>+</button>
                                    <button className='changebtn' onClick={() => {
                                        shoppinglist[i].count !== 1 ? dispatch(minusOne(i)) : dispatch(deleteOne(i))
                                    }}>-</button>
                                    <button className='changebtn' onClick={() => {
                                        dispatch(deleteOne(i))
                                    }}>X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div >

    )
}


export default Cart