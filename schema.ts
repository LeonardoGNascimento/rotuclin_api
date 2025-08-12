import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  file,
  image,
  password,
  relationship,
  text,
  timestamp,
  integer,
  checkbox,
} from "@keystone-6/core/fields";
import { type Lists } from ".keystone/types";

// --- Esquema Keystone ---
export const lists: Lists = {
  Cliente: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      fotos: relationship({
        ref: "Foto.cliente",
        many: true,
        label: "Foto do Cliente",
        ui: {
          displayMode: "cards",
          cardFields: ["nome", "imagem", "descricao"],
          inlineCreate: {
            fields: ["nome", "descricao", "imagem"],
          },
          inlineEdit: {
            fields: ["nome", "descricao", "imagem"],
          },
          inlineConnect: true,
          linkToItem: true,
        },
      }),
      createdAt: timestamp({ defaultValue: { kind: "now" } }),
    },
  }),

  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({ defaultValue: { kind: "now" } }),
    },
  }),

  Grupo: list({
    access: allowAll,
    ui: { labelField: "nome" },
    fields: {
      nome: text({ validation: { isRequired: true } }),
      createdAt: timestamp({ defaultValue: { kind: "now" } }),
      produtos: relationship({ ref: "Produto.grupo", many: true }),
      destaque: checkbox({ defaultValue: false }),
    },
  }),

  Produto: list({
    access: allowAll,
    ui: { labelField: "nome" },
    fields: {
      nome: text({
        label: "Nome do Produto",
        validation: { isRequired: true },
      }),
      descricao: text({
        label: "Descrição",
        validation: { isRequired: true },
        ui: { displayMode: "textarea" },
      }),
      createdAt: timestamp({
        label: "Data de Criação",
        defaultValue: { kind: "now" },
      }),
      fotos: relationship({
        ref: "Foto.produto",
        many: true,
        label: "Fotos do Produto",
        ui: {
          displayMode: "cards",
          cardFields: ["nome", "imagem", "descricao"],
          inlineCreate: {
            fields: ["nome", "descricao", "imagem"], // ⚠️ Removido "produto"
          },
          inlineEdit: {
            fields: ["nome", "descricao", "imagem"],
          },
          inlineConnect: true,
          linkToItem: true,
        },
      }),
      grupo: relationship({
        ref: "Grupo.produtos",
        label: "Grupo",
      }),
    },
  }),

  Foto: list({
    access: allowAll,

    fields: {
      nome: text({ validation: { isRequired: true } }),
      descricao: text({ validation: { isRequired: true } }),
      createdAt: timestamp({ defaultValue: { kind: "now" } }),
      cliente: relationship({
        ref: "Cliente.fotos",
        ui: {
          createView: { fieldMode: "hidden" }, // Oculto ao criar (preenchido automaticamente)
          itemView: { fieldMode: "read" }, // Apenas leitura na visualização
        },
      }),
      produto: relationship({
        ref: "Produto.fotos",
        ui: {
          createView: { fieldMode: "hidden" }, // Oculto ao criar (preenchido automaticamente)
          itemView: { fieldMode: "read" }, // Apenas leitura na visualização
        },
      }),
      imagem: image({
        storage: "my_S3_images",
      }),
    },
  }),
};
