import { Box, Button } from "@mui/material";
import Navbar from "../components/appbar/Appbar";
import { useDialog } from "../hooks/useDialog";
import RouterOutlet from "./RouterOutlet";

// The basic structure view that act as the template for all the routes.
function ViewTemplate() {

    const { openConfirmDialog } = useDialog();


    return <>
        <Box className='min-h-screen'>
            <Navbar />
            <RouterOutlet />
        </Box>
    </>
}


export default ViewTemplate;