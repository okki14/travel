import React,{useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {FaUserAstronaut,FaCartArrowDown} from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import {LogOutfunc} from './../redux/Actions/AuthAction'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  warna:{
    background: 'linear-gradient(45deg, #b5b7ab 30%, #606b78 90%)'
  }
}));
const StyledBadge = withStyles(() => ({
  badge: {
    right: -3,
    top: 5,
    color:'white',
    fontSize:11,
    background: 'linear-gradient(45deg, #b5b7ab 30%, #606b78 90%)',
    
    padding: '0 0px',
  },
}))(Badge);

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  console.log(trigger)
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ButtonAppBar({username,isLogin,role,cart,LogOutfunc}) {
  const classes = useStyles();
  const [anchorEl,setopen]=useState(null)
  const [anchorElcart,setopencart]=useState(null)

  const Logoutclik=()=>{
    localStorage.removeItem('id')
    LogOutfunc()
  }
  
  return (
    <div className={classes.root}>
      <HideOnScroll>

          <AppBar className={classes.warna}>
            <Toolbar>
                <NavLink to='/'  style={{textDecoration:'none',color:'white'}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FlightTakeoff/>
                    </IconButton>
                </NavLink> 
              <Typography variant="h6" className={classes.title}>
                JoinTrip
              </Typography>
                  {
                role==='admin'?
                <Link to='/adminPay' style={{textDecoration:'none',color:'white'}}>
                  <Button color="inherit">Manage Transaksi</Button>
                </Link>
                :
                role === 'user'
                ?
                <Link to='/history' style={{textDecoration:'none',color:'white'}}>
                  <Button color="inherit">History</Button>
                </Link>
                :
                null
              }
              {
                role==='admin'?
                <Link to='/manageAdmin' style={{textDecoration:'none',color:'white'}}>
                    <Button color="inherit">Manage Admin</Button>
                </Link>
                :
                role==='user'?
                <>
                  <Button onClick={(e)=>setopencart(e.currentTarget)} color="inherit">
                    <StyledBadge badgeContent={cart.length} color='secondary' >
                      <span style={{fontSize:20}}>
                        <FaCartArrowDown />
                      </span>
                    </StyledBadge>
                  </Button>
                
                  <Menu
                    // id="simple-menu"
                    anchorEl={anchorElcart}
                    // keepMounted
                    open={Boolean(anchorElcart)}
                    onClose={()=>setopencart(null)}
                    // onClose={handleClose}
                    style={{
                      marginTop:35,
                      marginLeft:-100
                    }}
                  >
                    {
                      cart.length?
                      <>
                        {
                          cart.map((val,index)=>{
                            return(
                              <MenuItem key={index} className='p-3'>
                                <div style={{height:50,width:50}} className='mr-3'>
                                  <img src={val.product.gambar} width='100%' height='100%' alt={val.id}/>
                                </div>
                                <div className='mr-3'>
                                  {val.product.namatrip} <br/>
                                  qty :  {val.qty}
                                </div>
                              </MenuItem>
                            )
                          })
                        }
                        <Link to='/cart' style={{textDecoration:'none',color:'#ff8f54',fontWeight:700}}>
                          <div className='d-flex justify-content-center'>Go to Cart</div>
                        </Link>
                      </>
                      :
                      <MenuItem  className='px-4 '>
                        <Link to='/cart' style={{textDecoration:'none',color:'#ff8f54',fontWeight:700}}>
                          <div className='d-flex justify-content-center'>Cart empty</div>
                        </Link>

                      </MenuItem>

                    }
                  </Menu>
                </>
                :
                null
               }
              {
                isLogin?
                <>
                  <Button color="inherit" onClick={(e)=>setopen(e.currentTarget)}><FaUserAstronaut/>&nbsp;{username}</Button>
                  <Menu
                  
                    anchorEl={anchorEl}               
                    open={Boolean(anchorEl)}
                    onClose={()=>setopen(null)}                
                  >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <Link to='/' style={{textDecoration:'none',color:'#ff8f54'}}>
                      <MenuItem onClick={Logoutclik} >Logout</MenuItem>  
                    </Link>
                  </Menu>
                </>
                :
                <Link to='/login' style={{textDecoration:'none',color:'white'}}>
                  <Button color="inherit">Login</Button>
                </Link>
              }
              {
                isLogin?
                  null
                :
              
                <Link to='/register' style={{textDecoration:'none',color:'white'}}>
                  <Button color="inherit">Register</Button>
                </Link>
              
              }
            </Toolbar>
          </AppBar>
      </HideOnScroll>
    </div>
  );
}

const MapstatetoProps=({Auth})=>{
  return {
    ...Auth
  }
}
export default connect(MapstatetoProps,{LogOutfunc})(ButtonAppBar);