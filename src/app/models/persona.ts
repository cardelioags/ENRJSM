import { Domicilio } from "./domicilio";

export class Persona {
    nombre: string;
    prim_apell: string;
    segu_apell: string;
    curp: string;
    entidad_nac: string;
    fecha_nac: Date;
    sexo: string;
    domicilio: Domicilio;

    constructor(persona: any){
        this.nombre = persona.nombre;
        this.prim_apell = persona.prim_apell;
        this.segu_apell = persona.segu_apell;
        this.curp = persona.curp;
        this.entidad_nac = this.curp ? this.extraeEntidadNacCurp(this.curp) : "No disponible";
        this.fecha_nac = this.curp ? this.extraeFechaNacCurp(this.curp) : new Date(0);
        this.sexo = this.curp ? this.estraeSexoCurp(this.curp) : "No disponible";
        this.domicilio = new Domicilio (persona.domicilio);
    }

    private extraeEntidadNacCurp(curp) : string{
        let clave = curp.slice(11, 13);
        let entidad = "";
        switch (clave) {
            case 'AS':
                entidad = 'Aguascalientes';
                break;
            case 'BC':
                break;
            case 'BS':
                break;
            case 'CC':
                break;
            case 'CS':
                break;
            case 'CH':
                break;
            case 'CL':
                break;
            case 'CM':
                break;
            case 'DF':
                break;
            case 'GT':
                entidad = 'Guanajuato';
                break;
            default:
                break;
        }
        return entidad
    }
    private extraeFechaNacCurp(curp){
        return new Date (curp.slice(4,6), curp.slice(6,8)-1, curp.slice(8,10));
    }
    private estraeSexoCurp(curp){
        if (curp.slice(10,11) == "H"){
            return "Masculino"
        }
        return "Femenino"
    }
}

