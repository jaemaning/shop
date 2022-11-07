import { useParams } from "react-router-dom"

function Detail(props) {

    let { id } = useParams();
    let dataid = props.shoes[id].id
    let picnum = Number(dataid) + 1;

    return (
        <div className="container">
            <div className="row">
                <div className="pos-center">
                    <img src={"https://codingapple1.github.io/shop/shoes" + picnum + ".jpg"} width="100%" />
                </div>
                <div className="col-md-12 mt-4">
                    <h4 className="pt-5">{props.shoes[dataid].title}</h4>
                    <p>{props.shoes[dataid].content}</p>
                    <p>{props.shoes[dataid].price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div >
    )
}

export default Detail