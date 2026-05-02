export const useBrowser = () => {
  return {
    get_user_agent: ({
      document,
      navigator,
    }: {
      document: Document;
      navigator: Navigator;
    }) => {
      if (navigator.userAgent.indexOf("Chrome") != -1) {
        return "Blink";
      } else if (navigator.userAgent.indexOf("Edg") != -1) {
        return "Blink";
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return "Gecko";
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return "WebKit";
      } else if (
        navigator.userAgent.indexOf("MSIE") != -1 ||
        !!document.DOCUMENT_NODE == true
      ) {
        return "Trident";
      } else {
        return "unknown";
      }
    },
  };
};
