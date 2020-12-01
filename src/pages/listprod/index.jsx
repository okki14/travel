//untuk backend
// import React, { Component } from 'react';
// import Header from '../../components/Header'
// import './listprod.css'
// import { 
//     Breadcrumb, BreadcrumbItem, Card, CardImg} from 'reactstrap';
// import Axios from 'axios'
// import {Link} from 'react-router-dom'
// import { API_URL,API_URLbe,priceFormatter } from '../../helpers/idrformat';
// import {ButtonUi} from './../../components'

// class ListProd extends Component {
//     state = {
//         Products:[]
//       }
//     //klau pakai filter front-end
//     componentDidMount(){
//         Axios.get(`${API_URLbe}/product/getproduct`)
//         .then((res)=>{
//             var filter=res.data.filter((val)=>val.tanggalmulai>=new Date().getTime())
//             this.setState({Products:res.data})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
//     //klau pakai filter front-end//

//     //klau pakai filter back-end
//     // componentDidMount(){
//     //     Axios.get(`${API_URL}/products`
//     //     ,{
//     //             params:{
//     //                 tanggalmulai_gte:new Date().getTime()
//     //             }
//     //         }
            
//     //     )
//     //     .then((res)=>{
//     //         this.setState({Products:res.data})//kalau filter back-end
//     //     }).catch((err)=>{
//     //         console.log(err)
//     //     })
//     // }

//     //klau pakai filter back-end//

//     onProductInputChange= (e)=>{
//         Axios.get(`${API_URL}/products`
//         ,{
//             params:{
//                 tanggalmulai_gte:new Date().getTime(),
//                 namatrip_like:e.target.value
//             }
//         }
//         ).then((res)=>{
//             this.setState({Products:res.data})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }

//     renderCard=()=>{
//         return this.state.Products.map((val)=>{
//             return(
//                 <div key={val.id} className="col-md-3 px-2 py-2">
//                     <Link to={'/products/'+val.id}>
//                         <Card className='kartu card-rounded'>
//                             <CardImg top width="100%" className='card-rounded' height={200} src={API_URLbe + val.banner} alt="Card image cap" />
//                             <div class="overlay card-rounded">
//                                 <div class="text">
//                                     <div>
//                                         {val.namproduct}
//                                     </div>
//                                     <div>
//                                         {priceFormatter(val.harga)}
//                                     </div>
//                                 </div>
//                             </div>
//                         </Card>
//                     </Link>
//                 </div>
//             )
//         })
//     }
//     render() { 
//         return (
//             <div>
//                 <Header/>
//                 <div className='pt-3 px-4'>
//                     <Breadcrumb className='tranparant mt-5 px-2'>
//                         <BreadcrumbItem ><Link className='link-class ' to="/">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>Products</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div style={{width:'30%'}}>
//                         <div style={{display:'flex'}}>
//                             <input type="text" onChange={this.onProductInputChange} className='form-control mr-2' placeholder='nama product' />
//                             <ButtonUi>Filter</ButtonUi>
//                         </div>
//                     </div>
//                 <div className="row p-0 m-0">
//                         {this.renderCard()}
//                     </div>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default ListProd;




















//untuk frontend

import React, { Component } from 'react';
import Header from '../../components/Header'
import './listprod.css'
import { 
    Breadcrumb, BreadcrumbItem, Card, CardImg} from 'reactstrap';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { API_URL,priceFormatter } from '../../helpers/idrformat';
import {ButtonUi} from './../../components'

class ListProd extends Component {
    state = {
        Products:[]
      }
    //klau pakai filter front-end
    componentDidMount(){
        Axios.get(`${API_URL}/products`)
        .then((res)=>{
            var filter=res.data.filter((val)=>val.tanggalmulai>=new Date().getTime())
            this.setState({Products:filter})
        }).catch((err)=>{
            console.log(err)
        })
    }
    //klau pakai filter front-end//

    //klau pakai filter back-end
    // componentDidMount(){
    //     Axios.get(`${API_URL}/products`
    //     ,{
    //             params:{
    //                 tanggalmulai_gte:new Date().getTime()
    //             }
    //         }
            
    //     )
    //     .then((res)=>{
    //         this.setState({Products:res.data})//kalau filter back-end
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // //klau pakai filter back-end//

    onProductInputChange= (e)=>{
        Axios.get(`${API_URL}/products`
        ,{
            params:{
                tanggalmulai_gte:new Date().getTime(),
                namatrip_like:e.target.value
            }
        }
        ).then((res)=>{
            this.setState({Products:res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderCard=()=>{
        return this.state.Products.map((val)=>{
            return(
                <div key={val.id} className="col-md-3 px-2 py-2">
                    <Link to={'/products/'+val.id}>
                        <Card className='kartu card-rounded'>
                            <CardImg top width="100%" className='card-rounded' height={200} src={val.gambar} alt="Card image cap" />
                            <div class="overlay card-rounded">
                                <div class="text">
                                    <div>
                                        {val.namatrip}
                                    </div>
                                    <div>
                                        {priceFormatter(val.harga)}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            )
        })
    }
    render() { 
        return (
            <div>
                <Header/>
                <div className='pt-3 px-4'>
                    <Breadcrumb className='tranparant mt-5 px-2'>
                        <BreadcrumbItem ><Link className='link-class ' to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Products</BreadcrumbItem>
                    </Breadcrumb>
                    <div style={{width:'30%'}}>
                        <div style={{display:'flex'}}>
                            <input type="text" onChange={this.onProductInputChange} className='form-control mr-2' placeholder='nama product' />
                            <ButtonUi>Filter</ButtonUi>
                        </div>
                    </div>
                <div className="row p-0 m-0">
                        {this.renderCard()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ListProd;