import { useState, useEffect } from "react";
import { Box, Container, useEventListener } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";

const Index = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleKeyPress = (event) => {
    const { key } = event;
    const moveSize = 10;
    switch (key) {
      case "w": // up
        setPosition((prev) => ({ ...prev, y: Math.max(prev.y - moveSize, 0) }));
        break;
      case "s": // down
        setPosition((prev) => ({ ...prev, y: Math.min(prev.y + moveSize, 100) }));
        break;
      case "a": // left
        setPosition((prev) => ({ ...prev, x: Math.max(prev.x - moveSize, 0) }));
        break;
      case "d": // right
        setPosition((prev) => ({ ...prev, x: Math.min(prev.x + moveSize, 100) }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="relative" width="100%" height="100%" bg="gray.200">
        <Box position="absolute" left={`${position.x}%`} top={`${position.y}%`} transform="translate(-50%, -50%)">
          <FaCar size="40px" />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
