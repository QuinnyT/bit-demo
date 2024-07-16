"use client";

import React from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const styles = {
    svgBackground: {
      backgroundImage: 'url(/assets/kjz.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    circle: {
      transition: 'r 0.3s ease',
      cursor: 'pointer', 
    },
  };

interface PhotoProps {
  hoveredCircle: string;
  changeHoveredCircle: (id: string) => void;
}

function Photo( {hoveredCircle, changeHoveredCircle}: PhotoProps ):React.JSX.Element {
    // const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);

    // const handleMouseOver = (id: string): void => {
    //   setHoveredCircle(id);
    // };
  
    // const handleMouseOut = (): void => {
    //   setHoveredCircle(null);
    // };
    const router = useRouter();
  
    const getRadius = (id: string): number => {
      return hoveredCircle === id ? 14 : 8.30608;
    };

    async function navToStore(): Promise<void> {
      try {
        router.push(`/dashboard/lists/stores/${hoveredCircle}`);
      } catch (error) {
        console.error('Failed to navigate:', error);
      }
    }

    return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, position: 'relative' }}>
            <svg width="524" height="380" style={styles.svgBackground} fill='rgba(0, 0, 0, 0)'>
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="10"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>
                <circle cx="281.148" cy="197.279" r={getRadius('store1')} stroke="#AE0000" strokeWidth="5" style={styles.circle} onMouseOver={() => {changeHoveredCircle('store1')}}  onMouseOut={() => {changeHoveredCircle("")}} onClick={() => navToStore()}/>
                <circle cx="169.295" cy="105.902" r={getRadius('store2')} stroke="#AE0000" strokeWidth="5" style={styles.circle} onMouseOver={() => {changeHoveredCircle('store2')}}  onMouseOut={() => {changeHoveredCircle("")}} onClick={() => navToStore()}/>
                <circle cx="108.629" cy="161.638" r={getRadius('store3')} stroke="#AE0000" strokeWidth="5" style={styles.circle} onMouseOver={() => {changeHoveredCircle('store3')}}  onMouseOut={() => {changeHoveredCircle("")}} onClick={() => navToStore()}/>
                <circle cx="399.825" cy="290.174" r={getRadius('store4')} stroke="#AE0000" strokeWidth="5" style={styles.circle} onMouseOver={() => {changeHoveredCircle('store4')}}  onMouseOut={() => {changeHoveredCircle("")}} onClick={() => navToStore()}/>
            </svg>
            </Box>
        </Box>
      );
};

export default Photo;
