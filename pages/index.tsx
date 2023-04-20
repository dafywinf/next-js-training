import Layout from '../src/components/Layout';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Layout>
      <Button variant="contained" color="primary">
        Index
      </Button>
      </Layout>
    </div>
  );
}
