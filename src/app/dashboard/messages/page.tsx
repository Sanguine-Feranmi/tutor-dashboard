import { MdArrowDropDown } from 'react-icons/md';
import styles from './messages.module.css';
import Image from 'next/image';


export default function ChatPage() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.head}>
          <h1> Chats</h1>
          <input type="text" placeholder="Search here..." className={styles.search} />
          <div className={styles.cStart}>
            <div className={styles.sort}>
              <p>Sort by</p>
              <MdArrowDropDown></MdArrowDropDown>
            </div>
            <div className={styles.cBtn}>
              <button className={styles.newChatButton}>+ Start New Chat</button>
            </div>
          </div>
        </div>
        
        <div className={styles.grps}>
          <div className={styles.head}>
            <h1>Groups</h1>
          </div>
          <div className={styles.grp}>
          <div className={styles.user}>
            <img src="/noavatar.png" alt="" width="60" height="60"className={styles.userImage} />
          </div>
            <div className={styles.userGrp}>
              <div className={styles.grpDetails}>
                <div className={styles.grpName}>
                  <h1>Group Name</h1>
                </div>
                <div className={styles.grpDsp}>
                  <p>Lorem bei lay idfj likst...</p>
                </div>
              </div>
              <div className={styles.times}>
                <div className={styles.time}>
                  <p>1:22pm</p>
                </div>
                <div className={styles.date}>
                  <p>
                    10/12/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Tutors</h4>
          <div className={styles.chatItem}>
            <p>Tutor Name</p>
            <small>9:46 AM</small>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Courses</h4>
          <div className={styles.chatItem}>
            <p>Student Name</p>
            <small>10/12/2024</small>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <h3>Group Name</h3>
          <small>Robert Craft, Jerry Singleton, Alex Conway, etc.</small>
        </div>

        <div className={styles.messages}>
          <div className={styles.message}>
            <div className={styles.sender}>Mariah</div>
            <p>Hey everyone! 🎉 Just wanted to share some great resources I found..</p>
            <small>8:30 AM</small>
          </div>

          <div className={`${styles.message} ${styles.myMessage}`}>
            <div className={styles.sender}>You</div>
            <p>Thanks! 🎉 I've been struggling with that topic lately. Excited to explore the resources.</p>
            <small>9:12 AM</small>
          </div>

          <div className={styles.message}>
            <div className={styles.sender}>Robert</div>
            <p>This is great, I can't wait to use this too! Thank you Mariah.</p>
            <small>11:30 AM</small>
          </div>
        </div>

        <div className={styles.messageInput}>
          <input type="text" placeholder="Enter text" />
          <button className={styles.sendButton}>➤</button>
        </div>
      </div>
    </div>
  );
}
