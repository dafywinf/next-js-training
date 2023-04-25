import { ThemeProvider } from "@emotion/react";
import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Icon, Paper, Rating, Typography, createTheme } from "@mui/material";
import Image from "next/image";
import { FC, FunctionComponent, ReactPropTypes } from "react";
import Link from "./Link";

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

type TourType = {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
}

interface TourCardProps {
    tour: TourType
}


//https://dev.to/mconner89/passing-props-in-react-using-typescript-20lm
//Can add to a custom types folder if we want
const TourCard: FC<TourCardProps> = ({ tour }) => {
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={3}>
                <Paper elevation={3}>
                    <Box padding={0.5}>
                        <img className="img" height="150" width="100%" alt="Niagra" src={tour.image} />
                    </Box>
                    <Box paddingX={1}>
                        <Link href={`/tours/${tour.id}`}>
                            <Typography variant="subtitle1" component="h2">{tour.name}</Typography>
                        </Link>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTime />
                            <Typography variant="body2" component="p" marginLeft="0.5">{tour.duration} Hours</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }} marginTop={3}>
                            <Rating readOnly value={tour.rating} precision={0.5} size="small" />
                            <Typography variant="body2" component="p" marginLeft="0.5">{tour.rating} </Typography>
                            <Typography variant="body2" component="p" marginLeft="14.5">({tour.numberOfReviews} Reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>From ${tour.price}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
}

export default TourCard;