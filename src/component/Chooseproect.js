import '../css/Chooseproect.css';
import React from 'react';
import { useModalStore } from '../useModalStore';

function Chooseproect(props) {
    const choose = useModalStore((state) => state.choose);
    const setChoose = useModalStore((state) => state.setChoose);

    const currentStep = useModalStore((state) => state.currentStep);
    const totalSteps = useModalStore((state) => state.totalSteps);
    const nextStep = useModalStore((state) => state.nextStep);
    const prevStep = useModalStore((state) => state.prevStep);
    const resetQuiz = useModalStore((state) => state.resetQuiz);

    const widthPercent = (currentStep / totalSteps) * 100;

    const handleClose = () => {
        setChoose(false);
        resetQuiz();
    };

    return (
        <div>
            {choose && (
                <div className={"podobrat_proekt"} onClick={handleClose}>
                    <div className={"podobrat_proekt_inner"} onClick={(e) => e.stopPropagation()}>
                        <div className={"podobrat_proekt_inner_content"}>
                            <span style={{"textShadow": "2px 2px 4px rgba(0, 0, 0, 0.4)"}}>Подбор проекта</span>
                            <i className="fa-regular fa-x img_xmark" onClick={handleClose}></i>
                        </div>
                        <div className={"podobrat_proekt_inner_content2"}>
                            <div className="progress_bar_container">
                                <div className={"snake_div"} style={{ width: `${widthPercent}%` }}></div>
                            </div>
                        </div>
                        <div className={"podobrat_proekt_inner_content3"}>
                            <span className={"content3_grey"}>
                                <span>Шаг </span>
                                <span>{currentStep}</span>
                                <span> из {totalSteps}</span>
                            </span>
                        </div>
                        <div className={"middle_div_podobrat"}>
                            <div className={"middle_div_podobrat_1"}>
                                <span className={"middle_div_podobrat_1_title"}>Что планируете строить?</span>
                                <span className={"middle_div_podobrat_1_grey"}>Выберите тип объекта</span>
                                <div className={"middle_div_podobrat_1_choose_btn"}>
                                    <div className={"live_home_div"}></div>
                                    <div className={"live_home_div"}></div>

                                </div>
                            </div>
                        </div>
                        <div className={"end_div_podobrat"}>
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="quiz_btn_back"
                            >
                                ←
                                <span>  </span>
                                Назад
                            </button>

                            <button
                                onClick={nextStep}
                                className="quiz_btn_next"
                            >
                                {currentStep === totalSteps ? 'Получить расчет' : 'Далее'}
                                <span> </span>
                                →

                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Chooseproect;
