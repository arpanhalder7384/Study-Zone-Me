import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

export default function SmartTextAreaWithSpeech({ onSend, customStyles }) {
    let [text, setText] = useState("");
    const { transcript, interimTranscript, listening, resetTranscript } = useSpeechRecognition();
    const [isRecording, setIsRecording] = useState(false);
    const timeoutRef = useRef(null);
    const lastTranscriptRef = useRef("");

    useEffect(() => {
        const combinedTranscript = transcript || interimTranscript;
        setText(combinedTranscript);

        // Clear timeout if interim transcript updates
        if (listening && interimTranscript !== lastTranscriptRef.current && isRecording) {
            clearTimeout(timeoutRef.current);

            // Set a new timeout to send the message and stop recording if speech stops
            timeoutRef.current = setTimeout(() => {
                if (!interimTranscript.trim()) {
                    onSend(transcript.trim());
                    resetTranscript();
                    setText("");
                    SpeechRecognition.stopListening();
                    setIsRecording(false);
                }
            }, 1200);

            lastTranscriptRef.current = interimTranscript;
        }
    }, [transcript, interimTranscript, listening, resetTranscript]);

    useEffect(()=>{
        if(!listening){
            setIsRecording(false)
        }
    },[listening])

    const handleRecord = () => {
        if (isRecording) {
            SpeechRecognition.stopListening();
            setIsRecording(false);
        } else {
            setIsRecording(true);
            SpeechRecognition.startListening();
        }
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleSend = () => {
        if (text.trim() !== "") {
            onSend(text.trim());
            setText("");
        }
    };

    return (
        <div className={"relative flex justify-center items-center " + customStyles}>
            {/* <!-- Textarea --> */}
            <div class="relative w-full">
                <textarea
                    id="hs-textarea-ex-1"
                    class="p-4 pb-20 block w-full min-h-40 border-gray-200  text-sm focus:border-blue-500 border-2 focus:ring-blue-500 rounded-lg "
                    placeholder="Ask me anything..."
                    value={text}
                    onChange={(e) => handleInputChange(e)}
                ></textarea>

                {/* <!-- Toolbar --> */}
                <div class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white mx-1 my-0.5">
                    <div class="flex justify-between items-center">

                        {/* <!--Left Side Button Group --> */}
                        <div class="flex items-center">
                            {/* <!-- Attach Button --> */}
                            <button
                                type="button"
                                class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"

                            >
                                <svg
                                    class="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                </svg>
                            </button>
                            {/* <!-- End Attach Button --> */}
                        </div>

                        {/* <!--Right Side Button Group --> */}
                        <div class="flex items-center gap-x-1">
                            {/* <!-- Mic Button --> */}
                            <button
                                type="button"
                                class={`flex justify-center items-center size-8 + ${isRecording ? "text-red-400 cursor-not-allowed" : "text-gray-500"}`}
                                onClick={() => handleRecord()}
                                disabled={isRecording}
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                    <line x1="12" x2="12" y1="19" y2="22"></line>
                                </svg>
                            </button>
                            {/* <!-- End Mic Button --> */}

                            {/* <!-- Send Button --> */}
                            <button
                                type="button"
                                class={`flex justify-center items-center size-8 rounded-lg text-white + ${text.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 cursor-pointer"}`}
                                onClick={() => handleSend()}
                                disabled={text.trim().length === 0}
                            >
                                <svg
                                    class="flex-shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                </svg>
                            </button>
                            {/* <!-- End Send Button --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
