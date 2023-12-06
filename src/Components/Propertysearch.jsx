import { Button, Container, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const cities = ['Mumbai', 'Hyderabad', 'Bangalore'];
const propertyTypes = ['House', 'Apartment', 'Duplex'];
const priceRanges = ['Under Rs.1cr', 'Rs.1cr - Rs.2cr', 'Rs.2cr - Rs.3cr', 'Rs.3.5cr - Rs5.2cr'];

const PropertySearch = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ borderRadius: '16px', p: 3, backgroundColor: '#D1D5DB' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Select Location
            </Typography>
            <TextField select label="City" fullWidth variant="outlined">
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Available
            </Typography>
            <TextField
              type="date"
              label="Select Move-in Date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Price
            </Typography>
            <TextField select label="Select Price Range" fullWidth variant="outlined">
              {priceRanges.map((range) => (
                <MenuItem key={range} value={range}>
                  {range}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Property
            </Typography>
            <TextField select label="Property Type" fullWidth variant="outlined">
              {propertyTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" color="primary" sx={{ backgroundColor: '#7A7EEE', borderRadius: '50px' }} fullWidth>
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PropertySearch;
