import { Button } from '@mui/material';
import Layout from '../src/components/Layout';

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
