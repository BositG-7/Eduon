/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SegmentedControl } from "@mantine/core";
import { Course } from "modules/courses/api";

import CourseEdit from "./components/course-edit";
// eslint-disable-next-line import/order
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
            console.log(couseEditId);

            const { data } = await Course.CouseVideo({ id: +couseEditId });

            setCourseDetailUpload(data.video_ids[0]);
         } catch (error: any) {
            console.log(couseEditId);

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
