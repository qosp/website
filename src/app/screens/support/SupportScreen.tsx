import React from 'react';
import './SupportScreen.scss';
import {BigButton} from "../../components/common/BigButton";
import {IoMdHeart} from "react-icons/all";
import {DONATE_FDROID_LINK, DONATE_LIBERA_LINK} from "../../utils/Constants";
export const SupportScreen = () => {
  return (
    <div className="support-screen">
        <IoMdHeart fill={"#c11137"} className={"heart-icon"}/>
        <div className={"promo-text"}>
            <h1>Support the project</h1>
            <p>
                Creating and maintaining open-source projects is time-consuming and provides
                no profit.<br/>
                Buy the developers a beer!
            </p>
            <BigButton path={DONATE_LIBERA_LINK} text={"Donate with Liberapay"} external={true}/>

            <br/>
            <br/>
            <h3>F-Droid needs your support, too.</h3>
            <p>
                Help the Android FOSS community grow by donating to F-Droid.
            </p>

            <BigButton path={DONATE_FDROID_LINK} text={"Donate to F-Droid"} external={true}/>
        </div>
    </div>
  );
}

