import useFieldForm from "hooks/useFieldForm";
import { CORTE1, CORTE2, CORTE3, ATRIBUTO } from "constants/index";

export function Validations() {
  const { getValues, modulo } = useFieldForm();

  const validationField = {
    numGrupo: {
      required: "Selecciona la cantidad de grupos",
    },
    producto: { required: "Selecciona un producto" },
    unidades: {
      max: {
        value: 25,
        message: "Máximo son 25 unidades",
      },
      min: {
        value: 4,
        message: "Minimo son 4 unidades",
      },
      required: "Digite las unidades",
    },

    cont: {
      validate: {
        required: (value) => {
          if (
            !value &&
            (modulo.label === CORTE1 ||
              modulo.label === CORTE2 ||
              modulo.label === CORTE3 ||
              getValues("field.tipoMuestreo") !== ATRIBUTO)
          ) {
            return "Selecciona el contenido";
          }
          return true;
        },
      },
    },
    tolerancia: {
      validate: {
        required: (value) => {
          if (
            !value &&
            (modulo.label === CORTE1 ||
              modulo.label === CORTE2 ||
              modulo.label === CORTE3 ||
              getValues("field.tipoMuestreo") !== ATRIBUTO)
          ) {
            return "Digite la tolerancia";
          }
          return true;
        },
      },
    },

    atributos: {
      required: "Selecciona un atributo",
    },
    integrantes: {
      validate: {
        required: (value) => {
          if (!value) {
            return "Selecciona a los integrantes";
          }
          if (value.length > 2) {
            return "Solo deben ser 2 integrantes";
          }
          return true;
        },
      },
    },

    // Corte2
    graficos: {
      required: "Selecciona un gráfico",
    },
    subgrupo: {
      max: {
        value: 10,
        message: "Máximo son 10",
      },
      required: "Digite los subgrupos",
    },

    tamanioSubgrupo: {
      max: {
        value: 10,
        message: "Máximo son 10 unidades",
      },

      min: {
        value: 4,
        message: "Mínimo son 4",
      },

      required: "Digite tamaño subgrupo",
    },
    // Corte 3
    tipoMuestreo: {
      validate: {
        required: (value) => {
          if (!value && getValues("field.modulo.label") === CORTE3) {
            return "Seleccione un tipo de muestreo";
          }
          return true;
        },
      },
    },
    lote: {
      min: {
        value: 4,
        message: "Minimo 4",
      },
      required: "Digite tamaño lote",
    },
    aql: {
      required: "Seleccione un valor",
    },
    severidad: {
      required: "Seleccione la severidad",
    },
    nivelInspeccion: {
      required: "Seleccione un nivel",
    },
    metodo: {
      required: "Selecciona un método",
    },
  };

  return { validationField };
}
