import styles from './messages.module.css';

export default function ChatPage() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <input type="text" placeholder="Search here..." className={styles.search} />
          <button className={styles.newChatButton}>+ Start New Chat</button>
        </div>

        {/* Sidebar List */}
        <div className={styles.sidebarList}>
          <h4>Groups</h4>
          <div className={styles.chatItem}>
            <p>Group Name</p>
            <small>1:22 PM</small>
          </div>
          <div className={styles.chatItem}>
            <p>Group Name</p>
            <small>10/12/2024</small>
          </div>

          <h4>Tutors</h4>
          <div className={styles.chatItem}>
            <p>Tutor Name</p>
            <small>9:46 AM</small>
          </div>

          <h4>Courses</h4>
          <div className={styles.chatItem}>
            <p>Student Name</p>
            <small>10/12/2024</small>
          </div>
        </div>
      </div>

      {/* Chatbox */}
      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <h3>Group Name</h3>
          <small>Robert Craft, Jerry Singleton, Alex Conway, etc.</small>
        </div>

        {/* Chat Messages */}
        <div className={styles.messages}>
          <div className={styles.message}>
            <div className={styles.sender}>Mariah</div>
            <p>Hey everyone! 🎉 Just wanted to share some great resources I found...</p>
            <small>8:30 AM</small>
          </div>

          <div className={`${styles.message} ${styles.myMessage}`}>
            <div className={styles.sender}>You</div>
            <p>Thanks! 🎉 I've been struggling with that topic lately. Excited to explore the resources.</p>
            <small>9:12 AM</small>
          </div>

          <div className={styles.message}>
            <div className={styles.sender}>Robert</div>
            <p>This is great, I can't wait to use this too! Thank you, Mariah.</p>
            <small>11:30 AM</small>
          </div>
        </div>

        {/* Message Input */}
        <div className={styles.messageInput}>
          <input type="text" placeholder="Enter text" />
          <button className={styles.sendButton}>➤</button>
        </div>
      </div>
    </div>
  );
}
