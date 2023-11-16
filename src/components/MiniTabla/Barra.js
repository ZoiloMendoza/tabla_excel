import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MiniTabla from './MiniTabla';
import Grid from '@mui/material/Grid';
import NombreFilas from './NombreFilas';
const steps = [
  {
    label: "De la Semana 34 a la 36",
    description: (
      <Grid container spacing={1} columns={13}>
        <Grid item xs={5}>
        
          <MiniTabla semana={"Semana 34"} color={"DAF7A6"} extra={true}/>
        </Grid>
        <Grid item xs={4}>
        <MiniTabla semana={"Semana 35"} color={"D2B4DE"} />
        </Grid>
        <Grid item xs={4}>
        <MiniTabla semana={"Semana 36"} color={"DAF7A6"} />
        </Grid>
      </Grid>
    ),
  },
  {
    label: "Semana 34",
    description: <MiniTabla />,
  },
  {
    label: "Semana 35",
    description: <MiniTabla />,
  },
];

export default function Barra() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width:'100%', flexGrow: 1 }}>
      <Box sx={{width: '98%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}