import { Box, Button, ButtonGroup, Collapse, createStyles, Fade, Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Titles from '../../Globals/TitleStrings'
import React, { useEffect, useState } from 'react';
import bed1 from '../../bed1.jpeg';
import bed2 from '../../bed2.jpeg';
import bed3 from '../../bed3.jpeg';
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import theme from '../../theme';

const useStyles = makeStyles(() =>
    createStyles({
        masterDetailContainer: {
            marginTop: "2.5%"
        },
        titleContainer: {
            textAlign: "left"
        },
        subTitle: {
            textTransform: "uppercase"
        },
        imageContainer: {
            textAlign: "center"
        },
        toggleButton: {
            "&.Mui-selected": {
                width: "100%",
                backgroundColor: "#A6A19B",
                color: "white",
                borderRadius: 0,
            },
            width: "100%",
            backgroundColor: "white",
            borderRadius: 0,
            color: "#787774"
        },
        toggleButtonGroup: {
            width: "100%",
        }

    }));

function MasterDetail(props:{updateCount: (newValue: number)=>void}) {
    const [currentMattress, setCurrentMattress] = useState<number>(0);
    const [shouldFade, setShouldFade] = useState<boolean>(true);
    const [shopCount, setShopCount] = useState<number>(0);


    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
          setShouldFade(true);
        }, 500);
        return () => clearTimeout(timer);
      }, [currentMattress]);

      useEffect(() => {
       props.updateCount(shopCount);
      }, [shopCount]);

    const classes = useStyles();

    const MatterssImage: Record<string, any> = {
        "0": bed2,
        "1": bed1,
        "2": bed3
    };

    const MatressNames = [
        "Saatva Classic",
        "Loom & Leaf",
        "Zenhaven"
    ];

    const MatressPrices = [
        "$2,299",
        "$1,299",
        "$3,299"
    ];

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const handleMattressToggle = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: number | null
    ) => {
        if (newAlignment !== null)
            setCurrentMattress(newAlignment);

        setShouldFade(false);
    };

    const GetSrcForImg = () => {
        const stringNumber: string = `${currentMattress}`;  
        return MatterssImage[stringNumber];
    };

    return (
        <Grid className={classes.masterDetailContainer} container>
            <Grid item md={6} xs={12}>
                <Box m={1} className={classes.imageContainer}>
                    <Collapse  in={shouldFade}>
                        <img src={GetSrcForImg()} width={"100%"} height={"auto"} />
                    </Collapse >
                </Box>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box px={4}>
                    <Typography variant={"h1"} className={classes.titleContainer}>
                        {Titles.ChooseYourMattress}
                    </Typography>
                    <Box pt={7} pb={2}>
                        <Typography variant={"subtitle1"}>
                            {Titles.SelectMattressType}
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        exclusive
                        orientation={isMobile ? "vertical" : "horizontal"}
                        classes={{ root: classes.toggleButtonGroup }}
                        color={"secondary"}
                        value={currentMattress}
                        onChange={handleMattressToggle}
                    >
                        {MatressNames.map((mattressName: string, index: number) =>
                            <ToggleButton
                                className={classes.toggleButton}
                                value={index}
                            >
                                <Typography
                                    variant={"caption"}
                                >
                                    {mattressName}
                                </Typography>
                            </ToggleButton>)}
                    </ToggleButtonGroup>
                    <Box 
                    display={"flex"} 
                    justifyContent={"space-between"} 
                    pt={5} 
                    pb={8}>
                        <Typography 
                        variant={"subtitle1"}
                        >
                            {`${MatressNames[currentMattress]} ${Titles.Mattress}`}
                        </Typography>
                        <Typography 
                        variant={"subtitle2"}
                        >
                            {`${MatressPrices[currentMattress]}`}
                        </Typography>
                    </Box>
                    <Button 
                    variant={"contained"} 
                    color={"primary"} 
                    fullWidth={true} 
                    disableElevation={true}
                    onClick={()=>setShopCount(shopCount+1)}
                    >
                        <Typography 
                        variant={"button"}
                        >
                            {Titles.AddToCard}
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default MasterDetail;