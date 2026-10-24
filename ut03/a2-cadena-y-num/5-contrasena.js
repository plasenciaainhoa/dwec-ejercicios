
console.log("5. CONTRASEÑA PROVISIONAL");

const caracteres =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";

/**
 * Genera una contraseña provisional aleatoria.
 * @returns {string} Contraseña de 10 caracteres.
 */
function generarPassword() {
    let password = "";

    for (let i = 0; i < 10; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres.at(indice);
    }

    return password;
}

console.log("Contraseña provisional:", generarPassword());
console.log("UUID:", crypto.randomUUID());