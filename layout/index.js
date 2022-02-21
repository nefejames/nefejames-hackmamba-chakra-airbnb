import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box maxW="1500px" p={["6"]} mx="auto" my="10">
      {children}
    </Box>
  );
}
