import "./App.css";
import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";
import { LoadingProvider, useLoading } from "./context/LoadingProvider";
import { useEffect } from "react";

const DebugLoader = () => {
  const { setLoading } = useLoading();
  useEffect(() => {
    // Safety fallback: force load completion after 5 seconds if model hangs
    const timer = setTimeout(() => {
      setLoading(100);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setLoading]);
  return null;
};

const App = () => {
  return (
    <>
      <LoadingProvider>
        <DebugLoader />
        <MainContainer>
          <CharacterModel />
        </MainContainer>
      </LoadingProvider>
    </>
  );
};

export default App;
