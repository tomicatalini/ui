export class FormBase<T> {
    field: string; // Campo o atributo de la clase a la cual se hace referencia
    class: string; // Clase
    label: string;
    controlType: string;
    type: string;
    required: boolean;
    order: number;
    group: string; //Si el formulario se divide en grupos. Indicaria a cual pertenece
    options: {key: string, value: string}[]; // Si controlType es un checkbox, son las opciones

    constructor( options: {
        field?: string;
        class?: string;
        label?: string;
        controlType?: string;
        type?: string;
        required?: boolean;
        order?: number;
        group?: string;
        options?: {key: string, value: string}[];
    } = {}) {
        this.field = options.field || '';
        this.class = options.class || '';
        this.group = options.group || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
}