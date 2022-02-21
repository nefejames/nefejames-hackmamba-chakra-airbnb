import { Box, Image, Heading, Text } from "@chakra-ui/react";
//add hover & page load amimations (framer)

export default function Card({
  img = "",
  name = "Estreito da Calheta, Madeira",
  distance = "3,619",
  date = "Mar 13 – 20",
  price = "213",
}) {
  return (
    <Box fontSize="16px">
      <Image
        h="337px"
        borderRadius="12px"
        mb="10px"
        src={`/images/${img}`}
        alt="A house"
      />
      <Box>
        <Box>
          <Heading as="h2" fontWeight="bold" color="gray.100">
            {name}
          </Heading>
          <Text as="span" color="gray.100">
            ${price}/night
          </Text>
        </Box>

        <Box>
          <Text as="span" color="gray.50">
            {distance} kilometers away
          </Text>
          <Text as="span" color="gray.50">
            {date}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
