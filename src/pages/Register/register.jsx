
//project backend
// import React, { Component,createRef} from 'react';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import Foto from './../../assets/Homeregister.webp'
// import {masukthunk,Clearfunc} from './../../redux/Actions/AuthAction'
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom'
// import './register.css'
// import Axios from 'axios';

// const Styles={
//     root:{
//         'input': {
//             '&::placeholder': {
           
//               color: 'blue'
//             },
//         },

//         '& label.Mui-focused': {
//             color: 'white',
//           },
//           '& .MuiInput-underline:after': {
//             borderBottomColor: 'yellow',
//           },
//           '& .MuiOutlinedInput-root': {
    
//             '& fieldset': {
//               borderColor: 'white',
//               color:'white'
//             },
//             '&:hover fieldset': {
//               borderColor: 'white',
//               color:'white'
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: 'white',
//               border:'3px solid ',
//               color:'white'
//             },
//           },
//     }
// }

// class Register extends Component {
//     state = { 
//         username2:createRef(),
//         password2:createRef(),
//         cekpassword:createRef(),
//         email:createRef(),
//         alert:''
//      }

//      OnmasukClick=()=>{
//         const {username2,password2,cekpassword,email}=this.state
//         var username1=username2.current.value
//         var password1=password2.current.value
//         var passwordulang=cekpassword.current.value
//         var email1=email.current.value

//         this.props.masukthunk(username1,password1,passwordulang,email1)
//      }



//     render() { 
//         const { classes } = this.props;
//         if(this.props.Auth.isLogin){
//             return <Redirect to='/'/>
//         }
//         return (
//             <div className='row m-0 p-0'>
//                     <div className='col-md-6 m-0 p-0 d-flex justify-content-center align-items-center' style={{background:' #b68e61'}}>
//                             <div className='login-box d-flex px-4'>
//                             <h1 className='align-self-center'>Register</h1>
//                                 <div className='mt-5'>
//                                     <TextField 
//                                                 inputProps={{ 
//                                                     className:'text-white login-placeholder'
//                                                 }} 
//                                                 InputLabelProps={{
//                                                     className:'text-white'
//                                                 }} 
//                                                 className={classes.root} 
//                                                 inputRef={this.state.username2} 
//                                                 label="Username" 
//                                                 fullWidth='true' 
//                                                 variant="outlined" 
//                                                 size='small' 
//                                             />
//                                 </div>
//                                 <div className='mt-3'>
//                                                 <TextField 
//                                                 inputProps={{ className:'text-white'}} 
//                                                 className={classes.root} 
//                                                 inputRef={this.state.password2} 
//                                                 InputLabelProps={{
//                                                     className:'text-white'
//                                                 }}
//                                                 type="password"  
//                                                 label="password" 
//                                                 fullWidth='true' 
//                                                 variant="outlined" 
//                                                 size='small' 
//                                                 />
//                                 </div>
//                                 <div className='mt-3'>
//                                                 <TextField 
//                                                 inputProps={{ className:'text-white'}} 
//                                                 className={classes.root} 
//                                                 inputRef={this.state.email} 
//                                                 InputLabelProps={{
//                                                     className:'text-white'
//                                                 }}
//                                                 type="email"  
//                                                 label="email" 
//                                                 fullWidth='true' 
//                                                 variant="outlined" 
//                                                 size='small' 
//                                                 />
//                                 </div>
//                                 <div className='mt-3'>
//                                                 <TextField 
//                                                 inputProps={{ className:'text-white'}} 
//                                                 className={classes.root} 
//                                                 inputRef={this.state.cekpassword} 
//                                                 InputLabelProps={{
//                                                     className:'text-white'
//                                                 }}
//                                                 type="password"  
//                                                 label="masukan ulang password" 
//                                                 fullWidth='true' 
//                                                 variant="outlined" 
//                                                 size='small' 
//                                                 />
//                                 </div>
//                                 <div className='mt-3 mb-2'>
//                             {
//                                 this.props.Auth.error?
//                                 <div className='alert alert-danger'>{this.props.Auth.error} <span onClick={this.props.Clearfunc} style={{fontWeight:'bolder',cursor:'pointer',float:'right'}}>x</span></div>
//                                 :
//                                 null
//                             }
//                         </div>
//                                 <div className=' align-self-end '>
//                                     <button disabled={this.props.Auth.isLoading} onClick={this.OnmasukClick} className='mt-1 px-3 py-2 rounded text-white' style={{border:'white 1px solid',backgroundColor:'transparent'}}>
//                                        Sign UP
//                                     </button>
//                                 </div>
//                             </div>

