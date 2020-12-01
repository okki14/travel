//untuk backend
// import React, { Component, createRef } from 'react';
// import Header from '../../components/Header'
// import { Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalFooter} from 'reactstrap';
// import {Link,Redirect} from 'react-router-dom'
// import Axios from 'axios'
// import ButtonUi from './../../components/button'
// import { API_URL,API_URLbe,dateformat } from '../../helpers/idrformat';
// import {connect} from 'react-redux'
// import Swal from 'sweetalert2'
// import {AddcartAction} from './../../redux/Actions/AuthAction'
// class DetailProd extends Component {
//     state = {
//         loading:true,
//         products:{},
//         qty:createRef(),
//         isOpen:false,
//         kelogin:false,
//         photo :[]
//     }

//     componentDidMount(){
//         Axios.get(`${API_URLbe}/product/getproduct/${this.props.match.params.id}`)
//         .then((res)=>{
//             this.setState({products:res.data.dataprod,loading:false,photo:res.data.datafoto})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }

//     onAddToCart=()=>{
//         if(this.props.role==='admin'){
//             alert('jangan beli bro inget admin')
//         }else if(this.props.role==='user'){
//             Axios.post(`${API_URL}/carts`,{
//                 userId:this.props.id,
//                 productId:this.state.products.id,
//                 qty: parseInt(this.state.qty.current.value)
//             }).then(()=>{
//                 Axios.get(`${API_URL}/carts`,{
//                     params:{
//                         userId:this.props.id,
//                         _expand:'product'
//                     }
//                 }).then((res)=>{
//                     this.props.AddcartAction(res.data)
//                     Swal.fire({
//                         title: 'Cart',
//                         text: 'Berhasil masuk ke cart',
//                         imageUrl:this.state.products.gambar,
//                         imageWidth: 400,
//                         imageHeight: 200,
//                         imageAlt: 'Custom image',
//                       })
//                 }).catch((err)=>{
//                     console.log(err)
//                 })
                
//             })
//         }else{
//             this.setState({isOpen:true})
//         }
//     }
     
//     renderfoto=()=>{
//         return this.state.photo.map((val,index)=>{
//             return(
//             <div className="col-md-3" key={index}>
//                 <img src={API_URLbe + val.gambar} style={{objectFit:'cover',objectPosition:'bottom'}} height='100%' width='100%' alt={"foo"}/>
//             </div>

//             )
//         })
//     }

//     onRedirecttoLogin=()=>{
//         this.setState({isOpen:false,kelogin:true})
//     }
//     render() {
//         const {products,isOpen}=this.state
//         if(this.state.loading){
//             return(
//                 <div>Loadingg....</div>
//             )
//         }
//         if(this.state.kelogin){
//             return <Redirect to='/login'/>
//         } 
//         return (
//             <div>
//                 <Modal isOpen={isOpen} toggle={()=>this.setState({isOpen:false})}>
//                     <ModalBody>
//                         Login terlebih dahulu
//                     </ModalBody>
//                     <ModalFooter>
//                         <ButtonUi onClick={this.onRedirecttoLogin}>
//                             Ok
//                         </ButtonUi>
//                     </ModalFooter>
//                 </Modal>
//                 <Header/>
//                 <Breadcrumb className='tranparant mt-5 pt-3 px-2'>
//                     <BreadcrumbItem ><Link className='link-class' to="/">Home</Link></BreadcrumbItem>
//                     <BreadcrumbItem ><Link className='link-class' to="/products">Products</Link></BreadcrumbItem>
//                     <BreadcrumbItem active >{this.state.products.namaproduct}</BreadcrumbItem>
//                 </Breadcrumb>
//                 <div className="pt-3 px-4">
//                     <div style={{width:'100%',height:800,}}>
//                         <img src={API_URLbe + products.banner} style={{objectFit:'cover',objectPosition:'bottom'}} height='100%' width='100%' alt={"foo"}/>
//                     </div>
//                     <div className="row">
//                         {this.renderfoto()}
//                     </div>
//                     <h5 className='mt-2'>Tanggal mulai :{dateformat(products.tanggalmulai)}</h5>
//                     <h5 className='mt-2'>Tanggal berakhir :{dateformat(products.tanggalberakhir)}</h5>
//                     <h2 className='mt-2'>
//                         {products.namaproduct}
//                     </h2>
//                     <label>jumlah tiket</label><br/>
//                     <input type="number" className={'form-control'} placeholder='Quantity' style={{width:200}} ref={this.state.qty}/>
//                     <ButtonUi className='mt-2' onClick={this.onAddToCart}>
//                         Add to cart
//                     </ButtonUi>
//                     <div className=' mt-3 mb-5'>
//                         {products.deskripsi}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// const MapstatetoProps=({Auth})=>{
//     return {
//         ...Auth
//     }
// }
// export default connect(MapstatetoProps,{AddcartAction}) (DetailProd);

















