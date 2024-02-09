import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection";
import TabSection from "./components/TabSection";
import TeachingSection from "./components/TeachingSection";
import DifferenceSection from "./components/DifferenceSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferenceSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
// For translate parrametres to components Button use props {children}
