import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Miscellaneous",
] as const;

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Miscellaneous" },
    { id: 2, description: "aaa", amount: 201, category: "Entertainment" },
    { id: 3, description: "aaa", amount: 57, category: "Groceries" },
    { id: 4, description: "aaa", amount: 8, category: "Groceries" },
    { id: 5, description: "aaa", amount: 62, category: "Miscellaneous" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
