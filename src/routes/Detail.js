import { useContext, useEffect, useState } from "react";
import { Tab } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { Context1 } from "./../App.js"
import { cartAdd } from './../store/shoppinglistSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import { addOne, minusOne, deleteOne } from './../store/shoppinglistSlice.js'

function Detail(props) {

    let shoppinglist = useSelector((state) => { return state.shoppinglist });
    let dispatch = useDispatch();

    let { 재고 } = useContext(Context1);

    let [alertdiv, setAlertdiv] = useState(true);
    let [alertbox, setAlertbox] = useState(false);
    let [alertcart, setAlertcart] = useState(false);
    let [btn, setBtn] = useState(['상세정보', '리뷰', 'Q&A']);
    let [modalonbtn, setModalonbtn] = useState(0);

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
    let dataid = props.shoes[id].id;
    let picnum = Number(dataid) + 1;
    let [fade2, setFade2] = useState('');
    let cartCheckId = 0;



    useEffect(() => {
        setFade2('end')
    }, [])

    useEffect(() => {
        let storageData = JSON.parse(localStorage.getItem('watched'));
        storageData.push(id);
        const set = new Set(storageData);
        storageData = [...set]
        localStorage.setItem('watched', JSON.stringify(storageData));
    }, [])

    return (
        <div className={"container start " + fade2}>
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
                    <button className="btn btn-danger orderBtn" onClick={() => {
                        let cartCheck = shoppinglist.some((value, i) => {
                            if (value.id == props.shoes[dataid].id) {
                                return cartCheckId = i, true;
                            } else { return false }
                        })
                        cartCheck == true ? dispatch(addOne(cartCheckId)) : dispatch(cartAdd({ id: props.shoes[dataid].id, name: props.shoes[dataid].title, count: 1 }));
                        alert('Cart에 담겼습니다.')
                    }}>주문하기</button>
                </div>
            </div>
            <div>
                {
                    btn.map(function (a, i) {
                        return (
                            <button key={a} className="modalBtn" onClick={() => {
                                setModalonbtn(i)
                            }}>{a}</button>
                        )
                    })
                }
            </div>
            <Tabcontent shoes={props.shoes} modalonbtn={modalonbtn} />
        </div >
    )
}

function Tabcontent(props) {

    let { 재고 } = useContext(Context1)

    let [fade, setFade] = useState('')

    useEffect(() => {
        let a = setTimeout(() => { setFade('end') }, 10)
        return () => {
            setFade('')
            clearTimeout(a)
        }
    }, [props.modalonbtn])

    return (<div className={"start " + fade}>
        {[<div>{props.shoes[0].title}</div>, <div>리뷰</div>, <div>Q&A</div>][props.modalonbtn]}
    </div>)
}

export default Detail