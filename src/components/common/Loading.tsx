import { HStack, Spinner } from "@chakra-ui/react";

export const Loading: React.FC = () => {
  return (
    <HStack
      width="100%"
      height="500px"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.8s"
        emptyColor="purple.100"
        color="purple.500"
        size="xl"
      />
    </HStack>
  );
};
