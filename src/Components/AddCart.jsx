import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Slider, { SliderThumb } from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Switch from '@mui/material/Switch';
import "./Component.css"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",

  };

  const PrettoSlider = styled(Slider)({
    color: "#FE5454",
    height: 2,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 14,
      width: 14,
      backgroundColor: "#FE5454",
      border: "1px solid #FE5454",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 0,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#FE5454",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
export default function AddCart({ onTask }){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cart,setCart] = React.useState("")
    const [cost,setCost] = React.useState(0);
    const [count,setCount] = React.useState();
    const handleChange = (event) => {
        setCart(event.target.value);
        console.log(cart);
      
      };
      const [no,setNo] = React.useState(1)

      const label = { inputProps: { 'aria-label': 'Switch demo' } };

      const handleAdd = ()=>{
         
        // setTicket([
        //     ...ticket,
        //     ({
        //      card:cart,
        //       id: count,
        //       status: false,
        //     })
        //   ]);

        //   setCount(count+1);
        //   setCart("")

        onTask(cart,cost,count)
        setCount(count+1);
        handleClose();
        setCart("")
        setCost(0);
      }
      //console.log("tiketcart",ticket)
      const handleSum = ()=>{
        if(cart === "Poke Ball"){
            setCost(no*5)
        }
        else if(cart === "Great Ball"){
            setCost(no*10)
        }
        else if(cart === "Super Potion"){
            setCost(no*10)
        }
        else if(cart === "Hyper Potion"){
            setCost(no*20)
        }
      }

      React.useEffect(()=>{
        handleSum()
      },[no])

     
    



    return (
        <>
         <div>
         <Fab onClick={handleOpen} style={{ background:"#FE5454",color: "white" }}aria-label="add">
        <AddIcon
         />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
                <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    whats your starting region?
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={cart}
                    onChange={handleChange}
                    style={{border: '0px'}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                   
                    <MenuItem value={"Poke Ball"}>Poke Ball</MenuItem>
                    <MenuItem value={"Great Ball"}>Great Ball</MenuItem>
                    <MenuItem value={"Super Potion"}>Super Potion</MenuItem>
                    <MenuItem value={"Hyper Potion"}>Hyper Potion</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                 value={no}
                  min={0}
                  max={10}
                  onChange={(e)=>{setNo(e.target.value);console.log(no)}}
                />
                <p>select quantity</p>
              </div>
              <div className="SwitchDiv">
                  <div>I need a bag for that</div>
                  <div>
                  <Switch {...label} defaultChecked color="warning" />
                  </div>
              </div>
              <div className="SwitchDiv">
                  <div>Cost</div>
                  <div>
                  <h3>$ {cost}</h3>
                  </div>
              </div>
              <div>
                  <Button onClick={handleAdd}>Add to Cart</Button>
              </div>
        </Box>
      </Modal>
    </div>
        </>
    )
}
