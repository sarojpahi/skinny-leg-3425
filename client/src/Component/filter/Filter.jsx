import React from 'react';
import { Text , Box , Input, Radio, Stack, RadioGroup, Icon, Checkbox } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

const Filter = () => {
  return (
    <>
    <div>
       <Text color="#4F585E" fontSize="26px" fontWeight="610">Filter</Text>
    </div>

    <Box mt={8} mb={9} >
     <Text color="#4F585E" fontSize="18px" fontWeight="700">Category</Text>

      <RadioGroup mt={4}>
     <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text color="gray.500" >Mega Clearance Sale</Text>
        <Radio size="lg" colorScheme="green" />
        </Box>
     </RadioGroup>

    </Box>

    <hr />

    <Box mt={8} mb={8} >
        <Text color="#4F585E" fontSize="18px" fontWeight="700" >Sub Category</Text>
    </Box>

    <hr />

    <Box mt={8} mb={8}>
        <Text color="#4F585E" fontSize="18px" fontWeight="700"> Brand</Text>
    </Box>

    <Box position="relative" alignItems="center" >
        <Input placeholder='Search' paddingLeft={3} height="46px" borderColor="#4F585E" focusBorderColor='green.800' />
         <Icon as={SearchIcon} position="absolute" right={3} top={3} ></Icon> 
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>&me</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(2)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>2baconil</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(1)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>3 Ply</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(2)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>3m Avagard</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(1)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>A2 Lite</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(1)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    <Box mt={4} mb={4}>
        <Text color="#10847E" fontWeight="bold">View More</Text>
    </Box>

    <hr />

    <Box mt={5}>
        <Text color="#4F585E" fontWeight="bold" fontSize="17px">Price</Text>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
            <Text>100 - 199</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
            <Text fontSize="15px">(2)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
    </Box>

    </>
  )
}

export default Filter