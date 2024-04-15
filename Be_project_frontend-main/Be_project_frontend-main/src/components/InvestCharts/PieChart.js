import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import  Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
const data = [
    { value: 1, label: 'A' },
    { value: 14 , label: 'B' },
    { value: 30, label: 'C' },
    { value: 2, label: 'D' },
  ];
  
  const size = {
    width: 800,
    height: 300,
  };
  
  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();

    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

const PChart = () => {

  return (
    <>  
    
    <Container >
            <Paper elevation={4} style={{padding:10 ,marginTop:30}}>
                            <Stack direction="row" spacing={3}>

                <Stack direction="Column" spacing={5} style={{marginTop:100, marginLeft:50}} >
                    <Stack direction="row" spacing={5}>
                        <Typography variant="body1" gutterBottom>
                            Total Investment 
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            15,00,000
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={9}  style={{marginTop:7}}>
                        <Typography variant="body1" gutterBottom>
                        Total Intrest 
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            15,00,000
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={8} style={{marginTop:7}}>
                        <Typography variant="body1" gutterBottom>
                            
                            Maturity Year
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            15,00,000
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={7} style={{marginTop:7}}>
                        <Typography variant="body1" gutterBottom>
                            Maturity Value
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            15,00,000
                        </Typography>
                    </Stack>
                    
                </Stack>
                <PieChart series={[{ data, innerRadius: 90 }]} {...size}>
                    <PieCenterLabel>Center label</PieCenterLabel>
                </PieChart>

                </Stack>

            </Paper>
            
    </Container>
        
    </>
    
    
  )
}

export default PChart
