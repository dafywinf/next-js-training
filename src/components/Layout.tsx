import React from "react";
import Box from '@mui/material/Box';
import Navbar from "./Navbar";

export default function Layout(params: { children: any }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Box sx={{ p: 2 }}>
                {params.children}
            </Box>
        </Box>
    );
}