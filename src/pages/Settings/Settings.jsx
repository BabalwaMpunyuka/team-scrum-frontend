import React from 'react';
import './Settings.css'

export const Settings = () => {
    return (
        <div className='settings'>
            <div className="notification">
            <h2 className="settings-header"> Notifications </h2>
            <div className="settings-sub-header">
                <div className="alert">
                <h3 className="alert-header ml-sm-0">Alerts </h3>
                <form action="" className=" row d-flex justify-content-around">
                    <div className="email">
                    <input type="checkbox" id="email" name="email" value="email" className="input" />
                    <label htmlFor="email"> e-mail </label>
                    </div>
                    <div className="push-notification">
                    <input type="checkbox" id="push-notification" name="push-notification" value="push-notification" />
                    <label htmlFor="push-notification"> Push notification</label>
                    </div>
                    <div className="sms">
                    <input type="checkbox" id="sms" name="sms" value="sms" />
                    <label htmlFor="sms"> SMS </label>
                    </div>
                </form>
                </div>
                <div className="announcements">
                <h3 className="announcements-header ml-sm-0">Announcements</h3>
                <form action="" className="row d-flex justify-content-around">
                    <div className="email">
                    <input type="checkbox" id="email" name="email" value="email" />
                    <label htmlFor="email"> e-mail </label>
                    </div>
                    <div className="push-notification">
                    <input type="checkbox" id="push-notification" name="push-notification" value="push-notification" />
                    <label htmlFor="push-notification"> Push notification</label>
                    </div>
                    <div className="sms">
                    <input type="checkbox" id="sms" name="sms" value="sms" />
                    <label htmlFor="sms"> SMS </label>
                    </div>
                </form>
                </div>

                </div>
            </div>
            <hr />
            <div className="disable">
            <h2 className="settings-header">Disable Settings</h2>
            <div className="disable-settings">
                    <input type="checkbox" id="dark-mode" name="dark-mode" value="dark-mode" />
                    <label htmlFor="dark-mode"> Enable Dark Mode</label>
            </div>
            </div>
            <hr />
            <div className="privacy">
            <h2 className="settings-header">Disable Settings</h2>
            <div className="privacy-settings">
                    <input type="checkbox" id="privacy-use" name="privacy-use" value="privacy-setting" />
                    <label htmlFor="privacy-use"><p> Allow the use of my personal data for financial assessments in accordance with the private policy </p> </label>

                    <p className="learn">Learn about our <span> <a href="www.google.com"> private policy</a></span></p>
            </div>
            </div>
            <hr />
            <button type="submit" className="button"> Confirm </button>
        </div>
    )
}

export default Settings;
