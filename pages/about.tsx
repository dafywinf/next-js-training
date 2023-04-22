import { Button } from '@mui/material';
import Link from '../src/components/Link';


export default function About() {
  return (
    <div>
      <Button variant="contained" color="primary">
        About Page
      </Button>

      <Link href="/index">Index</Link>
      <Link href="/site-map">Site Map</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
