import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
  Flex,
  Button,
  Heading,
  Select,
  Input,
  Image,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import axios from "axios";
import Pagination from "../components/pegination";
import { Link } from "react-router-dom";
export const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [gender,setgender]=useState("")
  const [page,setPage]=useState(1);
 
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    axios.get(`https://users-dzdr.onrender.com/users?gender=${gender}&page=${page}&limit=10`).then((res) => {
      setUser(res.data);
      setLoading(false)
 
    });
  }, [page,gender]);

 
  if (loading) {
    return <div >Loading...</div>
  }
 else if(user.length===0){
    return <div>User Not Available...</div>
 }
  return (
    <div >
        
       <Heading>USERS-TABLE</Heading>
    <Flex gap="20px" width="90%" margin="auto">
    <Select onChange={(e)=>setgender(e.target.value)} width="fit-content" placeholder="filter by gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
       </Select>

       <Input placeholder="Search By 
       Name"/> 

       <Link to="/"><Button bg="tomato" color="white">Go To Home</Button></Link>
    </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Sr no.</Th>
              <Th>photo</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th>gender</Th>
              <Th>phone</Th>
            </Tr>
          </Thead>
          <Tbody>
          {user.map((el, i) => (
       
              <Tr>
                <Td>{i+1}</Td>
                <Td>
                    <Avatar src={el.picture.medium}></Avatar>
                </Td>
                <Td>{el.name.title}. {el.name.first} {el.name.last} </Td>
                <Td>{el.email} </Td>
                <Td>{el.gender} </Td>
                <Td>{el.phone}</Td>
              </Tr>
           
          ))}
           </Tbody>
        </Table>
      
         <Flex justifyContent="center">
            <Button onClick={()=>setPage(page-1)}><ArrowBackIcon/> </Button>
         <Pagination handlePageChange={(page)=>setPage(page)}
      currentPage={page} color="green"
      totalPages={10}
      />

      <Button onClick={()=>setPage(page+1)}><ArrowForwardIcon/></Button>
         </Flex>

        
      </TableContainer>
    </div>
  );
};
