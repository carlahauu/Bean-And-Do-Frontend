import React from 'react'
import '../styles/Privacy.css'

function Privacy() {
  return (
    <div className='privacyContainer'>
        <h2>Privacy Policy</h2>
        <p>Effective Date: July 31, 2025</p>
        <p>
            Bean & Do (“we”, “our”, or “us”) is a productivity web application operated by Carla Hau. 
            This policy explains how Bean & Do handles your information.
        </p>
        <p className='bold'>Information Collection And Use</p>
        <p>
            Bean & Do values your privacy. 
        </p>
        <p>
            We may store a randomly generated anonymous identifier in your browser to keep your tasks separate from other users. This identifier cannot be used to identify you personally.
            We may collect anonymous, aggregated usage statistics — such as the number of tasks created or the time of day the app is used — to improve our service. 
            These statistics do not contain personal data and cannot be linked to individual users.
            We do not use advertising networks or third-party analytics tools that collect personal data.   
        </p>
        <p>
            We use your browser’s localStorage to save your tasks, focus sessions, and anonymous identifier so they remain available even after you close your browser. 
        </p>
        <p>
            We may utilize cookies to hold certain information. Cookies are sent to your browser from a website and stored on your device.
        </p>
        <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our Service. 
            You can learn more how to manage cookies in the <a href='https://www.privacypolicies.com/blog/how-to-delete-cookies/'>Browser Cookies Guide.</a>
        </p>
        <p className='bold'>Changes To This Privacy Policy</p>
        <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
            We will provide a prominent notice on our Service prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
        </p>
        <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
        <p className='bold'>Contact Us</p>
        <p>
            If you have questions about this Privacy Policy, you can contact us at: carlahau110@gmail.com
        </p>

    </div>
  )
}

export default Privacy