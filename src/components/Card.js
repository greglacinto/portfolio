import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <Box bg='white' rounded='md'>
        {/* <VStack > */}
          <Image rounded='md' src={imageSrc}/>
          <Box px={4}>
          <Heading as="h3" my={4} color='#080808'>{title}</Heading>
          <Text 
            color='#8f8d8d'>
              {description}
          </Text>
          </Box>
          <HStack px={4} py={4}>
            <Text color='#080808'> See more </Text>
            <FontAwesomeIcon icon={faArrowRight} color='#080808' size="1x" />
          </HStack>
        {/* </VStack> */}
      </Box>
    </>
  );
};

export default Card;
