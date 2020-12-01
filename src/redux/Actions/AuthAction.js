//untuk backend
// import Axios from 'axios'
// import { API_URLbe,API_URL} from '../../helpers/idrformat'
// import {ADDCART} from './../type'
// export const LoginFunc=(user,cart)=>{
//     return{
//         type:'LOGIN',
//         payload:user,
//         cart:cart
//     }
// }

// export const Clearfunc=()=>{
//     return{
//         type:'CLEAR'
//     }
// }

// export const AddcartAction=(cart)=>{
//     return{
//         type:ADDCART,
//         cart:cart
//     }
// }
// export const LogOutfunc=()=>{
//     return{
//         type:'LOGOUT'
//     }
// }
// export const masukthunk=(username1,password1,passwordulang,email)=>{
//     return (dispatch)=>{
//         dispatch({type:'LOADING'})
//         if(password1===passwordulang){
//             Axios.post(`${API_URLbe}/auth/register`,{
//                 username:username1,
//                 password:password1,
//                 email
//             }).then((res)=>{
//                 localStorage.setItem('id',res.data.id)
//                 dispatch({type:'LOGIN',payload:res.data,cart:[]})
//             }).catch((err)=>{
//                 console.log(err);
//             })

//         }else{
//             dispatch({type:'Error',payload:'password tidak sama'})
//         }
        
//          }
// }
// export const LoginThunk=(username,password)=>{
//     return (dispatch)=>{
//         dispatch({type:'LOADING'})
//         Axios.post(`${API_URLbe}/auth/login`,{
//             username:username,
//             password:password
//         })
//         .then((res)=>{
//             localStorage.setItem('id',res.data.datauser.id)
//             dispatch({type:'LOGIN',payload:res.data.datauser,cart:res.data.cart})//backend
//         }).catch((err)=>{
//             dispatch({type:'Error',payload:err.response.data.message})
//         })
        
//     }
// }
















//untuk frontend

import Axios from 'axios'
import { API_URL } from '../../helpers/idrformat'
import {ADDCART} from './../type'
export const LoginFunc=(user,cart)=>{
    return{
        type:'LOGIN',
        payload:user,
        cart:cart
    }
}

export const Clearfunc=()=>{
    return{
        type:'CLEAR'
    }
}

export const AddcartAction=(cart)=>{
    return{
        type:ADDCART,
        cart:cart
    }
}
export const LogOutfunc=()=>{
    return{
        type:'LOGOUT'
    }
}
export const masukthunk=(username1,password1,passwordulang)=>{
    return (dispatch)=>{
        dispatch({type:'LOADING'})
        
        Axios.get(`${API_URL}/users`,{
            params:{
                username:username1            
            }
            }).then((res)=>{
            if(res.data.length){
                dispatch({type:'Error',payload:'username sudah ada'})
            }else{
                if(password1===passwordulang){
                    Axios.post(`${API_URL}/users`,{
                        username:username1,
                        password:password1,
                        role:'user'
                    
                 }).then((res1)=>{
                     
                    localStorage.setItem('id',res1.data.id)
                    dispatch({type:'LOGIN',payload:res1.data,cart:[]})
                 }).catch((err)=>{
                     console.log(err);
                 })
                    
                }else{
                    dispatch({type:'Error',payload:'password tidak sama'})

                }
            }
            }).catch((err)=>{
            dispatch({type:'Error',payload:'servernya error bro'})
            })
         }
}
export const LoginThunk=(username,password)=>{
    return (dispatch)=>{
        dispatch({type:'LOADING'})
        Axios.get(`${API_URL}/users`,{
            params:{
                username:username,
                password:password
            }
        }).then((res)=>{
            if(res.data.length){
                Axios.get(`${API_URL}/carts`,{
                    params:{
                        userId:res.data[0].id,
                        _expand:'product'
                    }
                }).then((res1)=>{
                    localStorage.setItem('id',res.data[0].id)
                    dispatch({type:'LOGIN',payload:res.data[0],cart:res1.data})
                }).catch((err)=>{
                    dispatch({type:'Error',payload:'servernya error bro'})
                })

            }else{
                dispatch({type:'Error',payload:'salah input password/username'})
            }
        }).catch((err)=>{
            dispatch({type:'Error',payload:'servernya error bro'})
        })
    }
}