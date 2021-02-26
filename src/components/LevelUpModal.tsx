import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelModalUp.module.css";

export function LevelUpModal () {

    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo Level.</p>

                <button onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>
            </div>
        </div>
    );
}