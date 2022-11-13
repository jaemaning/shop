import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

    let shoppinglist = useSelector((state) => { return state.shoppinglist })

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
                        shoppinglist.map(function (a, i) {
                            return (
                                <tr>
                                    <td>{i}</td>
                                    <td>{shoppinglist[i].name}</td>
                                    <td>{shoppinglist[i].count}</td>
                                    <td>@mdo</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}


export default Cart