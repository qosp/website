import React from 'react';
import DevicesPhoto from '../../assets/devices_1024x1024.png';

import MarkdownFeature from '../../assets/screenshot_markdown.png';
import RemindersFeature from '../../assets/screenshot_reminder.png';
import TaskListFeature from '../../assets/screenshot_tasks.png';

import './HomeScreen.scss';
import {BigButton} from "../../components/common/BigButton";

export const HomeScreen = () => {
  return (
      <div className="homeScreen">
        <HeaderSection/>
        <FeaturesSection/>
      </div>
  );
}


const HeaderSection = () => {
    return (
        <div className="headerSection">
            <img src={DevicesPhoto} className={"promo-devices"} alt={"Devices running Quillnote."}/>
            <div className={"promoText"}>
                <h1>Take notes, <br/> everywhere.</h1>
                <p>
                    With Quillnote you can take beautiful markdown notes whenever you feel inspired. Place them in notebooks and tag them accordingly.
                    Make task lists, set reminders and keep everything in one place by attaching related files to stay organized.
                </p>
                <h2>100% Free & Open Source Software</h2>
                <p>
                    Quillnote is fully free and open-source. It will never show you ads, ask you for unnecessary permissions or upload your notes anywhere without you knowing.
                </p>
                <BigButton path={"/download"}/>
            </div>
        </div>
    );
}

const FeaturesSection = () => {
    let markdown_description = "Markdown lets you take notes with style. You can write in bold or italics, add headings, code blocks and much more."
    let reminders_description = "Is your friend's birthday coming up? You can set reminders for events you do not want to miss."
    let tasklist_description = "Organize your life with task lists. Add new tasks, re-order them and when you're done, tick them or swipe them away."

    return (
        <div className="featuresSection">
            <Feature title={"Markdown"} description={markdown_description} image={MarkdownFeature}/>
            <Feature title={"Task lists"} description={tasklist_description} image={TaskListFeature}/>
            <Feature title={"Reminders"} description={reminders_description} image={RemindersFeature}/>
        </div>
    );
}

const Feature = (props: FeatureProps) => {
    return (
        <div className="feature">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} className={"screenshot"}/>
        </div>
    );
}

interface FeatureProps {
    title: string
    description: string
    image: string
}