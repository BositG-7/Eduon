import React, { FunctionComponent, useState } from "react";
import { Box, Flex, SegmentedControl } from "@mantine/core";
import axios from "axios"; // Import Axios or your preferred HTTP library
import { useAuth } from "modules/auth/context";

import Data from "./companents/data";
import Parol from "./companents/parol";
import { CardPage } from "./companents";

interface ProfilProps {}

const Profil: FunctionComponent<ProfilProps> = () => {
  const { user } = useAuth();
  const [segmentValue, setSegmentValue] = useState("ma’lumotlar"); // Default value
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // State to store the selected image

  const handleSegmentChange = (value: string) => {
    setSegmentValue(value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      
      formData.append("image", selectedImage);

      // Send the image data to your server using Axios or your preferred library
      axios
        .post("/api/upload-profile-image", formData)
        .then((response) => {
          // Handle the response from the server
          console.log("Image uploaded successfully:", response.data);
        })
        .catch((error) => {
          // Handle any errors that occur during the upload
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <>
      <Flex w="100%" justify="start">
        <SegmentedControl
          data={[
            { label: "Ma’lumotlar", value: "ma’lumotlar" },
            { label: "Karta", value: "karta" },
            { label: "Parol", value: "parol" },
          ]}
          value={segmentValue}
          onChange={handleSegmentChange}
          style={{ background: "white" }}
        />
      </Flex>
      <hr />
      <Box>
        {segmentValue === "ma’lumotlar" && (
          <>
            <Data />
            {/* Add the image input and upload button */}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
          </>
        )}
        {segmentValue === "karta" && <CardPage />}
        {segmentValue === "parol" && <Parol />}
      </Box>
    </>
  );
};

export default Profil;
