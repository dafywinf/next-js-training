import Button, { Grid, Typography } from '@mui/material';
import TourCard from '../src/components/TourCard'
import cities from '../src/data/cities.json';
import Layout from '../src/components/Layout';

export default function Index() {
  return (
    <>
      <Layout>
      <Grid container spacing={2}>
        {cities.map((city) => {
          return (
            <>
              <Typography key={city.id} variant="h4" component="h2" marginTop={5} marginBottom={3}>{city.name} Tours</Typography>
              {city.tours.map((tour) => {
                return (
                  <TourCard key={tour.id}></TourCard>
                );
              })}
            </>
          )
        })}
      </Grid>
      </Layout>
    </>
  );
}