//untuk frontend


import React, { Component, createRef } from 'react';
import Header from '../../components/Header'
import { Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalFooter} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom'
import Axios from 'axios'
import ButtonUi from './../../components/button'
import { API_URL,dateformat } from '../../helpers/idrformat';
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import {AddcartAction} from './../../redux/Actions/AuthAction'
class DetailProd extends Component {
    state = {
        loading:true,
        products:{},
        qty:createRef(),
        isOpen:false,
        kelogin:false
    }

    componentDidMount(){
        Axios.get(`${API_URL}/products/${this.props.match.params.id}`)
        .then((res)=>{
            this.setState({products:res.data,loading:false})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onAddToCart=()=>{
        if(this.props.role==='admin'){
            alert('jangan beli bro inget admin')
        }else if(this.props.role==='user'){
            Axios.post(`${API_URL}/carts`,{
                userId:this.props.id,
                productId:this.state.products.id,
                qty: parseInt(this.state.qty.current.value)
            }).then(()=>{
                Axios.get(`${API_URL}/carts`,{
                    params:{
                        userId:this.props.id,
                        _expand:'product'
                    }
                }).then((res)=>{
                    this.props.AddcartAction(res.data)
                    Swal.fire({
                        title: 'Cart',
                        text: 'Berhasil masuk ke cart',
                        imageUrl:this.state.products.gambar,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      })
                }).catch((err)=>{
                    console.log(err)
                })
                
            })
        }else{
            this.setState({isOpen:true})
        }
    }
     
    onRedirecttoLogin=()=>{
        this.setState({isOpen:false,kelogin:true})
    }
    render() {
        const {products,isOpen}=this.state
        if(this.state.loading){
            return(
                <div>Loadingg....</div>
            )
        }
        if(this.state.kelogin){
            return <Redirect to='/login'/>
        } 
        return (
            <div>
                <Modal isOpen={isOpen} toggle={()=>this.setState({isOpen:false})}>
                    <ModalBody>
                        Login terlebih dahulu
                    </ModalBody>
                    <ModalFooter>
                        <ButtonUi onClick={this.onRedirecttoLogin}>
                            Ok
                        </ButtonUi>
                    </ModalFooter>
                </Modal>
                <Header/>
                <Breadcrumb className='tranparant mt-5 pt-3 px-2'>
                    <BreadcrumbItem ><Link className='link-class' to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem ><Link className='link-class' to="/products">Products</Link></BreadcrumbItem>
                    <BreadcrumbItem active >{this.state.products.namatrip}</BreadcrumbItem>
                </Breadcrumb>
                <div className="pt-3 px-4">
                    <div style={{width:'100%',height:800,}}>
                        <img src={products.gambar} style={{objectFit:'cover',objectPosition:'bottom'}} height='100%' width='100%' alt={"foo"}/>
                    </div>
                    <h5 className='mt-2'>Tanggal mulai :{dateformat(products.tanggalmulai)}</h5>
                    <h5 className='mt-2'>Tanggal berakhir :{dateformat(products.tanggalberakhir)}</h5>
                    <h2 className='mt-2'>
                        {products.namatrip}
                    </h2>
                    <label>jumlah tiket</label><br/>
                    <input type="number" className={'form-control'} placeholder='Quantity' style={{width:200}} ref={this.state.qty}/>
                    <ButtonUi className='mt-2' onClick={this.onAddToCart}>
                        Add to cart
                    </ButtonUi>
                    <div className=' mt-3 mb-5'>
                        {products.deskripsi}
                    </div>
                </div>
            </div>
        );
    }
}
const MapstatetoProps=({Auth})=>{
    return {
        ...Auth
    }
}
export default connect(MapstatetoProps,{AddcartAction}) (DetailProd);