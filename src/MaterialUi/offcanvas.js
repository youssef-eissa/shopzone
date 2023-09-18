import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CustomizedBadges from '../MaterialUi/cart'
import { useSelector } from 'react-redux';
import './offcanvas.css'
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
    const products = useSelector(state => state.cart.value)
   

const [state, setState] = React.useState({
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [anchor]: open });
};
   

const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >

    <List>
            <div className='container min-vh-100 '>
                <h1 style={{ fontFamily: "Dosis, sans-serif",color:'white',backgroundColor:'black' }} className='col-12 d-flex justify-content-center p-5 rounded mb-5'>Cart</h1>
                {products.array.length>0?products.array.map(product => {
                    return <div key={product.id} className='row cartsCon mb-3 p-3'>
                        <div className='col-4'>
                            <img alt='img' src={`${product.image}`} className='img-fluid' />
                        </div>
                        <div className='col-8 d-flex flex-wrap'>
                            <span className='col-12' style={{ fontFamily: "Dosis, sans-serif" }}>{product.title}</span>
                            <span style={{ fontFamily: "Dosis, sans-serif",fontSize:'20px' }} className='mt-3 col-12'>$ {product.price }</span>
                            <span style={{ fontFamily: "Dosis, sans-serif",fontSize:'20px' }} className='col-12'>x {product.quantity }</span>
                        </div>
                    </div>

                }) : <div className='col-12 d-flex my-auto'>
                        <span style={{ fontFamily: 'Tulpen One, cursive',fontSize:'30px',letterSpacing:'5px' }} className='col-12 d-flex justify-content-center'>No Items Selected Yet</span>
                </div>
                }
                {products.array.length>0&&<div className='row p-2'>
                    <h1 className='col-12'>Subtotal</h1>
                    <h3 className='col-12'>$ {products.allPrice}</h3>
                    <Link onClick={()=>window.scrollTo({behavior:'smooth',top:0})} className='col-12 rounded mt-5 viewcart text-center py-3' to='/shopzone/cart'>View Cart</Link>
                </div>
                }
        </div>
    </List>
    <Divider />
    </Box>
);

return (
    <div>
    {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <span onClick={toggleDrawer(anchor, true)}><CustomizedBadges/></span>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            {list(anchor)}
        </Drawer>
        </React.Fragment>
    ))}
    </div>
);
}