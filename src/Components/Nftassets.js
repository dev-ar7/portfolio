import React from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaArrowRight } from "react-icons/fa";
import '../Static/Css/Nfts.css';


function Assets() {

    // const onClickDetails = nft => {
    //     navigate('/nft-collections/nft/details');
    //     setSelectedNft(nft);
    //     console.log(nft);
    //     return(
    //         <NftDetail nft={selectedNft} />
    //     );
    // }


    return (
        <>  
            <h1 className="heading">Top NFTs Collection</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} columns={12}>
                    <Grid item xs={6}>
                    <Card  sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Collection Name: High Woman
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Description: 75*100 Pixel Art Woman Smoking Joint. That Woman, Who's High On Joint. Discover the best items in this collection.
                                        </Typography><br/>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Base Price: 0.005 ETH Only
                                        </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton href="https://opensea.io/collection/high-woman" className="icnbtn" >
                                            <FaArrowRight  />
                                        </IconButton>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 250 }}
                                        image='https://lh3.googleusercontent.com/Pc3taGrndT4cxq-cVy715OtrO0xftyKFVTCiHUIt-sl3sruqOM52Ig3Jjtw5yWebp5sV3-Lo5KO-cYH0RmS5FlzVHca3IirSwrdn7vI=s0'
                                    />
                                </Card>
                                <Card  sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Collection Name: That-Rich-Kid
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Description: That Kid who become a millionaire by selling NFTs.
                                        </Typography><br/>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Price:  ETH
                                        </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton href="https://opensea.io/collection/that-rich-kid" className="icnbtn" >
                                            <FaArrowRight />
                                        </IconButton>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 250 }}
                                        image='https://lh3.googleusercontent.com/uvOIVeQRIXUXsfY5hDbhk2iDmcfCfL2KH5vUM-U6Y6ORT9DgRjPX4HqxHzzm849UrVg0rLRtqzdvFjB_wqxy0ylNdZiqIlzl2F_kfW0=s168'
                                    />
                                </Card>
                    </Grid>
                    <Grid className="animation" item xs={6}>
                    <Card  sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Collection Name: Smart Penguins
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Description: A unique Pixel-Penguins in 40x40 format! Limited Edition, only 31 item in collection.
                                        </Typography><br/>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Price:  ETH
                                        </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton href="https://opensea.io/collection/smart-penguins" className="icnbtn" >
                                            <FaArrowRight />
                                        </IconButton>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 250 }}
                                        image='https://lh3.googleusercontent.com/eGShXi4RaSSZLw68Nf1YntoTqEOIX4plff-nAMXBu9yVP79IkwRq2o2F8XU6pl_VbinNdhGdJSy_Vxe7QaeQD_aApwGW7dc-uz_P=w600'
                                    />
                                </Card>
                                <Card  sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Collection Name: The Forest Book
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Description: A unique Forest Animals Collection in Pixel Art format! It's a hand designed collection of some popular forest animals. Hope, everyone will love it.
                                        </Typography><br/>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Price:  ETH
                                        </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton href="https://opensea.io/collection/the-forest-book" className="icnbtn" >
                                            <FaArrowRight />
                                        </IconButton>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 250 }}
                                        image='https://lh3.googleusercontent.com/kFAAP63tSf0RHAdMrPHbAIzPSWBbdgdIRCXAAzhN5RXi5SEDtjIeg4hr5WbAz8xIw-B1AG95pAUsaN7BtsctrQg8MKZrgzU8UefNXQ=w600'
                                    />
                                </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


export default Assets;