import { CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const Team = () => {
    return (
        <Container>
            <Typography sx={{ marginTop: '50px', marginBottom: '80px' }} gutterBottom variant="h4" component="div">
                Our Dedicated Team
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={2} sm={4} md={3}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto', border: "1px solid black", borderRadius: 100 }}
                        image="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/team_01.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Staephan HUMBERT
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Junior Developer
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={2} sm={4} md={3}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto', border: "1px solid black", borderRadius: 100 }}
                        image="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/team_02.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jack KOWALSKI
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Junior Developer
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={2} sm={4} md={3}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto', border: "1px solid black", borderRadius: 100 }}
                        image="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/team_03.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Leo SIMON
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Junior Developer
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid xs={2} sm={4} md={3}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto', border: "1px solid black", borderRadius: 100 }}
                        image="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/team_04.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ishrafil
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Junior Developer
                        </Typography>
                    </CardContent>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Team;