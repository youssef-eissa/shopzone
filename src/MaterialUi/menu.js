import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch,useSelector } from 'react-redux';
import { resetProducts, productPage} from '../features/product';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetProductsApiQuery } from '../features/apiSlice';
import { urlPage, } from '../features/url';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




export default function Menu() {
    const user = useSelector((state) => state.user.value)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [categories, setCategories] = React.useState([])
    const { data, isSuccess } = useGetProductsApiQuery()

    function PageProduct(category) {
            const productsFiltered = data.filter(product => {
                return product.category===category
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        navigate(`/shopzone/${category.trim()}`)
        dispatch(urlPage(category))
        window.scrollTo({behavior:'smooth',top:0})
    }

const [state, setState] = React.useState({
    top: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
        {categories.map((category) => (
        <ListItem onClick={()=>PageProduct(category)} style={{textTransform:'capitalize',}} key={category} disablePadding>
            <ListItemButton>
            <ListItemText primary={category} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        <div className='col-12 d-flex justify-content-center fw-bold align-items-center p-2'>
        <AccountCircleIcon fontSize='large' sx={{ color: 'gray',marginRight:'5px' }} /> {user.name} </div>
<Divider/>
    </Box>
);
    React.useEffect(() => {

        if (isSuccess) {
            const allCategories = data.map(product => {
            return product.category
        })
        const categorySet = new Set(allCategories)
        const categorySetArray=Array.from(categorySet)
        setCategories(categorySetArray)
    }
    }, [isSuccess, data])

return (
    <div>
        <React.Fragment >
        <Button onClick={toggleDrawer('top', true)}><MenuIcon fontSize='large' sx={{color:'black'}}/></Button>
            <Drawer
            anchor='top'
            open={state['top']}
            onClose={toggleDrawer('top', false)}
        >
            {list('top')}
            </Drawer>
        </React.Fragment>
    </div>
);
}
