import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export default function Card({ img, name, distance, date, price }) {
  return (
    <Box w="full">
      <Image
        h="337px"
        w="full"
        borderRadius="12px"
        mb="10px"
        src={`/images/${img}`}
        alt="A house"
        fontSize="16px"
        objectFit="cover" //stops it from stretching (add screenshot of the stretching effect //i have taken the screenshot)
      />
      <Stack spacing="0">
        <Flex justifyContent="space-between">
          <Heading
            as="h2"
            fontWeight="bold"
            color="gray.100"
            fontSize="16px"
            isTruncated
          >
            {name}
          </Heading>
          <Text as="span" color="gray.100" ml="4">
            ${price}/night
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text as="span" color="gray.50">
            {distance} kilometers away
          </Text>
          <Text as="span" color="gray.50">
            {date}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
