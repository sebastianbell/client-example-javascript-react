import {
  MessageRoleEnum,
  TranscriptMessage,
} from "@/lib/types/conversation.type";

interface ConversationMessageProps {
  message: TranscriptMessage;
}

export function ConversationMessage({ message }: ConversationMessageProps) {
  return (
    <div
      className={`flex w-full text-sm mb-6 font-medium ${
        message.role == MessageRoleEnum.USER ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-6 shadow-lg ${
          message.role !== MessageRoleEnum.USER
            ? "rounded-2xl bg-teal-200 text-teal-800" // Assistant
            : "rounded-2xl bg-orange-100 text-orange-800" // User
        }`}
        style={{ maxWidth: "75%" }}
      >
        <p className="leading-relaxed">{message.transcript}</p>
      </div>
    </div>
  );
}
