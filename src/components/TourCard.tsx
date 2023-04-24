import { ThemeProvider } from "@emotion/react";
import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Icon, Paper, Rating, Typography, createTheme } from "@mui/material";
import Image from "next/image";

const theme = createTheme({
    typography: {
        body1: {
            fontSize: 15,
            fontWeight: "bold"
        },
        body2: {
            fontSize: 11,
            fontStyle: "italic"
        }
    },
});

const TourCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={3}>
                <Paper elevation={3}>
                    <Box padding={0.5}>
                        <Image className="img" height={100} width={200} alt="Niagra" src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-8.jpg" />
                    </Box>
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">Immerse into the Falls</Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTime />
                            <Typography variant="body2" component="p" marginLeft="0.5">5 Hours</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }} marginTop={3}>
                            <Rating readOnly value={4.75} precision={0.5} size="small" />
                            <Typography variant="body2" component="p" marginLeft="0.5">4.5 </Typography>
                            <Typography variant="body2" component="p" marginLeft="14.5">(462 Reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>From $400</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
}

export default TourCard;