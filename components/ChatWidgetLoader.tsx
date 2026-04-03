import Script from "next/script";
import { ChatWidgetHost } from "@/components/ChatWidgetHost";

export function ChatWidgetLoader() {
  return (
    <>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/v1.0/loader.js"
        strategy="afterInteractive"
      />
      <ChatWidgetHost />
    </>
  );
}
