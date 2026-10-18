import { create } from 'zustand';

export const useModalStore = create((set) => ({
    // Состояние видимости всего модального окна
    choose: false,

    // Функция для открытия/закрытия окна
    setChoose: (value) => set({ choose: value }),

    // Логика шагов квиза
    currentStep: 1,
    totalSteps: 9, // Жестко берем 9 шагов, как на ваших скриншотах

    // Функция для перехода к следующему шагу
    nextStep: () => set((state) => {
        if (state.currentStep < state.totalSteps) {
            return { currentStep: state.currentStep + 1 };
        }
        return state;
    }),

    // Функция для возврата на предыдущий шаг
    prevStep: () => set((state) => {
        if (state.currentStep > 1) {
            return { currentStep: state.currentStep - 1 };
        }
        return state;
    }),

    // Сброс квиза на 1 шаг при закрытии или повторном открытии
    resetQuiz: () => set({ currentStep: 1 })
}));
