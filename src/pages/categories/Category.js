import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CategoryTable } from "../../components/categoryTable/CategoryTable";
import { CatForm } from "../../components/catForm/CatForm";

export const Category = () => {
  return (
    <AdminLayout>
      <h2 className="py-3 d-flex justify-content-center">
        Category Management
      </h2>
      {/* form */}
      <CatForm />
      {/* table */}

      <CategoryTable />
    </AdminLayout>
  );
};