//                     </div>
//                     <div className='col-md-6 m-0 p-0' style={{height:'100vh'}} >
//                         <img width='100%' height='100%' style={{objectFit:'cover'}} src={Foto} alt={'foto'}/>
//                     </div>
//             </div>
//           );
//     }

// }
// const Mapstatetoprops=(state)=>{
//   return{
//       Auth:state.Auth
//   }
// }
 
// export default withStyles(Styles) (connect(Mapstatetoprops,{masukthunk,Clearfunc})(Register));





















//project front end

import React, { Component,createRef} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Foto from './../../assets/Homeregister.webp'
import {masukthunk,Clearfunc} from './../../redux/Actions/AuthAction'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import './register.css'
import Axios from 'axios';

const Styles={
    root:{
        'input': {
            '&::placeholder': {
           
              color: 'blue'
            },
        },

        '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
          '& .MuiOutlinedInput-root': {
    
            '& fieldset': {
              borderColor: 'white',
              color:'white'
            },
            '&:hover fieldset': {
              borderColor: 'white',
              color:'white'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
              border:'3px solid ',
              color:'white'
            },
          },
    }
}

class Register extends Component {
    state = { 
        username2:createRef(),
        password2:createRef(),
        cekpassword:createRef(),
      
        alert:''
     }

     OnmasukClick=()=>{
        const {username2,password2,cekpassword}=this.state
        var username1=username2.current.value
        var password1=password2.current.value
        var passwordulang=cekpassword.current.value
        

        this.props.masukthunk(username1,password1,passwordulang)
     }



    render() { 
        const { classes } = this.props;
        if(this.props.Auth.isLogin){
            return <Redirect to='/'/>
        }
        return (
            <div className='row m-0 p-0'>
                    <div className='col-md-6 m-0 p-0 d-flex justify-content-center align-items-center' style={{background:' #b68e61'}}>
                            <div className='login-box d-flex px-4'>
                            <h1 className='align-self-center'>Register</h1>
                                <div className='mt-5'>
                                    <TextField 
                                                inputProps={{ 
                                                    className:'text-white login-placeholder'
                                                }} 
                                                InputLabelProps={{
                                                    className:'text-white'
                                                }} 
                                                className={classes.root} 
                                                inputRef={this.state.username2} 
                                                label="Username" 
                                                fullWidth='true' 
                                                variant="outlined" 
                                                size='small' 
                                            />
                                </div>
                                <div className='mt-3'>
                                                <TextField 
                                                inputProps={{ className:'text-white'}} 
                                                className={classes.root} 
                                                inputRef={this.state.password2} 
                                                InputLabelProps={{
                                                    className:'text-white'
                                                }}
                                                type="password"  
                                                label="password" 
                                                fullWidth='true' 
                                                variant="outlined" 
                                                size='small' 
                                                />
                                </div>
                                <div className='mt-3'>
                                                <TextField 
                                                inputProps={{ className:'text-white'}} 
                                                className={classes.root} 
                                                inputRef={this.state.cekpassword} 
                                                InputLabelProps={{
                                                    className:'text-white'
                                                }}
                                                type="password"  
                                                label="masukan ulang password" 
                                                fullWidth='true' 
                                                variant="outlined" 
                                                size='small' 
                                                />
                                </div>
                                <div className='mt-3 mb-2'>
                            {
                                this.props.Auth.error?
                                <div className='alert alert-danger'>{this.props.Auth.error} <span onClick={this.props.Clearfunc} style={{fontWeight:'bolder',cursor:'pointer',float:'right'}}>x</span></div>
                                :
                                null
                            }
                        </div>
                                <div className=' align-self-end '>
                                    <button disabled={this.props.Auth.isLoading} onClick={this.OnmasukClick} className='mt-1 px-3 py-2 rounded text-white' style={{border:'white 1px solid',backgroundColor:'transparent'}}>
                                       Sign UP
                                    </button>
                                </div>
                            </div>

                    </div>
                    <div className='col-md-6 m-0 p-0' style={{height:'100vh'}} >
                        <img width='100%' height='100%' style={{objectFit:'cover'}} src={Foto} alt={'foto'}/>
                    </div>
            </div>
          );
    }

}
const Mapstatetoprops=(state)=>{
  return{
      Auth:state.Auth
  }
}
 
export default withStyles(Styles) (connect(Mapstatetoprops,{masukthunk,Clearfunc})(Register));