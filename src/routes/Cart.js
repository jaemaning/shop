import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addOne, minusOne } from './../store/shoppinglistSlice.js'
import { changeName } from './../store.js'

function Cart() {

    let shoppinglist = useSelector((state) => { return state.shoppinglist });
    let stock = useSelector((state) => { return state.stock });
    let user = useSelector((state) => { return state.user });
    let dispatch = useDispatch();

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppinglist.map((a, i) =>
                            <tr>
                                <td>{i}</td>
                                <td>{shoppinglist[i].name}</td>
                                <td>{shoppinglist[i].count}</td>
                                <td><button className='changebtn' onClick={() => {
                                    dispatch(addOne(i))
                                }}>+</button> <button className='changebtn' onClick={() => {
                                    dispatch(minusOne(i))
                                }}>-</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <h4>{user.age}</h4>
            <button onClick={() => { dispatch(changeName()) }}>asd</button>
        </div>

    )
}


export default Cart