import Profile from "./components/profile";

function App() {
  return (
    <div>
      <Profile showLinkedin linkedinId="test-lnk" />
      <Profile githubId="test-gth" />

      <Profile showLinkedin githubId="test-gth" />
      <Profile linkedinId="test-lnk" />
    </div>
  );
}

export default App;
