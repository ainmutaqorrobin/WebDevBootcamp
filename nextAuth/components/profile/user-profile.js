import ProfileForm from "./profile-form";
import styles from "./user-profile.module.css";

function UserProfile() {
  async function updatePassword(formData) {
    try {
      const response = await fetch("/api/profile/changepass", {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm submitForm={updatePassword} />
    </section>
  );
}

export default UserProfile;
