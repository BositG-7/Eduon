import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, FileInput, Paper, Textarea, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Api } from "modules/courses";
import { Course } from "modules/courses/api";

interface VideoUploadProps {
   courseDetailUpload: number;
   id: number;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ courseDetailUpload, id }: VideoUploadProps) => {
   const [videoData, setVideoData] = useState({
      title: "",
      course: id,
      video: [],

      description: ""
   });

   const navigete = useNavigate();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setVideoData({
         ...videoData,
         [name]: value
      });
   };

   const handleVideoFileChange = (file: File | null) => {
      if (file) {
         setVideoData({
            ...videoData,
            // @ts-expect-error
            video: file
         });
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         if (!courseDetailUpload) {
            const response = await Api.VideoUpload({
               course: id,
               video: videoData.video,
               title: videoData.title,
               description: videoData.description
            });

            console.log(response);
         } else {
            console.log(videoData);

            const response = await Api.VideoEdit({ id: courseDetailUpload, ...videoData });

            navigete("/dashboard");

            notifications.show({ message: response.statusText, color: "green" });
         }
      } catch (error: any) {
         console.log(error);

         notifications.show({ message: error.statusText, color: "red" });
      }
   };

   useEffect(() => {
      const fetch = async () => {
         try {
            const { data } = await Course.CouseVideoGet({ id: courseDetailUpload });

            // @ts-expect-error
            setVideoData({ description: data.description, title: data.title });
         } catch (error: any) {
            console.log(error);
         }
      };

      fetch();
   }, [courseDetailUpload, id]);

   return (
      <Container w="100%">
         <Paper p="lg" w="80%">
            <h1>Upload Video</h1>
            <form onSubmit={handleSubmit}>
               <TextInput
                  label="Title"
                  name="title"
                  value={videoData.title}
                  onChange={handleInputChange}
                  placeholder="Enter video title"
                  pb="md"
                  required
               />
               <FileInput label="Video File" name="videoFile" onChange={files => handleVideoFileChange(files)} accept="video/*" required />

               <Textarea
                  label="Description"
                  name="description"
                  value={videoData.description}
                  onChange={handleInputChange}
                  placeholder="Enter video description"
                  pb="md"
                  required
               />
               <Button type="submit">{!courseDetailUpload ? "Create Video" : "Upload Video"} </Button>
            </form>
         </Paper>
      </Container>
   );
};

export default VideoUpload;
