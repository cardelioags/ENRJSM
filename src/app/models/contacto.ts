export class Contacto {
    tel_fijo: string;
    tel_movil: string;
    email: string;

    constructor(contacto: any ){
        this.tel_fijo = contacto.tel_fijo;
        this.tel_movil = contacto.tel_movil;
        this.email = contacto.email;
    }
}