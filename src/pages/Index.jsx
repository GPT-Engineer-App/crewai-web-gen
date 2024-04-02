import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Input, Button, Image, Textarea, useToast } from "@chakra-ui/react";
import { FaRobot, FaPlay, FaSave } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        title: "Please enter a prompt",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    // TODO: Call API to generate result based on prompt
    // Simulating API call with setTimeout
    setTimeout(() => {
      setResult("This is a sample generated result from crewai.");
      setLoading(false);
    }, 2000);
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    toast({
      title: "Result saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} alignItems="stretch">
        <HStack spacing={4}>
          <FaRobot size={48} />
          <Heading as="h1" size="xl">
            crewai
          </Heading>
        </HStack>
        <Text fontSize="xl">Enter a prompt below and let crewai generate amazing results for you!</Text>
        <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt here..." size="lg" />
        <Button leftIcon={<FaPlay />} colorScheme="blue" size="lg" onClick={handleGenerate} isLoading={loading} loadingText="Generating...">
          Generate
        </Button>
        {result && (
          <VStack spacing={4} alignItems="stretch">
            <Heading as="h2" size="lg">
              Generated Result:
            </Heading>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Text>{result}</Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1709386263934-6f987f874e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGdlbmVyYXRlZCUyMGltYWdlfGVufDB8fHx8MTcxMjAxNzU2NHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
            <Button leftIcon={<FaSave />} colorScheme="green" size="lg" onClick={handleSave}>
              Save Result
            </Button>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
