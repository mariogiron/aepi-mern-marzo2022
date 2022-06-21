const dniValidator = (value) => {
    const relacionLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    // Vamos a comprobar si el DNI tiene 8 dígitos y una letra
    // 88888888Y
    if (/^\d{8}[a-zA-Z]$/.test(value)) {
        const numero = value.substr(0, value.length - 1);
        const letra = value.substr(value.length - 1, 1);

        const pos = numero % 23;
        const letraSeleccionada = relacionLetras[pos];

        if (letra === letraSeleccionada) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    // Comprobamos si la letra coincide con los números
}

export { dniValidator };

