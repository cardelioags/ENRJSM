export class Domicilio {
    calle: string;
    ext: string;
    int: string;
    cve_entidad: number;
    entidad: string;
    cve_municipio: number;
    municipio: string;
    cve_localidad: number;
    localidad: string;
    colonia: string;
    longitud: number;
    latitud: number;
    constructor(domicilio: any){
        this.calle = domicilio.calle;
        this.colonia = domicilio.colonia;
        this.cve_entidad = domicilio.cve_entidad;
        this.cve_localidad = domicilio.cve_localidad;
        this.cve_municipio = domicilio.cve_municipio;
        this.entidad = domicilio.entidad;
        this.ext = domicilio.ext;
        this.int = domicilio.int;
        this.latitud = domicilio.latitud;
        this.localidad = domicilio.localidad;
        this.longitud = domicilio.longitud;
        this.municipio = domicilio.municipio;
    }
}
