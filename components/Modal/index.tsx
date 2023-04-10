import { useState } from "react";
import Experiences from "../OnBoarding/Experience";
import NewScrape from "../OnBoarding/NewScrape";
import EnterScrapeData from "../OnBoarding/EnterScrapeData";
import EnterJobList from "../OnBoarding/JobList";

type ModalProps = {
    showModal: boolean;
    handleModal: ()=>void;
};

type ModalStep = {
    content: React.ReactNode;
};

const STEPS: ModalStep[] = [
    { content: <Experiences /> },
    { content: <NewScrape /> },
    { content: <EnterScrapeData /> },
    { content: <EnterJobList /> },
];

const Modal = ({ showModal, handleModal }: ModalProps) => {
    const [stepIndex, setStepIndex] = useState(0);
    const handleNext = () => {
        if (stepIndex < STEPS.length - 1) {
            setStepIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleSkip = () => {
        setStepIndex(STEPS.length - 1);
    };

    const handleClose = () => {
        setStepIndex(0);
        handleModal();
    };

    const handleEnterApp = () => {
        handleModal();
        setStepIndex(0)
    };
    return (
        <div
            className={`${showModal ? "block" : "hidden"
                } fixed z-10 inset-0 overflow-y-auto`}
        >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={handleClose}
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />

                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div className="mt-2">
                                <div className="text-sm text-gray-500">{STEPS[stepIndex].content}</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:justify-between">
                            <button
                                type="button"
                                className="flex-grow ml-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-base font-medium text-white hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 sm:ml-3 sm:text-sm"
                                onClick={stepIndex < STEPS.length - 1 ? handleNext : handleEnterApp}
                            >
                                {stepIndex < STEPS.length - 1 ? "Next" : "Enter App"}
                            </button>
                            <button
                                type="button"
                                className="border border-gray-400 flex-grow ml-2 rounded-md border border-transparent shadow-sm px-4 py-2  bg-white  shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 sm:ml-3 sm:text-sm transition-colors duration-200 rounded-md"
                                onClick={handleSkip}
                            >
                                Skip
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;