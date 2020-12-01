//untuk backend
// import React, { useEffect,useState } from 'react';
// import Home from './pages/home/home'
// import './App.css';
// import ManageAdmin from './pages/Admin/admin'
// import ListProd from './pages/listprod'
// import NotFound from './pages/notfound'
// import {Switch,Route} from 'react-router-dom'
// import Login from './pages/Login/Login'
// import {connect} from 'react-redux'
// import {LoginFunc} from './redux/Actions/AuthAction'
// import {API_URL, API_URLbe} from './helpers/idrformat'
// import Axios from 'axios'
// import Cart from './pages/cart'
// import DetailProd from './pages/detailprod'
// import Loading from './components/loading'
// import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css' 
// import Register from './pages/Register/register'
// import AdminPay from './pages/adminpayment'
// import History from './pages/history'
// toast.configure()
// function App(props) {

//   const [loading,setloading]=useState(true)

//   useEffect(()=>{
//     var id=localStorage.getItem('id')
//     if(id){ 
//           Axios.get(`${API_URLbe}/auth/keeplogin/${id}`)
//           .then((res)=>{
//             props.LoginFunc(res.data.datauser,res.data.cart)
//           }).catch((err)=>{
//             console.log(err);
//           }).finally(()=>{
//             setloading(false)
//           })
//     }else{
//       setloading(false)
//     }
//   },[])
//   if(loading){
//     return(
//       <Loading/>
//     )
//   }

//   const renderProtectedroutesadmin=()=>{
//     if(props.role=='admin'){
//       return(
//         <>
//           <Route exact path='/manageAdmin' component={ManageAdmin}/>
//         </>
//       )
//     }
//   }

//   return (
//     <div >
//       <Switch>
//         <Route exact path='/' component={Home}/>
//         <Route exact path='/login' component={Login}/>
//         <Route exact path='/register' component={Register}/>
//         <Route exact path='/products' component={ListProd}/>
//         <Route path='/products/:id' component={DetailProd}/>
//         <Route exact path='/adminPay' component={AdminPay}/>
//         <Route exact path='/history' component={History}/>
//         <Route path='/cart' component={Cart}/>
//         {renderProtectedroutesadmin()}
//         <Route path='*' component={NotFound} />
//       </Switch>
//     </div>
//   );
// }
// const MapstatetoProps=({Auth})=>{
//   return{
//     username:Auth.username,
//     isLogin:Auth.isLogin,
//     role:Auth.role
   
//   }
// }
// export default connect(MapstatetoProps,{LoginFunc}) (App);













//untuk frontend
import React, { useEffect,useState } from 'react';
import Home from './pages/home/home'
import './App.css';
import ManageAdmin from './pages/Admin/admin'
import ListProd from './pages/listprod'
import NotFound from './pages/notfound'
import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import {connect} from 'react-redux'
import {LoginFunc} from './redux/Actions/AuthAction'
import {API_URL} from './helpers/idrformat'
import Axios from 'axios'
import Cart from './pages/cart'
import DetailProd from './pages/detailprod'
import Loading from './components/loading'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 
import Register from './pages/Register/register'
import AdminPay from './pages/adminpayment'
import History from './pages/history'
toast.configure()
function App(props) {

  const [loading,setloading]=useState(true)

  useEffect(()=>{
    var id=localStorage.getItem('id')
    if(id){ 
      Axios.get(`${API_URL}/users/${id}`)
      .then((res)=>{
        Axios.get(`${API_URL}/carts`,{
          params:{
              userId:res.data.id,
              _expand:'product'
          }
          }).then((res1)=>{
            props.LoginFunc(res.data,res1.data)
          }).catch((err)=>{
              console.log(err);
          }).finally(()=>{
            setloading(false)
          })

      }).catch((err)=>{
        console.log(err)
      })
    }else{
      setloading(false)
    }
  },[])
  if(loading){
    return(
      <Loading/>
    )
  }

  const renderProtectedroutesadmin=()=>{
    if(props.role=='admin'){
      return(
        <>
          <Route exact path='/manageAdmin' component={ManageAdmin}/>
        </>
      )
    }
  }

  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/products' component={ListProd}/>
        <Route path='/products/:id' component={DetailProd}/>
        <Route exact path='/adminPay' component={AdminPay}/>
        <Route exact path='/history' component={History}/>
        <Route path='/cart' component={Cart}/>
        {renderProtectedroutesadmin()}
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}
const MapstatetoProps=({Auth})=>{
  return{
    username:Auth.username,
    isLogin:Auth.isLogin,
    role:Auth.role
   
  }
}
export default connect(MapstatetoProps,{LoginFunc}) (App);