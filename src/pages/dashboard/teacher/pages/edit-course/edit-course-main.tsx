import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SegmentedControl } from "@mantine/core";
import { Course } from "modules/courses/api";

import CourseEdit from "./components/course-edit";
import VideoUpload from "./components/video-upload";

import "react-quill/dist/quill.snow.css";

const CourseEditMain: React.FC = () => {
   const [segmentValue, setSegmentValue] = useState("course");
   const [courseDetailUpload, setCourseDetailUpload] = useState<number>(0);
   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };
   const { couseEditId = 0 } = useParams();

   useEffect(() => {
      const fetch = async () => {
         try {
            const { data } = await Course.CouseVideo({ id: +couseEditId });

            setCourseDetailUpload(data.video_ids[0]);
         } catch (error: any) {
            console.log(error);
         }
      };

      fetch();
   }, []);

   return (
      <>
         <SegmentedControl
            w={400}
            color="blue"
            size="md"
            data={[
               { label: "Edit Course", value: "course" },
               { label: "Edit Video", value: "video" }
            ]}
            value={segmentValue}
            onChange={handleSegmentChange}
            style={{ background: "white" }}
         />

         {segmentValue === "course" && <CourseEdit id={+couseEditId} />}
         {segmentValue === "video" && <VideoUpload courseDetailUpload={courseDetailUpload} />}
      </>
   );
};

export default CourseEditMain;
