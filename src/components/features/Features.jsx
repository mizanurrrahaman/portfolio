import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { FaBars } from "react-icons/fa";



const Features = () => {
  return (
    <section
    id="features"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <Title title="Features" des="What I Do" />
     <div className="grid grid-cols-3 gap-20">
      <Card title="Business Stratagy"
         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
         icon={<FaBars />}/>
      <Card title="App Development"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
         icon={<AiFillAppstore />}/>
      <Card title="web design"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
           icon={<SiProgress />}/>
      <Card title="UX Design"
             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
             icon={<SiAntdesign />}/>
      <Card title="Hosting Websites"
             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
             icon={<FaGlobe />}/>
      <Card title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
             icon={<FaMobile />}/>
     </div>
  </section>
  );
};

export default Features;
