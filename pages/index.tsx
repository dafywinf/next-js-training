import Button, { Grid, Typography } from '@mui/material';
import TourCard from '../src/components/TourCard'
import cities from '../src/data/cities.json';
import Layout from '../src/components/Layout';

export default function Index() {
  return (
    <>
      <Layout>

        {cities.map((city) => {
          return (
            <>
              <Typography key={city.id}
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}>Top {city.name} Tours</Typography>
              <Grid container spacing={2}>
                {city.tours.map((tour) => {
                  console.log(tour);
                  return (
                    <TourCard key={tour.id} tour={tour}></TourCard>
                  );
                })}
              </Grid>
            </>
          )
        })}

      </Layout>
    </>
  );
}
