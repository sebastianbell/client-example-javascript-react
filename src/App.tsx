import { ScrollArea } from "@/components/ui/ScrollArea";
import { VapiButton, vapi } from "./features/Assistant";
import { MessageList } from "./features/Messages";
import { useVapi } from "./features/Assistant";
import { CharacterPreview } from "./features/Character";
import { useEffect, useRef } from "react";

function App() {
  const scrollAreaRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  };
  const { toggleCall, messages, callStatus, activeTranscript, audioLevel } =
    useVapi();

  useEffect(() => {
    vapi.on("message", scrollToBottom);
    return () => {
      vapi.off("message", scrollToBottom);
    };
  });

  return (
    <div className="bg-recipe-helper bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-sm from-black/20 to-black/30 z-0"></div>
      <main className="relative flex max-w-6xl w-full h-[80vh] p-6 bg-white/80 rounded-lg shadow-lg z-10">
        <div className="w-1/3 pr-6 flex flex-col items-center">
          <CharacterPreview />
          <div className="mt-8">
            <VapiButton
              audioLevel={audioLevel}
              callStatus={callStatus}
              toggleCall={toggleCall}
            />
          </div>
        </div>

        <div
          id="card"
          className="text-slate-950 dark:text-slate-50 w-2/3 max-w-3xl"
        >
          <div id="card-content" className="p-4">
            <ScrollArea
              ref={scrollAreaRef}
              viewportRef={viewportRef}
              className="h-[72vh] flex flex-1 p-4"
            >
              <div className="flex flex-1 flex-col min-h-[65vh] justify-end">
                <MessageList
                  messages={messages}
                  activeTranscript={activeTranscript}
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
