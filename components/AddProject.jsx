"use client";
// pages/admin.js

import { useState } from "react";
import {
  Box,
  Input,
  Text,
  Button,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import { postDoc } from "app/api/firebase/functions/post";

const AddProject = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    disc: "",
    img: [{ image: "" }],
    vid: [{ video: "" }],
  });

  const handleInputChange = (key, value, index) => {
    setProjectData((prevData) => ({
      ...prevData,
      [key]: [
        ...prevData[key].slice(0, index),
        { [key.slice(0, -1)]: value },
        ...prevData[key].slice(index + 1),
      ],
    }));
  };

  const handleAddImage = () => {
    setProjectData((prevData) => ({
      ...prevData,
      img: [...prevData.img, { image: "" }],
    }));
  };

  const handleAddVideo = () => {
    setProjectData((prevData) => ({
      ...prevData,
      vid: [...prevData.vid, { video: "" }],
    }));
  };

  const handleSave = () => {
    // Add your logic to save the data
    console.log("Saving data:", projectData);
    postDoc(projectData, "projects");
  };

  return (
    <Center h="60vh">
      <Box
        mt={200}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        width="100%"
      >
        <VStack
          align="center"
          style={{ maxWidth: "95vw", width: "200rem", margin: "auto" }}
          spacing={4}
        >
          <Text fontSize="xl" fontWeight="bold">
            💻 Add Project Data
          </Text>
          <Box w="100%">
            {" "}
            {/* Set width for the entire box */}
            <Text>Project Name:</Text>
            <Input
              variant={"filled"}
              my={3}
              value={projectData.projectName}
              onChange={(e) =>
                setProjectData({ ...projectData, projectName: e.target.value })
              }
              w="100%" // Set width for the input field
            />
          </Box>
          <Box w="100%">
            {" "}
            {/* Set width for the entire box */}
            <Text>Description:</Text>
            <Input
              variant={"filled"}
              my={3}
              value={projectData.disc}
              onChange={(e) =>
                setProjectData({ ...projectData, disc: e.target.value })
              }
              w="100%" // Set width for the input field
            />
          </Box>
          <Box w="100%">
            {" "}
            {/* Set width for the entire box */}
            <Text>📸 Images:</Text>
            {projectData.img.map((image, index) => (
              <Input
                variant={"filled"}
                my={3}
                key={index}
                value={image.image}
                onChange={(e) =>
                  handleInputChange("img", e.target.value, index)
                }
                w="100%" // Set width for the input field
              />
            ))}
            <Button onClick={handleAddImage} w="100%">
              ➕ Add Image
            </Button>{" "}
            {/* Set width for the button */}
          </Box>
          <Box w="100%">
            {" "}
            {/* Set width for the entire box */}
            <Text>🎥 Videos:</Text>
            {projectData.vid.map((video, index) => (
              <Input
                variant={"filled"}
                my={3}
                key={index}
                value={video.video}
                onChange={(e) =>
                  handleInputChange("vid", e.target.value, index)
                }
                w="100%" // Set width for the input field
              />
            ))}
            <Button onClick={handleAddVideo} w="100%">
              ➕ Add Video
            </Button>{" "}
            {/* Set width for the button */}
          </Box>
          <Button onClick={handleSave} w="100%">
            💾 Save
          </Button>{" "}
          {/* Set width for the button */}
        </VStack>
      </Box>
    </Center>
  );
};

export default AddProject;
