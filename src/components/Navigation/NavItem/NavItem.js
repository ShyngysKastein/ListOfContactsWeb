import React from "react";
import { Button } from "@mui/material";
import { NavLink } from 'react-router-dom';

const activeStyles = {
    color: 'gold',
}

const NavItem = ({ to, end, children }) => {
    return (
        <Button
            sx={{ color: "#fff" }}
            style={({ isActive }) => isActive ? activeStyles : undefined}
            component={NavLink}
            to={to}
            end={end}
        >
            {children}
        </Button>
    )
}

export default NavItem;