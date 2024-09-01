"use client";
import {
  Button,
  Input,
  Center,
  Box,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { deleteDocument } from "app/api/firebase/functions/post";
import { StatsGrid } from "components/Index";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditCampaign({ handleSave, campaignData }) {
  const toast = useToast();
  const notify = (msg, status) => {
    toast({
      title: msg,
      status: status,
      isClosable: true,
    });
  };

  const navigate = useRouter();

  const [campaign, setCampaign] = useState(campaignData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleSave(campaign);
  };

  const handleDelete = async () => {
    const res = await deleteDocument("campaigns", campaignData.id);
    if (res === true) {
      notify("Deleted", "warning");
      navigate.push("/administrator/CampaignManagement");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prevCampaign) => ({
      ...prevCampaign,
      [name]: value,
    }));
  };

  const formattedDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-GB", options);
  };

  return (
    <Box mx="auto" width="90%">
      <StatsGrid />
      <Center h="60vh">
        <Box p={4} borderWidth="1px" borderRadius="lg" bg="white">
          <HStack spacing={4}>
            <Tag size="lg" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>Id: {campaign.id}</TagLabel>
            </Tag>
            <Tag size="lg" variant="subtle" colorScheme="green">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>From: {formattedDate(campaign.startDate)}</TagLabel>
            </Tag>
            <Tag size="lg" variant="subtle" colorScheme="orange">
              <TagLeftIcon boxSize="12px" />
              <TagLabel>To: {formattedDate(campaign.endDate)}</TagLabel>
            </Tag>
          </HStack>
          <Input
            mt={5}
            variant="filled"
            size="md"
            placeholder="Name"
            name="name"
            value={campaign.name}
            onChange={handleChange}
            isDisabled={!isEditing}
          />
          <Textarea
            mt={5}
            variant="filled"
            size="md"
            placeholder="Description"
            name="description"
            value={campaign.description}
            onChange={handleChange}
            isDisabled={!isEditing}
          />
          <Input
            mt={5}
            variant="filled"
            size="md"
            placeholder="Current Amount"
            name="Current Amount"
            value={campaign.currentAmount}
            isDisabled={true}
          />
          {/* Add other fields as needed */}
          {isEditing ? (
            <Button mt={4} onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button mt={4} onClick={handleEditClick}>
              Edit
            </Button>
          )}
          <Button
            ml={10}
            colorScheme={"red"}
            onDoubleClick={handleDelete}
            onClick={() => notify("Click 2 times to delete", "info")}
            mt={4}
          >
            Delete
          </Button>
        </Box>
      </Center>
    </Box>
  );
}
