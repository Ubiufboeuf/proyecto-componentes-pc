import { column, defineDb, defineTable } from 'astro:db';

// https://www.intel.la/content/www/xl/es/products/docs/processors/processor-numbers-data-center.html

const Procesador_Intel = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    brand: column.text(),
    brand_mod: column.number(),
    processor_number: column.text(),
  }
})

export default defineDb({
  tables: { Procesador_Intel }
});
