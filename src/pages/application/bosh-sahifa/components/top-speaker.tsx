import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopSpeaker } from "modules/kurslar/api";

import "../style/top-speaker.scss";

export interface Results {
   speaker: string;
   job: string;
   company: string;
   view: string;
   image: string;
   value: string;
}

export interface TopSpeakerss {
   count: number;
   next: null;
   previous: null;
   results: Results[];
}

function TopSpeakers() {
   const [speaker, setSpeaker] = useState<TopSpeakerss[]>();
   const navigete = useNavigate();

   useEffect(() => {
      const fetch = async () => {
         const { data }: any = await TopSpeaker();

         setSpeaker(data.results);
      };

      fetch();
   }, []);

   // if (!pricing) return null;
   return (
      <section className="top-speaker" data-aos="fade-down">
         <div className="title">
            <h1>
               <span>70 dan</span> ortiq mutaxasislar
            </h1>
         </div>
         <div className="boxes">
            {/* @ts-ignore */}
            {speaker?.slice(0, 4).map(item => (
               // @ts-ignore
               <div className="box" key={item.id}>
                  {/* @ts-ignore */}
                  <img src={item.image} alt="avatar" />
                  <div className="text">
                     {/* @ts-ignore */}
                     <h3>{item.job}</h3>
                     {/* @ts-ignore */}
                     <h2>{item.company}</h2>
                     <div className="view">
                        <i className="fa-solid fa-star" />

                        <h2>
                           4,6{/* @ts-ignore */}
                           <span> ({item.view})</span>
                        </h2>
                     </div>
                     <button>Profil</button>
                  </div>
               </div>
            ))}
         </div>
         <div className="link">
            <button
               className="share-subject"
               onClick={() => {
                  navigete("/speakers");
               }}
            >
               Barchasi
            </button>
         </div>
      </section>
   );
}

export default TopSpeakers;
