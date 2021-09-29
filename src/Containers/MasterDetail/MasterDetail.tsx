import {
  Box,
  Button,
  Collapse,
  createStyles,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Matresses, Mattress } from "../../Globals/contants";
import Titles from "../../Globals/TitleStrings";
import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import theme from "../../theme";

const useStyles = makeStyles(() =>
  createStyles({
    imageContainer: {
      textAlign: "center",
    },
    masterDetailContainer: {
      marginTop: "2.5%",
    },
    subTitle: {
      textTransform: "uppercase",
    },
    titleContainer: {
      textAlign: "left",
    },
    toggleButton: {
      "&.Mui-selected": {
        backgroundColor: "#A6A19B",
        borderRadius: 0,
        color: "white",
        width: "100%",
      },
      backgroundColor: "white",
      borderRadius: 0,
      color: "#787774",
      width: "100%",
    },
    toggleButtonGroup: {
      width: "100%",
    },
  })
);

function MasterDetail(props: { updateCount: (newValue: number) => void }) {
  const classes = useStyles();
  const [currentMettressIndex, setCurrentMettressIndex] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [shouldFade, setShouldFade] = useState<boolean>(true);
  const [shopCount, setShopCount] = useState<number>(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentMattress: Mattress = Matresses[currentMettressIndex];

  useEffect(() => {
    const timer = setTimeout(() => setShouldFade(true), 500);
    return () => clearTimeout(timer);
  }, [currentMettressIndex]);

  useEffect(() => props.updateCount(shopCount), [shopCount]);

  const handleMattressToggle = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number | null
  ): void => {
    if (newAlignment !== null) setCurrentMettressIndex(newAlignment);

    setShouldFade(false);
  };

  const handleOnExisted = (): void => setImageIndex(currentMettressIndex);
  const handleAddToCart = (): void => setShopCount(shopCount + 1);

  return (
    <Grid className={classes.masterDetailContainer} container>
      <Grid item md={6} xs={12}>
        <Box m={1} className={classes.imageContainer}>
          <Collapse in={shouldFade} onExited={handleOnExisted}>
            <img
              src={Matresses[imageIndex].image}
              width={"100%"}
              height={"auto"}
            />
          </Collapse>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <Box px={4}>
          <Typography variant={"h1"} className={classes.titleContainer}>
            {Titles.chooseYourMattress}
          </Typography>
          <Box pt={7} pb={2}>
            <Typography variant={"subtitle1"}>
              {Titles.selectMattressType}
            </Typography>
          </Box>
          <ToggleButtonGroup
            exclusive
            orientation={isMobile ? "vertical" : "horizontal"}
            classes={{ root: classes.toggleButtonGroup }}
            color={"secondary"}
            value={currentMettressIndex}
            onChange={handleMattressToggle}
          >
            {Matresses.map(({ name }: Mattress, index: number) => (
              <ToggleButton
                key={index}
                className={classes.toggleButton}
                value={index}
              >
                <Typography variant={"caption"}>{name}</Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Box display={"flex"} justifyContent={"space-between"} pt={5} pb={8}>
            <Typography variant={"subtitle1"}>
              {`${currentMattress.name} ${Titles.mattress}`}
            </Typography>
            <Typography variant={"subtitle2"}>
              {`${currentMattress.price}`}
            </Typography>
          </Box>
          <Button
            variant={"contained"}
            color={"primary"}
            fullWidth={true}
            disableElevation={true}
            onClick={handleAddToCart}
          >
            <Typography variant={"button"}>{Titles.addToCard}</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MasterDetail;

