
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const styles = {
  node: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    margin: '0 20px',
    padding: 10,
    border: '2px solid #040332',
    borderRadius: 5,
    backgroundColor: '#F0EFFB',
  },
  line: {
    // stroke: '#1976d2',
    stroke: '#040332',
    strokeWidth: 2,
    markerEnd: 'url(#arrowhead)',
  },
  text: {
    fontSize: '10px',
    fill: '#040332',
  },
};

function FlowChart(): React.JSX.Element {
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
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Paper elevation={3} style={styles.node}>
              <Typography variant="body1"> Store 1</Typography>
            </Paper>
            <svg height="70" width="100">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  fill='#040332'
                >
                  <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
              </defs>
              <line x1="0" y1="40" x2="100" y2="40" style={styles.line} />
              <text x="50" y="15" textAnchor="middle" fill="#1976d2" style={styles.text}>
                2024/07/01 
              </text>
              <text x="50" y="30" textAnchor="middle" fill="#1976d2" style={styles.text}>
                14:12
              </text>
            </svg>
            <Paper elevation={3} style={styles.node}>
              <Typography variant="body1">Store 2</Typography>
            </Paper>
            <svg height="70" width="100">
              <line x1="0" y1="40" x2="100" y2="40" style={styles.line} />
              <text x="50" y="15" textAnchor="middle" fill="#1976d2" style={styles.text}>
                2024/07/02
              </text>
              <text x="50" y="30" textAnchor="middle" fill="#1976d2" style={styles.text}>
                9:10
              </text>
            </svg>
            <Paper elevation={3} style={styles.node}>
              <Typography variant="body1">Store 3</Typography>
            </Paper>
            <svg height="70" width="100">
              <line x1="0" y1="40" x2="100" y2="40" style={styles.line} />
              <text x="50" y="15" textAnchor="middle" fill="#1976d2" style={styles.text}>
                2024/07/02
              </text>
              <text x="50" y="30" textAnchor="middle" fill="#1976d2" style={styles.text}>
                20:21
              </text>
            </svg>
            <Paper elevation={3} style={styles.node}>
              <Typography variant="body1">Store 1</Typography>
            </Paper>
          </Box>
        </Box>
    );
};

export default FlowChart;
