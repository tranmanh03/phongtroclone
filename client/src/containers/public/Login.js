import { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { apiRegister } from "../../services/auth";
import { useLocation } from "react-router-dom";

import * as actions from '../../store/actions'
import {useDispatch} from 'react-redux'

function Login() {
    const location = useLocation()
    const dispatch = useDispatch()
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [payload, setPayload] = useState({
        phone: "",
        name: "",
        password: ""
    })
    console.log(payload);
    
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    const handleSubmit = async () => {
        dispatch(actions.register(payload))
    }
    
    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl mb-3">{isRegister ? "Đăng kí tài khoản" : "Đăng nhập"}</h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister && <InputForm label={'Họ tên'} value={payload.name} setValue={setPayload} type="name"/>}
                <InputForm label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type="phone"/>
                <InputForm label={'MẬT KHẨU'} value={payload.password} setValue={setPayload} type="password"/>
                <Button 
                    text={isRegister ? "Đăng kí" : "Đăng nhập"}
                    textColor={'text-white'}
                    bgColor={'bg-secondary1'}
                    fullWidth
                    onClick={handleSubmit}
                />
            </div>
            <div className="mt-7 flex items-center justify-between">
                {isRegister 
                ? 
                <small>Bạn đã có tài khoản? <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => {setIsRegister(false)}}
                >
                    Đăng nhập ngay</span>   
                </small> 
                : 
                <>
                    <small className="text-[blue] hover:text-[red] cursor-pointer">Bạn quên mật khẩu?</small>
                    <small className="text-[blue] hover:text-[red] cursor-pointer" onClick={() => {setIsRegister(true)}}>Tạo tài khoản mới</small>
                </>
                }
            </div>
        </div>
    )
}

export default Login;