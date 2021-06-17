import React from 'react';
import './DownloadScreen.scss';

import FDroidLogo from '../../assets/fdroid.png'
import PlayStoreLogo from '../../assets/play_store.png'

export const DownloadScreen = () => {
  return (
      <div className="downloadScreen">
          <h1>Download Quillnote</h1>
          <p>You can download Quillnote from the following app stores:</p>

          <div className={"stores"}>
              <Store name={"F-Droid"} image={FDroidLogo} link={""} isRecommended={true}/>
              <Store name={"Play Store"} image={PlayStoreLogo} link={""}/>
          </div>


          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
  );
}

export const Store = (props: StoreProps) => {
    return (
        <div className={props.isRecommended ? "store--recommended" : "store"}>
            <h3>{props.name}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.image} alt={`Get Quillnote on ${props.name}`} className={"store-logo"}/>
            </a>
            { props.isRecommended
                ? <p className={"recommended-indicator"}>Recommended!</p>
                : null
            }
        </div>
    );
}

interface StoreProps {
    name: string
    image: string
    link: string
    isRecommended?: boolean
}