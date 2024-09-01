"use client";
// pages/founder.js
// pages/founder.js

import { useState } from "react";
import { Box, Input, Text, Button, VStack } from "@chakra-ui/react";
import { postDoc } from "app/api/firebase/functions/post";

const AddFounder = () => {
  const [founderData, setFounderData] = useState({
    authorName: "",
    bio: "",
    img: [{ image: "" }],
    vid: [{ video: "" }],
  });

  const handleInputChange = (key, value, index) => {
    setFounderData((prevData) => ({
      ...prevData,
      [key]: [
        ...prevData[key].slice(0, index),
        { [key.slice(0, -1)]: value },
        ...prevData[key].slice(index + 1),
      ],
    }));
  };

  const handleAddImage = () => {
    setFounderData((prevData) => ({
      ...prevData,
      img: [...prevData.img, { image: "" }],
    }));
  };

  const handleAddVideo = () => {
    setFounderData((prevData) => ({
      ...prevData,
      vid: [...prevData.vid, { video: "" }],
    }));
  };

  const handleSave = () => {
    // Add your logic to save the founder data
    console.log("Saving founder data:", founderData);
    postDoc(founderData, "founders");
  };

  return (
    <VStack
      align="center"
      style={{ maxWidth: "95vw", width: "200rem", margin: "auto" }}
      spacing={4}
    >
      <Text fontSize="xl" fontWeight="bold">
        Founder Profile
      </Text>
      <Box w="100%">
        {" "}
        {/* Set width for the entire box */}
        <Text>Founder Name:</Text>
        <Input
          variant={"filled"}
          my={3}
          value={founderData.authorName}
          onChange={(e) =>
            setFounderData({ ...founderData, authorName: e.target.value })
          }
          w="100%" // Set width for the input field
        />
      </Box>
      <Box w="100%">
        {" "}
        {/* Set width for the entire box */}
        <Text>Bio:</Text>
        <Input
          variant={"filled"}
          my={3}
          value={founderData.bio}
          onChange={(e) =>
            setFounderData({ ...founderData, bio: e.target.value })
          }
          w="100%" // Set width for the input field
        />
      </Box>
      <Box w="100%">
        {" "}
        {/* Set width for the entire box */}
        <Text>Images:</Text>
        {founderData.img.map((image, index) => (
          <Input
            variant={"filled"}
            my={3}
            key={index}
            value={image.image}
            onChange={(e) => handleInputChange("img", e.target.value, index)}
            w="100%" // Set width for the input field
          />
        ))}
        <Button onClick={handleAddImage}>Add Image</Button>
      </Box>
      <Box w="100%">
        {" "}
        {/* Set width for the entire box */}
        <Text>Videos:</Text>
        {founderData.vid.map((video, index) => (
          <Input
            variant={"filled"}
            my={3}
            key={index}
            value={video.video}
            onChange={(e) => handleInputChange("vid", e.target.value, index)}
            w="100%" // Set width for the input field
          />
        ))}
        <Button onClick={handleAddVideo}>Add Video</Button>
      </Box>
      <Button onClick={handleSave} w="100%">
        Save
      </Button>{" "}
      {/* Set width for the button */}
    </VStack>
  );
};
export default AddFounder;
