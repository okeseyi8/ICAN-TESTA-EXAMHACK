import { useEffect } from "react";


const useAntiCheat = ({
  onViolation,
  enableClipboardBlock = true,
  enableDevToolsCheck = true,
}: {
  onViolation: (type: string, message: string) => void;
  enableClipboardBlock?: boolean;
  enableDevToolsCheck?: boolean;
}) => {
  useEffect(() => {
    // 📌 Tab switching or minimizing
    const handleTabSwitch = () => {
      if (document.hidden) {
        onViolation("tab-switch", "You switched tabs or minimized the exam window.");
      }
    };

    // 📌 Leaving the current browser window
    const handleWindowBlur = () => {
      onViolation("window-blur", "You left the exam window.");
    };

    // 📌 Refresh or close attempt
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      onViolation("unload", "You attempted to close or refresh the page.");
      e.preventDefault();
      e.returnValue = "";
    };

    // 📌 Block copy/paste/right-click
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      onViolation("copy", "Copying is not allowed during the exam.");
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      onViolation("paste", "Pasting is not allowed during the exam.");
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      onViolation("right-click", "Right-click is disabled during the exam.");
    };

    // 📌 DevTools detection (resize-based + debugger-based)
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;

      const t0 = performance.now();
      debugger;
      const t1 = performance.now();

      if (widthThreshold || heightThreshold || t1 - t0 > 160) {
        onViolation("devtools", "Developer tools detected.");
      }
    };

    // 🔗 Event listeners
    document.addEventListener("visibilitychange", handleTabSwitch);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("beforeunload", handleBeforeUnload);

    if (enableClipboardBlock) {
      document.addEventListener("copy", handleCopy);
      document.addEventListener("paste", handlePaste);
      document.addEventListener("contextmenu", handleContextMenu);
    }

    let devToolsInterval: ReturnType<typeof setInterval>;
    if (enableDevToolsCheck) {
      devToolsInterval = setInterval(checkDevTools, 2000);
    }

    // 🔄 Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleTabSwitch);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      if (enableClipboardBlock) {
        document.removeEventListener("copy", handleCopy);
        document.removeEventListener("paste", handlePaste);
        document.removeEventListener("contextmenu", handleContextMenu);
      }

      if (devToolsInterval) clearInterval(devToolsInterval);
    };
  }, [onViolation, enableClipboardBlock, enableDevToolsCheck]);
};


export default useAntiCheat;
