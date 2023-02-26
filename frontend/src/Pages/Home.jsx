import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  CardHeader,
  Flex,
  Heading,
  ToastProvider,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export const Home = () => {
  const navi = useNavigate();
  const toast = useToast();
  const [loading,setloading]=useState(false)
  const [floading,setfloading]=useState(false)
  const fetchuser = () => {
    setfloading(true)
    axios.get(`https://users-dzdr.onrender.com/`).then((res) => {
   
      setfloading(false)
      toast({
        title: res.data,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    });
  };

  const dltuser = () => {
    setloading(true)
    axios.delete(`https://users-dzdr.onrender.com/`).then((res) => {
 
      setloading(false)
      toast({
        title: res.data,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    });
  };

  const navigate = () => {
    navi("/userdetails");
  };

  return (
    <div className="home">
  
        <Heading  color="brown">Home Page</Heading>

        <Flex gap="20px"  justifyContent="center" marginTop="30px">
          <Button _hover={{ bg: "pink" }} bg="green" onClick={fetchuser}>
          {floading?"Fetching Data...":"Fetch User"}
          </Button>
          <Button
            _hover={{ bg: "red" }}
            color="white"
            bg="tomato"
            onClick={dltuser}
          >
           {loading?"Deleting...":"Delete"}
          </Button>
          <Button _hover={{ bg: "green" }} bg="pink" onClick={navigate}>
            User Details
          </Button>
        </Flex>
     
    </div>
  );
};
