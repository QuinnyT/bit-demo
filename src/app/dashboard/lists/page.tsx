"use client";

import * as React from 'react';
import Link from 'next/link';
import Photo from '@/components/dashboard/photo'
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { nameMap } from '@/lib/items-list'

export default function Page(): React.JSX.Element {
    const storesList = ["store1", "store2", "store3", "store4"];
    
    const [hoveredCircle, setHoveredCircle] = useState<string>("");

    const handleMouseOver = (id: string): void => {
      setHoveredCircle(id);
    };
  
    const handleMouseOut = (): void => {
      setHoveredCircle("");
    };
  

  return (
    <Stack direction="row">
      <Photo hoveredCircle={hoveredCircle} changeHoveredCircle={handleMouseOver} />
      <Stack spacing={2} justifyContent="center" ml={4}>
        {storesList.map((store: string) => (
          <Link key={store} href={`/dashboard/lists/stores/${store}`} onMouseOver={() => {handleMouseOver(store)}} onMouseOut={() => {handleMouseOut()}}>
             <Button variant="outlined" sx={{ color: 'blue', textDecoration: 'none', backgroundColor: store === hoveredCircle ? '#BFC1D9' : 'none' }} >{nameMap.get(store)}</Button>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
