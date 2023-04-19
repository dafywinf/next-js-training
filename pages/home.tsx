import Layout from '../components/layout';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Layout>
      <Button variant="contained" color="primary">
        Hello, Material UI!
      </Button>
      </Layout>
    </div>
  );
}
