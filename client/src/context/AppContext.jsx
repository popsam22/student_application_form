import axios from 'axios';
import { createContext } from 'react'
import { useState } from 'react';


const AppContext = createContext()

export default AppContext;


export const AppProvider = ({children}) => {
    const base_url = 'http://localhost:4000/api/v1/'
    const api = axios.create({
        baseURL: base_url,
        headers: {
          "Content-type": "application/json"
        }
      });

    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)

    const submitApplication = async ( userData )=> {
        const { name, email, nationality, gender } = userData

        const response = await fetch(base_url +'student/submit-application', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ name, email, nationality, gender })
        })

        if(response.status === 201){
            // navigate('/login')
            const paymentRes = await fetch(base_url +'admin/payment', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({ name, email, amount:2000 })
            })
            const json = await paymentRes.json()
            console.log(paymentRes)
            const paymentData = json.data
            const authorization_url = paymentData.data.authorization_url
            window.open(authorization_url, "_self")
            
        }else{
            alert('Problem occurs!!')
        }
    }


    const loginUser = async (e)=> {
        // setIsLogin(true)
        // e.preventDefault()
        try {
            const response = await api.post(
                'admin/admin-login',
                {
                    email: e.target.email.value,
                    password: e.target.password.value
                }
            );
            console.log(response.data);
          } catch (err) {
            const errorMessage = "Error: " + err.message;
            // console.log(errorMessage);
            console.log(errorMessage);
          } finally {
            setIsLogin(false);
          }
          
    }

    const registerSchool = async (e) => {
        setIsRegister(true)
        e.preventDefault()
        const schoolData = new FormData()
        schoolData.append('email', e.target.email.value)
        schoolData.append('school_name', e.target.school_name.value)
        schoolData.append('schol_address', e.target.school_address.value)
        schoolData.append('phone_number', e.target.phone_number.value)
        schoolData.append('form_template', e.target.form_template.value)

        console.log(schoolData)
        try {
            const response = await api.post(
                'admin/register-school',
                schoolData,
                { "Content-Type": "multipart/form-data" }
            );
            console.log(response.data);
          } catch (err) {
            const errorMessage = "Error: " + err.message;
            // console.log(errorMessage);
            console.log(errorMessage);
          } finally {
            setIsRegister(false);
          }
    }


    const contextData = {
        submitApplication,
        loginUser,
        isLogin, 
        registerSchool,
    }


    return(
        <AppContext.Provider value={contextData} >
            { children }
        </AppContext.Provider>
    )
}
