import NavItem from "./NavItem/NavItem";
import { Box } from '@mui/material';

const Navigation = () => (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <NavItem to='/' end>Contacts</NavItem>
        <NavItem to='/new-contact' end>Add new contact</NavItem>
    </Box>
)

export default Navigation;