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
            const paymentData = json.data
            const authorization_url = paymentData.data.authorization_url
            window.open(authorization_url, '_blank', 'noopener,noreferrer')
            
        }else{
            alert('Problem occurs!!')
        }
    }


    let contextData = {
        submitApplication:submitApplication,
    }


    return(
        <AppContext.Provider value={contextData} >
            { children }
        </AppContext.Provider>
    )
}
