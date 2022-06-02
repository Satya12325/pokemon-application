import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Component.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCart from "./AddCart";
import Cards from "./Cards";
import ImageCard from "./ImageCard";
import TableCard from "./TableCard";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  overflowY: "scroll",
  height: "80vh",
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

export default function FormInput() {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpens = () => setOpens(true);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpens(false);
  const [ticket, setTicket] = useState([]);
  const [sum, setSum] = useState(0);
  const [name, setName] = useState("")
  const [cname,setCname] = useState("")
  const [km,setKm] = useState(0)
  const [data,setData] = useState([])
  const [image,setImage] = useState("")

  // const NamedChange = (e) => {
  //   setName(e.target.value);

  // }



  const handleTaskCreate = (cart, cost, count) => {
    const payload = {
      id: ticket.length + 1,
      title: cart,
      cost: cost,
      status: false,
    };
    setTicket([...ticket, payload]);

    for (let i = 0; i < 2; i++) {
      handleSum();
    }
   
  };

  const handleData = ()=>{
    if(name === ''|| image === '' || cname === ''){
      alert('Please fill all the detail...');
      return false;
    }
    const payload = {
      id:data.length+1,
      title: name,
      image:image,
      cost:sum,
      code:cname,
      distance:km,
    };
    setData([...data, payload]);
    handleOpens();
    setName("");
    setCname("");
    setKm(0);
    setImage("")
  }

  const handleSum = () => {
    for (let i = 0; i < ticket.length; i++) {
      setSum(sum + ticket[i].cost);
    }
  };

  const deleteItem = (id) => {
    const dele = ticket.filter((e) => e.id !== id);
    setTicket(dele);
    const res = ticket.filter((e) => e.id === id);
    setSum(sum - res[0].cost);
    console.log(res, "res");
    if(sum < 0){
      setSum(0);
    }
  };

  const handleToggle = (id) => {
    const updatedTodos = ticket.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTicket(updatedTodos);
    console.log(ticket);
  };
  console.log(ticket, "ticket");

  const handleImageToggle = (id) => {
    const update = images.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setImages(update);
    console.log(images, "update images");
    const res = images.filter((e) => e.id === id);
    setImage(res[0].img)
    
  };
  console.log(image)

  const [region, setRegion] = useState("");
  let kento = [
    {
      id: 1,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      status: false,
    },
    {
      id: 2,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      status: false,
    },
    {
      id: 3,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      status: false,
    },
  ];
  const [images, setImages] = useState([]);

  let jhoto = [
    {
      id: 1,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",
      status: false,
    },
    {
      id: 2,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png",

      status: false,
    },
    {
      id: 3,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
      status: false,
    },
  ];
  let hoen = [
    {
      id: 1,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png",
      status: false,
    },
    {
      id: 2,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png",
      status: false,
    },
    {
      id: 3,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png",
      status: false,
    },
  ];
  const handleChange = (event) => {
    setRegion(event.target.value);
    console.log(region);
  };

  useEffect(() => {
    if (region === "Hoenn") {
      setImages(hoen);
    } else if (region === "Jhoto") {
      setImages(jhoto);
    } else if (region === "Kanto") {
      setImages(kento);
    } else {
      setImages([]);
    }
  }, [region]);

  // useEffect(() => {
  //   for(let i = 0; i <ticket.length; i++) {
  //       setSum(sum+ticket[i].cost)
  //   }
  // },[ticket])

  if (images.status === true) {
    var Style = {
      border: "3px solid #FE5454",
      width: "80px",
      borderRadius: "50%",
    };
  }
  return (
    <>
      <div>
        <div>
          <div className="container">
            <Button onClick={handleOpen} style={{ background: "white" }}>
              ADD
            </Button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="heading">
                <h2>Fill this Form</h2>
                <p>
                  We'll use this info to dominent the poke <br />
                  world! muhahahhaha
                </p>
              </div>
              <div>
                <TextField
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                  InputLabelProps={{
                    style: { color: "#FE5454" },
                  }}
                  style={{ width: "100%", margin: "20px 0" }}
                  placeholder="Input Text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="filled-basic"
                  label="Code Name"
                  variant="filled"
                  placeholder="Input Text"
                  style={{ width: "100%", margin: "20px 0 60px" }}
                  value={cname}
                  onChange={(e) =>setCname(e.target.value)}
                />
              </div>
              <div>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={km}
                  min={0}
                  max={100}
                  onChange={(e)=>{setKm(e.target.value);console.log(km,"km")}}
                />
                <p>How Far is your pokeymon center? (in KMs)</p>
              </div>
              <div>
                <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    whats your starting region?
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={region}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Kanto"}>Kanto</MenuItem>
                    <MenuItem value={"Jhoto"}>Jhoto</MenuItem>
                    <MenuItem value={"Hoenn"}>Hoenn</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <p>Choose your starter pokeymon</p>
                <div className="imageDiv">
                  {images.map((item) => (
                    <ImageCard
                      key={item.id}
                      image={item.img}
                      hanleImageToggle={() => handleImageToggle(item.id)}
                      status={item.status}
                    />
                  ))}
                </div>
              </div>
              <div className="SwitchDiv">
                <p>what do you want to pack?</p>
                <AddCart onTask={handleTaskCreate} />
              </div>
              <div className="SwitchDiv wrap">
                {ticket.map((e) => (
                  <Cards
                    key={e.id}
                    ticket={e.title}
                    deleteItem={() => deleteItem(e.id)}
                    handleToggle={() => handleToggle(e.id)}
                    status={e.status}
                  />
                ))}
              </div>
              <div className="SwitchDiv">
                <h3>Total Cost</h3>
                <h3>$ {sum}</h3>
              </div>
              <div className="submitButton">
                <Button style={{ background: "#FE5454", color: "white" }}
                onClick={handleData}
                >
                  START MY JURNEY
                </Button>
              </div>
            </Box>
          </Modal>
                 
        </div>
        <div>
        <div className="container">
      <Button onClick={handleOpens}
      style={{ background: "white" }}
      >View Cards</Button>
      <Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        {
                    data.map((item)=>(
                      <TableCard
                      key={item.id}
                      image={item.image}
                      codeNmae={item.code}
                      cost ={item.cost}
                      distance={item.distance}
                      />
                    ))
                  }


        </Box>
      </Modal>
    </div>
                  
                  
       </div>
      </div>
    </>
  );
}
