import { useEffect, useState } from "react";
import { TopSpeaker } from "modules/courses/api";

import Footer from "components/footer";

import Statistic from "../home/components/statistic";
import Steps from "../home/components/steps";

import "../home/style/top-speaker.scss";

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

function Speakerss() {
   const [speaker, setSpeaker] = useState<TopSpeakerss[]>();

   useEffect(() => {
      const fetch = async () => {
         try {
            const { data }: any = await TopSpeaker();

            console.log(data);

            setSpeaker(data);
         } catch (error) {
            console.log(error);
         }
      };

      fetch();
   }, []);

   // if (!pricing) return null;
   return (
      <>
         <section className="top-speaker" data-aos="zoom-out-left" data-aos-duration="2000">
            <div className="title">
               <h1>
                  <span>70 dan</span> ortiq mutaxasislar
               </h1>
            </div>
            <div className="boxes">
               {/* @ts-ignore */}
               {speaker?.map(item => (
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
         </section>
         <Statistic />
         <Steps />
         <Footer />
      </>
   );
}

export default Speakerss;
