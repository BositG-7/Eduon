import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, FileInput, Paper, Textarea, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Api } from "modules/courses";
import { Course } from "modules/courses/api";

interface VideoUploadProps {
   courseDetailUpload: number;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ courseDetailUpload }: VideoUploadProps) => {
   const [videoData, setVideoData] = useState({
      title: "",
      course: courseDetailUpload,
      video: [],

      description: "",
      duration: ""
      // module:1,
      // file:0,
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
         const response = await Api.VideoUpload(videoData);

         navigete("/dashboard");

         notifications.show({ message: response.statusText, color: "green" });
      } catch (error: any) {
         console.log(error);

         notifications.show({ message: error.statusText, color: "red" });
      }
   };

   useEffect(() => {
      const fetch = async () => {
         try {
            const { data } = await Course.CouseVideo({ id: +courseDetailUpload });

            console.log(data);
            // @ts-ignore
            setCourseData({ description: data.description, name: data.name, image: data.image });
         } catch (error: any) {
            console.log();

            console.log(error);
         }
      };

      fetch();
   }, [courseDetailUpload]);

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
               <Button type="submit">Upload Video</Button>
            </form>
         </Paper>
      </Container>
   );
};

export default VideoUpload;
