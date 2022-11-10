import { useEffect, useState } from "react";
import { Tab } from "react-bootstrap";
import { useParams } from "react-router-dom"



function Detail(props) {

    let [alertdiv, setAlertdiv] = useState(true)
    let [alertbox, setAlertbox] = useState(false)
    let [btn, setBtn] = useState(['상세정보', '리뷰', 'Q&A'])
    let [modalonbtn, setModalonbtn] = useState(0)

    useEffect(() => {
        let a = setTimeout(() => { setAlertdiv(false) }, 2000)

        return () => {
            clearTimeout(a)
        }
    }, [])

    let onChange = (e) => {
        console.log(Number(e.target.value))
        let ab = Number(e.target.value)
        if (isNaN(ab) == true) {
            alert('숫자만 입력하세요')
            setAlertbox(true)
        }
    }



    let { id } = useParams();
    let dataid = props.shoes[id].id
    let picnum = Number(dataid) + 1;

    return (
        <div className="container">
            {
                alertdiv == true ?
                    <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div>
                    : null
            }
            <div className="row">
                <div className="pos-center">
                    <img src={"https://codingapple1.github.io/shop/shoes" + picnum + ".jpg"} width="100%" />
                </div>
                {
                    alertbox == true
                        ? <div className="alertRedbox">경고 : 숫자만 입력하세요.</div>
                        : null
                }
                <div className="col-md-12 mt-4">
                    <input className="inputbox" placeholder="숫자만 입력하세요" onChange={onChange}></input>
                    <h4 className="pt-5">{props.shoes[dataid].title}</h4>
                    <p>{props.shoes[dataid].content}</p>
                    <p>{props.shoes[dataid].price} 원</p>
                    <button className="btn btn-danger orderBtn">주문하기</button>
                </div>
            </div>
            <div>
                {
                    btn.map(function (a, i) {
                        return (
                            <button className="modalBtn" onClick={() => {
                                setModalonbtn(i)
                            }}>{a}</button>
                        )
                    })
                }
            </div>
            <Tabcontent modalonbtn={modalonbtn} />

        </div >
    )
}

function Tabcontent(props) {
    if (props.modalonbtn == 0) {
        return <div>상세정보</div>
    } else if (props.modalonbtn == 1) {
        return <div>리뷰</div>
    } else if (props.modalonbtn == 2) {
        return <div>Q&A</div>
    }
}

export default Detail