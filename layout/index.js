import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box maxW="1400px" mx="auto">
      {children}
    </Box>
  );
}
