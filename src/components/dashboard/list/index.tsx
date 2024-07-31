// Material Dashboard 2 React components
"use client";
import * as React from 'react';
// import DashboardLayout from "components/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "components/Navbars/DashboardNavbar";
// import MDInput from "components/MDComponents/MDInput";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from 'next/link';


interface Item {
  image: string;
  name: string;
  name_ch: string;
}

function List({ items } : { items: Item[] }): React.JSX.Element {
  return (
    <>
        <Container sx={{ display: 'flex', gap: 2}}>
            <TextField fullWidth variant="outlined" />
            <Button variant="contained">search</Button>
        </Container>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 5, mr: 5}}>
            {items.map((item) => (
              <Link href={`/dashboard/lists/items/${item.name}`} key={item.name}>
                <Box>
                  <Box height={200} width={200} sx={{ p: 2, borderRadius: 2, border: '1px solid grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <img width={180} height={180} src={item.image} alt='item.name'/>
                  </Box>
                  <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
                    {item.name_ch}
                  </Typography>
                </Box>
              </Link>
            ))}
          
        </Container>
    </>
  );
}

export default List;
