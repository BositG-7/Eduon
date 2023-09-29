import React, { useState } from "react";
import { Button, Container, FileInput, Paper, Textarea, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Api } from "modules/kurslar";

interface VideoUploadProps {
    courseDetailUpload: number;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ courseDetailUpload }: VideoUploadProps) => {
    const [videoData, setVideoData] = useState({
        title: "",
        course: courseDetailUpload,
        video: null as File | null,
        author: 0,
        description: "",
        duration: "",
        // module:1,
        // file:0,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setVideoData({
            ...videoData,
            [name]: value,
        });
    };

    const handleVideoFileChange = (file: File | null) => {
        if (file) {
            setVideoData({
                ...videoData,
                video: file,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      

            try {
                const response = await Api.VideoUpload(videoData);

                console.log(response);
                
                notifications.show({ message: "Video uploaded successfully", color: "green" });
            } catch (error: any) {
                console.log(videoData);
                
                notifications.show({ message: error.message, color: "red" });
            }
        
    };

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
                    <FileInput
                        label="Video File"
                        name="videoFile"
                        onChange={(files) => handleVideoFileChange(files)}
                        accept="video/*"
                        required
                    />
                    <TextInput
                        label="Author"
                        name="author"
                        value={videoData.author}
                        onChange={handleInputChange}
                        placeholder="Enter author name"
                        pb="md"
                    />
                    <Textarea
                        label="Description"
                        name="description"
                        value={videoData.description}
                        onChange={handleInputChange}
                        placeholder="Enter video description"
                        pb="md"
                        required
                    />
                    <TextInput
                        label="Duration"
                        name="duration"
                        value={videoData.duration}
                        onChange={handleInputChange}
                        placeholder="Enter video duration"
                        pb="md"
                    />
                    <Button type="submit">Upload Video</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default VideoUpload;
