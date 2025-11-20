import { writable, derived } from 'svelte/store';

const DATE_OF_BIRTH_STRING = '1999-04-04';
const dateOfBirth = new Date(DATE_OF_BIRTH_STRING);
export const year = writable(new Date().getFullYear());

/**
 * @param {Date} dob
 */
function calculateAge(dob) {
    const today = new Date(); // Získá aktuální datum a čas (automatická aktualizace při načtení)
    const birthDate = dob;
    
    // Základní rozdíl roků
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Korekce: Pokud narozeniny v tomto roce ještě nebyly
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age; // Vrací věk jako číslo (Integer)
};

export const age = derived(
    // Prázdné pole stores, protože závisíme pouze na konstantě 'dateOfBirth'
    [], 
    () => {
        // Funkce se spustí při inicializaci a vrátí vypočtený věk
        return calculateAge(dateOfBirth);
    },
    0 // Výchozí hodnota
);