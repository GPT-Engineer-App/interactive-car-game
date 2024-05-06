import { useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

const Index = () => {
  const [position, setPosition] = useState({ y: 50 });
  const gravity = 3;
  const flapHeight = 20;

  const handleKeyPress = (event) => {
    if (event.key === " ") {
      setPosition((prev) => ({ y: Math.max(prev.y - flapHeight, 0) }));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({ y: Math.min(prev.y + gravity, 100) }));
    }, 100);

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="100%" height="100%" bg="gray.200">
        <Box position="absolute" left="50%" top={`${position.y}%`} transform="translate(-50%, -50%)">
          <FaTwitter size="40px" />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
