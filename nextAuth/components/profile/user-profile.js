import { getSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import styles from "./user-profile.module.css";
import { useEffect, useState } from "react";

function UserProfile() {
  const [loadedSession, setLoadedSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchSession() {
    try {
      const session = await getSession();
      setLoadedSession(session);
      setIsLoading(false);

      if (!session) {
        window.location.href = "/auth";
      }
    } catch (error) {
      console.error("Error fetching session ", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSession();
  }, []);

  if (isLoading) {
    return <p className={styles.profile}>Loading...</p>;
  }
  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
