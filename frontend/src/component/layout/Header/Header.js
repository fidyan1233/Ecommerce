import React, { useState } from "react";
import "../../../styles/header.css"
import Search from "../../../images/search-icon.png";
import User from "../../../images/user.png";
import Logo from "../../../images/logo.png";
import Cart from "../../../images/shopping-cart.png";
import Filter from "../../../images/filter.png"
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Rating from '@mui/material/Rating';







const categories = [
    "T-shirt",
    "Shirt",
    "Hoodie"
]





const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        background: '#050505',
        minWidth: 400,
        color: "#fff",
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '10px',
        },
        backdrop: {
            background: "blur(50)"
        },

        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: "#8c8c8c"
            },
        },
    },
}));

export default function Header({ price, setPrice, category, setCategory, ratings, setRatings }) {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }

        // Blur the input field to dismiss the keyboard
        e.target.blur();
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchSubmitHandler(e);
        }
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }
    // Get the current path
    const currentPath = window.location.pathname;

    // Check if the current path is "/products"
    const isProductsRoute = currentPath === '/products';

    return (
        <>
            <div className="header">

                <div className="logo">
                    <Link to=""><img src={Logo} alt="" /></Link>
                </div>
                <div className="search-bar row ">

                    <form onSubmit={searchSubmitHandler} className="w-100">
                        <div className="col-12">

                            <input
                                type="text"
                                placeholder="Search your Product...."
                                value={keyword}
                                onChange={handleInputChange}
                                onKeyUp={handleKeyPress} // Call searchSubmitHandler on Enter key press
                            />
                        </div>
                    </form>

                    <img className="search-icon py-2" src={Search} alt="" />
                    {/* <img className="search-icon" src={Search} alt="" /> */}
                    {/* Render the button only if the current route is "/products" */}
                    {isProductsRoute && (
                        <img
                            className="filter-icon py-2"
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}

                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            src={Filter}
                            alt=""
                        />
                    )}
                    <StyledMenu
                        id="demo-customized-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className="filter"
                    >
                        <div className="filter-box">
                            <h3 className="text-center">Filter Porducts</h3>
                            <Typography>Price:</Typography>
                            <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                min={0}
                                max={700}
                            />
                            <Typography>Categories:</Typography>
                            <ul className="category-box">
                                {
                                    categories.map((category) => (
                                        <li className="category-link" key={category} onClick={() => setCategory(category)}>
                                            {category}
                                        </li>
                                    ))
                                }
                            </ul>
                            <fieldset>

                                <Typography>Ratings Above</Typography>
                                <Slider
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);

                                    }}
                                    aria-labelledby="continuous-slider"
                                    min={0}
                                    max={5}
                                />
                                <Rating
                                    name="simple-controlled"
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);

                                    }}
                                />
                            </fieldset>
                        </div>
                    </StyledMenu>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to=""><img src={Search} alt="" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={Cart} alt="" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={User} alt="" /></Link>
                        </li>

                    </ul>
                </div>

            </div >


        </>
    );
}



