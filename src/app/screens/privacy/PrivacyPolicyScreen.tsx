import React from 'react';
import './PrivacyPolicyScreen.scss';
export const PrivacyPolicyScreen = () => {
    return (
        <div className="privacy-policy-screen">
            <h1>Privacy Policy</h1>
            <p>
                Quillnote does not send any personal data to any service without your authorization.<br/>
                Any data generated with Quillnote, such as notes, images or recordings, are saved locally and you are free to completely delete them at any time.<br/>
                If you enable cloud synchronization with a third-party service such as Nextcloud, your data will be uploaded to your remote account where a third-party policy applies.
            </p>
        </div>
    );
}

