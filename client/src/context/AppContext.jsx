import { createContext } from 'react'


const AppContext = createContext()

export default AppContext;


export const AppProvider = ({children}) => {
    const base_url = 'http://localhost:4000/api/v1/'


    let submitApplication = async ( userData )=> {
        const { name, email, nationality, gender } = userData

        let response = await fetch(base_url +'student/submit-application', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ name, email, nationality, gender })
        })

        if(response.status === 201){
            // navigate('/login')
            let paymentRes = await fetch(base_url +'payment', {
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

    let loginUser = async (e)=> {
        e.preventDefault()
        console.log(e.target.email.value, e.target.password.value)

        // let response = await fetch(base_url +'/login/', {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        // })
        // let data = await response.json()

        // if(response.status === 200){
            
        // }else{
        //     alert('Invalid Username of Password')
        // }
    }


    let contextData = {
        submitApplication:submitApplication,
        loginUser:loginUser
    }


    return(
        <AppContext.Provider value={contextData} >
            { children }
        </AppContext.Provider>
    )
}
